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
 * Version:           2.2.10
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

// Define constants
define( 'AMERICA_API_CLIENT_DIR', plugin_dir_path( dirname( __FILE__ ) ) . 'america-api-client/' );
define( 'AMERICA_API_CLIENT_URL', plugin_dir_url( dirname( __FILE__ ) ) . 'america-api-client/' );


function activate_america_api_client() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-america-api-client-activator.php';
	America_API_Client_Activator::activate();
}


function deactivate_america_api_client() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-america-api-client-deactivator.php';
	America_API_Client_Deactivator::deactivate();
}


register_activation_hook( __FILE__, 'activate_america_api_client' );
register_deactivation_hook( __FILE__, 'deactivate_america_api_client' );


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

function run_america_api_client() {
	$plugin = new America_API_Client();
	$plugin->run();
}

run_america_api_client();
