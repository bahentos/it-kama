import React from 'react';
import {connect} from 'react-redux';
import {
    setCurrentPage,
    toggleFollowingProgress,
    getUsers, unfollowSuccess, followSuccess, unfollow, follow
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import {widthAuthRedirect} from "../../hoc/widthAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }


    onPageChanged = page => {
        this.props.getUsers(page, this.props.pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    followingInProgress={this.props.followingInProgress}
                />}

                ;
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress,
    }
};


let callObj = {
    follow,
    unfollow,
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
};

let  AuthRedirectComponent = widthAuthRedirect(UsersAPI);


const UsersContainer = connect(mapStateToProps, callObj)(AuthRedirectComponent)
export default UsersContainer;  