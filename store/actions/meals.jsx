export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
export const SET_FILTERS = 'SET_FILTERS'
export const CREATE_MEAL = 'CREATE_MEAL'

export const toggleFavorite = (meal) => {
  return { type: TOGGLE_FAVORITE, mealId: meal.id }
}

export const setFilters = filterSettings => {
  return { type: SET_FILTERS, filters: filterSettings }
}

export const createMeal = (mealData) => {
  return { type: CREATE_MEAL, mealData: mealData }
}
