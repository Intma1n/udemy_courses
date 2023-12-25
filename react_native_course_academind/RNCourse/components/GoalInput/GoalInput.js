import { Button, Modal, TextInput, View } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

const GoalInput = (props) => {
  const { handlePress, open } = props;
  const [text, setText] = useState('');

  const handleChange = (text) => {
    setText(text);
  };

  const pressHandler = () => {
    handlePress(text);
    setText('');
  };

  return (
    <Modal visible={open} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleChange}
          style={styles.input}
          placeholder="Enter goal"
          value={text}
        />
        <Button onPress={pressHandler} title="Add goal" />
      </View>
    </Modal>
  );
};

export default GoalInput;
