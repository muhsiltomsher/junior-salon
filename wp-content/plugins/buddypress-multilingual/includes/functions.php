<?php

/**
 * @return bool
 */
function bpml_is_buddyboss() {
	return defined( 'BP_PLATFORM_VERSION' );
}

/**
 * Turns on verbose rewrite rules.
 *
 * @see http://wordpress.stackexchange.com/questions/22438/how-to-make-pages-slug-have-priority-over-any-other-taxonomies-like-custom-post
 * @see http://wordpress.stackexchange.com/questions/16902/permalink-rewrite-404-conflict-wordpress-taxonomies-cpt/16929#16929
 * @see http://wordpress.stackexchange.com/questions/17569/using-postname-for-a-custom-post-type
 * @see http://wordpress.stackexchange.com/a/16929/9244
 */
function bpml_use_verbose_rules() {
	global $wp_rewrite;
	$wp_rewrite->use_verbose_page_rules = true;
}

/**
 * Modifies and collects rewrite rules for pages.
 *
 * @see bpml_rewrite_rules_array_filter
 * @see http://codex.wordpress.org/Plugin_API/Filter_Reference/page_rewrite_rules
 * @param string[] $page_rewrite_rules
 * @return array
 */
function bpml_page_rewrite_rules_filter( $page_rewrite_rules ) {
	$GLOBALS['bpml_page_rewrite_rules'] = $page_rewrite_rules;
	return [];
}

/**
 * Re-orders rewrite rules by pre-pending collected rules.
 *
 * @see bpml_page_rewrite_rules_filter
 * @see http://codex.wordpress.org/Plugin_API/Filter_Reference/rewrite_rules_array
 * @param string[] $rewrite_rules
 * @return mixed
 */
function bpml_rewrite_rules_array_filter( $rewrite_rules ) {
	return $GLOBALS['bpml_page_rewrite_rules'] + $rewrite_rules;
}

function bpml_is_language_per_domain() {
	return (int) apply_filters( 'wpml_setting', null, 'language_negotiation_type' ) === 2;
}

function bpml_is_language_per_dir() {
	return (int) apply_filters( 'wpml_setting', null, 'language_negotiation_type', false ) === 1;
}

function bpml_is_default_language_in_directory() {
	$settings = apply_filters( 'wpml_setting', null, 'urls' );
	return (int) apply_filters( 'wpml_setting', null, 'language_negotiation_type' ) === 1 && ! empty( $settings['directory_for_default_language'] );
}

function bpml_is_langauge_as_param() {
	return (int) apply_filters( 'wpml_setting', null, 'language_negotiation_type' ) === 3;
}

function bpml_admin_notice_required_plugins() {
	$link_url = 'https://wpml.org/faq/how-to-add-string-translation-to-your-site/?utm_source=plugin&utm_medium=gui&utm_campaign=bpml';
	$message  = sprintf(
		/* translators: The placeholders are replaced by an HTML link pointing to the String translation add-on FAQ article. */
		esc_html__( 'To use BuddyPress Multilingual, enable the WPML Multilingual CMS plugin and %1$sString Translation add-on%2$s alongside BuddyPress or BuddyBoss.', 'bpml' ),
		'<a href="' . esc_url( $link_url ) . '" class="wpml-external-link" target="_blank">',
		'</a>'
	);
	echo '<div class="notice notice-warning"><p>' . $message . '</p></div>';
}

function bpml_admin_notice_wpml_settings() {
	echo '<div class="message updated"><p>'
	. esc_html__( 'For BuddyPress Multilingual to work you must set "Different languages in directories" in WPML > Languages > Language URL Format', 'bpml' )
	. '</p></div>';
}

function bpml_sanitize_string_name( $string, $max_length = 30 ) {
	$max_length = apply_filters( 'bpml_xprofile_string_name_max_length', $max_length );
	$string     = sanitize_text_field( $string );
	if ( strlen( $string ) > $max_length ) {
		$string = substr( $string, 0, strrpos( substr( $string, 0, $max_length ), ' ' ) );
	}
	return sanitize_title( $string );
}
