import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'

export default function Nav() {
  return (
    <div>


      <Menu inverted>
        <Container>
        <Menu.Item
          name='home'
        />
        <Menu.Item
          name='messages'
        />

        <Menu.Menu position='right'>
          <Menu.Item>
          <CartSummary/>
          </Menu.Item>
        

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>

        </Container>
      
      </Menu>

    </div>
  )
}
