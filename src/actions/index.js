export const REQUEST_HERO_ID = 'REQUEST_HERO_ID';
export const REQUEST_HERO_ID_SUCESS = 'REQUEST_HERO_ID_SUCESS';
export const SEARCH_INPUT = ' SEARCH_INPUT';
export const SORT_NAME = 'SORT_NAME';
export const LOAD_CURRENT_HERO = 'LOAD_CURRENT_HERO';
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_HERO_NAME_SUCESS = 'REQUEST_HERO_NAME_SUCESS';
export const REQUEST_CURRENT_PAGE = 'REQUEST_CURRENT_PAGE';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const SORT_BY_ALPHABET = 'SORT_BY_ALPHABET';
export const SORT_BY_POWER = 'SORT_BY_POWER';
export const LOAD_DATA = 'LOAD_DATA';
export const FILTER_BY_POWER = 'FILTER_BY_POWER';
export const FILTER_BY_ALPHABET = 'FILTER_BY_ALPHABET';

export const requestHeroId = () => ({ type: REQUEST_HERO_ID });

export const requestLoading = () => ({ type: REQUEST_LOADING });

export const requestHeroIdSucess = (payload) => ({
  type: REQUEST_HERO_ID_SUCESS,
  payload,
});

export const searchInput = (state) => ({
  type: SEARCH_INPUT,
  state,
});

export const requestHeroNameSucess = (payload) => ({
  type: REQUEST_HERO_NAME_SUCESS,
  payload,
});

export const sortName = (name, id) => {
  return {
    type: SORT_NAME,
    payload: {
      id: id,
      name: name,
    },
  };
};
export const requestCurrentPage = () => {
  return {
    type: REQUEST_CURRENT_PAGE,
  };
};

export const changePage = (state) => {
  return {
    type: CHANGE_PAGE,
    payload: state,
  };
};

export const loadCurrentHero = () => {
  return {
    type: LOAD_CURRENT_HERO,
  };
};

export const sortByAlphabet = (payload) => ({
  type: SORT_BY_ALPHABET,
  payload,
});

export const sortByPower = (payload) => ({
  type: SORT_BY_POWER,
  payload,
});

export const filterByPower = (payload) => ({
  type: FILTER_BY_POWER,
  payload,
});

export const filterByAlphabet = (payload) => ({
  type: FILTER_BY_ALPHABET,
  payload,
});

export const loadData = (payload) => ({
  type: LOAD_DATA,
  payload,
});
