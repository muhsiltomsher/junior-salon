<?php

namespace FKCart\Includes;

use FKCart\Includes\Traits\Instance;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Admin
 */
#[\AllowDynamicProperties]
class DB {

	use Instance;

	public function __construct() {
		add_action( 'init', [ $this, 'db_update' ], 12 );
	}

	/**
	 * Perform DB update
	 *
	 * @return void
	 */
	public function db_update() {
		$db_changes = array(
			'1.7.1' => '1_7_1',
			'1.7.2' => '1_7_2',
		);


		$db_options = get_option( 'fkcart_db_options', [] );
		$db_version = isset( $db_options['db_version'] ) ? $db_options['db_version'] : '0.1';

		if ( version_compare( FKCART_DB_VERSION, $db_version, '>' ) ) {
			foreach ( $db_changes as $version_key => $version_value ) {
				if ( version_compare( $db_version, $version_key, '<' ) ) {
					$function_name = 'db_update_' . $version_value;
					$this->$function_name( $version_key );
				}
			}
		}
	}


	/**
	 * Update db option key with version
	 *
	 * @param $version
	 *
	 * @return void
	 */
	private function update_db_version( $version ) {
		$db_options               = get_option( 'fkcart_db_options', [] );
		$db_options['db_version'] = $version;

		/** Updating version */
		update_option( 'fkcart_db_options', $db_options, true );
	}

	protected function db_update_1_7_1( $version_key ) {
		$this->create_db();
		$this->update_db_version( $version_key );
	}

	/**
	 * Set new db migration status on
	 *
	 * @param $version_key
	 *
	 * @return void
	 */
	protected function db_update_1_7_2( $version_key ) {
		if ( ! function_exists( 'fkcart_db_migrator' ) ) {
			return;
		}
		global $wpdb;

		$cart_stats_table = $wpdb->prefix . 'fk_cart_stats';
		$table_exists     = $wpdb->get_var( $wpdb->prepare( "SHOW TABLES LIKE %s", $cart_stats_table ) );
		if ( $table_exists !== $cart_stats_table ) {
			return;
		}

		$entry = $wpdb->get_var( "select count(ID) as total_entry from {$wpdb->prefix}fk_cart_stats WHERE status = 1 LIMIT 1 " );
		if ( ! empty( $entry ) && 0 < absint( $entry ) ) {

			if ( ! in_array( fkcart_db_migrator()->get_upgrade_state(), [ 2, 3 ], true ) ) {
				fkcart_db_migrator()->set_upgrade_state( 1 );
			}

		}

		$this->update_db_version( $version_key );

	}

	public static function create_db() {
		global $wpdb;
		$charset_collate = $wpdb->get_charset_collate();
		$fk_cart          = $wpdb->prefix . 'fk_cart';
		$fk_cart_products = $wpdb->prefix . 'fk_cart_products';
		$sql             = "
	    CREATE TABLE $fk_cart (
	        id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
	        oid bigint(20) unsigned NOT NULL DEFAULT 0,
	        addon_viewed varchar(255) NOT NULL DEFAULT '',
	        free_gift_viewed varchar(255) NOT NULL DEFAULT '',
	        upsells_viewed varchar(255) NOT NULL DEFAULT '',
	        discount varchar(100) NOT NULL DEFAULT '',
	        free_shipping tinyint(2) unsigned COMMENT '1- yes 0- no',
	        date_created DateTime NOT NULL,
	        PRIMARY KEY (id),
	        KEY oid (oid),
	        KEY discount (discount),
	        KEY free_shipping (free_shipping),
	        KEY date_created (date_created)
	    ) $charset_collate;

	    CREATE TABLE $fk_cart_products (
	        id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
	        oid bigint(20) unsigned NOT NULL,
	        product_id bigint(20) unsigned NOT NULL,
	        price double NOT NULL,
	        type tinyint(1) NOT NULL COMMENT '1 - Upsell, 2 - Free Gift, 3 - Addon',
	        PRIMARY KEY (id),
	        KEY product_id (product_id),
	        KEY type (type),
	        FOREIGN KEY (oid) REFERENCES $fk_cart(oid)
	    ) $charset_collate;
	    ";

		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
		$db_options = [ 'stats_table' => 1 ];
		\dbDelta( $sql );
		\update_option( 'fkcart_db_options_new_db', $db_options, false );
	}
}
