import styled from 'styled-components'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fff`,
      marginBottom: `1.45rem`,
    }}
  >
    <ListElement>
      <li><Link to="/blog">Blog</Link><span>•</span></li>
      <li><Link to="/docs">Docs</Link><span>•</span></li>
      <li><Link to="/learn">Learn</Link><span>•</span></li>
      <li><a href="http://core.wordtoken.com">Sign In</a></li>
    </ListElement>
  </header>
)




export default Header



const ListElement = styled.ul`
  display: flex;
  padding: 1%;
  align-items: center;
  justify-content: flex-end;
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
