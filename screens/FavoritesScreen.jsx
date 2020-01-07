import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux'
import MealGridItem from '../components/MealGridItem';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

const FavoritesScreen = props => {

  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

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
