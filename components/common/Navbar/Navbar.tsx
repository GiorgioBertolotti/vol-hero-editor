import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import firebase from 'firebase'
import React, { FunctionComponent } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button, ButtonType } from '../Button'

interface INavbarProps {
  hideActions?: boolean
}

const Navbar: FunctionComponent<INavbarProps> = (props) => {
  const { hideActions = false } = props

  const [user] = useAuthState(firebase.auth())

  const renderActions = (): JSX.Element => {
    if (hideActions) {
      return <div />
    } else {
      return user ? (
        <>
          <Button type={ButtonType.PRIMARY} icon={faUser} />
          <Button type={ButtonType.DANGER} icon={faSignOutAlt} />
        </>
      ) : (
        <Button label="REGISTRATI" type={ButtonType.PRIMARY} />
      )
    }
  }

  return (
    <header>
      <nav className="w-full px-12 py-10 flex flex-row justify-between items-center">
        <div className="flex items-center">
          <img src="./vol_logo.png" alt="logo" height="75px" width="390px" className="mr-6" />
          <p className="text-5xl font-bold text-green-500">Hero Editor</p>
        </div>
        {renderActions()}
      </nav>
    </header>
  )
}

export default Navbar
