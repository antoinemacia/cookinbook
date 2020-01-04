import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { MEALS } from '../data/meals';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'

const MealDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Button
        title="Go Back to Categories"
        onPress={
          // popToTop sends back to the original top of the stack screen
          () => { props.navigation.popToTop() }
        }
      />
    </View>
  )
}

// This is used for DYNAMIC navigation configuration once
// The object has been initialized
// Setting the configurarion as a function allows access
// to the navigationData object and allow dynamic config setting
MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const meal = MEALS.find(meal => mealId === meal.id)

  return {
    // Device header
    headerTitle: meal.title,
    // Device top-right component (like a button)
    headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Favorite"
        iconName="ios-star"
        onPress={() => { console.log()}}
      />
    </HeaderButtons>

  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen
