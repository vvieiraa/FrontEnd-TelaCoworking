import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .Box {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
    }

    .espaco1 {
        width: 20%;
        height: 100%;
    }

    .espaco2 {
        width: 60%;
        height: 100%;
    }

    .espaco3 {
        width: 20%;
        height: 100%;
    }

    .espaco1 {
        width: 20%;
        height: 100%;
    }

    .espaco2 {
        width: 60%;
        height: 100%;
    }

    .espaco3 {
        width: 20%;
        height: 100%;
    }

    .Brand {
        margin-top: 3vh;
    }

    .Welcome {
        margin-top: 7vh;
    }

    .Google {
        margin-top: 2.5vh;
    }

    .Email {
        margin-top: 2.5vh;
    }

    .Forgot {
        margin-top: 2.5vh;
    }

    .ButtonLogin {
        margin-top: 2.5vh;
    }

    @media  (max-width: 720px) {

        .espaco1 {
            width: 5%;
            height: 100%;
        }

        .espaco2 {
            width: 90%;
            height: 100%;
        }

        .espaco3 {
            width: 5%;
            height: 100%;
        }

    }

` 