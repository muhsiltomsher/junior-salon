var Toolset = Toolset || {};
Toolset.Gui = Toolset.Gui || {};
Toolset.Gui.Mixins = Toolset.Gui.Mixins || {};

Toolset.Gui.CodeMirrorStore = {
	instances: new Array(),
	getInstance: function( id ) {
		return Toolset.Gui.CodeMirrorStore.instances[ id ];
	},
	restartInstance: function( id, mode ) {
		if ( Toolset.Gui.CodeMirrorStore.instances[ id ] ) {
			Toolset.Gui.CodeMirrorStore.instances[ id ].toTextArea();
			Toolset.Gui.CodeMirrorStore.instances[ id ] = false;
			jQuery( '#' + id ).focus();
		}
		return Toolset.Gui.CodeMirrorStore.createInstance( id, mode );
	},
	createInstance: function( id, mode ) {
		Toolset.Gui.CodeMirrorStore.instances[ id ] = CodeMirror.fromTextArea(document.getElementById( id ), {
				mode: mode,
				tabMode: "indent",
				lineWrapping: true,
				lineNumbers : true
		});

		jQuery( '#' + id ).focus();

		return Toolset.Gui.CodeMirrorStore.instances[ id ];
	}
};


/**
 * Mixin for easy initialization and management of a single CodeMirror editor.
 *
 * It can be extended, but if you need to handle multiple editor instances at once, better create a different mixin that
 * handles an array of Toolset.Gui.Mixins.CodeMirror instances.
 *
 * Note: this also requires a Toolset_Assets_Manager::STYLE_CODEMIRROR to be enqueued.
 *
 * @constructor
 * @since 3.0.7
 */
Toolset.Gui.Mixins.CodeMirror = function () {

    var self = this;

    self.editorInstance = null;

    /**
     * Initialize the editor.
     *
     * IMPORTANT: If the editor is not visible at the time of initialization, you need to refresh it
     * when you show it for the first time.
     *
     * @param {string} textareaId ID of the textarea to be replaced by a CodeMirror editor.
     * @param {string} editorMode
     * @param {function(string)} onChangeCallback Function that will be called with the updated value when
     *     codemirror's content changes.
     */
    self.codeMirrorInitialize = function (textareaId, editorMode, onChangeCallback) {
        var initialize = function () {
            if (null !== self.editorInstance) {
                return;
            }

            // Dispose of the previous instance if it exists. This will happen only of the user edits a snippet,
            // then deletes it, then creates a new snippet with the same slug and edits it again.
            var previousEditorInstance = Toolset.Gui.CodeMirrorStore.getInstance(textareaId);
            if( !! previousEditorInstance ) {
                Toolset.Gui.CodeMirrorStore.restartInstance(textareaId, editorMode);
            }

						self.editorInstance = Toolset.Gui.CodeMirrorStore.restartInstance(textareaId, editorMode);

            self.editorInstance.on('change', function(cm) {
                var value = cm.getValue();
                onChangeCallback(value);
            });
        };

        if (jQuery.isReady) {
            initialize();
        } else {
            jQuery(initialize);
        }
    };


    self.refreshCodeMirror = function (focus) {
        self.editorInstance.refresh();
        if (focus) {
            self.editorInstance.focus();
        }
    };


    /**
     * Apply autoresize options to the CodeMirror editors.
     *
     * WARNING: This affects all editors on the page.
     */
    self.enableCodeMirrorAutoresize = function() {
        jQuery( '.CodeMirror' ).css( 'height', 'auto' );
        jQuery( '.CodeMirror-scroll' ).css( {'overflow-y':'hidden', 'overflow-x':'auto', 'min-height':'15em'} );
    };

};
