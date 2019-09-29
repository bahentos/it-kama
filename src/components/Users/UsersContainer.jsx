import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import {usersAPI} from "../../API/API";

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
        });
    }

    onPageChanged = page => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
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
        isFetching: state.usersPage.isFetching,
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

let callObj = {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching}


const UsersContainer = connect(mapStateToProps, callObj)(UsersAPI)
export default UsersContainer;  