<?php

if ( defined( 'WPT_ASSETS_MANAGER' ) ) {
    return;
}

define( 'WPT_ASSETS_MANAGER', true );

class Toolset_Style {

	public $handle;
	public $path;
	public $deps;
	public $ver;
	public $media;

	public function __construct( $handle, $path = 'wordpress_default', $deps = array(), $ver = false, $media = 'screen' ) {
		$this->handle = $handle;
		$this->path   = $path;
		$this->deps   = $deps;
		$this->ver    = $ver;
		$this->media  = $media;

		if (
			$this->compare_versions()
			&& $this->path != 'wordpress_default'
		) {
			wp_register_style( $this->handle, $this->path, $this->deps, $this->ver, $this->media );
		}
	}

	public function enqueue() {
		wp_enqueue_style( $this->handle );
	}

	protected function compare_versions() {
		global $wp_styles;

		if ( isset( $wp_styles->registered ) ) {
			$wpt_registered_styles = $wp_styles->registered;
			if ( isset( $wpt_registered_styles[ $this->handle ] ) ) {
				$registered = $wpt_registered_styles[ $this->handle ];
				if ( (float) $registered->ver < (float) $this->ver ) {
					$wp_styles->remove( $this->handle );

					return true;
				} else {
					return false;
				}
			}
		}

		return $this->is_registered() === false;
	}

	public function deregister() {
		wp_deregister_style( $this->handle );
	}

	/**
	 * Check whether a given asset is already registered.
	 *
	 * Use with caution: it can have a performance penalty on WP below 5.4.
	 * Do not use to check whether an asset is registered before registering it,
	 * as WordPress does this automatically.
	 *
	 * @since unknown.
	 */
	protected function is_registered() {
		return wp_style_is( $this->handle, 'registered' );
	}

	/**
	 * Check whether a given asset is already enqueued.
	 *
	 * Use with caution: it can have a performance penalty on WP below 5.4.
	 * Do not use to check whether an asset is enqueued before enqueuing it,
	 * as WordPress does this automatically.
	 *
	 * @since unknown.
	 */
	protected function is_enqueued() {
		return wp_style_is( $this->handle, 'enqueued' );
	}
}

class Toolset_Script {

	public $handle;
	public $path;
	public $deps;
	public $ver;
	public $in_footer;

	public function __construct( $handle, $path = 'wordpress_default', $deps = array(), $ver = false, $in_footer = false ) {
		$this->handle    = $handle;
		$this->path      = $path;
		$this->deps      = $deps;
		$this->ver       = $ver;
		$this->in_footer = $in_footer;

		if (
			$this->compare_versions()
			&& $this->path != 'wordpress_default'
		) {
			wp_register_script( $this->handle, $this->path, $this->deps, $this->ver, $this->in_footer );
		}
	}

	public function enqueue() {
		wp_enqueue_script( $this->handle );
	}

	protected function compare_versions() {
		global $wp_scripts;

		if ( isset( $wp_scripts->registered ) ) {
			$wpt_registered_scripts = $wp_scripts->registered;
			if ( isset( $wpt_registered_scripts[ $this->handle ] ) ) {
				$registered = $wpt_registered_scripts[ $this->handle ];
				if ( (float) $registered->ver < (float) $this->ver ) {
					$wp_scripts->remove( $this->handle );

					return true;
				} else {
					return false;
				}
			}
		}

		return $this->is_registered() === false;
	}

	public function localize( $object, $args ) {
		wp_localize_script( $this->handle, $object, $args );
	}

	public function deregister() {
		wp_deregister_script( $this->handle );
	}

	/**
	 * Check whether a given asset is already registered.
	 *
	 * Use with caution: it can have a performance penalty on WP below 5.4.
	 * Do not use to check whether an asset is registered before registering it,
	 * as WordPress does this automatically.
	 *
	 * @since unknown.
	 */
	protected function is_registered() {
		return wp_script_is( $this->handle, 'registered' );
	}

	/**
	 * Check whether a given asset is already enqueued.
	 *
	 * Use with caution: it can have a performance penalty on WP below 5.4.
	 * Do not use to check whether an asset is enqueued before enqueuing it,
	 * as WordPress does this automatically.
	 *
	 * @since unknown.
	 */
	protected function is_enqueued() {
		return wp_script_is( $this->handle, 'enqueued' );
	}
}



class Toolset_Assets_Manager {


	private static $instance;


	protected $styles = array();


	protected $scripts = array();


	/*
	 * All asset handles should be defined here as constants.
	 *
	 * NEVER EVER use handles defined here as hardcoded strings, they may change at any time.
	 */


	// Scripts
	//
	//

	/** @deprecated Use SCRIPT_BOOTSTRAP_3 instead. */
	const SCRIPT_BOOTSTRAP = 'toolset_bootstrap';
	const /** @noinspection PhpDeprecationInspection */ SCRIPT_BOOTSTRAP_3 = self::SCRIPT_BOOTSTRAP;
	const SCRIPT_BOOTSTRAP_4 = 'toolset_bootstrap_4';

	const SCRIPT_CODEMIRROR = 'toolset-codemirror-script';
	const SCRIPT_CODEMIRROR_COMP = 'toolset-codemirror-comp-script';
	const SCRIPT_CODEMIRROR_CSS = 'toolset-meta-html-codemirror-css-script';
	const SCRIPT_CODEMIRROR_XML = 'toolset-meta-html-codemirror-xml-script';
	const SCRIPT_CODEMIRROR_PHP = 'toolset-meta-html-codemirror-php-script';
	const SCRIPT_CODEMIRROR_HTMLMIXED = 'toolset-meta-html-codemirror-htmlmixed-script';
	const SCRIPT_CODEMIRROR_JS = 'toolset-meta-html-codemirror-js-script';
	const SCRIPT_CODEMIRROR_C_LIKE = 'toolset-meta-html-codemirror-c-like';
	const SCRIPT_CODEMIRROR_OVERLAY = 'toolset-meta-html-codemirror-overlay-script';
	const SCRIPT_CODEMIRROR_UTILS_SEARCH = 'toolset-meta-html-codemirror-utils-search';
	const SCRIPT_CODEMIRROR_UTILS_SEARCH_CURSOR = 'toolset-meta-html-codemirror-utils-search-cursor';
	const SCRIPT_CODEMIRROR_UTILS_PANEL = 'toolset-meta-html-codemirror-utils-panel';
	const SCRIPT_CODEMIRROR_UTILS_HINT = 'toolset-meta-html-codemirror-utils-hint';
	const SCRIPT_CODEMIRROR_UTILS_HINT_CSS = 'toolset-meta-html-codemirror-utils-hint-css';

