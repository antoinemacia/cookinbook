import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { CATEGORIES } from '../data/categories';

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  const category = CATEGORIES.find(cat => catId === cat.id)

  return (
    <View style={styles.screen}>
      <Text>{category.title}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate({ routeName: 'MealDetail' })
        }}
      />
      <Button
        title="Go Back"
        onPress={() => { props.navigation.goBack()}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen
