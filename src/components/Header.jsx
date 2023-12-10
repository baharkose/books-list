import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import myLogo from "../img/logo.png";

function Header({ setSearchedBooks, searchedBooks, bookList, setClickCanvas, clickCanvas }) {
  const [searchInput, setSearchInput] = useState("");
  console.log(clickCanvas)
  console.log(searchedBooks);
  const handleSearch = (e) => {
    setSearchedBooks(
      bookList.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    console.log("is clicked");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-4 navbar">
      <Container fluid m-auto>
        <Navbar.Brand href="#" className="logoTitle">
         <span className="navbarTitle">Reading Book List</span> 
          <img src={myLogo} alt="" width="80px" />
        </Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2  searchInpt"
            aria-label="Search"
            name="search"
            onChange={(e) => {
              handleSearch(e); // Her değişiklikte arama fonksiyonunu çağır
            }}
          />
          <Button
            variant="outline-success"
            className="searchBtn"
            onClick={() => setClickCanvas(!clickCanvas)}
          >
            MyList
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}
export default Header;
