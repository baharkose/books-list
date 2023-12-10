import React, { useState } from "react";
import AddModal from ".././components/AddModal";
import BookList from ".././components/BookList";
import Books from ".././components/Books";
import Header from "../components/Header";
import bookList from "../helper/data";
const Home = () => {
  const [selectedBook, setSelectedBook] = useState([]);
  // + veriyi çekeceği yerde set, alacağın yerde state kullan.
  const [showModal, setShowModal] = useState(false);

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
        selectedBook={selectedBook}
      />
      <BookList />
    </div>
  );
};

export default Home;
