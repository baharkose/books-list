import React, { useState } from "react";
import {
  CButton,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
} from "@coreui/react";
import { Container, Table, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const BookList = ({ newBookList, setNewBookList, clickCanvas, setClickCanvas }) => {
  console.log(newBookList);
  const [visible, setVisible] = useState(false);

  const handleAllDelete = () => {
    setNewBookList([]);
  };
  const handleDelete = (id) => {
    setNewBookList(newBookList.filter((item) => item.id != id));
    console.log("is clicked");
  };
  return (
    <>
      <COffcanvas
        placement="right"
        visible={clickCanvas}
        onHide={() => setVisible(false)}
        style={{ position: "fixed", top: 0, right: 0, width: "30%" }}
      >
        <COffcanvasHeader>
          <CCloseButton
            className="text-reset"
            onClick={() => setClickCanvas(false)}
          />
        </COffcanvasHeader>
        <COffcanvasBody>
          <Container
            className="m-auto"
            style={{ display: newBookList.length === 0 ? "none" : "" }}
          >
            <h1 className="text-center mb-2">My Book List</h1>
            <Table striped>
              <thead>
                <tr className="trHeaderList">
                  <th>#</th>
                  <th>Title</th>
                  <th>Starting Date:</th>
                  <th>Finishing Date:</th>
                  <th colSpan={2}>Remaining Date:</th>
                </tr>
              </thead>
              <tbody>
                {newBookList.map(
                  ({ id, title, startDate, finishDate }, index) => (
                    <tr key={id} className="trList">
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
                          color: "orange",
                          cursor: "pointer",
                          fontSize: "1.2rem",
                        }}
                        onClick={() => handleDelete(id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </td>
                    </tr>
                  )
                )}
                <tr style={{ display: newBookList.length === 0 ? "none" : "",  background:"none"}}>
                  <td colSpan={6}>
                    <button
                      onClick={handleAllDelete}
                      className="d-flex justify-content-center align-items-center btn bg-dark text-light m-auto"
                    >
                      Clear All
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </COffcanvasBody>
      </COffcanvas>
    </>
  );
};

export default BookList;
