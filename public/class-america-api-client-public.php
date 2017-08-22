<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://github.com/IIP-Design/America-API-Client
 * @since      1.0.0
 *
 * @package    America_API_Client
 * @subpackage America_API_Client/public
 */




/**
 * The public-facing functionality of the plugin.
 *
 * @package    America_API_Client
 * @subpackage America_API_Client/public
 * @author     Office of Design, U.S. Department of State <https://github.com/IIP-Design>
 */

class America_API_Client_Public {

    /**
     * The ID of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $plugin_name    The ID of this plugin.
     */

    private $plugin_name;


    /**
     * The version of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $version    The current version of this plugin.
     */

    private $version;


    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     * @param      string    $plugin_name       The name of the plugin.
     * @param      string    $version    The version of this plugin.
     */

    public function __construct( $plugin_name, $version ) {
        $this->plugin_name = $plugin_name;
        $this->version = $version;
    }


    /**
     * Register the JavaScript for the public-facing side of the site.
     *
     * @since    1.0.0
     */

    public function enqueue_scripts() {
        global $post;

        if ( is_a( $post, 'WP_Post' ) && has_shortcode( $post->post_content, 'course' ) ) {
            $this->react_enqueue_and_localize();
        }
    }

    public function enqueue_styles() {
		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'america-api-client-public.css', array(), $this->version, 'all' );
	}

    /**
     * Add react-course class to the body element
     *
     * @since   1.0.0
     */

    public function set_body_class( $classes ) {
        global $post;

        if ( has_shortcode( $post->post_content, 'course' ) ) {
            $new_classes = array_merge( $classes, array( 'react-course' ) );
            return $new_classes;
        } else {
            return $classes;
        }
    }


    /**
     * Enqueue the hashed React course file and pass the API URL to the script
     *
     * @since   1.0.0
     */

    private function react_enqueue_and_localize() {
        $url = get_option( 'america_api_client_endpoint_url' );

        if ( $url !== "" ) {
            $this->enqueue_hashed_file( $this->get_dir_path() );
            wp_localize_script( $this->plugin_name, 'args', array( 'url' => $url ) );
        }
    }

     /**
     * Get the path to files based on environment
     *
     * @since   2.1.1
     */

   private function get_dir_path() {
        // check for environemnt
        $host = $_SERVER['HTTP_HOST'];
        if (strpos($host, 'america.gov') === false && 
            strpos($host, 'state.gov') === false) {
           // dev environment
           $dir = '/src/build/';
        } else {
           // prod or staging environment 
           $dir = '/dist/';
        }
        return $dir;
    }


    /**
     * Get the filename, which has a hash added for cache busting
     *
     * @since   1.0.0
     */

    private function enqueue_hashed_file( $env ) {
        $url= '/vendor/iip-design/courses-module/app' . $env;
        $path = dirname(ABSPATH) . $url;
        try {
            $files = new DirectoryIterator( $path );
            foreach( $files as $file ) {
                if ( pathinfo( $file, PATHINFO_EXTENSION ) === 'js' ) {
                    $file_name = basename( $file );
                }
            }
            if( !empty($file_name) ) {
                wp_enqueue_script( $this->plugin_name, site_url() . $url . $file_name, array(), null, true );
            }
        }
        catch (Exception $e) {
            echo "<strong style='color:red'>ERROR: </strong>The courses-module needs to be installed to view this application<br><br>";
            echo "On <strong style='color:green'>PROD/STAGING: </strong> enviroment: ensure that composer install was run.<br><br>";
            echo "On <strong style='color:green'>DEVELOPMENT: </strong>: make sure that files exist in the 'app/src/build' directory.<br>";
            echo "NOTE: To create the necessary files while in development, run 'npm install' (if first run) and then 'npm run watch' to create the developmental build files<br>";
        }
    }
}