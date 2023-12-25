import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

const GoalItem = (props) => {
  const { item, handlePress } = props;

  return (
    <View style={styles.goal}>
      <Pressable
        android_ripple={{ color: 'blue' }}
        onPress={() => handlePress(item.item.id)}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.text}>{item.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;
