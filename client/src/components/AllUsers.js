import React, {Component} from 'react';

class AllUsers extends Component {
    state ={
        userName:""
        
    }
    handleClick = () =>{
        console.log('userName', this.state.userName)
        
    }
    render() {
        return(
            <div>
                <h3>Get All Users</h3>
                <button onClick={this.handleClick}>Get</button>
            </div>
        )

        }
    }


export default AllUsers