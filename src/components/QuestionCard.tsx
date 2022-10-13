import React from "react";
//Type
import { AnswerObject } from './Main';
//style
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

type Props = {

    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNum: number;
    totalQuestionNum: number;
    
}

const QuestionCard: React.FC<Props> = ({ question, answers ,callback ,userAnswer , questionNum ,totalQuestionNum}) => (

    <Wrapper>
    
        <p className="number">
            {questionNum} 번 문제 / 총 문제수 : {totalQuestionNum}
        </p>

        <p dangerouslySetInnerHTML={{ __html: question }} />

        <div>
            {answers.map(answer => (
                <ButtonWrapper 
                key={answer} 
                correct={userAnswer?.correctAnswer === answer} 
                userClicked={userAnswer?.answer === answer}>
                    <button disabled={!!userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer}} />
                    </button>
                </ButtonWrapper>
            ))}
        </div>

    </Wrapper>

);




export default QuestionCard;
