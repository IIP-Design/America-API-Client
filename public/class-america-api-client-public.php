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
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
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


  private function react_enqueue_and_localize() {
    $url = get_option( 'america_api_client_endpoint_url' );

    if ( $url !== "" ) {
      $this->enqueue_hashed_file();
      wp_localize_script( $this->plugin_name, 'args', array( 'url' => $url ) );
    }
  }


  private function enqueue_hashed_file() {
    $dir = 'public/course-module/js/dist/';
    $files = new DirectoryIterator( AMERICA_API_CLIENT_DIR . $dir );

    foreach( $files as $file ) {
      if ( pathinfo( $file, PATHINFO_EXTENSION ) === 'js' ) {
        $file_name = basename( $file );
      }
    }

    wp_enqueue_script( $this->plugin_name, AMERICA_API_CLIENT_URL . $dir . $file_name, array(), null, true );
  }
}
