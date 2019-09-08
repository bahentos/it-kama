import React from "react";
import s from "./Users.module.css";

const Users = props => {
    let users = {users: [
        { id: 1, photoUrl: "http://erundit.ru/image/cache/catalog/avatar/249-500x500.jpg", followed: false, fullName: "Дмитрий", status: "Я голоден!", location: {city: "Москва", country: "Россия"}},
    
        { id: 2, photoUrl: "http://erundit.ru/image/cache/catalog/avatar/259-500x500.jpg", followed: true,  fullName: "Иван", status: "Это не я", location: {city: "Минск", country: "Беларусь"}},
    
        { id: 3, photoUrl: "http://erundit.ru/image/cache/catalog/avatar/260-500x500.jpg", followed: true, fullName: "Александр", status: "Спаааать!", location: {city: "Тверь", country: "Россия"}},
    
        { id: 4, photoUrl: "http://erundit.ru/image/cache/catalog/avatar/269-500x500.jpg", followed: false, fullName: "Света", status: "Ищу мужчинку!", location: {city: "Суздаль", country: "Россия"}},
    
        { id: 5, photoUrl: "http://erundit.ru/image/cache/catalog/avatar/270-500x500.jpg", followed: true, fullName: "Дарья", status: "Ничего не хочу!", location: {city: "Саратов", country: "Россия"}},
    
        { id: 6, photoUrl: "http://erundit.ru/image/cache/catalog/avatar/272-500x500.jpg", followed: false, fullName: "Виктор", status: "Весь в работе", location: {city: "Рязань", country: "Россия"}},
      ]}
    if (props.users.lenght === 0) {
        props.setUsers(users);
    }
    
  return (
    <div>
      {props.users.map(u => (
        <div className={s.usersContainer} key={u.id}>
          <img className={s.userAvatar} src={u.photoUrl} alt="userAvatar" />
          <div>
              { u.followed 
                ? <div onClick={()=>{props.unfollow(u.id)}} className={s.but + " " + s.unfollow}>Unfollow</div> 
                : <div onClick={()=>{props.follow(u.id)}} className={s.but}>Follow</div> }
          </div>
          <div>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </div>
          <div>
            <div>{u.location.city}</div>
            <div>{u.location.country}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
