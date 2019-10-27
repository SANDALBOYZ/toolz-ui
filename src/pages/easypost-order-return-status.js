import React from 'react'
import { DataTable, DataTableSkeleton } from 'carbon-components-react'
import { Launch16 } from '@carbon/icons-react'

import Layout from 'components/layout'

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader
} = DataTable

const HEADERS = [
  {
    header: 'Name',
    key: 'name'
  },
  {
    header: 'Origin',
    key: 'origin'
  },
  {
    header: 'Items',
    key: 'items'
  },
  {
    header: 'Tracking',
    key: 'tracking'
  },
  {
    header: 'Status',
    key: 'status'
  }
]

const rows = [
  {
    id: '1',
    name: 'Ryan Chang',
    origin: 'Los Angeles, 90034',
    items: 'ChromaColor | Mandarin 10',
    tracking: '9000900090009000',
    status: 'Alert'
  },
  {
    id: '2',
    name: 'Ryan Chang',
    origin: 'Los Angeles, 90034',
    items: 'ChromaColor | Mandarin 10',
    tracking: '9000900090009000',
    status: 'Alert'
  }
]

const IndexPage = () => (
  <Layout>
    <DataTableSkeleton
      columnCount={5}
      compact={false}
      headers={['Name', 'Origin', 'Items', 'Tracking', 'Status']}
      rowCount={5}
      zebra={false}
    />
    <DataTable
      rows={rows}
      headers={HEADERS}
      render={({ rows, headers, getHeaderProps }) => (
        <TableContainer title='Order Returns Status'>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map(header => (
                  <TableHeader key={header.key} {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  {row.cells.map(cell => {
                    if (cell.id.includes('tracking')) {
                      const uspsLink = `https://tools.usps.com/go/TrackConfirmAction?tRef=fullpage&tLc=3&text28777=&tLabels=${
                        cell.value
                      }`

                      return (
                        <TableCell key={cell.id}>
                          {cell.value}{' '}
                          <a
                            href={uspsLink}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <Launch16 />
                          </a>
                        </TableCell>
                      )
                    }

                    return <TableCell key={cell.id}>{cell.value}</TableCell>
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  </Layout>
)

export default IndexPage
