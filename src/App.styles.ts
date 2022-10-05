import styled, { createGlobalStyle } from "styled-components";
import BGImage from './images/classting.jpg'


export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body{
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
    }

`;


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p{
        color: #4169E1;
        font-size: 20px;

    }

    .score{
        color: 	#FF1493;
        font-size: 2rem;
        margin: 0;

    }

    h1{
        filter: drop-shadow(3px 3px #0085a3);
        font-size: 70px;
        text-align: center;
        margin: 20px;
    }

    .start, .next, .button{
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2pz solid #DB7093;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding 0 40px;

    }


    .start {
        max-width: 200px
    }

`
