import {
  REQUEST_HERO_ID,
  REQUEST_HERO_ID_SUCESS,
  SORT_NAME,
  SEARCH_INPUT,
  LOAD_CURRENT_HERO,
  REQUEST_LOADING,
  REQUEST_HERO_NAME_SUCESS,
  SORT_BY_ALPHABET,
  SORT_BY_POWER,
  FILTER_BY_POWER,
  FILTER_BY_ALPHABET,
} from '../actions';

const INITIAL_STATE = {
  data: [],
  loading: true,
  input: '',
  currentHero: [],
};

function heroId(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_HERO_ID:
      return {
        ...state,
        loading: true,
      };
      case SORT_BY_ALPHABET:
        return state;
      case SORT_BY_POWER:
        return state;
      case FILTER_BY_POWER:
        return state;
      case FILTER_BY_ALPHABET:
        return state;
    case REQUEST_HERO_ID_SUCESS:
      console.log(action.payload)
      return {
        ...state,
        loading: true,
        data: action.payload,
      };
      case REQUEST_HERO_NAME_SUCESS:
        return {
          ...state,
          loading:true,
          data:action.payload
        }
      case REQUEST_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SORT_NAME:
      return state.slice().sort(function (a, b) {
        var nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    case SEARCH_INPUT:
      return {
        ...state,
        input: action.state,
        loading: true,
      };
    case LOAD_CURRENT_HERO:
      return {
        ...state,
        loading:true,
        data:[],
      };
    default:
      return state;
  }
}

export default heroId;
