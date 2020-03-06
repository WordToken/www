import styled from 'styled-components'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from '../components/logo'

const Header = ({ siteTitle }) => (
 <HeaderElement>
    <Link to="/"><Logo /></Link>
    <ListElement>
      <li><Link to="/blog">Blog</Link><span>•</span></li>
      <li><Link to="/docs">Docs</Link><span>•</span></li>
      <li><Link to="/learn">Learn</Link><span>•</span></li>
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

     > a {
      height: 80px;
    }

    img {
      max-width: 85px;
      margin: 0;
    }
`
const ListElement = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  
  a {
    text-decoration: none;
    color: #000;

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
      background: #38b6ff;
      border-radius: 3px;
      width: 80px;
      height: 30px;

      a {
          color: #fff;
          font-weight: 600;
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
