import React from 'react';
import s from "./Users.module.css";
import defaultAvatar from "../../Assets/img/userDefaults.png";
import {NavLink} from 'react-router-dom';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);


    let pagesNumber = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesNumber.push(i);
    }


    return (
        <div>
            <div className={s.pagesContainer}>
                {pagesNumber.map(p => {
                    return <span onClick={(e) => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p && s.selectedPage}>{p}</span>
                })}
            </div>
            {props.users.map(u => (
                <div className={s.usersContainer} key={u.id}>
                    <NavLink to={'/profile/' + u.id}>
                        <img
                            className={s.userAvatar}
                            src={u.photos.small != null ? u.photos.small : defaultAvatar}
                            alt="userAvatar"
                        />
                    </NavLink>
                    <div>
                        {u.followed ? (
                            <div
                                style={props.followingInProgress.some(id => id ===  u.id)
                                    ? {pointerEvents: "none", background: "lightgrey"}
                                    : {pointerEvents: ""}}
                                onClick={() => props.unfollow(u.id)}
                                className={s.but + " " + s.unfollow}
                            >
                                Unfollow
                            </div>
                        ) : (
                            <div
                                style={props.followingInProgress.some(id => id ===  u.id)
                                    ? {pointerEvents: "none", background: "lightgrey"}
                                    : {pointerEvents: ""}}
                                onClick={() =>  props.follow(u.id)}
                                className={s.but}
                            >
                                Follow
                            </div>
                        )}
                    </div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default Users;