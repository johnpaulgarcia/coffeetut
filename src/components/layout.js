/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import '../components/bootstrap.min.css'
import Navbar from './globals/Navbar';
import "./layout.css"

const Layout = ({ children }) => (
  <>
  <Navbar />
  {children}
  </>
  )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
