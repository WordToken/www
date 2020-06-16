import styled from 'styled-components'
import { Link } from "gatsby"
import React from "react"
import Logo from 'src/components/common/Logo'

const Header = ({ siteTitle }) => (
 <HeaderElement>
    <Link to="/"><Logo /></Link>
    <ListElement>
      <li><Link to="/blog">Blog</Link><span>•</span></li>
      <li><a href="http://core.wordtoken.com">Sign In</a></li>
    </ListElement>
  </HeaderElement>
)




export default Header


const HeaderElement = styled.header`
    background: #fff;
    border-bottom: 1px solid #f8f8f8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    padding: 0 5%;
    max-width: 1600px;
    margin: 0 auto;
    min-height: 70px;

     > a {
       text-decoration: none;
    }
`
const ListElement = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  color: #000;
  font-weight: 700;
  
  a {
    text-decoration: none;
    color: #000;
    font-weight: 700;

    &:hover {
      color: #1C7AE4;
    }
  }

  li {
    list-style: none;
    font-size: 16px;
    text-transform: uppercase;
    font-family: 'acherus-militant-1-light-otf';
    margin: 0;

    :last-child {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #1C7AE4;
      border-radius: 3px;
      width: 80px;
      height: 30px;

      a {
          color: #fff;
          font-weight: 700;
          line-height: normal;
          padding-top: 2px;
      }
    }
  }

  span {
    margin: 0 10px;
  }

  button {
    text-transform: uppercase;
    color: #fff;
    font-weight: 500;
    border-radius: 3px;
    cursor: pointer;
  }
`
