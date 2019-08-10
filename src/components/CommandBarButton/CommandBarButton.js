import React from 'react';
import './style.css';
import cx from 'classnames';
import {
	CommandBarButton,
	IButtonProps,
} from 'office-ui-fabric-react/lib/Button';

function GCommandBarButton(props) {
	return <CommandBarButton {...props} />;
}

export default GCommandBarButton;
