import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
};

   componentDidUpdate(prevProps, prevState) {
       if (prevProps.status !== this.props.status) {
           this.setState({status: this.props.status})
       }
   }

    activateEditMode = () => {
        this.setState({editMode: true})
    };

    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.setState({status: this.props.status})
    };

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    };

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.updateStatus(this.state.status)
            this.setState({editMode: false})
        }
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div onDoubleClick={this.activateEditMode}>
                    <span>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true}
                           onKeyPress={this.onKeyPress}
                           onChange={this.onStatusChange}
                           onBlur={this.deactivateEditMode}
                           value={this.state.status}
                           type="text"
                    />
                </div>
                }
            </div>
        )
    }


}

export default ProfileStatus;