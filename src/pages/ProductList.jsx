import React, { useState, useEffect } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function ProductList() {

  const [products, setProducts] = useState([])
  useEffect( () => {
    let productService = new ProductService()
    productService.getProducts()
    .then(result => setProducts(result.data.data))
  })

  return (
    <div>

      <Table celled>
        <Table.Header>

          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyat</Table.HeaderCell>
            <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
          </Table.Row>

        </Table.Header>

        <Table.Body>
          {
            products.map(products => (
              <Table.Row>
              <Table.Cell>{products.id}</Table.Cell>
              <Table.Cell>{products.productName}</Table.Cell>
              <Table.Cell>{products.unitPrice}</Table.Cell>
              <Table.Cell>{products.stok}</Table.Cell>
              <Table.Cell>{products.quantityPerUnit}</Table.Cell>
              <Table.Cell>{products.category.categoryName}</Table.Cell>
            </Table.Row>
             ))
          }



        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='6'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>


    </div>
  )
}