	const SCRIPT_COLORBOX = 'toolset-colorbox';
	const SCRIPT_HEADJS = 'headjs';

	const SCRIPT_TOOLSET_QUICKTAGS = 'toolset-quicktags-js';

	const SCRIPT_ICL_EDITOR = 'icl_editor-script';
	const SCRIPT_ICL_MEDIA_MANAGER = 'icl_media-manager-js';

	const SCRIPT_TOOLSET_MEDIA_MANAGER = 'toolset-media-manager-js';

	const SCRIPT_TOOLSET_MEDIA_FIELD_PROTOTYPE = 'toolset-media-field-prototype';
	const SCRIPT_TOOLSET_MEDIA_FIELD_PROTOTYPE_I18N = 'toolset_media_field_i18n';

	const SCRIPT_KNOCKOUT = 'knockout';
	const SCRIPT_KNOCKOUT_MAPPING = 'knockout-mapping';
	const SCRIPT_JSCROLLPANE = 'toolset-jscrollpane';
	const SCRIPT_JSTORAGE = 'jstorage';
	const SCRIPT_MOUSEWHEEL = 'toolset-mousewheel';
	const SCRIPT_SELECT2 = 'toolset_select2';
	const SCRIPT_SELECT2_I18N = 'toolset_select2_i18n';
	const SCRIPT_SELECT2_COMPATIBILITY = 'toolset-select2-compatibility';

	const SCRIPT_TOOLSET_EVENT_MANAGER = 'toolset-event-manager';
	const SCRIPT_TOOLSET_PARSER = 'wptoolset-parser';
	const SCRIPT_TOOLSET_PROMOTION = 'toolset-promotion';
	const SCRIPT_TOOLSET_SETTINGS = 'toolset-settings';
	const SCRIPT_TOOLSET_EXPORT_IMPORT = 'toolset-export-import';

	const SCRIPT_UTILS = 'toolset-utils';

	// chosen lib
	const SCRIPT_CHOSEN = 'toolset-chosen';
	const SCRIPT_CHOSEN_WRAPPER = 'toolset-chosen-wrapper';

	// parsley lib for field validation
	const SCRIPT_PARSLEY = 'toolset-parsley';

	// Legacy validation and conditional display scripts - careful, these are also registered all over Toolset
	const SCRIPT_WPTOOLSET_FORM_VALIDATION = 'wptoolset-form-validation';
	const SCRIPT_WPTOOLSET_FORM_CONDITIONAL = 'wptoolset-form-conditional';

	const SCRIPT_MARK = 'mark';

	const SCRIPT_TOOLSET_SHORTCODE = 'toolset-shortcode';

	const SCRIPT_JQUERY_VALIDATE = 'validate';
	const SCRIPT_JQUERY_VALIDATE_LEGACY = 'wptoolset-form-jquery-validation';
	const SCRIPT_JQUERY_VALIDATE_ADDITIONAL = 'wptoolset-form-jquery-validation-additional';

	// Styles
	//
	//

	const STYLE_PARSLEY = 'toolset-parsley-style';

	const STYLE_CODEMIRROR = 'toolset-meta-html-codemirror-css';
	const STYLE_CODEMIRROR_CSS_HINT = 'toolset-meta-html-codemirror-css-hint-css';

	const STYLE_COLORBOX = 'toolset-colorbox';

	const STYLE_DDL_DIALOGS_FORMS = 'ddl-dialogs-forms-css';
	const STYLE_DDL_DIALOGS_GENERAL = 'ddl-dialogs-general-css';
	const STYLE_DDL_DIALOGS = 'ddl-dialogs-css';

	const STYLE_EDITOR_ADDON_MENU = 'editor_addon_menu';
	const STYLE_EDITOR_ADDON_MENU_SCROLL = 'editor_addon_menu_scroll';

	const STYLE_FONT_AWESOME = 'font-awesome';
	const STYLE_FONT_AWESOME_V4SHIM = 'font-awesome-v4shim';
	const STYLE_NOTIFICATIONS = 'toolset-notifications-css';

	const STYLE_SELECT2_CSS = 'toolset-select2-css';

	// These two are identical
	const STYLE_SELECT2_CSS_LAYOUTS_OVERRIDES = 'layouts-select2-overrides-css';
	const STYLE_SELECT2_CSS_OVERRIDES = 'toolset-select2-overrides-css';

	/** @deprecated Use STYLE_BOOTSTRAP_3 instead. */
	const STYLE_TOOLSET_BOOTSTRAP = 'toolset_bootstrap_styles';
	const /** @noinspection PhpDeprecationInspection */ STYLE_BOOTSTRAP_3 = self::STYLE_TOOLSET_BOOTSTRAP;
	const STYLE_BOOTSTRAP_4 = 'toolset_bootstrap_4';

	const STYLE_TOOLSET_COMMON = 'toolset-common';
	const STYLE_TOOLSET_DIALOGS_OVERRIDES = 'toolset-dialogs-overrides-css';
	const STYLE_TOOLSET_FORMS_BACKEND = 'wpt-toolset-backend';
	const STYLE_TOOLSET_PROMOTION = 'toolset-promotion';

	const STYLE_TOOLSET_SHORTCODE = 'toolset-shortcode';

	// chosen lib
	const STYLE_TOOLSET_CHOSEN = 'toolset-chosen-styles';

	// WordPress Core handles
	//
	//
	const STYLE_JQUERY_UI_DIALOG = 'wp-jquery-ui-dialog';

	const STYLE_ONTHEGOSYSTEMS_ICONS = 'onthegosystems-icons';

	// Deprecated constants, keep for backwards compatibility until at least 4.1
	const SCRIPT_TIPPY = 'tippy';
	const STYLE_TIPPY_CSS = 'tippy-css';

