import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Books = ({ bookList }) => {
  const [choicenBook, setChoicenBook] = useState("")

  return (
    <Container className="d-flex flex-wrap gap-4 mt-5 justify-content-center m-auto ">
      {bookList.map(({ id, title, author, description, image_url }) => (
        <Card
          className="mb-4 d-flex justify-content-center "
          style={{ width: choicenBook == id  ? "25rem" : "15rem"}}
          key={id}
          onClick={() => setChoicenBook(id)}
        >
          <Card.Img
            variant="top"
            className="btn"
            src={image_url}
            style={{ width: choicenBook == id ? "50%" : "15rem", height: "100%" }}
          />
          <Card.Body style={{ display: choicenBook == id  ? "block" : "none",width: choicenBook == id ? "40%": "" }}>
            
              <Card.Title>{title}</Card.Title>
              <Card.Text>{author}</Card.Text>
              <Card.Text>{description}</Card.Text>
              <Button variant="primary">Add To List</Button>
           
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Books;
