import React, { Component } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Table, Form, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEdit, faTrash, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import {
    Link
} from 'react-router-dom';
import NavbarComp from './NavbarComp'


export default class RestoSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchData: null,
            noData: false,
            lastSearch:" ",
        }
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
                this.Search(this.state.lastSearch)
            })
        })
    }
    Search(key) {
        console.warn(key)
        this.setState({lastSearch:key})
        fetch('http://localhost:3000/restaurent?q=' + key).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if (resp.length > 0) {
                    this.setState({ searchData: resp, noData: false })
                } else {
                    this.setState({ noData: true, searchData: null })
                }

            })
        })

    }
    render() {
        return (
            <Container>
                 <NavbarComp />
                <h1>RestoSearch</h1>
                <Form.Control type="text"  onChange={(event) => this.Search(event.target.value)} placeholder="Serch Restaurent" />
                <div>
                    {
                        this.state.searchData ?
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
                                            this.state.searchData.map((item, i) =>
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
                            : " "
                    }
                    {
                        this.state.noData ? <h3>No Data Found</h3> : null
                    }
                </div>
            </Container>
        )
    }
}
