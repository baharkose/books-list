import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AddModal = ({
  selectedBook,
  showModal,
  setShowModal,
  newBookList,
  setNewBookList,
}) => {
  const [target, setTarget] = useState({
    startDate: "",
    finishDate: "",
  });

  const { id, image_url, title, author, description } = selectedBook;
  const { startDate, finishDate } = target;
  
  // + boş objeleri tespit etmek için
  const [isEmpty, setIsEmpty] = useState(false);

  
  

  const handleTarget = (e) => {
    setTarget({ ...target, [e.target.name]: e.target.value });
  };

  const handleBookList = () => {
    //! boş eleman girildiğinde uyarı verilmesi 
    setIsEmpty(
      Object.values(target).every(
        (value) => value === null || value === undefined || value === ""
      )
    );

  
    if (isEmpty) {
      setNewBookList([
        ...newBookList,
        { ...selectedBook, ...target, id: new Date().getTime() },
      ]);
    } else {
      alert("Please, fill our all fields...");
    }
    console.log(newBookList);
    //! bookListi aç, içerisine selectedBooku ve targetı açarak ekle ve id ekle
  };

  return (
    <div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Form className="modalM">
          <Modal.Header closeButton>
            <Modal.Title className="header">{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Starting Date:</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                onChange={handleTarget}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Finishing Date:</Form.Label>
              <Form.Control
                type="date"
                name="finishDate"
                onChange={handleTarget}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button
              className="saveBtn"
              variant="primary"
              onClick={() => {
                setShowModal(false);
                handleBookList();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default AddModal;
