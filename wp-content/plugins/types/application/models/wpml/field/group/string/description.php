<?php

/**
 * @todo document this please!
 */
class Types_Wpml_Field_Group_String_Description extends Types_Wpml_Field_Group_String {

	const DB_NAME_PATTERN = 'group-%s-description';

	public function __construct( Toolset_Field_Group $group ) {
		parent::__construct( $group );
		$this->string_to_translate = stripslashes( $this->group->get_description() );
	}

	protected function get_db_pattern() {
		return self::DB_NAME_PATTERN;
	}

	protected function get_title() {
		return 'Description';
	}

	protected function get_type() {
		return 'AREA';
	}

}
