import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import ChoiceGroup from './ChoiceGroup';

// Here we describe the stories we want to see of the Button. The component is
// pretty simple so we will just make two, one with text and one with emojis
// Simple call storiesOf and then chain .add() as many times as you wish
//
// .add() takes a name and then a function that should return what you want
// rendered in the rendering area
storiesOf('ChoiceGroup').add('default', () => (
	<ChoiceGroup
		className="defaultChoiceGroup"
		defaultSelectedKey="B"
		options={[
			{
				key: 'A',
				text: 'Option A',
			},
			{
				key: 'B',
				text: 'Option B',
			},
			{
				key: 'C',
				text: 'Option C',
				disabled: true,
			},
			{
				key: 'D',
				text: 'Option D',
			},
		]}
		onChange={() => {}}
		label="Pick one"
		required={true}
	/>
));
