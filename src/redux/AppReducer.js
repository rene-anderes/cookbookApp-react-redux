import { DATA, DETAIL, INGREDIENTS, PAGEABLE } from "./ActionCreator"

const initialState = {
    data: [{}],
    detail: [{}],
    ingredients: [{}],
    pageble: [{
      totalPages: 0,
      pageNumber: 1,
      pageSize: 12,
      offset: 0,
      last: true,
      first: true  
    }]
};
  
const appReducer = (state = initialState, action) => {
    console.log("Reducer - Action-Type: " + action.type)
    console.log("Reducer - Action-Pagable: " + action.pagable)
    switch (action.type) {
      case DATA:
        return { ...state, data: action.data };
      case DETAIL:
        return { ...state, detail: action.detail, ingredients: [{}] };
      case INGREDIENTS:
        return { ...state, ingredients: action.ingredients };
      case PAGEABLE:
        return { ...state, pagable: action.pagable };  
      default:
        return state;
    }
};

export default appReducer;