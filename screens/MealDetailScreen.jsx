import React from 'react';
import { ScrollView, View, StyleSheet, Button, Image } from 'react-native';
import { MEALS } from '../data/meals';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
import BodyText from '../components/BodyText';

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const meal = MEALS.find(meal => mealId === meal.id)

  return (
    <ScrollView>
      <Image source={{uri: meal.imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <BodyText>{meal.duration} minutes</BodyText>
        <BodyText>{meal.complexity.toUpperCase()}</BodyText>
        <BodyText>{meal.affordability.toUpperCase()}</BodyText>
      </View>
      <BodyText style={styles.title}>Ingredients</BodyText>
        {
          meal.ingredients.map(ingredient => {
            return <BodyText style={styles.listItem} key={ingredient}>{ingredient}</BodyText>
          })
        }
      <BodyText style={styles.title}>Steps</BodyText>
      <View style={styles.ingredients}>
        {
          meal.steps.map(step => {
            return <BodyText style={styles.listItem} key={step}>{step}</BodyText>
          })
        }
      </View>
      <View style={styles.screen}>
        <Button
          title="Go Back to Categories"
          onPress={
            // popToTop sends back to the original top of the stack screen
            () => { props.navigation.popToTop() }
          }
        />
      </View>
    </ScrollView>
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
  },
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailScreen
