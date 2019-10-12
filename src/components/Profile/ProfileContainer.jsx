import React from "react";
import Profile from './Profile';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getStatus, setProfile, updateStatus} from "../../redux/profileReducer";
import {widthAuthRedirect} from "../../hoc/widthAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userAuth;
    }
    this.props.setProfile(userId);
    this.props.getStatus(userId);
  }
  render () {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
};


let mapStateToProps = (state) =>  ({
  profile: state.profilePage.profile,
  userAuth: state.profilePage.userAuth,
  status: state.profilePage.status,
});


export default compose(
    connect(mapStateToProps, { setProfile, getStatus, updateStatus }),
    withRouter,
    widthAuthRedirect,
)(ProfileContainer)