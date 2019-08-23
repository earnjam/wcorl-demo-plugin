import { Button } from '@wordpress/components';
import { Component } from '@wordpress/element';

class AlertButton extends Component {
	constructor(props) {
		super(props);
		this.showAlert = this.showAlert.bind(this);
	}

	showAlert() {
		alert( this.props.message );
	}

	render() {
		return <Button onClick={ this.showAlert }>Hello World!</Button>;
	}
}

export default AlertButton
