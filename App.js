import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Linking} from 'react-native';

const App = () => {
  const [name, setName] = useState('Gary');
  const [session, setSession] = useState({number: 71, title: 'ryze'});
  const [current, setCurrent] = useState(true);
  const [counter, setCounter] = useState(10);

  const onClickHandler = () => {
    setName('I am Gary');
    setSession({
      number: 711,
      title: 'Vladimir',
    });
    setCurrent(false);
  };

  const onClickHandler1 = () => {
    setCounter(counter + 1);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>
        {session.number} and {session.title}
      </Text>
      <Text style={styles.text}>
        {current ? 'current session true' : 'next session false'}
      </Text>
      <Text style={styles.text}>
        Number:{counter * 5} Click:{counter}
      </Text>
      <Button title="Update Number" onPress={onClickHandler1} />
      <Button title="Update State" onPress={onClickHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#adf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
