export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

export const toggleFavorite = (meal) => {
  return { type: TOGGLE_FAVORITE, mealId: meal.id }
}
