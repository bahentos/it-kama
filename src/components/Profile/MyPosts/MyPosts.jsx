import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reset, reduxForm} from 'redux-form'
import {maxLength15, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormControl/FormControl";



const PostForm = props => {

    return (
        <form className={s.postContainer} onSubmit={props.handleSubmit}>
            <Field name={"newPostText"}
                   component={Textarea}
                   validate={[requiredField, maxLength15]}
                   rows="20"

            />
            <div className={s.buttonContainer}>
                <div className={s.iconContainer}>
                    <button className={s.icon1}/>
                    <button className={s.icon2}/>
                    <button className={s.icon3}/>
                </div>
                <button className={s.add}>
                    Post
                </button>
            </div>
        </form>
    )
}

const afterSubmit = (result, dispatch) =>
    dispatch(reset('mypost'));


const PostReduxForm = reduxForm({form: 'mypost', onSubmitSuccess: afterSubmit,})(PostForm)

const MyPosts = props => {


    let posts = props.messagesData.map(post => (
        <Post
            key={post.id}
            userName={post.name}
            message={post.message}
            likeCount={post.likeCount}
        />
    ));


    let onAddNewPost = (formData) => {
        let newPostText = formData.newPostText;
        if (newPostText != undefined) {
            props.addPostActionCreator(newPostText);
        }

    };

    return (
        <div className={s.main}>
            My posts
            <PostReduxForm onSubmit={onAddNewPost}/>
            {posts}
        </div>
    );
};

export default MyPosts;
