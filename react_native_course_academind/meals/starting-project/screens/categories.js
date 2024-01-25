import { FlatList, View } from 'react-native';
import { CATEGORIES } from '../dummy-data';
import CategoryGridTIle from '../components/CategoryGridTIle';

const Categories = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    function pressHandler() {
      navigation.navigate('Meal Overview Screen', { categoryId: itemData.item.id });
    }

    return (
      <CategoryGridTIle
        onPress={pressHandler}
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  };

  return (
    <View>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />
    </View>
  );
};

export default Categories;
