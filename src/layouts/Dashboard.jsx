import React from 'react'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

export default function Dashboard() {
  return (
    <div>

      <Grid columns={2}>

        <GridRow>

        <GridColumn width={3}>
            <Categories />
          </GridColumn>

          <GridColumn width={13}>
            <ProductList />
          </GridColumn>

        </GridRow>

      </Grid>



    </div >
  )
}
