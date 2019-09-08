const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";


let initialState = {
  users: [
    { id: 1, photoUrl: "http://erundit.ru/image/cache/catalog/avatar/249-500x500.jpg", followed: false, fullName: "Дмитрий", status: "Я голоден!", location: {city: "Москва", country: "Россия"}},

    { id: 2, photoUrl: "http://erundit.ru/image/cache/catalog/avatar/259-500x500.jpg", followed: true,  fullName: "Иван", status: "Это не я", location: {city: "Минск", country: "Беларусь"}},

    { id: 3, photoUrl: "http://erundit.ru/image/cache/catalog/avatar/260-500x500.jpg", followed: true, fullName: "Александр", status: "Спаааать!", location: {city: "Тверь", country: "Россия"}},

    { id: 4, photoUrl: "http://erundit.ru/image/cache/catalog/avatar/269-500x500.jpg", followed: false, fullName: "Света", status: "Ищу мужчинку!", location: {city: "Суздаль", country: "Россия"}},

    { id: 5, photoUrl: "http://erundit.ru/image/cache/catalog/avatar/270-500x500.jpg", followed: true, fullName: "Дарья", status: "Ничего не хочу!", location: {city: "Саратов", country: "Россия"}},

    { id: 6, photoUrl: "http://erundit.ru/image/cache/catalog/avatar/272-500x500.jpg", followed: false, fullName: "Виктор", status: "Весь в работе", location: {city: "Рязань", country: "Россия"}},
  ]
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
          ...state, users: [...state.users, ...action.users ],
        }
    default:
      return state;
  }
};
export default usersReducer;

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });