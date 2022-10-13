import React, { useState } from 'react';
import { takeQuizQuestions } from '../API';
import { Link } from 'react-router-dom';
import { setCookie } from '../utils';
//컴포넌트
import QuestionCard from './QuestionCard';
//API
import { QuestionState } from '../API';
//스타일
import { GlobalStyle,Wrapper } from '../App.styles';






//문제 수 조정
const TOTAL_QUESTION = 5;
//시간측정
let startTime = 0;
let endTime = 0;
let timeTaken = 0;
//차트숫자
let chartNum = 1;
//오답번호
// let wrongNum = 1;
//오답배열
// let arr: string[] = [];


export type AnswerObject = {

  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;

}

const Main = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0); 
  const [gameOver, setGameOver] = useState(true);


  const startQuiz = async () => {

    setLoading(true);
    setGameOver(false);
    const newQuestions = await takeQuizQuestions(TOTAL_QUESTION);
    setQuestions(newQuestions);
    setNumber(0);
    setUserAnswers([]);
    setScore(0);
    setLoading(false);
    startTime = new Date().getTime();

  };


  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    if(!gameOver){
    //정답입력
      const answer = e.currentTarget.value;
    //정답확인
      const correct = questions[number].correct_answer === answer;
    //점수계산
      if(correct) setScore(prev => prev + 1);
    //답노트세션처리  
//       if(!correct){
//         arr.push(questions[number].question,questions[number].correct_answer)
//         const arrString = JSON.stringify(arr);
//         window.localStorage.setItem("answers",arrString);
//       }
    //정답저장
      const AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      };
      setUserAnswers((prev) => [...prev, AnswerObject]);
      

    }
  };


  //다음문제로 이동
  const nextQuestion = () => {
  
    const nextQuestion = number + 1;

    if(nextQuestion === TOTAL_QUESTION){
      setGameOver(true);
    }else{
      setNumber(nextQuestion);
    }

  };



  //퀴즈버튼 텍스트변경
  var startButton = "";
  if(gameOver){
    startButton = "시작 !"
  }else{
    startButton = "다시풀기"
  }

  //시간측정
  if(userAnswers.length === TOTAL_QUESTION){
    endTime = new Date().getTime();
    timeTaken = (endTime - startTime) / 1000 ;
  }

  //차트용
  if(userAnswers.length === TOTAL_QUESTION){
    setCookie(chartNum.toString(), score, {path: "/" , maxAge:3600});
    setCookie("total",TOTAL_QUESTION);
    chartNum ++ ;
    setCookie("num",chartNum)
    }

  

  return(
    <>
    <GlobalStyle />
    <Wrapper>

      {/* 상단 제목출력 */}
      <h1> 퀴즈를 풀어봅시다!! </h1>
      
      {/* 시작버튼 */}
      {gameOver || userAnswers.length === TOTAL_QUESTION ? (
        <button className="start" onClick={startQuiz}>{startButton}</button>
      ) : null}

      {/* 로딩문구 */}
      {loading && <p>문제를 불러오는 중... </p>}

      {/* 퀴즈카드 */}
      {!loading && !gameOver && (
        <QuestionCard
          questionNum={number + 1}
          totalQuestionNum={TOTAL_QUESTION}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}

      {/* 다음버튼 */}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTION - 1 ?(
        <button className="next" onClick={nextQuestion}> 다음 </button>
      ) : null}

      {/* 정오답수 */}
      {userAnswers.length === TOTAL_QUESTION && !loading ? (
        <p className="score"> {score} 문제를 맞히고 {TOTAL_QUESTION - score} 문제를 틀렸습니다!</p>        
      ) : null}

      {/* 시간측청 */}
      {userAnswers.length === TOTAL_QUESTION && !loading ? (
      <p> {timeTaken} 초가 소요되었습니다. </p>
      ) : null}

      {/* 오답노트 */}
      {userAnswers.length === TOTAL_QUESTION && !loading ? (
        <button className='button'><Link to="/answernote">오답노트</Link></button>
      ) : null}

      {/* 정답률차트 */}
      {userAnswers.length === TOTAL_QUESTION && !loading ? (
        <button className='button'><Link to="/charts">정답률차트</Link></button>
      ) : null}

    </Wrapper>
    </>
  ); 
}

export default Main;
