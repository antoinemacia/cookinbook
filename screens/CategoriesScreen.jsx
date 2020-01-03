import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/categories';
import Colors from '../constants/Colors'

const CategoriesScreen = props => {

  const Category = (props) => {
    return (
      <TouchableOpacity
        style={styles.category}
        onPress={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: props.item.id
            }
          })
        }}>
        <View>
          <Text>{props.item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        renderItem={({ item }) => <Category {...props} item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: ''
  },
  headerTintColor: Colors.primaryColor
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  category: {
    flex: 1,
    margin: 15,
    height: 250
  }
});

export default CategoriesScreen
