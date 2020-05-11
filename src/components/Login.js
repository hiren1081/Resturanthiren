import React, { Component } from 'react'
import NavbarComp from './NavbarComp'
export class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: '',
        }
    }
    login() {
        fetch('http://localhost:3000/login?q=' + this.state.name).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                localStorage.setItem('login',JSON.stringify(resp))
                if(resp.length>0){
                    console.warn(this.props.history.push('list'));
                    
                }else{
                    alert("Pleae Chack UserName & PassWord");
                }

            })
        })
    }
    render() {
        return (
            <div>
                 <NavbarComp />
                <input type="text"
                    placeholder="Enter User Name" name="User" onChange={(event) => this.setState({ name: event.target.value })} /><br /><br />
                <input type="password"
                    placeholder="Password" name="Password" onChange={(event) => this.setState({ password: event.target.value })} /><br /><br />
                <button onClick={()=>{this.login()}}>Login</button>
            </div>
        )
    }
}

export default Login
