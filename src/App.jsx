import { useState } from 'react'
import './App.css'

function App() {

  let post = '강남 우동 맛집'
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [input, setInput] = useState('');
  
  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      {/* <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={ ()=>{ setModal(!modal) } }>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map((a, i)=>{
          return (
            <div className='list' key={i}>
              <h4 onClick={ ()=>{setModal(!modal); setTitle(i) }}>{ 글제목[i] }
                <span onClick={ (e)=>{
                  e.stopPropagation();
                  let copy = [...따봉]
                  copy[i] = copy[i] + 1
                  따봉변경(copy)
                } }>👍</span> { 따봉[i] }
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{ 
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
                
                let copy2 = [...따봉];
                copy2.splice(i);
                따봉변경(copy2);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input type="text" onChange={(e)=>{ setInput(e.target.value); console.log(input) }}/>
      <button onClick={()=>{ 
        let copy = [...글제목];
        copy.unshift(input);
        글제목변경(copy);
        
        let copy2 = [...따봉];
        copy2.unshift(0);
        따봉변경(copy2);
      }}>버튼</button>
      
      {
        modal == true ? <Modal title={title} 글제목={글제목}/> : null 
      }
    
    </div>
  )
}

function Modal(props){
  return (
    <div className='modal'>
      <h4>{ props.글제목[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

export default App
