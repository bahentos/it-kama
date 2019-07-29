import React from 'react';
import s from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.main}>
      <img src="https://pegas-kolomna.ru/images/%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8%20%D0%B4%D0%BB%D1%8F%20%D1%81%D1%82%D1%80%D0%B0%D0%BD/ispania.jpg" alt="" />
      <div>
        Ava+description
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;