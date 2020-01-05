import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/meals';
import MealGridItem from '../components/MealGridItem';

const FavoritesScreen = props => {

  const favoriteMeals = MEALS.filter(meal => meal.id === 'm1')

  return (
    <View style={styles.screen}>
      <FlatList
        data={favoriteMeals}
        renderItem={({ item }) => <MealGridItem {...props} meal={item} />}
        keyExtractor={item => item.id}
        style={{ width: '100%' }}
      />
    </View>
  )
}

// This is used for navigation configuration once
// The object has been initialized
// Setting it as a key value is used for static configuration
FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites'
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen
