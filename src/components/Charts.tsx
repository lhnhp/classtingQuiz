import React from 'react';
import { Link } from 'react-router-dom';
//component
import ChartScore from './ChartScore'
//스타일
import { GlobalStyle,Wrapper } from '../App.styles';


//현재 차트에 진입시에 데이터를 불러오는게 한박자 느린데 내pc에서만 그런건지 확인 필요
//새로고침하면 정상적으로 나옴

function Charts() {




    return(
        <>
        <GlobalStyle />
        <Wrapper>
            <h1> 정오답차트 </h1>
            <ChartScore />
            <button className='button' ><Link to="/">차트를 초기화하고 메인화면으로 돌아가기</Link></button>
        </Wrapper>
        </>
    );
}

export default Charts;