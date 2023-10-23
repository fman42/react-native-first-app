import React from 'react';
import {Button} from 'react-native';

type ActionButtonProps = {
  title: string;
  onPress: any;
};

function ActionButton(props: ActionButtonProps): JSX.Element {
  return <Button title={props.title} onPress={event => props.onPress(event)} />;
}

export default ActionButton;
