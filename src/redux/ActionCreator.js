import isDevMode from "../helper/DevDetector";

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

export const DATA = "DATA";
export const DETAIL = "DETAIL";
export const INGREDIENTS = "INGREDIENTS";
export const PAGEABLE = "PAGEABLE";

export const setData = (data) => ({
  type: DATA, data
});

export const setDetail = (detail) => ({
  type: DETAIL, detail
});

export const setIngredients = (ingredients) => ({
  type: INGREDIENTS, ingredients
});

export const setPagable = (pagable) => ({
  type: PAGEABLE, pagable
});

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
      dispatch(setDetail(detail))
    } catch (error) {
      console.log(error);
    }
  }
};

export const fetchIngredients = (links) => {
  return async (dispatch) => {
    const linkURL = links.find(link => link.rel === "ingredients");
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

function getPagable(data) {
  const pagable = [{}];
  pagable.totalPages = data.totalPages;
  pagable.pageNumber = data.number;
  pagable.pageSize = data.size;
  pagable.offset = data.offset;
  pagable.last = data.last;
  pagable.first = data.first;
  console.log("totalPages: " + pagable.totalPages);
  console.log("pageNumber: " + pagable.pageNumber);
  return pagable;
}

function fetchRecipeList(baseURL, recipeCommand) {
  console.log("Recipe List Base-URL: " + baseURL);
  return async (dispatch, getState) => {
    let pageNumber = 0;
    let pageSize = 0;
    switch (recipeCommand) {
      case RecipeCommand.NEXT:
        pageNumber = (getState().pagable?.pageNumber + 1);
        pageSize = (getState().pagable?.pageSize);
        break;
      case RecipeCommand.PREVIOUS:
        pageNumber = (getState().pagable?.pageNumber - 1);
        pageSize = (getState().pagable?.pageSize);
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
        sortList: "title"
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
      dispatch(setData(data.content));
      const pagable = getPagable(data);      
      dispatch(setPagable(pagable));
    } catch (error) {
      console.log(error);
    }
  };
}