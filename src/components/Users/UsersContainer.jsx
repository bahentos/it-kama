import React from 'react';
import {connect} from 'react-redux';
import {
    setCurrentPage,
    toggleFollowingProgress,
    getUsers, unfollowSuccess, followSuccess, unfollow, follow
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';

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
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    followingInProgress={this.props.followingInProgress}
                />
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
}

//Старый вариант mapDispatchToProps

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {dispatch(follow(userId))},
//         unfollow: (userId) => {dispatch(unfollow(userId))},
//         setUsers: (users) => {dispatch(setUsers(users))},
//         setCurrentPage: (page) => {dispatch(setCurrentPage(page))},
//         setUsersTotalCount: (totalCount) => {dispatch(setUsersTotalCount(totalCount))}
//     }
// }

let callObj = {
    follow,
    unfollow,
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
}


const UsersContainer = connect(mapStateToProps, callObj)(UsersAPI)
export default UsersContainer;  