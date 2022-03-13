/* eslint-disable*/
import React, { useState } from 'react';
import "./App.css";

function App() {
  const [content, setContent] = useState([
    {
      title: "포스트 목록",
      date: "2월 17일 발행"
    }, {
      title: "리액트 기반 웹 프로그래밍",
      date: "2월 18일 발행"
    }, {
      title: "오늘의 숙제",
      date: "2월 19일 발행"
    }])
  let [like, setLike] = useState(0);
  let [name, setName] = useState("개발 블로그")

  // const plusLike = (e) => {
  //   setLike(like + 1)
  // }
  const buttonClick = () => {
    let array = [...content].sort();
    setContent(array)
  }
  return (
    <div className="App">
      <div className="navbar">{name}</div>
      <button onClick={buttonClick}>정렬</button>
      <div>
        {content.map((data, index) =>
          <BlogList data={data} />
        )}
      </div>
      {/* 
      <div className="list">
        <h3>{content[0]}
          <span onClick={plusLike}>👍
          </span>{like}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{content[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{content[2]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div> */}
      <Modal />


    </div>
  );
}
function Modal() {
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>)
}
function BlogList({ data }) {
  return (
    <div className="list" >
      <h3>{data.title}</h3>
      <p>{data.date}</p>
      <hr />
    </div>
  )
}


export default App;
