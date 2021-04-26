import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import firebase from 'firebase'
import React, { FunctionComponent } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button, ButtonType } from '../Button'
import Link from 'next/link'
interface INavbarProps {
  hideActions?: boolean
}

const Navbar: FunctionComponent<INavbarProps> = (props) => {
  const { hideActions = false } = props

  const [user] = useAuthState(firebase.auth())

  const logout = (): void => {
    firebase.auth().signOut()
  }

  const renderActions = (): JSX.Element => {
    if (hideActions) {
      return <div />
    } else {
      return user ? (
        <div>
          <Button buttonType={ButtonType.PRIMARY} icon={faUser} className="mr-2" />
          <Button buttonType={ButtonType.DANGER} icon={faSignOutAlt} onClick={logout} />
        </div>
      ) : (
        <Link href="/registration">
          <Button label="REGISTRATI" buttonType={ButtonType.PRIMARY} />
        </Link>
      )
    }
  }

  return (
    <header className="z-50">
      <nav className="w-full px-12 py-10 flex flex-row justify-between items-center">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <img src="./vol_logo.png" alt="logo" height="75px" width="390px" className="mr-6" />
            <p className="text-5xl font-bold text-green-500">Hero Editor</p>
          </div>
        </Link>
        {renderActions()}
      </nav>
    </header>
  )
}

export default Navbar
