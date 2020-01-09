import { MEALS } from '../../data/meals';
import { TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_FAVORITE:
      const mealId = action.mealId
      const favoriteMeals = state.favoriteMeals
      const meal = favoriteMeals.find(meal => meal.id === mealId)
      if (meal) {
        return {
          ...state,
          favoriteMeals: favoriteMeals.filter(meal => meal.id != mealId)
        }
      } else {
        return {
          ...state,
          favoriteMeals: [...favoriteMeals, state.meals.find(meal => meal.id === mealId)]
        }
      }
    default:
      return state
  }
}

export default mealsReducer
