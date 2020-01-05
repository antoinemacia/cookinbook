import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'
import MealDetailScreen from '../screens/MealDetailScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import Colors from '../constants/Colors'
import FavoritesScreen from '../screens/FavoritesScreen';

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen
  },
  // CONFIGURATION
  {
    // Sets default navigation style for all screen of the navigator
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: ''
      },
      headerTintColor: Colors.primaryColor
    }
  }
)

const MealsFavTabNavigator = createBottomTabNavigator(
  {
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
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarLabel: 'Favorites',
        tabBarIcon: (tabInfo) => {
          return <Ionicons name='ios-star' size={25} tabInfo={tabInfo.tintColor} />
        }
      }
    }
  },
  {
    tabBarOptions: {
      // Set font colot
      activeTintColor: Colors.secondaryColor
    }
  }
)

export default createAppContainer(MealsFavTabNavigator)
