import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MealDetailScreen from '../screens/MealDetailScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import Colors from '../constants/Colors'

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

export default createAppContainer(MealsNavigator)
