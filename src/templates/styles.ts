import styled from "styled-components";
import ImgCW from '../assets/fotoCoworking.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .box{
        width: 80%;
        height: 80vh;
        display: flex;
        flex-direction: row;
        background-color: #F5F5F5;
        border-radius: 10px;
        box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.5);
    }

    .box-esquerda{
        width: 50%;
        height: 100%;
        background-color: blue;
        background-image: url(${ImgCW});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;
        border-radius: 10px 0px 0px 10px;
    }

    .box-direita{
        width: 50%;
        height: 100%;
    }

    @media  (max-width: 1024px) {

        background-image: url(${ImgCW});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;
        opacity: 0.90;

        .box{
            opacity: 0.95;
        }

        .box-esquerda{
            display: none;
        }

        .box-direita{
            width: 100%;
        }
}

`