	/**
	 * Base URL for the Toolset Common instance.
	 *
	 * @note Does not have a trailing slash due to untrailingslashit, add it when registering each asset.
	 * @since 2.0
	 */
	protected $assets_url = '';

	private $did_initialize_scripts = false;
	private $did_initialize_styles = false;


	protected function __construct() {

		if ( is_admin() ) {
			$this->assets_url = TOOLSET_COMMON_URL;
		} else {
			$this->assets_url = TOOLSET_COMMON_FRONTEND_URL;
		}

		$this->assets_url = untrailingslashit( $this->assets_url );

		add_action( 'init', array( $this, 'init' ), 99 );

		// Backend
		add_action( 'admin_enqueue_scripts', array( $this, 'get_rid_of_default_scripts' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'get_rid_of_default_styles' ) );

		// Front-end
		add_action( 'wp_enqueue_scripts', array( $this, 'get_rid_of_default_scripts' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'get_rid_of_default_styles' ) );

		add_action( 'toolset_enqueue_scripts', array( $this, 'enqueue_scripts' ), 10, 1 );
		add_action( 'toolset_enqueue_styles', array( $this, 'enqueue_styles' ), 10, 1 );
		add_action( 'toolset_localize_script', array( $this, 'localize_script' ), 10, 3 );
	}

	private static $instances = array();

	/**
	 * @return Toolset_Assets_Manager
	 * @deprecated Use get_instance instead().
	 */
	final public static function getInstance() {
		$called_class = get_called_class();

		if ( isset( self::$instances[ $called_class ] ) ) {
			return self::$instances[ $called_class ];
		} else {
			self::$instances[ $called_class ] = new $called_class();
			return self::$instances[ $called_class ];
		}
	}


	/**
	 * Note: This *can not* be directly used in subclasses.
	 *
	 * @return Toolset_Assets_Manager
	 */
	public static function get_instance() {
		if( null === self::$instance ) {
			$called_class = get_called_class();
			if( $called_class === 'Toolset_Assets_Manager' && isset( self::$instances[ $called_class ] ) ) {
				// Make sure that we don't re-instantiate the Toolset_Assets_Manager class even if it was instantiated
				// before through the legacy getInstance() method.
				//
				// @refactoring Stop subclassing Toolset_Assets_Manager
				self::$instance = self::$instances[ $called_class ];
			} else {
				self::$instance = new self();
			}
		}

		return self::$instance;
	}

	/**
	 * Backward compatibility
	 * For PHP 7 we renamed the method __initialize_styles() and __initialize_scripts() to initialize_styles() and initialize_scripts().
	 * As both are public methods we apply this fallback for the case someone calls the old methods.
	 *
	 * @param $method
	 * @param $arguments
	 */
	public function __call( $method, $arguments ) {
		switch( $method ) {
			case '__initialize_styles':
				$this->initialize_styles();
				break;
			case '__initialize_scripts':
				$this->initialize_scripts();
				break;
		}
	}


	public function init() {
		$this->initialize_styles();
		$this->initialize_scripts();
	}


	public function get_assets_url() {
		return $this->assets_url;
	}


	/**
	 * Pushes to our scripts array other scripts so we can enqueue using our methods
	 *
	 * @return void
	 */
	public function get_rid_of_default_scripts() {
		global $wp_scripts;
		if ( is_array( $wp_scripts->registered ) ) {
			foreach ( $wp_scripts->registered as $registered ) {
				$this->scripts[ $registered->handle ] = new Toolset_Script( $registered->handle );
			}
		}
	}

	/**
	 * Pushes to our scripts array other scripts so we can enqueue using our methods
	 *
	 * @return void
	 */
	public function get_rid_of_default_styles() {
		global $wp_styles;

		if ( is_array( $wp_styles->registered ) ) {
			foreach ( $wp_styles->registered as $registered ) {
				$this->styles[ $registered->handle ] = new Toolset_Style( $registered->handle );
			}
		}
	}

