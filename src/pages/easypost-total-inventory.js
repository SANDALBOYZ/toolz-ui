import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { get } from 'lodash'

import Layout from 'components/layout'

const STOCKZ_API_URL =
  process.env.GATSBY_STOCKZ_API_URL || 'http://localhost:3000'

const EasyPostTotalInventory = () => {
  const [inventoryMessage, setInventoryMessage] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchTotalInventory = () => {
    setLoading(true)

    axios
      .get(`${STOCKZ_API_URL}/getTotalInventoryQuantityz`)
      .then(response => {
        setInventoryMessage(get(response, 'data.message'))
      })
      .catch(error => {
        console.log('Error occurred while fetching inventory quantity from SANDALBOYZ API.', error)
        setError(true)
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
      {error && <div>Something broke!</div>}
      <div>{inventoryMessage}</div>
    </Layout>
  )
}

export default EasyPostTotalInventory
