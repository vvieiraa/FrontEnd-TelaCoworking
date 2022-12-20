import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: row;

    button {
        width: 100%;
        height: 3.0975rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #060606;
        border-radius: 6px;

        :hover {
            box-shadow: 0px 5px 10px -5px;
            background-color: rgba(darken(dodgerblue, 40%));
            resize: 1.03;
        }

        :active {
        box-shadow: 0px 4px 8px;
        background-color: rgba(darken(dodgerblue, 30%));
        resize: .98;
        }
    }

    img {
        width: 24px;
        height: 24px;
    }

    p {
        font-family: 'Space Grotesk';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.625rem;
        color: #FFFFFF;
    }

` 
