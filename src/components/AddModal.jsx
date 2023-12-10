import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AddModal = ({ selectedBook, showModal, setShowModal }) => {
  const { id, image_url, title, author, description } = selectedBook;
  return (
    <div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Starting Date:</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Finishing Date:</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default AddModal;
