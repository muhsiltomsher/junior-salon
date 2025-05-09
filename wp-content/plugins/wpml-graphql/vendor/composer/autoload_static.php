<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitb51d625ef5aefb26b77eead70de8e786
{
    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'WPML\\GraphQL\\Helpers' => __DIR__ . '/../..' . '/classes/Helpers.php',
        'WPML\\GraphQL\\Hooks\\Connection\\Base' => __DIR__ . '/../..' . '/classes/Hooks/Connection/Base.php',
        'WPML\\GraphQL\\Hooks\\Connection\\Comment\\commentedOn\\ContentNode' => __DIR__ . '/../..' . '/classes/Hooks/Connection/Comment/commentedOn/ContentNode.php',
        'WPML\\GraphQL\\Hooks\\Connection\\Factory' => __DIR__ . '/../..' . '/classes/Hooks/Connection/Factory.php',
        'WPML\\GraphQL\\Hooks\\Connection\\MenuItem\\menu\\Menu' => __DIR__ . '/../..' . '/classes/Hooks/Connection/MenuItem/menu/Menu.php',
        'WPML\\GraphQL\\Hooks\\Connection\\Menu\\menuItems\\MenuItem' => __DIR__ . '/../..' . '/classes/Hooks/Connection/Menu/menuItems/MenuItem.php',
        'WPML\\GraphQL\\Hooks\\Connection\\PostType\\comments\\Comment' => __DIR__ . '/../..' . '/classes/Hooks/Connection/PostType/comments/Comment.php',
        'WPML\\GraphQL\\Hooks\\Connection\\PostType\\terms\\Taxonomy' => __DIR__ . '/../..' . '/classes/Hooks/Connection/PostType/terms/Taxonomy.php',
        'WPML\\GraphQL\\Hooks\\Connection\\Taxonomy\\assignedTo\\PostType' => __DIR__ . '/../..' . '/classes/Hooks/Connection/Taxonomy/assignedTo/PostType.php',
        'WPML\\GraphQL\\Hooks\\Modifiers' => __DIR__ . '/../..' . '/classes/Hooks/Modifiers.php',
        'WPML\\GraphQL\\Hooks\\ObjectEntity\\BaseObject' => __DIR__ . '/../..' . '/classes/Hooks/ObjectEntity/BaseObject.php',
        'WPML\\GraphQL\\Hooks\\ObjectEntity\\CommentObject' => __DIR__ . '/../..' . '/classes/Hooks/ObjectEntity/CommentObject.php',
        'WPML\\GraphQL\\Hooks\\ObjectEntity\\ContentNodeObject' => __DIR__ . '/../..' . '/classes/Hooks/ObjectEntity/ContentNodeObject.php',
        'WPML\\GraphQL\\Hooks\\ObjectEntity\\ContentTypeObject' => __DIR__ . '/../..' . '/classes/Hooks/ObjectEntity/ContentTypeObject.php',
        'WPML\\GraphQL\\Hooks\\ObjectEntity\\MenuItemObject' => __DIR__ . '/../..' . '/classes/Hooks/ObjectEntity/MenuItemObject.php',
        'WPML\\GraphQL\\Hooks\\ObjectEntity\\MenuObject' => __DIR__ . '/../..' . '/classes/Hooks/ObjectEntity/MenuObject.php',
        'WPML\\GraphQL\\Hooks\\ObjectEntity\\PostObject' => __DIR__ . '/../..' . '/classes/Hooks/ObjectEntity/PostObject.php',
        'WPML\\GraphQL\\Hooks\\ObjectEntity\\TermNodeObject' => __DIR__ . '/../..' . '/classes/Hooks/ObjectEntity/TermNodeObject.php',
        'WPML\\GraphQL\\Hooks\\ObjectEntity\\TermObject' => __DIR__ . '/../..' . '/classes/Hooks/ObjectEntity/TermObject.php',
        'WPML\\GraphQL\\Hooks\\ObjectEntity\\UserObject' => __DIR__ . '/../..' . '/classes/Hooks/ObjectEntity/UserObject.php',
        'WPML\\GraphQL\\Hooks\\ObjectType\\LanguageType' => __DIR__ . '/../..' . '/classes/Hooks/ObjectType/LanguageType.php',
        'WPML\\GraphQL\\Hooks\\Query\\LanguageFilter' => __DIR__ . '/../..' . '/classes/Hooks/Query/LanguageFilter.php',
        'WPML\\GraphQL\\Hooks\\Query\\Languages' => __DIR__ . '/../..' . '/classes/Hooks/Query/Languages.php',
        'WPML\\GraphQL\\Loader' => __DIR__ . '/../..' . '/classes/Loader.php',
        'WPML\\GraphQL\\Resolvers\\BaseFields' => __DIR__ . '/../..' . '/classes/Resolvers/BaseFields.php',
        'WPML\\GraphQL\\Resolvers\\CommentFields' => __DIR__ . '/../..' . '/classes/Resolvers/CommentFields.php',
        'WPML\\GraphQL\\Resolvers\\ContentNodeFields' => __DIR__ . '/../..' . '/classes/Resolvers/ContentNodeFields.php',
        'WPML\\GraphQL\\Resolvers\\Interfaces\\LanguageFields' => __DIR__ . '/../..' . '/classes/Resolvers/Interfaces/LanguageFields.php',
        'WPML\\GraphQL\\Resolvers\\Interfaces\\ModelFields' => __DIR__ . '/../..' . '/classes/Resolvers/Interfaces/ModelFields.php',
        'WPML\\GraphQL\\Resolvers\\Interfaces\\TranslationFields' => __DIR__ . '/../..' . '/classes/Resolvers/Interfaces/TranslationFields.php',
        'WPML\\GraphQL\\Resolvers\\MenuFields' => __DIR__ . '/../..' . '/classes/Resolvers/MenuFields.php',
        'WPML\\GraphQL\\Resolvers\\MenuItemFields' => __DIR__ . '/../..' . '/classes/Resolvers/MenuItemFields.php',
        'WPML\\GraphQL\\Resolvers\\PostFields' => __DIR__ . '/../..' . '/classes/Resolvers/PostFields.php',
        'WPML\\GraphQL\\Resolvers\\QueryFields' => __DIR__ . '/../..' . '/classes/Resolvers/QueryFields.php',
        'WPML\\GraphQL\\Resolvers\\TermFields' => __DIR__ . '/../..' . '/classes/Resolvers/TermFields.php',
        'WPML\\GraphQL\\Resolvers\\UserFields' => __DIR__ . '/../..' . '/classes/Resolvers/UserFields.php',
        'WPML_Core_Version_Check' => __DIR__ . '/..' . '/wpml-shared/wpml-lib-dependencies/src/dependencies/class-wpml-core-version-check.php',
        'WPML_Dependencies' => __DIR__ . '/..' . '/wpml-shared/wpml-lib-dependencies/src/dependencies/class-wpml-dependencies.php',
        'WPML_PHP_Version_Check' => __DIR__ . '/..' . '/wpml-shared/wpml-lib-dependencies/src/dependencies/class-wpml-php-version-check.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInitb51d625ef5aefb26b77eead70de8e786::$classMap;

        }, null, ClassLoader::class);
    }
}
