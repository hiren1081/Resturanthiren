import React, { Component } from 'react'
import NavbarComp from './NavbarComp'
export default class RestoCreate extends Component {
    constructor(){
        super();
        this.state = {
            name:null,
            address:null,
            email:null,
            rating:null,
        }

    }

    Create(){
        fetch('http://localhost:3000/restaurent',{
            method: "Post",
            headers: {
                "Content-Type":'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((res)=> {
                    alert("Rstaurent has been added sucssesfuly")
            })
        })
    }
    render() {
        return (
            <div>
                 <NavbarComp />
                <h1>RestoCreate</h1>
                <div>
                    <input onChange = {(event)=>{ this.setState({ name: event.target.value }) }}
                    placeholder="Resturant name" /><br /><br />
                    <input onChange = {(event)=> { this.setState({ address: event.target.value }) }} 
                    placeholder="address" /><br /><br />
                    <input onChange = {(event)=> { this.setState({ email: event.target.value }) }} 
                    placeholder="email" /><br /><br />
                    <input onChange = {(event)=> { this.setState({ rating: event.target.value }) }} 
                    placeholder="rating" /><br /><br />
                    <button onClick={()=>{this.Create()}}>Add Resturant</button>
                </div>
            </div>
        )
    }
}
