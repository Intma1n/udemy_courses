import { StatusBar } from 'expo-status-bar';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem/GoalItem';
import GoalInput from './components/GoalInput/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [open, setOpen] = useState([]);

  const handlePress = (text) => {
    setGoals((prevState) => [...prevState, { text: text, id: Math.random().toString() }]);
  };

  const handlePressItem = (id) => {
    if (!id) return;
    setGoals((prevState) => {
      prevState.filter((elem) => elem.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Button onPress={() => setOpen(true)} color="lightblue" title="Add goal" />
      {open && <GoalInput open={open} handlePress={handlePress} />}
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => item.id}
          renderItem={(item) => <GoalItem handlePress={handlePressItem} item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
