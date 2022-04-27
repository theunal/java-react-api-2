import React from 'react'
import ProductList from '../pages/ProductList';
import Categories from './Categories'
// import ProductList from '../pages/ProductList'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './../pages/ProductDetail';


export default function Dashboard() {
  return (
    <div>

      <Grid columns={2}>

        <GridRow>

          <GridColumn width={3}>
            <Categories />
          </GridColumn>

          <GridColumn width={13}>


            <Routes>
              {/* component yazınca getirmiyor o yüzden element  */}
              <Route  path="/" element={<ProductList />} />
              <Route exact path="/products" element={<ProductList />} />
              <Route exact path="/products/1" element={<ProductDetail />} />
            </Routes>


          </GridColumn>

        </GridRow>

      </Grid>



    </div >
  )
}
