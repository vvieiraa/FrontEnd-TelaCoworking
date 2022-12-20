import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    div{
        display: flex;
        flex-direction: column;
        justify-content: end;
        margin-left: 5px;
    }

    @media  (max-width: 720px) {
    display: none;
}

` 