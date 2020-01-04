import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
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
    Meals: MealsNavigator,
    Favorites: FavoritesScreen

  }
)

export default createAppContainer(MealsFavTabNavigator)
