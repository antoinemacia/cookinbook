import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import MealDetailScreen from '../screens/MealDetailScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import Colors from '../constants/Colors'
import FavoritesScreen from '../screens/FavoritesScreen';

const defaultStackNavConfiguration = {
  // Sets default navigation style for all screen of the navigator
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: ''
    },
    headerTintColor: Colors.primaryColor
  }
}

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: MealDetailScreen
}, defaultStackNavConfiguration)

const FavoritesNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
}, defaultStackNavConfiguration)

const tabScreenConfig = {
  // Use the stack navigator as the Meals tab,
  // So that it can be nested and only navigator is in use
  Meals: {
    screen: MealsNavigator,
    // Optional - only matter since the MealsNAvigator is stacked
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} tabInfo={tabInfo.tintColor} />
      }
    }
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} tabInfo={tabInfo.tintColor} />
      }
    }
  }
}


const MealsFavTabNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(tabScreenConfig,
    {
      activeTintColor: Colors.secondaryColor
    })
  : createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
      activeTintColor: Colors.secondaryColor
    }
  });

export default createAppContainer(MealsFavTabNavigator)
