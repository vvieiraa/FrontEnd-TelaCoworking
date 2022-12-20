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
        border: 1px solid #D9D9D9;
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
        width: 18px;
        height: 18px;
    }

    p {
        font-family: 'Space Grotesk';
        font-style: normal;
        font-weight: 400;
        font-size: 0.9375rem;
        line-height: 1.625rem;
        color: #000000;
        margin-left: 16px;
    }

` 
