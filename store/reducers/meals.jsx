import { MEALS } from '../../data/meals';
import { TOGGLE_FAVORITE } from '../actions/meals';
import { SET_FILTERS } from '../actions/meals';

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
    case SET_FILTERS:
      const filters = action.filters
      console.log(filters)
      const filteredMeals = state.meals.filter(meal => {
        if(filters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if(filters.lactoseFree && !meal.isLactoseFree) {
          return false
        }
        if (filters.vegetarian && !meal.isVegetarian) {
          return false
        }
        if (filters.vegan && !meal.isVegan) {
          return false
        }
        return true
      })
      return { ...state, filteredMeals: filteredMeals }
    default:
      return state
  }
}

export default mealsReducer
