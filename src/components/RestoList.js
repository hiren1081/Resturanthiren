import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEdit, faTrash, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import {
    Link
} from 'react-router-dom';
import NavbarComp from './NavbarComp'
export default class RestoList extends Component {
    constructor() {
        super();
        this.state = {
            list: null
        }
    }
    componentDidMount() {
        this.getData();
    }
    getData() {
        fetch("http://localhost:3000/restaurent").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
    Delete(id) {
        fetch('http://localhost:3000/restaurent/'+id, {
            method: "DELETE"
        }).then((result) => {
            result.json().then((res) => {
                alert("Rstaurent has been update Deleted");
                this.getData();
            })
        })
    }
    render() {
        return (
            <div>
                 <NavbarComp />
                <h1>RestoList</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>resturent name</th>
                                        <th>email</th>
                                        <th>address</th>
                                        <th>reating</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.address}</td>
                                                <td>{item.rating}</td>
                                                <td><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faEdit} color="orange" /></Link>
                                                    <span onClick={() => this.Delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /></span></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>

                        </div>

                        : <p>Please Wait...</p>
                }
            </div>
        )
    }
}

