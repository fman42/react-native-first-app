import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import ActionButton from '../../components/action_button';
import store from '../../store/appStore';
import {createTaskAsync} from '../../repositories/taskRepository';

export default function (): JSX.Element {
  const [taskName, onChangeTaskName] = useState('');

  const createTask = async () => {
    const task = {
      title: taskName,
      completed: false,
    };

    const _createdTask = await createTaskAsync(task);
    store.dispatch({type: 'add', payload: _createdTask});

    onChangeTaskName('');
  };

  return (
    <View style={{padding: 15}}>
      <Text style={{fontSize: 25}}>Создание задачи</Text>
      <TextInput
        placeholder="Название задачи"
        value={taskName}
        onChangeText={onChangeTaskName}
        style={{marginTop: 10}}
      />
      <ActionButton title="Создать" onPress={createTask} />
    </View>
  );
}
