import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddModal = ({selectedBook, showModal, setShowModal}) => {
 

    return (
    <div>
     
<Modal show={showModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" 
          onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" 
          onClick={() => setShowModal(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
   
    </div>
  );
};

export default AddModal;
