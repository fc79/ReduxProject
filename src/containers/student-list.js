import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';
import './student-list.css';

class UserList extends Component {

    render() {
        return this.props.users.map((user) => {
        return (
      
            <div class="card exclusivecard"
            key={user.id}
            onClick={() => this.props.selectUser(user)}
        >
        <img src={user.image} class="image" alt="..."/>
        <div class="card-body">
          <p class="card-text text-center text">{user.first} {user.last}</p>
        
            
      </div>
      </div>
        );
    });

}
}
function mapStateToProps(state) {
    return {
        users: state.users
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(UserList);