import React, { useState } from "react";
import AddModal from ".././components/AddModal";
import BookList from ".././components/BookList";
import Books from ".././components/Books";
import Header from "../components/Header";
import bookList from "../helper/data"
const Home = () => {

  const [selectedBook, setSelectedBook] = useState([])
// + veriyi çekeceği yerde set, alacağın yerde state kullan.
  return (
    <div>
        <Header/>
    
      <Books bookList={bookList} setSelectedBook={setSelectedBook}/>
      <AddModal selectedBook={selectedBook} />
      <BookList />
    </div>
  );
};

export default Home;