	protected function initialize_styles() {

		// Prevent an infinite recursion in case we have a subclass of this that has:
		//
		// function __initialize_styles() {
		//     // ...
		//     return parent::__initialize_styles();
		// }
		if( $this->did_initialize_styles ) {
			return null;
		}
		$this->did_initialize_styles = true;

		if( method_exists( $this, '__initialize_styles' ) ) {
			// Support for subclasses overwriting the previous __initialize_styles function.
			//
			// This will cause the common assets never to be registered in these subclasses,
			// but we don't mind - these assets are already registered by Toolset_Assets_Manager
			// on every request.
			return $this->__initialize_styles();
		}

		// Libraries
		//
		//

		$this->register_style(
			self::STYLE_SELECT2_CSS,
			$this->assets_url . '/res/lib/select2/select2.css'
		);

		$this->register_style(
			self::STYLE_SELECT2_CSS_LAYOUTS_OVERRIDES,
			$this->assets_url . '/res/lib/select2/select2-overrides.css'
		);

		// Font Awesome: load the version stated in the settings.
		$toolset_settings = \Toolset_Settings::get_instance();

		if ( \OTGS\Toolset\Common\Settings\FontAwesomeSetting::FA_4 === $toolset_settings->get( \Toolset_Settings::FONT_AWESOME_VERSION ) ) {
			// Register Font Awesome 4.7.0
			$this->register_style(
				self::STYLE_FONT_AWESOME,
				$this->assets_url . '/res/lib/font-awesome/css/font-awesome.min.css',
				array(),
				'4.7.0',
				'screen'
			);
		} else {
			// Register Font Awesome 5.13.0 with v.4 shims
			$this->register_style(
				self::STYLE_FONT_AWESOME_V4SHIM,
				$this->assets_url . '/res/lib/font-awesome/css/v4-shims.css',
				array(),
				'5.13.0',
				'screen'
			);

			$this->register_style(
				self::STYLE_FONT_AWESOME,
				$this->assets_url . '/res/lib/font-awesome/css/all.css',
				array( self::STYLE_FONT_AWESOME_V4SHIM ),
				'5.13.0',
				'screen'
			);
		}

		$this->register_style(
			self::STYLE_CODEMIRROR,
			$this->assets_url . '/visual-editor/res/js/codemirror/lib/codemirror.css',
			array(),
			"5.5.0"
		);

		$this->register_style(
			self::STYLE_CODEMIRROR_CSS_HINT,
			$this->assets_url . '/visual-editor/res/js/codemirror/addon/hint/show-hint.css',
			array(),
			"5.5.0"
		);

		$this->register_style(
			self::STYLE_PARSLEY,
			$this->assets_url . '/res/lib/parsley/parsley.css',
			array(),
			'2.8.0'
		);

		$this->register_style(
			self::STYLE_COLORBOX,
			$this->assets_url . '/res/lib/colorbox/colorbox.css',
			array(),
			'1.6.4'
		);

		$this->register_style(
			self::STYLE_TOOLSET_CHOSEN,
			$this->assets_url . '/res/lib/chosen/chosen.css',
			array(),
			'1.8.7'
		);



		// Custom styles
		//
		//

		$this->register_style(
			self::STYLE_SELECT2_CSS_OVERRIDES,
			$this->assets_url . '/res/lib/select2/select2-overrides.css',
			array( 'toolset-select2-css' )
		);

		$this->register_style(
			self::STYLE_TOOLSET_FORMS_BACKEND,
			$this->assets_url . '/toolset-forms/css/wpt-toolset-backend.css',
			array(),
			TOOLSET_COMMON_VERSION
		);

		$this->register_style(
			self::STYLE_NOTIFICATIONS,
			$this->assets_url . '/res/css/toolset-notifications.css',
			array(),
			TOOLSET_COMMON_VERSION
		);

		$this->register_style(
			self::STYLE_TOOLSET_COMMON,
			$this->assets_url . '/res/css/toolset-common.css',
			array(),
			TOOLSET_COMMON_VERSION
		);

		$this->register_style(
			self::STYLE_TOOLSET_PROMOTION,
			$this->assets_url . '/res/css/toolset-promotion.css',
			array( self::STYLE_COLORBOX, 'onthego-admin-styles' ),
			TOOLSET_COMMON_VERSION
		);

		$this->register_style(
			self::STYLE_TOOLSET_SHORTCODE,
			$this->assets_url . '/res/css/toolset-shortcode.css',
			array( 'wp-jquery-ui-dialog' ),
			TOOLSET_COMMON_VERSION
		);

		$this->register_style(
			self::STYLE_EDITOR_ADDON_MENU,
			$this->assets_url . '/visual-editor/res/css/pro_dropdown_2.css',
			array(),
			TOOLSET_COMMON_VERSION
		);

		$this->register_style(
			self::STYLE_EDITOR_ADDON_MENU_SCROLL,
			$this->assets_url . '/visual-editor/res/css/scroll.css',
			array(),
			TOOLSET_COMMON_VERSION
		);

		$this->register_style(
			self::STYLE_BOOTSTRAP_3,
			$this->assets_url . '/res/lib/bootstrap3/css/bootstrap.css',
			array(),
			TOOLSET_COMMON_VERSION
		);

		$this->register_style(
			self::STYLE_BOOTSTRAP_4,
			$this->assets_url . '/res/lib/bootstrap4/css/' . $this->choose_script_version( 'bootstrap.min.css', 'bootstrap.css' ),
			[],
			'4.5.3'
		);

		$this->register_style(
			self::STYLE_DDL_DIALOGS_FORMS,
			$this->assets_url . '/utility/dialogs/css/dd-dialogs-forms.css',
			TOOLSET_VERSION
		);

		$this->register_style(
			self::STYLE_DDL_DIALOGS_GENERAL,
			$this->assets_url . '/utility/dialogs/css/dd-dialogs-general.css',
			array( self::STYLE_JQUERY_UI_DIALOG ),
			TOOLSET_VERSION
		);

		$this->register_style(
			self::STYLE_DDL_DIALOGS,
			$this->assets_url . '/utility/dialogs/css/dd-dialogs.css',
			array( self::STYLE_DDL_DIALOGS_GENERAL ),
			TOOLSET_VERSION
		);

		$this->register_style(
			self::STYLE_TOOLSET_DIALOGS_OVERRIDES,
			$this->assets_url . '/res/css/toolset-dialogs.css',
			array(),
			TOOLSET_COMMON_VERSION
		);

		$this->register_style(
			self::STYLE_ONTHEGOSYSTEMS_ICONS,
			ON_THE_GO_SYSTEMS_BRANDING_REL_PATH . 'onthegosystems-icons/css/onthegosystems-icons.css',
			array( self::STYLE_TOOLSET_COMMON ),
			TOOLSET_COMMON_VERSION
		);

		return apply_filters( 'toolset_add_registered_styles', $this->styles );
	}


