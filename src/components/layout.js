/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import {
  Content,
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink
} from 'carbon-components-react/lib/components/UIShell'

import './layout.scss'

const Footer = styled.footer`
  margin-top: 20px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header>
        <SkipToContent />
        <HeaderName href='/' prefix=''>
          {data.site.siteMetadata.title}
        </HeaderName>
        <HeaderNavigation>
          <HeaderMenuItem href='/repos'>Repositories</HeaderMenuItem>
          <HeaderMenuItem href='/repos'>Repositories</HeaderMenuItem>
          <HeaderMenuItem href='/repos'>Repositories</HeaderMenuItem>
        </HeaderNavigation>
        <HeaderGlobalBar />
      </Header>

      <Content>
        <main>{children}</main>
        <Footer>© SANDALBOYZ</Footer>
      </Content>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
