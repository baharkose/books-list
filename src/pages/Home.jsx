import React from "react";
import AddModal from ".././components/AddModal";
import BookList from ".././components/BookList";
import Books from ".././components/Books";
import Header from "../components/Header";
import bookList from "../helper/data"
const Home = () => {
  return (
    <div>
        <Header/>
      <Books bookList={bookList}/>
      <AddModal />
      <BookList />
    </div>
  );
};

export default Home;