	protected function initialize_scripts() {

		// Prevent an infinite recursion in case we have a subclass of this that has:
		//
		// function __initialize_scripts() {
		//     // ...
		//     return parent::__initialize_scripts();
		// }
		if( $this->did_initialize_scripts ) {
			return null;
		}
		$this->did_initialize_scripts = true;

		if( method_exists( $this, '__initialize_scripts' ) ) {
			// Support for subclasses overwriting the previous __initialize_scripts function.
			//
			// This will cause the common assets never to be registered in these subclasses,
			// but we don't mind - these assets are already registered by Toolset_Assets_Manager
			// on every request.
			return $this->__initialize_scripts();
		}

		// Libraries
		//
		//

		$this->register_script(
			self::SCRIPT_HEADJS,
			$this->assets_url . "/res/lib/head.min.js",
			array(),
			TOOLSET_COMMON_VERSION,
			true
		);

		$this->register_script(
			self::SCRIPT_JSTORAGE,
			$this->assets_url . "/res/lib/jstorage.min.js",
			array(),
			TOOLSET_COMMON_VERSION,
			true
		);

		$this->register_script(
			self::SCRIPT_SELECT2_COMPATIBILITY,
			$this->assets_url . "/res/js/toolset-select2-compatibility.js",
			array( 'jquery' ),
			TOOLSET_COMMON_VERSION,
			true
		);

		$this->register_script(
			self::SCRIPT_SELECT2,
			$this->assets_url . "/res/lib/select2/select2.js",
			array( 'jquery', self::SCRIPT_SELECT2_COMPATIBILITY ),
			'4.0.3-i18n',
			true
		);

		$this->localize_script(
			self::SCRIPT_SELECT2,
			self::SCRIPT_SELECT2_I18N,
			array(
				/* translators: select2 helper text: when the search results could not be loaded */
				'errorLoading' => __( 'The results could not be loaded', 'wpv-views' ),
				/* translators: select2 helper text: when your search term has 1 character over the allowed limit */
				'inputTooLongSingular' => __( 'Please delete %NUM% character', 'wpv-views' ),
				/* translators: select2 helper text: when your search term has %NUM% characters over the allowed limit */
				'inputTooLongPlural' => __( 'Please delete %NUM% characters', 'wpv-views' ),
				/* translators: select2 helper text: when your search term is %NUM% short under the minimum allowed limit */
				'inputTooShort' => __( 'Please enter %NUM% or more characters', 'wpv-views' ),
				/* translators: select2 helper text: when loading more results */
				'loadingMore' => __( 'Loading more results...', 'wpv-views' ),
				/* translators: select2 helper text: when you can only select 1 item */
				'maximumSelectedSingular' => __( 'You can only select %NUM% item', 'wpv-views' ),
				/* translators: select2 helper text: when you can only select up to %NUM% items */
				'maximumSelectedPlural' => __( 'You can only select %NUM% items', 'wpv-views' ),
				/* translators: select2 helper text: when no results were found */
				'noResults' => __( 'No results found', 'wpv-views' ),
				/* translators: select2 helper text: while searching */
				'searching' => __( 'Searching...', 'wpv-views' ),
			)
		);

		$this->register_script(
			self::SCRIPT_CHOSEN_WRAPPER,
			$this->assets_url . "/res/js/toolset-chosen-wrapper.js",
			array( 'jquery', self::SCRIPT_CHOSEN ),
			TOOLSET_COMMON_VERSION,
			true
		);

		$this->register_script(
			self::SCRIPT_PARSLEY,
			$this->choose_script_version(
				$this->assets_url . '/res/lib/parsley/parsley.min.js',
				$this->assets_url . '/res/lib/parsley/parsley.js'
			),
			array( 'jquery' ),
			'2.9.1',
			true
		);

		$this->register_script(
			self::SCRIPT_CHOSEN,
			$this->assets_url . "/res/lib/chosen/chosen.jquery.js",
			array( 'jquery' ),
			'1.8.7',
			true
		);

		$this->register_script(
			self::SCRIPT_COLORBOX,
			$this->assets_url . "/res/lib/colorbox/jquery.colorbox.js",
			array( 'jquery' ),
			'1.6.4',
			true
		);

		$this->register_script(
			self::SCRIPT_BOOTSTRAP_3,
			$this->assets_url . '/res/lib/bootstrap3/js/' . $this->choose_script_version( 'bootstrap.min.js', 'bootstrap.js' ),
			array( 'jquery', 'jquery-migrate' ),
			'3.3.7',
			true
		);

		// Note that this soft depends on https://popper.js.org and we are NOT including it. Ouch!
		$this->register_script(
			self::SCRIPT_BOOTSTRAP_4,
			$this->assets_url . '/res/lib/bootstrap4/js/' . $this->choose_script_version( 'bootstrap.bundle.min.js', 'bootstrap.bundle.js' ),
			[ 'jquery' ],
			'4.5.3',
			true
		);

		$this->register_script(
			self::SCRIPT_KNOCKOUT,
			$this->assets_url . '/res/lib/knockout/' . $this->choose_script_version( 'knockout-3.5.1.js', 'knockout-3.5.1.debug.js' ),
			array(),
			'3.5.1'
		);

		$this->register_script(
			self::SCRIPT_KNOCKOUT_MAPPING,
			$this->assets_url . '/res/lib/knockout/knockout.mapping-2.4.1.js',
			array( self::SCRIPT_KNOCKOUT ),
			'2.4.1'
		);

		$this->register_script(
			self::SCRIPT_TOOLSET_EVENT_MANAGER,
			$this->assets_url . "/res/lib/toolset-event-manager/toolset-event-manager.min.js",
			array(),
			'1.0',
			true
		);

		$this->register_script(
			self::SCRIPT_CODEMIRROR_COMP,
			$this->assets_url . '/visual-editor/res/js/codemirror_comp.js',
			array( 'jquery', 'underscore' ),
			"5.5.0"
		);

		$this->register_script(
			self::SCRIPT_CODEMIRROR,
			$this->assets_url . '/visual-editor/res/js/codemirror/lib/codemirror.js',
			array( 'jquery' ),
			"5.5.0"
		);

		$this->register_script(
			self::SCRIPT_CODEMIRROR_OVERLAY,
			$this->assets_url . '/visual-editor/res/js/codemirror/addon/mode/overlay.js',
			array( self::SCRIPT_CODEMIRROR, self::SCRIPT_CODEMIRROR_COMP ),
			"5.5.0"
		);

		$this->register_script(
			self::SCRIPT_CODEMIRROR_XML,
			$this->assets_url . '/visual-editor/res/js/codemirror/mode/xml/xml.js',
			array( self::SCRIPT_CODEMIRROR_OVERLAY ),
			"5.5.0"
		);

		$this->register_script(
			self::SCRIPT_CODEMIRROR_C_LIKE,
			$this->assets_url . '/visual-editor/res/js/codemirror/mode/clike/clike.js',
			array( self::SCRIPT_CODEMIRROR_OVERLAY ),
			"5.5.0"
		);

		$this->register_script(
			self::SCRIPT_CODEMIRROR_PHP,
			$this->assets_url . '/visual-editor/res/js/codemirror/mode/php/php.js',
			array(
				self::SCRIPT_CODEMIRROR_OVERLAY,
				self::SCRIPT_CODEMIRROR_XML,
				self::SCRIPT_CODEMIRROR_JS,
				self::SCRIPT_CODEMIRROR_CSS,
				self::SCRIPT_CODEMIRROR_HTMLMIXED,
				self::SCRIPT_CODEMIRROR_C_LIKE,
			),
			"5.5.0"
		);



		$this->register_script(
			self::SCRIPT_CODEMIRROR_CSS,
			$this->assets_url . '/visual-editor/res/js/codemirror/mode/css/css.js',
			array( self::SCRIPT_CODEMIRROR_OVERLAY ),
			"5.5.0"
		);

		$this->register_script(
			self::SCRIPT_CODEMIRROR_HTMLMIXED,
			$this->assets_url . '/visual-editor/res/js/codemirror/mode/htmlmixed/htmlmixed.js',
			array( self::SCRIPT_CODEMIRROR_OVERLAY ),
			"5.5.0"
		);

		$this->register_script(
			self::SCRIPT_CODEMIRROR_JS,
			$this->assets_url . '/visual-editor/res/js/codemirror/mode/javascript/javascript.js',
			array( self::SCRIPT_CODEMIRROR_OVERLAY ),
			"5.5.0"
		);

		$this->register_script(
			self::SCRIPT_CODEMIRROR_UTILS_SEARCH,
			$this->assets_url . '/visual-editor/res/js/codemirror/addon/search/search.js',
			array( self::SCRIPT_CODEMIRROR, self::SCRIPT_CODEMIRROR_COMP ),
			"5.5.0"
		);

		$this->register_script(
			self::SCRIPT_CODEMIRROR_UTILS_SEARCH_CURSOR,
			$this->assets_url . '/visual-editor/res/js/codemirror/addon/search/searchcursor.js',
			array( self::SCRIPT_CODEMIRROR_UTILS_SEARCH ),
			"5.5.0"
		);

		$this->register_script(
			self::SCRIPT_CODEMIRROR_UTILS_HINT,
			$this->assets_url . '/visual-editor/res/js/codemirror/addon/hint/show-hint.js',
			array( self::SCRIPT_CODEMIRROR, self::SCRIPT_CODEMIRROR_COMP ),
			"5.5.0"
		);

		$this->register_script(
			self::SCRIPT_CODEMIRROR_UTILS_HINT_CSS,
			$this->assets_url . '/visual-editor/res/js/codemirror/addon/hint/css-hint.js',
			array( self::SCRIPT_CODEMIRROR_UTILS_HINT ),
			"5.5.0"
		);

		$this->register_script(
			self::SCRIPT_CODEMIRROR_UTILS_PANEL,
			$this->assets_url . '/visual-editor/res/js/codemirror/addon/display/panel.js',
			array( self::SCRIPT_CODEMIRROR, self::SCRIPT_CODEMIRROR_COMP ),
			"5.5.0"
		);

		// Custom scripts
		//
		//

		$this->register_script(
			self::SCRIPT_UTILS,
			$this->assets_url . "/utility/js/utils.js",
			array( 'jquery', 'underscore', 'backbone', 'jquery-ui-core', 'jquery-ui-widget', 'jquery-ui-dialog' ),
			'1.2.2',
			true
		);

		$this->register_script(
			self::SCRIPT_TOOLSET_QUICKTAGS,
			$this->assets_url . "/res/js/toolset-quicktags.js",
			array( 'jquery', 'quicktags', 'wplink', self::SCRIPT_CODEMIRROR ),
			TOOLSET_COMMON_VERSION
		);

		$this->register_script(
			self::SCRIPT_ICL_EDITOR,
			$this->assets_url . '/visual-editor/res/js/icl_editor_addon_plugin.js',
			array( 'jquery', self::SCRIPT_CODEMIRROR ),
			TOOLSET_COMMON_VERSION
		);

		$this->register_script(
			self::SCRIPT_ICL_MEDIA_MANAGER,
			$this->assets_url . '/visual-editor/res/js/icl_media_manager.js',
			array( self::SCRIPT_ICL_EDITOR ),
			TOOLSET_COMMON_VERSION
		);

		$this->register_script(
			self::SCRIPT_TOOLSET_MEDIA_MANAGER,
			$this->assets_url . "/res/js/toolset-media-manager.js",
			array( self::SCRIPT_ICL_EDITOR, self::SCRIPT_TOOLSET_EVENT_MANAGER ),
			TOOLSET_COMMON_VERSION
		);

		$this->register_script(
			self::SCRIPT_TOOLSET_MEDIA_FIELD_PROTOTYPE,
			$this->assets_url . '/res/js/toolset-media-field.prototype.js',
			array(
				'jquery',
				'underscore',
				self::SCRIPT_TOOLSET_EVENT_MANAGER,
			),
			TOOLSET_COMMON_VERSION
		);

		$this->localize_script(
			self::SCRIPT_TOOLSET_MEDIA_FIELD_PROTOTYPE,
			self::SCRIPT_TOOLSET_MEDIA_FIELD_PROTOTYPE_I18N,
			array(
				'dialog' => array(
					'single' => array(
						'title' => array(
							'audio' => __( 'Audio file for this field', 'wpv-views' ),
							'file' => __( 'File for this field', 'wpv-views' ),
							'image' => __( 'Image for this field', 'wpv-views' ),
							'video' => __( 'Video for this field', 'wpv-views' ),
						),
						'button' => array(
							'audio' => __( 'Add audio', 'wpv-views' ),
							'file' => __( 'Add file', 'wpv-views' ),
							'image' => __( 'Add image', 'wpv-views' ),
							'video' => __( 'Add video', 'wpv-views' ),
						),
					),
					'multiple' => array(
						'title' => array(
							'audio' => __( 'Multiple audio files for this field', 'wpv-views' ),
							'file' => __( 'Multiple files for this field', 'wpv-views' ),
							'image' => __( 'Multiple images for this field', 'wpv-views' ),
							'video' => __( 'Multiple videos for this field', 'wpv-views' ),
						),
						'button' => array(
							'audio' => __( 'Add multiple audios', 'wpv-views' ),
							'file' => __( 'Add multiple files', 'wpv-views' ),
							'image' => __( 'Add multiple images', 'wpv-views' ),
							'video' => __( 'Add multiple videos', 'wpv-views' ),
						),
					),
					'nonce' => wp_create_nonce( 'toolset_media_field_' . get_current_user_id() ),
				),
			)
		);

		$this->register_script(
			self::SCRIPT_JSCROLLPANE,
			"{$this->assets_url}/visual-editor/res/js/scrollbar.js",
			array('jquery'),
			'2.0.0'
		);


		$this->register_script(
			self::SCRIPT_MOUSEWHEEL,
			"{$this->assets_url}/visual-editor/res/js/mousewheel.js",
			array( self::SCRIPT_JSCROLLPANE ),
			TOOLSET_COMMON_VERSION
		);


		$this->register_script(
			self::SCRIPT_TOOLSET_PARSER,
			$this->assets_url . '/res/js/toolset-parser.js',
			array( 'jquery' ),
			TOOLSET_COMMON_VERSION,
			true
		);

		$this->register_script(
			self::SCRIPT_TOOLSET_PROMOTION,
			$this->assets_url . "/res/js/toolset-promotion.js",
			array( 'underscore', self::SCRIPT_COLORBOX ),
			TOOLSET_COMMON_VERSION,
			true
		);

		$this->register_script(
			self::SCRIPT_TOOLSET_SETTINGS,
			$this->assets_url . "/res/js/toolset-settings.js",
			array( 'jquery', 'underscore', self::SCRIPT_UTILS ),
			TOOLSET_COMMON_VERSION,
			true
		);

		$this->register_script(
			self::SCRIPT_TOOLSET_EXPORT_IMPORT,
			$this->assets_url . "/res/js/toolset-export-import.js",
			array( 'jquery', 'underscore' ),
			TOOLSET_COMMON_VERSION,
			true
		);

		$this->localize_script(
			self::SCRIPT_UTILS,
			'toolset_utils_texts',
			array(
				'wpv_dont_show_it_again' => __( "Got it! Don't show this message again", 'wpv-views' ),
				'wpv_close' => __( 'Close', 'wpv-views' )
			)
		);

		$this->localize_script(
			self::SCRIPT_ICL_EDITOR,
			'icl_editor_localization_texts',
			array(
				'wpv_insert_conditional_shortcode' => __( 'Insert conditional shortcode', 'wpv-views' ),
				'wpv_conditional_button' => __( 'conditional output', 'wpv-views' ),
				'wpv_editor_callback_nonce' => wp_create_nonce( 'wpv_editor_callback' )
			)
		);

		$this->localize_script(
			self::SCRIPT_ICL_MEDIA_MANAGER,
			'icl_media_manager',
			array(
				'only_img_allowed_here' => __( "You can only use an image file here", 'wpv-views' )
			)
		);

		Toolset_Settings::get_instance();

		$this->localize_script(
			self::SCRIPT_TOOLSET_SETTINGS,
			'toolset_settings_texts',
			array(
				'autosave_saving' => '<i class="fa fa-refresh fa-spin"></i>' . __( 'Saving...', 'wpv-views' ),
				'autosave_saved' => '<i class="fa fa-check"></i>' . __( 'All changes saved', 'wpv-views' ),
				'autosave_failed' => '<i class="fa fa-exclamation-triangle"></i>' . __( 'Saving failed. Please reload the page and try again.', 'wpv-views' ),
				'toolset_bootstrap_version_filter' => apply_filters( 'toolset-toolset_bootstrap_version_filter', false ),
				'toolset_bootstrap_version_selected' => apply_filters( 'toolset-toolset_bootstrap_version_manually_selected', false ),
				'toolset_theme_loads_own_bs' => __( 'This theme loads its own version of Bootstrap. You should select this option to avoid loading Bootstrap twice and causing display problems on the site\'s front-end', 'wpv-views' )
			)
		);

		$this->register_script(
			self::SCRIPT_MARK,
			$this->assets_url . '/res/lib/mark/jquery.mark.min.js',
			array( 'jquery' ),
			TOOLSET_COMMON_VERSION,
			true
		);

		$this->register_script(
			self::SCRIPT_TOOLSET_SHORTCODE,
			$this->assets_url . "/res/js/toolset-shortcode.js",
			array(
				'jquery', 'jquery-ui-dialog', 'jquery-ui-tabs', 'suggest', 'shortcode', 'underscore', 'wp-util', 'wp-pointer',
				self::SCRIPT_SELECT2, self::SCRIPT_ICL_EDITOR,
				self::SCRIPT_UTILS, self::SCRIPT_TOOLSET_EVENT_MANAGER,
				self::SCRIPT_MARK
			),
			TOOLSET_COMMON_VERSION,
			true
		);

		global $pagenow;
		$toolset_shortcode_i18n = array(
			'action' => array(
				'insert'  => __( 'Insert shortcode', 'wpv-views' ),
				'create'  => __( 'Create shortcode', 'wpv-views' ),
				'update'  => __( 'Update shortcode', 'wpv-views' ),
				'close'   => __( 'Close', 'wpv-views' ),
				'cancel'  => __( 'Cancel', 'wpv-views' ),
				'back'    => __( 'Back', 'wpv-views' ),
				'save'    => __( 'Save settings', 'wpv-views' ),
				'loading' => __( 'Loading...', 'wpv-views' ),
			),
			'title' => array(
				'generated' => __( 'Toolset - generated shortcode', 'wpv-views' ),
			),
			'validation' => array(
				'mandatory'  => __( 'This field is required', 'wpv-views' ),
				'number'     => __( 'Please enter a valid number', 'wpv-views' ),
				'numberlist' => __( 'Please enter a valid comma separated number list', 'wpv-views' ),
				'url'        => __( 'Please enter a valid URL', 'wpv-views' ),

			),
			'integrated_inputs' => array(),
			'ajaxurl' => admin_url( 'admin-ajax.php', ( is_ssl() ? 'https' : 'http' )  ),
			'pagenow' => $pagenow
		);

		$toolset_shortcode_i18n = apply_filters( 'toolset_filter_shortcode_script_i18n', $toolset_shortcode_i18n );

		$this->localize_script(
			self::SCRIPT_TOOLSET_SHORTCODE,
			'toolset_shortcode_i18n',
			$toolset_shortcode_i18n
		);

		// These scripts should be used only in conjunction with SCRIPT_WPTOOLSET_FORM_VALIDATION,
		// because they reference MODIFIED versions of the libraries adjusted to work with Toolset Forms.
		//
		// WARNING:
		// The handle name "wptoolset-form-jquery-validation" (self::SCRIPT_JQUERY_VALIDATE_LEGACY) is deprecated
		// and should be replaced by the standard handle for the jQuery validation plugin, which is "validate", in order to
		// prevent conflicts with third-party software.
		//
		// We're keeping the old handle registered as well, in case we miss some code that might
		// depend on it: A validation that is broken in combination with specific plugins is still
		// much better than validation that is broken always.
		//
		// WARNING:
		// Right now, we use a generic handle for a modified third party library.
		// Also, Types loads this same library with a different handle: wpcf-form-validation and wpcf-form-validation-additional.
		// We need to keep just one, two at most of we can not isolate the Toolset Forms changes.
		$this->register_script(
			self::SCRIPT_JQUERY_VALIDATE,
			$this->assets_url . '/toolset-forms/lib/js/jquery-form-validation/jquery.validate.js',
			array( 'jquery' ),
			'1.8.1',
			true
		);
		$this->register_script(
			self::SCRIPT_JQUERY_VALIDATE_LEGACY,
			$this->assets_url . '/toolset-forms/lib/js/jquery-form-validation/jquery.validate.js',
			array( 'jquery' ),
			'1.8.1',
			true
		);
		$this->register_script(
			self::SCRIPT_JQUERY_VALIDATE_ADDITIONAL,
			$this->assets_url . '/toolset-forms/lib/js/jquery-form-validation/additional-methods.min.js',
			array( self::SCRIPT_JQUERY_VALIDATE ),
			TOOLSET_COMMON_VERSION,
			true
		);
		$this->register_script(
			self::SCRIPT_WPTOOLSET_FORM_VALIDATION,
			$this->assets_url . '/toolset-forms/js/validation.js',
			array( self::SCRIPT_JQUERY_VALIDATE_ADDITIONAL, 'underscore', self::SCRIPT_UTILS, self::SCRIPT_TOOLSET_EVENT_MANAGER, self::SCRIPT_ICL_EDITOR ),
			TOOLSET_COMMON_VERSION,
			true
		);

		$this->register_script(
			self::SCRIPT_WPTOOLSET_FORM_CONDITIONAL,
			$this->assets_url . '/toolset-forms/js/conditional.js',
			array( 'jquery', 'jquery-effects-scale' ),
			TOOLSET_COMMON_VERSION,
			true
		);


		return apply_filters( 'toolset_add_registered_script', $this->scripts );
	}


