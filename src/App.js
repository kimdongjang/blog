/* eslint-disable*/
import React, { useState } from 'react';
import "./App.css";

function App() {
  let [title, setTitle] = useState(["포스트 목록", "리액트 기반 웹 프로그래밍", "오늘의 숙제"])
  let [like, setLike] = useState(0);
  let [name, setName] = useState("개발 블로그")

  const plusLike = (e) => {
    setLike(like + 1)
  }
  const buttonClick = () => {
    let array = [...title].sort();
    setTitle(array)
  }
  return (
    <div className="App">
      <div className="navbar">{name}</div>
      <button onClick={buttonClick}>정렬</button>
      <div className="list">
        <h3>{title[0]}
          <span onClick={plusLike}>👍
          </span>{like}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
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


export default App;
