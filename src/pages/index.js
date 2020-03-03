import React from "react"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Logo from "../components/logo"
import { Input } from '@material-ui/core';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Logo />
    <Input />
  </Layout>
)

export default IndexPage