	public function enqueue_scripts( $handles ) {
		if ( is_array( $handles ) ) {
			foreach ( $handles as $handle ) {
				if ( isset( $this->scripts[ $handle ] ) ) {
					$this->scripts[ $handle ]->enqueue();
				}
			}
		} else if ( is_string( $handles ) ) {
			if ( isset( $this->scripts[ $handles ] ) ) {
				$this->scripts[ $handles ]->enqueue();
			}
		}
	}


	public function enqueue_styles( $handles ) {
		if ( is_array( $handles ) ) {
			foreach ( $handles as $handle ) {
				if ( isset( $this->styles[ $handle ] ) ) {
					$this->styles[ $handle ]->enqueue();
				}
			}
		} else if ( is_string( $handles ) ) {
			if ( isset( $this->styles[ $handles ] ) ) {
				$this->styles[ $handles ]->enqueue();
			}
		}
	}


	public function deregister_scripts( $handles ) {
		if ( is_array( $handles ) ) {
			foreach ( $handles as $handle ) {
				if ( isset( $this->scripts[ $handle ] ) ) {
					$this->scripts[ $handle ]->deregister();
					unset( $this->scripts[ $handle ] );
				}
			}
		} else if ( is_string( $handles ) ) {
			if ( isset( $this->scripts[ $handles ] ) ) {
				$this->scripts[ $handles ]->deregister();
				unset( $this->scripts[ $handles ] );
			}
		}
	}


