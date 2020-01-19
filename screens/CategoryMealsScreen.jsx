import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux'
import { CATEGORIES } from '../data/categories';
import MealGridItem from '../components/MealGridItem';

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector(state => state.meals.filteredMeals)
  const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={({ item }) => <MealGridItem {...props} meal={item} />}
        keyExtractor={item => item.id}
        style={{width: '100%'}}
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
    headerTitle: category.name
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
