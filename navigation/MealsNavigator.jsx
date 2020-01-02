import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import MealDetailScreen from '../screens/MealDetailScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetail: MealDetailScreen
})

export default createAppContainer(MealsNavigator)