	public function deregister_styles( $handles ) {
		if ( is_array( $handles ) ) {
			foreach ( $handles as $handle ) {
				if ( isset( $this->styles[ $handle ] ) ) {
					$this->styles[ $handle ]->deregister();
					unset( $this->styles[ $handle ] );
				}
			}
		} else if ( is_string( $handles ) ) {
			if ( isset( $this->styles[ $handles ] ) ) {
				$this->styles[ $handles ]->deregister();
				unset( $this->styles[ $handles ] );
			}
		}
	}


	public function add_script( Toolset_Script $script ) {
		if( isset( $this->scripts[ $script->handle ] ) ) {
			return;
		}

		$this->scripts[ $script->handle ] = $script;
	}


	public function register_script( $handle, $path = '', $deps = array(), $ver = false, $in_footer = false ) {
		if ( ! isset( $this->scripts[ $handle ] ) ) {
			$this->scripts[ $handle ] = new Toolset_Script( $handle, $path, $deps, $ver, $in_footer );
		}
	}


	public function register_style( $handle, $path = '', $deps = array(), $ver = false, $media = 'screen' ) {
		if ( ! isset( $this->styles[ $handle ] ) ) {
			$this->styles[ $handle ] = new Toolset_Style( $handle, $path, $deps, $ver, $media );
		}
	}


	public function localize_script( $handle, $object, $args ) {
		if ( isset( $this->scripts[ $handle ] ) ) {
			$this->scripts[ $handle ]->localize( $object, $args );
		}
	}


	/**
	 * Decide if WordPress is in the "script debug" mode where it includes all its script in a non-minified form.
	 *
	 * If it is, we should do the same.
	 *
	 * @return bool
	 * @since 2.3
	 */
	public function is_script_debug_mode_on() {
		return ( defined( 'SCRIPT_DEBUG' ) && true == SCRIPT_DEBUG );
	}


	/**
	 * Choose a production (usually minified) or debugging (non-minified) version of
	 * a script depending on the script debugging mode.
	 *
	 * See SCRIPT_DEBUG constant
	 *
	 * @param string $production_version File name of the production script version.
	 * @param string $debugging_version File name of the debugging script version.
	 *
	 * @return string
	 * @since 2.2.7
	 */
	private function choose_script_version( $production_version, $debugging_version ) {
		return ( $this->is_script_debug_mode_on() ? $debugging_version : $production_version );
	}
}
