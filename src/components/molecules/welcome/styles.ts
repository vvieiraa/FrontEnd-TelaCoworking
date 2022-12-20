import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    h1 {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 800;
        font-size: 1.6875rem;
        line-height: 3.0625rem;
        color: #000000;
    }

    p {
        font-family: 'Space Grotesk';
        font-style: normal;
        font-weight: 400;
        font-size: 0.9375rem;
        line-height: 1.625rem;
        color: #000000;
        margin-top: 5px;
    }

    @media  (max-width: 1200px) {
        h1 {
            font-size: 1.2rem;
            line-height: 1.633333rem;
        }
           
        p {
            font-size: 0.793rem;
            line-height: 1.0309rem;
        }
}

` 