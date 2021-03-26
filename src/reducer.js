export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: 'BQAPhOuHHUOSMJDYExvA3la5GJbnFoArr0tJdP6NB3ycEQ_ec3IrnZ2Zdjn5qBVQKv727unoXTYRok7B995zBC7BogQy73LnTsbt57AgnnqSd-bxY7RLZPHPl6oZkVwt6zox9sBD50VCy0TEu0mqkq9Pv2u4E9SYWXc',
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };

        case "SET_TOKEN":
            return {
                 ...state,
                token: action.token
            };

      case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
      case  'SET_DISCOVER_WEEKLY':
          return {
              ...state,
              discover_weekly: action.discover_weekly,
            };

        default:
            return state;    
    }
};

export default reducer;