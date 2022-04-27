import React from 'react'
import { Dropdown } from 'semantic-ui-react'


export default function CartSummary() {
  return (
    <div>

      <Dropdown item text='Sepetiniz'>
        <Dropdown.Menu>
          <Dropdown.Item>Ürün 1</Dropdown.Item>
          <Dropdown.Item>Ürün 2</Dropdown.Item>
          <Dropdown.Item>Ürün 3</Dropdown.Item>
          <Dropdown.Divider></Dropdown.Divider>
          <Dropdown.Item as>Sepete Git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </div>
  )
}
