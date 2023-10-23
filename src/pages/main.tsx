import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ActionButton from '../components/action_button';

// @ts-ignore
function Main({navigation}): JSX.Element {
  return (
    <View style={{padding: 15}}>
      <Text style={styles.header}>
        Добро пожаловать в{' '}
        <Text style={styles.header_midnight}>MasterTodos</Text>!
      </Text>
      <Text style={styles.description}>
        Повседневная практика показывает, что постоянное
        информационно-пропагандистское обеспечение нашей деятельности требуют от
        нас анализа направлений прогрессивного развития. Повседневная практика
        показывает, что сложившаяся структура организации влечет за собой
        процесс внедрения и модернизации форм развития.
      </Text>
      <ActionButton title="Список задач" onPress={() => navigation.navigate('Список задач')} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
  },
  header_midnight: {
    color: '#2c3e50',
  },
  mt_3: {
    marginTop: 15,
  },
  description: {
    marginTop: 15,
    marginBottom: 15,
  },
});

export default Main;
