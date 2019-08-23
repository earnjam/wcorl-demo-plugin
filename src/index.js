
/**
 * Internal dependencies
 */
import DemoButton from './demoButton';
import AlertButton from "./alertButton";

const element = document.querySelector( 'article .entry-content' );

wp.element.render( <h2>Hello World!</h2>, element );
// wp.element.render( <DemoButton>I'm a button!</DemoButton>, element );
// wp.element.render( <AlertButton message="Happy WordCamp!">I'm a button that opens an alert!</AlertButton>, element );
