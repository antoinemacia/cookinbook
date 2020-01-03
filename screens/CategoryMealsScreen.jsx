import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { CATEGORIES } from '../data/categories';

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  const category = CATEGORIES.find(cat => catId === cat.id)

  return (
    <View style={styles.screen}>
      <Button
        title="Go Back"
        onPress={() => { props.navigation.goBack()}}
      />
    </View>
  )
}

// This is used for DYNAMIC navigation configuration once
// The object has been initialized
// Setting the configurarion as a function allows access
// to the navigationData object and allow dynamic config setting
CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const category = CATEGORIES.find(cat => catId === cat.id)

  return {
    headerTitle: category.title
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen
