const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";


let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case "FOLLOW":
        return {
          ...state,
          users: state.users.map( u => {
            if ( u.id === action.userId) {
              return {...u, followed: true}
            } 
            return u;
          })
        }
      case "UNFOLLOW":
        return {
          ...state,
          users: state.users.map( u => {
            if (u.id === action.userId) {
              return {...u, followed: false}
            }
            return u;
          })
        }
      case "SET_USERS":
        return {
          ...state, users: action.users,
        }
      
      case "SET_USERS_TOTAL_COUNT":
        return {
          ...state, totalUsersCount: action.totalCount,
        }
      
      case "SET_CURRENT_PAGE":
        return {
          ...state, currentPage: action.page
        }
    default:
      return state;
  }
};
export default usersReducer;

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page});
export const setUsersTotalCount = (totalCount) => ({ type: SET_USERS_TOTAL_COUNT, totalCount});