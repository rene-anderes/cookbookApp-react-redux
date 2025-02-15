import isDevMode from "../helper/DevDetector";
import { setCollection } from "./recipeListSlice";
import { setRecipe } from "./recipeSlice";
import { setIngredients } from "./recipeSlice";
import { setSearchResult } from "./searchResultSlice";

const RecipeCommand = Object.freeze({
  INITIAL: "INITIAL",
  NEXT: "NEXT",
  PREVIOUS: "PREVIOUS",
});
const DEV_MODE_URL = "http://localhost:8080";

const getLiveMode = () => {
  const protocol = window.location.protocol;
  const host = window.location.host;
  const pathname = window.location.pathname;
  console.log(`Live-Mode URL: ${protocol}//${host}${pathname}`);
  return protocol + '//' + host + pathname; 
};

function getFetchUrl(url) {
  let baseURL;
  if (isDevMode()) {
    baseURL = DEV_MODE_URL;
  } else {
    baseURL = getLiveMode();
  }
  return new URL(url, baseURL);
}

function fetchRecipeList(recipeCommand) {
  return async (dispatch, getState) => {
   
    let pageNumber = 0;
    let pageSize = 0;
    switch (recipeCommand) {
      case RecipeCommand.NEXT:
        pageNumber = (getState().recipeList.pageable.pageNumber + 1);
        pageSize = (getState().recipeList.pageable.pageSize);
        break;
      case RecipeCommand.PREVIOUS:
        pageNumber = (getState().recipeList.pageable.pageNumber - 1);
        pageSize = (getState().recipeList.pageable.pageSize);
        break;
      default:
      case RecipeCommand.INITIAL:
        pageNumber = 0;
        pageSize = 10;
        break;
    }

    const path = "/resources-api/recipes-repository";
    const queryParams = {
      size: pageSize,
      page: pageNumber,
      sort: "title,asc"
    };
    
    const url = getFetchUrl(path);
    console.debug("Recipe List URL: " + url);
    for (const [key, value] of Object.entries(queryParams)) {
      url.searchParams.append(key, value);
    }

    try {
      const response = await fetch(url, {
          headers: {
            Accept: 'application/json; charset=utf-8'
          }
      })
      const data = await response.json();
      console.debug("Number of Recipes: " + data.numberOfElements);
      dispatch(setCollection(data));
    } catch (error) {
      console.error(error);
    }
  };
}

export const previousPage = () => {
   return fetchRecipeList(RecipeCommand.PREVIOUS);
};

export const nextPage = () => {
   return fetchRecipeList(RecipeCommand.NEXT); 
};

export const fetchData = () => {
    return fetchRecipeList(RecipeCommand.INITIAL);
};

/**
 * Logic with Thunks --> https://redux.js.org/usage/writing-logic-thunks
 */
export const fetchDetail = (links) => async (dispatch) => {
    let linkURL = links.find(link => link.rel === "self");
    const url = getFetchUrl(linkURL.href);
    console.debug("Recipe Detail URL: " + url);

    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json; charset=utf-8'
        }
      })
      const detail = await response.json();
      dispatch(setRecipe(detail))
    } catch (error) {
      console.error(error);
    }
  };

export const fetchIngredients = (links) => {
  return async (dispatch) => {
    const linkURL = links.ingredients;
    const url = getFetchUrl(linkURL.href);
    console.debug("Ingredients-URL: " + url);

    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json; charset=utf-8'
        }
      })
      const ingredients = await response.json();
      dispatch(setIngredients(ingredients));
    } catch (error) {
      console.error(error);
    }
  }
}

export const searchRecipes= (text) => {
  return async (dispatch) => {
    const path = "/resources-api/recipes-repository";
    const queryParams = {
      size: 100,
      page: 0,
      sort: "title,asc",
      search: text
    };
    const url = getFetchUrl(path);
    console.debug("Recipe Search URL: " + url);
    for (const [key, value] of Object.entries(queryParams)) {
      url.searchParams.append(key, value);
    }

    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json; charset=utf-8'
        }
      })
      const data = await response.json();
      console.debug("Anzahl Rezepte: " + data.numberOfElements);
      
      const search = {};
      search.searchText = text;
      search.searchResult = data;
      dispatch(setSearchResult(search));
    }catch (error) {
      console.error(error);
    }
  }
};