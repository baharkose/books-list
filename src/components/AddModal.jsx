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
  const { id, image_url, title, author, description } = selectedBook;

  const [target, setTarget] = useState({
    titleT: title,
    startDate: "",
    finishDate: "",
  });


  const { titleT, startDate, finishDate } = target;
  console.log(titleT);

  // + boş objeleri tespit etmek için
  const [isEmpty, setIsEmpty] = useState(false);

  //+ tekrarlayan elemanları tespit etmek için

  //* Modaldan gelen veriler çekildi. -> target ile
  const handleTarget = (e) => {

    setTarget({
      ...target,
      [e.target.name]: e.target.value,
      titleT:title
    });
    console.log(target);
  };

  const isSame = () => {
    return newBookList.some((item) => item.title == titleT);
  };

  console.log(isSame());

  const handleBookList = () => {

    setTarget({ ...target, titleT: title });
    console.log(target)
    //! boş eleman girildiğinde uyarı verilmesi
    const isValid = Object.values(target).every(
      (value) => value !== null || value !== undefined || value !== ""
    );

    // + Çok önemli bir bilgi, setterda asenkronluk olduğu için birinden diğerine haber yollarken sıkıntı çıkabiliyor. Bu nedenle arada bir değişken kullanmak gerekiyor.
    setIsEmpty(isValid);
    console.log(target);
    console.log(isValid);

    if (!isValid) {
      alert("Please, fill out all fields...");
    } else if (isSame()) {
      alert("This book has already been selected...");
    } else {
      setNewBookList([
        ...newBookList,
        { ...selectedBook, ...target, id: new Date().getTime() },
      ]);
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
