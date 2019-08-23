// A very basic React component
function Greeting( props ) {
	// Returns a react element
	// parameters: type of element, props, children
    return wp.element.createElement( 'span', null, 'Hello ' + props.toWhom + '!' );
}

// Tells React to render the virtual dom
wp.element.render(
	// A React component to render
    wp.element.createElement( Greeting, { toWhom: 'World' } ),
	// A node to render it into
    document.querySelector( 'article .entry-content' )
);
