<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://github.com/IIP-Design/America-API-Client
 * @since      1.0.0
 *
 * @package    America_API_Client
 * @subpackage America_API_Client/admin
 */




/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    America_API_Client
 * @subpackage America_API_Client/admin
 * @author     Your Name <email@example.com>
 */

class America_API_Client_Admin {


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
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */

	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;
	}


	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */

	public function enqueue_styles() {
		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/america-api-client-admin.css', array(), $this->version, 'all' );
	}


  /**
   * Warn admins to fill out the API URL field in the plugin settings page
   *
   * @since   1.0.0
   */

  public function activation_notification() {
    $api_url_field = get_option( 'america_api_client_endpoint_url' );

    if ( $api_url_field  === "" ) {
      if ( is_admin() ) {
        $url = admin_url( 'options-general.php?page=america-api-client' );
        $message = sprintf(
          __( '<p>The API URL field is required. Visit the America API Client <a href="%s">settings page</a>.', 'america-api-client' ), esc_url( $url ) );

        $html = '<div class="notice notice-warning is-dismissible">';
          $html .= $message;
        $html .= '</div>';

        echo $html;
      }
    }
  }


  /**
   * Add settings page under the Settings menu
   *
   * @since     1.0.0
   */

  public function added_options_page() {
    add_options_page( __( 'America API Client' ), __( 'America API Client' ), 'activate_plugins', $this->plugin_name, array( $this, 'display_options_partial' ) );
  }


  /**
   * Add the Oauth Authentication Credentials and API URL sections to the plugin settings page
   *
   * @since   1.0.0
   */

  public function added_settings_sections() {
    add_settings_section( __( 'america_api_client_oauth' ), __( 'Oauth1(a) Authentication Credentials' ), function() {
      echo '<p>Enter your authentication credentials. You will first have to register this client with the America API.</p>';
    }, $this->plugin_name );

    add_settings_section( __( 'america_api_client_endpoint' ), __( 'API URL' ), function() {
      echo "<p>Enter the API's base url.</p>";
    }, $this->plugin_name );
  }


  /**
   * Create and register the fields on the plugin settings page
   *
   * @since   1.0.0
   */

  public function added_settings_fields() {
    // Oauth Client Key
    add_settings_field( __( 'america_api_client_oauth_key' ), __( 'Oauth Client Key' ), array( $this, 'oauth_key_markup' ), $this->plugin_name, 'america_api_client_oauth', array( 'label_for' => 'america_api_client_oauth_key' )
    );


    // Oauth Client Secret
    add_settings_field( __( 'america_api_client_oauth_secret' ), __( 'Oauth Client Secret' ), array( $this, 'oauth_secret_key_markup' ), $this->plugin_name, 'america_api_client_oauth', array( 'label_for' => 'america_api_client_oauth_secret' ) );


    // API URL
    add_settings_field( __( 'america_api_client_endpoint_url' ), __( 'API URL' ), array( $this, 'endpoint_url_markup' ), $this->plugin_name, 'america_api_client_endpoint', array( 'label_for' => 'america_api_client_endpoint_url' ) );


    register_setting( $this->plugin_name, 'america_api_client_oauth_key', 'sanitize_text_field' );
    register_setting( $this->plugin_name, 'america_api_client_oauth_secret', 'sanitize_text_field' );
    register_setting( $this->plugin_name, 'america_api_client_endpoint_url', array( $this, 'endpoint_url_sanitize' ) );
  }


  /**
   * The html markup for the Oauth Client Key field
   *
   * @since   1.0.0
   */

  public function oauth_key_markup() {
    $key = get_option( 'america_api_client_oauth_key' );

    $html = '<fieldset>';
      $html .= '<input ';
        $html .= 'type="text" ';
        $html .= 'name="america_api_client_oauth_key" ';
        $html .= 'id="america_api_client_oauth_key" ';
        $html .= 'class="america-api-client-textfield" ';
        $html .= 'value="' . $key . '">';
    $html .= '</fieldset>';

    echo $html;
  }


  /**
   * The html markup for the Oauth Client Secret field
   *
   * @since   1.0.0
   */

  public function oauth_secret_key_markup() {
    $secret = get_option( 'america_api_client_oauth_secret' );

    $html = '<fieldset>';
      $html .= '<input ';
        $html .= 'type="text" ';
        $html .= 'name="america_api_client_oauth_secret" ';
        $html .= 'id="america_api_client_oauth_secret" ';
        $html .= 'class="america-api-client-textfield" ';
        $html .= 'value="' . $secret . '">';
    $html .= '</fieldset>';

    echo $html;
  }


  /**
   * The html markup for the API URL field
   *
   * @since   1.0.0
   */

  public function endpoint_url_markup() {
    $api_url = get_option( 'america_api_client_endpoint_url' );

    $html = '<fieldset>';
      $html .= '<input type="text" ';
        $html .= 'name="america_api_client_endpoint_url" ';
        $html .= 'id="america_api_client_endpoint_url" ';
        $html .= 'placeholder="http://courses.america.gov/wp-json/wp/v2" ';
        $html .= 'class="america-api-client-textfield" ';
        $html .= 'value="' . $api_url .'">';
    $html .= '</fieldset>';

    echo $html;
  }


  /**
   * Sanitize and formate the API endpoint url
   *
   * @since   1.0.0
   */

  public function endpoint_url_sanitize( $input ) {
    $data = sanitize_text_field( $input );
    $result = untrailingslashit( $data );

    return $result;
  }

  public function generate_preloader() {
    $html = '<div class="plugin-preloader">';
      $html .= '<div class="pl-msg">';
        $html .= '<image class="pl-msg_svg" src="' . AMERICA_API_CLIENT_URL  . '/public/preloader.svg" />';
        $html .= '<div class="pl-msg_txt">Just a moment, loading...</div>';
      $html .= '</div>';
      $html .= '<div class="pl-header"></div>';
      $html .= '<div class="pl-course-image"></div>';
      $html .= '<div class="pl-course-content">';
        $html .= '<div></div>';
        $html .= '<div></div>';
        $html .= '<div></div>';
        $html .= '<div></div>';
        $html .= '<div class="pl-course-button"></div>';
      $html .= '</div>';
    $html .= '</div>';
    return  $html;
  }


  /**
   * The output of the course shortcode
   *
   * @since   1.0.0
   */

  public function america_api_client_courses_shortcode( $args ) {
    $attr = shortcode_atts( array(
      'id' => '',
      'exit_page' => '',
      'language' => 'en'
    ), $args );

    $html =  $this->generate_preloader();
    $html .=  '<div class="course-placeholder"></div>';
    $html .= '<div id="course-container" class="course-container" data-language="'. $attr['language'] . '" data-course-id="' . $attr['id'] . '"';
 
    if ( $attr['exit_page'] !== '' ) {
      $html .= 'data-exit-page="' . $attr['exit_page'] . '"';
    }
    $html .= '></div>';

    return $html;
  }


  /**
   * Register the course shortcode
   *
   * @since   1.0.0
   */

  public function america_api_client_added_shortcodes() {
    add_shortcode( 'course', array( $this, 'america_api_client_courses_shortcode' ) );
  }


  /**
   * The admin area view for the plugin settings page
   *
   * @since   1.0.0
   */

  public function display_options_partial() {
    include_once AMERICA_API_CLIENT_DIR . 'admin/partials/america-api-client-admin-display.php';
  }
}
