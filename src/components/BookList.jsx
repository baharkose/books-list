import React from "react";
import { Container, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const BookList = ({ newBookList, setNewBookList }) => {
  console.log(newBookList);

  const handleAllDelete = () => {
    setNewBookList([])
  }
  const handleDelete = (id) =>{ 
    setNewBookList(newBookList.filter((item)=> item.id != id))
    console.log("is clicked")
  }
  return (
    <Container className="m-auto" style={{display: newBookList.length === 0? "none": ""}}>
      <h1 className="text-center mb-2">Reading Book List</h1>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Starting Date:</th>
            <th>Finishing Date:</th>
            <th colSpan={2}>Remaining Date:</th>
          </tr>
        </thead>
        <tbody>
          {newBookList.map(({ id, title, startDate, finishDate }, index) => (
            <tr key={id}>
              <td>{index + 1}</td>
              <td>{title}</td>
              <td>{startDate}</td>
              <td>{finishDate}</td>
              {/* Kalan zaman hesabı burada yapıldı. */}
              <td>
                {(new Date(finishDate) - new Date(startDate)) /
                  (24 * 60 * 60 * 1000)}
              </td>
              <td
                style={{
                  color: "red",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                }}
                onClick={()=>handleDelete(id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </td>
            </tr>
          ))}
          <tr style={{display: newBookList.length === 0? "none": ""}}>
            <td colSpan={6} >
              <button
              onClick={handleAllDelete}
               className="d-flex justify-content-center align-items-center btn bg-dark text-light m-auto">
                Clear All
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default BookList;
