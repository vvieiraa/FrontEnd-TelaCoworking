import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        width: 18px;
        height: 18px;
    }

    p {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 400;
        font-size: 0.935rem;
        line-height: 1.6875rem;
        color: #1D1D1B;
        margin-left: 8px;
    }

    @media  (max-width: 720px) {

        img {
        width: 12px;
        height: 12px;
        }

        p {
            font-size: 1rem;
            line-height: 1.6875rem;
        }
}

` 
