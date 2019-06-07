import React, {Component} from 'react';

class UserInfo extends Component {
    state ={
        userName:""
        
    }
    handleClick =() =>{
        console.log('userName', this.state.userName)
        
    }
    render() {
        return (
            <div>
                <h3>Get User Info</h3>
                <input
                onChange={ e => this.setState({userName: e.target.value})} 
                placeholder="User Name"/>
                <button onClick={this.handleClick}>Get user info</button>
            </div>
        )
    }

}

export default UserInfo