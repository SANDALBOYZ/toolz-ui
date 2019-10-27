import React from 'react'
import { Link } from 'gatsby'
import { UnorderedList, ListItem } from 'carbon-components-react'
import Layout from 'components/layout'
import Image from 'components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <UnorderedList>
      <ListItem>
        <Link to='/sync-inventories'>
          Sync Inventories Between EasyPost and Shopify
        </Link>
      </ListItem>
      <ListItem>
        <Link to='/easypost-order-return-status'>
          EasyPost Order Return Status
        </Link>
      </ListItem>
      <ListItem>
        <Link to='/easypost-order-return-status'>
          Delete Products on EasyPost
        </Link>
      </ListItem>
      <ListItem>
        <Link to='/easypost-order-return-status'>
          Get Total Inventory Quantity at EasyPost
        </Link>
      </ListItem>
    </UnorderedList>
  </Layout>
)

export default IndexPage
