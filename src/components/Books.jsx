import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Books = ({ bookList, setSelectedBook }) => {
  const [choicenBook, setChoicenBook] = useState("");

  return (
    <Container className="d-flex flex-wrap gap-4 mt-5 justify-content-center m-auto ">
      {bookList.map((book) => (
        <Card
          className="mb-4 d-flex justify-content-center "
          style={{ width: choicenBook == book.id ? "25rem" : "15rem" }}
          key={book.id}
          onClick={() =>setChoicenBook(book.id)}
          onDoubleClick={() => setChoicenBook("")}
          //+ sadece seçili alanı görüntülemek için id ataması yaptık.
          //+ burayı bir incele
        >
          <div className="d-flex">

          <Card.Img
            variant="top"
            className="btn"
            src={book.image_url}
            style={{
              width: choicenBook == book.id ? "50%" : "15rem",
              height: "100%",
            }}
          />
          <Card.Body
            style={{
              display: choicenBook == book.id ? "block" : "none",
              width: choicenBook == book.id ? "40%" : "",
            }}
          >
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.author}</Card.Text>
            <Card.Text>{book.description}</Card.Text>
            <Button variant="primary"
            onClick={()=> setSelectedBook(book)}>Add To List</Button>
          </Card.Body>
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default Books;
