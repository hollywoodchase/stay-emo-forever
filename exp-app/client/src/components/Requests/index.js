import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../components/List";
import { Name, Email, Selection, Wish, Photo, FormBtn } from "../../components/Form";
import "../../style.css"

class Requests extends Component {
  state = {
    books: [],
    name: "",
    email: "",
    selection: "",
    wish: "",
    photo: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, name: "", email: "", selection: "", wish: "", photo: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.email) {
      API.saveBook({
        name: this.state.name,
        email: this.state.email,
        selection: this.state.selection,
        wish: this.state.wish,
        photo: this.state.photo
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <form id="form">
              <Name
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Emo Joe"
              />
              <Email
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="emoD00D@myspace.com"
              />
              <Selection
                value={this.state.selection}
                onChange={this.handleInputChange}
                name="selection"
                placeholder=""
              />
              <Wish
                value={this.state.wish}
                onChange={this.handleInputChange}
                name="wish"
                placeholder=""
              />
              <Photo
                value={this.state.photo}
                onChange={this.handleInputChange}
                name="photo"
                placeholder="http://myspace.com/emod00d/profilePic"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.email && this.state.selection)}
                onClick={this.handleFormSubmit}
              >
                Submit Request
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Requests;
