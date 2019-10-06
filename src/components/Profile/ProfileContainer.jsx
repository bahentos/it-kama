import React from "react";
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {setProfile} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userAuth;
    }
    this.props.setProfile(userId);
  }
  render () {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
  
};

let mapStateToProps = (state) =>  ({
  profile: state.mypostPage.profile,
  userAuth: state.mypostPage.userAuth,
});


let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setProfile })(WithUrlDataContainerComponent);