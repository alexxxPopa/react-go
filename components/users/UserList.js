import React, {Component} from 'react';
import User from './User.js';

class UserList extends Component {
  render(){
    return (
      <ul>{
        this.props.users.map( user =>{
          return <User
            user={user}
            key={user.id}
            {...this.props}
          />
        })
      }</ul>
    )
  }
}

UserList.propTypes = {
  users: React.PropTypes.array.isRequired,
}

export default UserList
