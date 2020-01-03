import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MealDetailScreen from '../screens/MealDetailScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetail: MealDetailScreen
})

export default createAppContainer(MealsNavigator)
