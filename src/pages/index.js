import React from "react"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import { Input } from '@material-ui/core';


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Logo from "../components/logo"
import Hero from '../components/hero'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage
