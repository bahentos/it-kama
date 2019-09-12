import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import defaultAvatar from "../../Assets/img/user.png";

class Users extends React.Component {

  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map(u => (
          <div className={s.usersContainer} key={u.id}>
            <img
              className={s.userAvatar}
              src={u.photos.small != null ? u.photos.small : defaultAvatar}
              alt="userAvatar"
            />
            <div>
              {u.followed ? (
                <div
                  onClick={() => {
                    this.props.unfollow(u.id);
                  }}
                  className={s.but + " " + s.unfollow}
                >
                  Unfollow
                </div>
              ) : (
                <div
                  onClick={() => {
                    this.props.follow(u.id);
                  }}
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
    );
  }
}

export default Users;
