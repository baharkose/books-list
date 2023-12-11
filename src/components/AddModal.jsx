import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import SweetAlert2 from "react-sweetalert2";

const AddModal = ({
  selectedBook,
  showModal,
  setShowModal,
  newBookList,
  setNewBookList,
}) => {
  const { id, image_url, title, author, description } = selectedBook; //* ilk olarak seçili kitaplar getirildi.
  const [swalProps, setSwalProps] = useState({});
  const [target, setTarget] = useState({
    titleT: "", //- buraya title yazınca ekleme gerçekleşmiyor. aynı kitabın alınmaması için selected booktan gelen kitap adı eklendi. Bookliste gidecek targeta eklendi.
    startDate: "",
    finishDate: "",
  });
  console.log(target);
  const { titleT, startDate, finishDate } = target;

  //- boş objeleri tespit etmek için
  const [isEmpty, setIsEmpty] = useState(false);
  const [isSame, setIsSame] = useState(false);

  //- tekrarlayan elemanları tespit etmek için
  //- Modaldan gelen veriler çekildi. -> target ile
  const handleTarget = (e) => {
    setTarget({
      ...target,
      [e.target.name]: e.target.value,
      titleT: title, //* tagetın içerisine selected targettan gelen veri geldi.
    });
  };
  const handleBookList = () => {
    const sameV = newBookList.some((item) => item.title === titleT);
    if (target.finishDate === "" || target.startDate === "") {
      alert("Please, fill out all fields...");
    } else {
      if (sameV) {
        alert("This book has already been selected...");
        setTarget({
          startDate: "",
          finishDate: "",
          titleT: "",
        });
      } else if (finishDate < startDate) {
        alert("Başlangıç tarihi bitiş tarihinden sonra olamaz");
      } else {
        setNewBookList([
          ...newBookList,
          {
            ...selectedBook,
            startDate,
            finishDate,
            title: titleT,
            id: new Date().getTime(),
          },
        ]);
      }
    }
    console.log(newBookList);
    //- bookListi aç, içerisine selectedBooku ve targetı açarak ekle ve id ekle
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
