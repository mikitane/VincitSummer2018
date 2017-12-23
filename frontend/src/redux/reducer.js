export const reducer = (state
, action) => {
  switch (action.type) {
    case "SET_SIGHTINGS":
        state = {
          ...state,
          sightings: action.payload
        };
      break
    case "ADD_SIGHTING":
      state = {
        ...state,
        sightings: [...state.sightings,action.payload]
      };
      break
    case "SET_SPECIES":
      state = {
        ...state,
        species:action.payload
      };
      break
    case "CHANGE_FILTER":
        state = {
          ...state,
          filter:action.payload,
        };
      break
    case "TOGGLE_MODAL":
      state = {
        ...state,
        modalOpen:!state.modalOpen
      };
      break
    case "CHANGE_VIEW":
      state = {
        ...state,
        view:action.payload
      };
      break
    case "SET_FETCHING":
      state = {
        ...state,
        fetching:action.payload
      };
      break
    case "SET_INITIAL_FETCHING":
      state = {
        ...state,
        initialFetchingDone:true
      };
      break
  }
  return state
};
