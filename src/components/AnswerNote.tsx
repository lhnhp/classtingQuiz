import React from 'react';
import { Link } from 'react-router-dom';
// import AnswerNoteTable from './AnswerNoteTable';
//스타일
import { GlobalStyle, Wrapper } from '../App.styles';


// let answer = [
//     {
//         wQuestion: '',
//         chAnswer: '',
//         opinion: ''
//     },
// ] as any ;

// const insertAnswer = (wQuestion:string, chAnswer:string, opinion:string) => {
//     answer.push({wQuestion,chAnswer,opinion});
// }


// for(let i = 0 ; i < localStorage.length ; i++  ){
//     localStorage.getItem("w"+(i+1));


// }



function AnswerNote (){

  return (
    <>
    <GlobalStyle />
    <Wrapper>
    <h1>오답노트</h1>
    <h2>준비중입니다...</h2>
    
    {/* <AnswerNoteTable /> */}
        
    <button className='button' ><Link to="/">메인화면으로 돌아가기</Link></button>

    </Wrapper>
    </>

  );
}




export default AnswerNote;
