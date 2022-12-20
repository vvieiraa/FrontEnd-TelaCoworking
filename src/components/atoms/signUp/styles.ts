import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 2vh;

    p{
        font-family: 'Space Grotesk';
        font-style: normal;
        font-weight: 400;
        font-size: 0.8rem;
        color: #000000;
    }

    a{
        font-family: 'Space Grotesk';
        font-style: normal;
        font-weight: bold;
        font-size: 0.8rem;
        text-decoration-line: underline;
        margin-left: 3px;
        color: #000000;
    }
`