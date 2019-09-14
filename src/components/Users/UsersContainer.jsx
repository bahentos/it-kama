import React from 'react';
import { connect } from 'react-redux';
import * as axios from "axios";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/usersReducer';
import Users from './Users';

class UsersAPI extends React.Component {

    componentDidMount() {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items);
          this.props.setUsersTotalCount(response.data.totalCount)
        });
    };
  
    onPageChanged = (page) => {
      this.props.setCurrentPage(page);
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items);
        });
    };
  
    render() {
  
      return <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
      />;
    }
  }

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (page) => {dispatch(setCurrentPageAC(page))},
        setUsersTotalCount: (totalCount) => {dispatch(setUsersTotalCountAC(totalCount))}
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)
export default UsersContainer;  