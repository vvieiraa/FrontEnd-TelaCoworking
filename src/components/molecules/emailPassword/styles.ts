import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    .password {
        margin-top: 15px;
    }

    input {
        all: unset;
        margin-top: 11px;
        border-bottom: 1px solid #E0E0E0;
        font-family: 'Space Grotesk';

        ::placeholder {
            font-family: 'Space Grotesk';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.6875rem;
            color: #000000;
        }
    }

` 
