import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About text={blogData.about} image={blogData.image} />
      <ArticleList arr={blogData.posts} />
    </div>
  );
}

export default App;
