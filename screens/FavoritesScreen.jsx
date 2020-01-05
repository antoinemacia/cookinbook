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
FavoritesScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft: () => {
      return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="menu" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}></Item>
      </HeaderButtons>
    }
  }
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen
