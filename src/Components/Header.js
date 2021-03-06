import React from "react";
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components"


const SHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: inherit;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display:flex;
    list-style:none;
    margin-left:10%;
    height: 100%;
    width: 25%;
    justify-content: space-around;
    align-items: center;
`;

const Item = styled.li`
    width: 100%;
    height: 100%;
    font-size: 1rem;
    font-weight:500;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid ${props =>(props.current? "orange": "transparent") };
    transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)``;



const Header = ({location:{pathname}}) => (
        <SHeader>
            <List>
                <Item current={ pathname === "/"}>
                    <SLink to="/">Home</SLink>
                </Item>
                <Item current={ pathname === "/films"}>
                    <SLink to="/films">Films</SLink>
                </Item>
                <Item current={ pathname === "/tv"}>
                    <SLink to="/tv">Series</SLink>
                </Item>
                <Item current={ pathname === "/search"}>
                    <SLink to="/search">Search</SLink>
                </Item>
            </List>
        </SHeader>
)

export default withRouter(Header)