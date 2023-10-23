import React from 'react';
import {StyleSheet, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import store from '../../store/appStore';
import {updateCompletedFlagAsync} from '../../repositories/taskRepository';
import TaskInterface from '../../interfaces/Task';

export default function (props: TaskInterface): JSX.Element {
  const updateFlag = async (checked: boolean) => {
    const task: TaskInterface = {
      id: props.id,
      title: props.title,
      completed: checked,
    };

    await updateCompletedFlagAsync(task);
    store.dispatch({type: 'updateCompletedTodo', payload: {id: task.id}});
  };

  return (
    <View style={styles.task}>
      <BouncyCheckbox
        size={25}
        id={props.id.toString()}
        fillColor="red"
        unfillColor="#FFFFFF"
        text={props.title}
        onPress={updateFlag}
        isChecked={props.completed}
        iconStyle={{borderColor: 'red'}}
        innerIconStyle={{borderWidth: 2}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    backgroundColor: '#eee',
    padding: 20,
  },
});
