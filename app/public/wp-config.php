<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}


define('AUTH_KEY',         'KcRvg5mR79IdZ0p+3OqSQOK/ZyIA/Ub7ykjVD6tYRQpKKhxbL5AhBKn09CShn4V/9IIputTHiOA+gCeDP1cVWw==');
define('SECURE_AUTH_KEY',  '/865aDhAnIGGPWvrY7cmUJKlDBlAIDg/O9vi30yY4QmH5bwAnPA2M0z7H8WXLjiQ9mfW7CJh4dpy7dUfjd/07Q==');
define('LOGGED_IN_KEY',    'XJi79d3jeBBl84DFsTbQ1Q1jn+j4bMJFuRZzzEC6G2Jp4DtuqGc977gjMWQ/dut2zzfOzJytAhrufbCkhjOgPw==');
define('NONCE_KEY',        'OEcoT7N1kObqkencyFSXuZoOjC9NlmwdeI9bDXDVhAIn2kP9uCJ/YycGBmhiB3upI7WyWo4MHSq7RODOHQXCvA==');
define('AUTH_SALT',        '1Uf41Bcdq9hCttkVCNPF7mSZ40oYvBlZDb/bU/yBGQYWgecYo1oet6HUC6PVBihqekjh1z11y9En+/gRHmCkYA==');
define('SECURE_AUTH_SALT', 'oQYMADtqCujQGqVYqGWnnyD9YPo2m9lQUEa3Y5hHXKQM2lCcPOOokPl6BnGnomL3QT9KSDu7pwhQhXdh8tWW+Q==');
define('LOGGED_IN_SALT',   'QjF2JkgzN7KMBmpgqTlu7hfsrPwMk1tZe1FwTnrb6L+Fu/faO0yJTWgJJnHaz1LxtsZcJoiR/Ds7hE3rlb52AA==');
define('NONCE_SALT',       '+YhFHeAWRvOv6w9u1G1BfaEsV/8kU+J3zQYRecjirAB9X6iJXFINgPbooqV8eCG3i7j5QmjmdCd3lMIap/aU2g==');
define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
