/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from './src/pages/main';
import TodoList from './src/pages/todo/list';
import TodoCreate from './src/pages/todo/create';
import {Provider} from 'react-redux';
import appStore from './src/store/appStore';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={appStore}>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Главная" component={Main} />
          <Stack.Screen name="Список задач" component={TodoList} />
          <Stack.Screen name="Создать задачу" component={TodoCreate} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
