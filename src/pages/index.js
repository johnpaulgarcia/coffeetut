import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  FaGulp
} from 'react-icons/fa';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Coffee Bean</h1>
    <p>Welcome</p>  
    <FaGulp /> 
  </Layout>
)

export default IndexPage
