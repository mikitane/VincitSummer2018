export const reducer = (state
, action) => {
  switch (action.type) {
    case "SET_SIGHTINGS":
      if (state.filter === "up") {
        state = {
          ...state,
          sightings: action.payload.sort(filterUp)
        };
      } else if (state.filter === "down") {
        state = {
          ...state,
          sightings: action.payload.sort(filterDown)
        };
      }

      break
    case "ADD_SIGHTING":
    if (state.filter === "up") {
      state = {
        ...state,
        sightings: [...state.sightings,action.payload].sort(filterUp)
      };
    } else if (state.filter === "down") {
      state = {
        ...state,
        sightings: [...state.sightings,action.payload].sort(filterDown)
      };
    }

      break
    case "SET_SPECIES":
      state = {
        ...state,
        species:action.payload
      };
      break
    case "CHANGE_FILTER":
      if (action.payload ==="up") {
        state = {
          ...state,
          filter:action.payload,
          sightings:state.sightings.sort(filterUp)
        };
      } else if (action.payload ==="down") {
        state = {
          ...state,
          filter:action.payload,
          sightings:state.sightings.sort(filterDown)
        };
      }
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


function filterUp(a,b) {
  if (a.dateTime < b.dateTime)
    return -1;
  if (a.dateTime > b.dateTime)
    return 1;
  return 0;
}

function filterDown(a,b) {
  if (a.dateTime > b.dateTime)
    return -1;
  if (a.dateTime < b.dateTime)
    return 1;
  return 0;
}
