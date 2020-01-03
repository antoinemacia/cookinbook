import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { CATEGORIES } from '../data/categories';
import { MEALS } from '../data/meals';

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={({ item }) => <Meal {...props} meal={item} />}
        keyExtractor={item => item.id}
        style={{width: '100%'}}
      />
    </View>
  )
}

const Meal = props => {
  return (
    <TouchableOpacity
      style={styles.meal}
      onPress={() => {
        props.navigation.navigate({
          routeName: 'MealDetail',
          params: {
            mealId: props.meal.id
          }
        })
      }}>
      <View style={styles.mealGridItem}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader}}>
          <ImageBackground style={styles.image} source={{ uri: props.meal.imageUrl }}>
            <Text style={styles.mealTitle} numberOfLines={1}>{props.meal.title}</Text>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail}}>
          <Text>{props.meal.duration} minutes</Text>
          <Text>{props.meal.complexity.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
  },
  meal: {
    margin: 15,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  mealGridItem: {
    borderRadius: 10,
    height: 200,
    backgroundColor: '#f5f5f5',
    // shadow styles is iOS only
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    // elevation is Android only (same as shadow)
    elevation: 3
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%'
  },
  mealTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 15,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center'
  }
});

export default CategoryMealsScreen
