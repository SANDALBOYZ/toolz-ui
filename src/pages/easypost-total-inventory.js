import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { get } from 'lodash'

import Layout from 'components/layout'

const STOCKZ_API_URL =
  process.env.GATSBY_STOCKZ_API_URL || 'http://localhost:3000'

const EasyPostTotalInventory = () => {
  const [inventoryMessage, setInventoryMessage] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchTotalInventory = () => {
    setLoading(true)

    axios
      .get(`${STOCKZ_API_URL}/getTotalInventoryQuantity`)
      .then(response => {
        // console.log(response)
        setInventoryMessage(get(response, 'data.message'))
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    console.log('running `useEffect`')
    fetchTotalInventory()
  }, [])

  return (
    <Layout>
      {loading && <div>Loading...</div>}
      <div>{inventoryMessage}</div>
    </Layout>
  )
}

export default EasyPostTotalInventory
