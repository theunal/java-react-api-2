import React, { useState } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignIn from './SignIn'
import SignOut from './SignOut';
import { useNavigate } from 'react-router';

export default function Nav() {

  const [isAuth, setIsAuth] = useState(false)

  
  const navigate = useNavigate()

  function handleSignOut() {
    setIsAuth(false)
    navigate("/")
  }
  function handleSignIn() {
    setIsAuth(true)
  }

  return (
    <div>
      <Menu inverted size='tiny'>
        <Container>
          <Menu.Item
            name='home'
          />
          <Menu.Item
            name='messages'
          />

          <Menu.Menu position='right'>

            <Menu.Item>
              <CartSummary />
            </Menu.Item>

            <Menu.Item>
              {
                isAuth ? <SignIn signOut={handleSignOut} /> : <SignOut signIn={handleSignIn} />
              }
            </Menu.Item>




          </Menu.Menu>

        </Container>

      </Menu>

    </div>
  )
}
