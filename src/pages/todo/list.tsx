import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import ActionButton from '../../components/action_button';
import {getAsync} from '../../repositories/taskRepository';
import Task from '../../components/todo/task';
import store from '../../store/appStore';
import TaskInterface from '../../interfaces/Task';

export default function ({navigation}): JSX.Element {
  const [tasks, setTasks] = useState([]);

  store.subscribe(() => {
    // @ts-ignore
    setTasks(store.getState().todos);
  });

  useEffect(() => {
    // @ts-ignore
    getAsync().then((loadedTasks: TaskInterface[]) => {
      store.dispatch({
        type: 'loadDefaultTodos',
        payload: loadedTasks,
      });
    });
  }, []);

  const getTaskList = (): Element => {
    return tasks.length === 0 ? (
      <ActivityIndicator style={{marginTop: 50}} />
    ) : (
      tasks.map((task: any) => (
        <View>
          <Task id={task.id} title={task.title} completed={task.completed} />
        </View>
      ))
    );
  };

  return (
    <ScrollView>
      <ActionButton
        title="Создать новую задачу"
        onPress={() => navigation.navigate('Создать задачу')}
      />
      {getTaskList()}
    </ScrollView>
  );
}
