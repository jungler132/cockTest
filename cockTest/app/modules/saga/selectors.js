export const getDataForHomeScreen = (state) => state.reducerForInspire.data;
export const getRecipeIdForMap = (state) => state.reducerForRecipeById.recipeId;
export const getRecipeIdData = (state) => state.reducerForRecipeById.recipe;
export const getRandomRecipeForSearch = (state) => state.reducerForRandomRecipes.data;
export const getMealNameForRequest = (state) => state.reducerMealByName.mealName;
export const getMealByNameData = (state) => state.reducerMealByName.mealDataForShow;
export const getFavDataFromStore = (state) => state.reducerFavData.favData;