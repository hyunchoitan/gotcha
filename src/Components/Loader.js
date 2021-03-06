import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 10vh;
    font-size: 3rem;
`


const Loader = () => (
    <Container>
        <span role="img" aria-label="Loading"> ⏳ </span>
    </Container>
)

export default Loader;


