export const getDataForHomeScreen = (state) => state.reducerForInspire.data;
export const getRecipeIdForMap = (state) => state.reducerForRecipeById.recipeId;
export const getRecipeIdData = (state) => state.reducerForRecipeById.recipe;
export const getRandomRecipeForSearch =(state) => state.reducerForRandomRecipes.data