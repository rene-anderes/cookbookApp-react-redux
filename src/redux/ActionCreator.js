import isDevMode from "../helper/DevDetector";
import { setCollection } from "./recipeListSlice";
import { setRecipe } from "./recipeSlice";
import { setIngredients } from "./recipeSlice";

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
  console.log("Live-Mode URL: " + protocol + '//' + host + pathname);
  return protocol + '//' + host + pathname; 
};

export const previousPage = () => {
  let baseURL;
  if (isDevMode()) {
    baseURL = DEV_MODE_URL;
  } else {
    baseURL = getLiveMode();
  }
  return fetchRecipeList(baseURL, RecipeCommand.PREVIOUS);
};

export const nextPage = () => {
  let baseURL;
  if (isDevMode()) {
    baseURL = DEV_MODE_URL;
  } else {
    baseURL = getLiveMode();
  }
  return fetchRecipeList(baseURL, RecipeCommand.NEXT);
  
};

export const fetchData = () => {
  let baseURL;
  if (isDevMode()) {
    baseURL = DEV_MODE_URL;
  } else {
    baseURL = getLiveMode(); 
  }
  return fetchRecipeList(baseURL, RecipeCommand.INITIAL);
};

export const fetchDetail = (links) => {
  return async (dispatch) => {
    let linkURL = links.find(link => link.rel === "self");
    console.log("Recipe-URL: " + linkURL.href);
    let baseURL;
    if (isDevMode()) {
      baseURL = DEV_MODE_URL;
    } else {
      baseURL = getLiveMode();
    }
    
    try {
      const url = new URL(linkURL.href, baseURL);
      console.log("Recipe Detail URL: " + url);
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json; charset=utf-8'
        }
      })
      const detail = await response.json();
      dispatch(setRecipe(detail))
    } catch (error) {
      console.log(error);
    }
  }
};

export const fetchIngredients = (links) => {
  return async (dispatch) => {
    const linkURL = links.ingredients;
    console.log("Ingredients-URL: " + linkURL.href);
    let baseURL;
    if (isDevMode()) {
      baseURL = DEV_MODE_URL;
    } else {
      baseURL = getLiveMode();
    }
    try {
      const url = new URL(linkURL.href, baseURL);
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json; charset=utf-8'
        }
      })
      const ingredients = await response.json();
      dispatch(setIngredients(ingredients));
    } catch (error) {
      console.log(error);
    }
  }
}

function fetchRecipeList(baseURL, recipeCommand) {
  console.log("Recipe List Base-URL: " + baseURL);
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
    try {
      const path = "/resources-api/recipes-repository";
      const queryParams = {
        size: pageSize,
        page: pageNumber,
        sort: "title,asc"
      };

      const url = new URL(path, baseURL);
      console.log("Recipe List URL: " + url);
      for (const [key, value] of Object.entries(queryParams)) {
        url.searchParams.append(key, value);
      }

      const response = await fetch(url, {
          headers: {
            'Accept': 'application/json; charset=utf-8'
          }
      })
      const data = await response.json();
      console.log("Anzahl Rezepte: " + data.numberOfElements);
      dispatch(setCollection(data));
    } catch (error) {
      console.log(error);
    }
  };
}

function searchRecipe(baseURL, text) {
  return async (dispatch) => {
    try {
      const path = "/resources-api/recipes-repository";
      const queryParams = {
        size: 100,
        page: 0,
        sort: "title,asc",
        search: {text}
      };
      const url = new URL(path, baseURL);
      console.log("Recipe Search URL: " + url);
      for (const [key, value] of Object.entries(queryParams)) {
        url.searchParams.append(key, value);
      }
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json; charset=utf-8'
        }
      })
      const data = await response.json();
      console.log("Anzahl Rezepte: " + data.numberOfElements);
      dispatch(setCollection(data));
    }catch (error) {
      console.log(error);
    }
  }
};