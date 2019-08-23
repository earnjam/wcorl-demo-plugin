<?php
/**
 * Plugin Name: Demo Plugin
 * Description: Just a demo plugin
 * Version:     1.0
 * Author:      William Earnhardt
 * Author URI:  https://wearnhardt.com
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

function jwe_enqueue_scripts() {
	// Add a really basic JS file
	// wp_enqueue_script( 'basic_js', plugin_dir_url( __FILE__ ) . 'assets/basic.js', array(), 1, true );

	// Add a basic React demo file
	// wp_enqueue_script( 'react_demo', plugin_dir_url( __FILE__ ) . 'assets/reactdemo.js', array( 'wp-element' ), 1, true );

	// Add a JSX demo
	// wp_enqueue_script( 'jsx_demo', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-element', 'wp-components' ), 1, true );
}

add_action( 'wp_enqueue_scripts', 'jwe_enqueue_scripts' );
