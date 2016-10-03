<?php

/**
 * A Wordpress plugin for consuming the America API
 *
 * @link              https://github.com/IIP-Design/America-API-Client
 * @since             1.0.0
 * @package           America_API_Client
 *
 * @wordpress-plugin
 * Plugin Name:       America API Client
 * Plugin URI:        https://github.com/IIP-Design/America-API-Client
 * Description:       A Wordpress plugin for consuming the America API
 * Version:           1.0.0
 * Author:            Office of Design, U.S. Department of State
 * Author URI:        https://github.com/IIP-Design
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       america-api-client
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-america-api-client-activator.php
 */
function activate_plugin_name() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-america-api-client-activator.php';
	America_API_Client_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-america-api-client-deactivator.php
 */
function deactivate_plugin_name() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-america-api-client-deactivator.php';
	America_API_Client_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_plugin_name' );
register_deactivation_hook( __FILE__, 'deactivate_plugin_name' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-america-api-client.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_plugin_name() {

	$plugin = new America_API_Client();
	$plugin->run();

}
run_plugin_name();
