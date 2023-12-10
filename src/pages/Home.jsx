import React, { useState } from "react";
import AddModal from ".././components/AddModal";
import BookList from ".././components/BookList";
import Books from ".././components/Books";
import Header from "../components/Header";
import bookList from "../helper/data";
import Footer from "../components/Footer";
const Home = () => {
  const [selectedBook, setSelectedBook] = useState([]);
  // + veriyi çekeceği yerde set, alacağın yerde state kullan.
  const [showModal, setShowModal] = useState(false);
  //+ şimdi tüm verileri BookListe yollamak için bir state oluşturalım
  const [newBookList, setNewBookList] = useState([]);

  return (
    <div>
      <Header />

      <Books
        bookList={bookList}
        setSelectedBook={setSelectedBook}
        setShowModal={setShowModal}
      />

      <AddModal
        selectedBook={selectedBook}
        setShowModal={setShowModal}
        showModal={showModal}
        setNewBookList={setNewBookList}
        newBookList={newBookList}
      />
      <BookList newBookList={newBookList} setNewBookList={setNewBookList} />
      <Footer />
    </div>
  );
};

export default Home;
