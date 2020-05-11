import React, { Component } from 'react'
import NavbarComp from './NavbarComp'

export default class RestoUpdate extends Component {
    constructor(){
        super();
        this.state = {
            name:null,
            address:null,
            email:null,
            rating:null,
            id:null,
        }

    }
    componentDidMount(){
        fetch('http://localhost:3000/restaurent/'+ this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({
                    name: result.name,
                    email: result.email,
                    address: result.address,
                    rating: result.rating,
                    id: result.id,
                })
                // this.setState({ list: result })
            })
        })
    }
    Update(){
        fetch('http://localhost:3000/restaurent/'+ this.state.id,{
            method: "Put",
            headers: {
                "Content-Type":'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((res)=> {
                    alert("Rstaurent has been update sucssesfuly")
            })
        })
    }
   
    render() {
        console.warn(this.state);
        return (
            <div>
                 <NavbarComp />
                <h1>RestoUpdate</h1>
                <div>
                    <input onChange = {(event)=>{ this.setState({ name: event.target.value }) }}
                    placeholder="Resturant name" value={this.state.name} /><br /><br />
                    <input onChange = {(event)=> { this.setState({ address: event.target.value }) }} 
                    placeholder="address" value={this.state.address} /><br /><br />
                    <input onChange = {(event)=> { this.setState({ email: event.target.value }) }} 
                    placeholder="email" value={this.state.email} /><br /><br />
                    <input onChange = {(event)=> { this.setState({ rating: event.target.value }) }} 
                    placeholder="rating" value={this.state.rating} /><br /><br />
                    <button onClick={()=>{this.Update()}}>Update Resturant</button>
                </div>
            </div>
        )
    }
}
