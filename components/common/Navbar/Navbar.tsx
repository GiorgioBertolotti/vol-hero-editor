import { FunctionComponent } from 'react'

interface INavbarProps {
  hideActions?: boolean
}

const Navbar: FunctionComponent<INavbarProps> = (props) => {
  const { hideActions = false } = props

  const renderActions = (): JSX.Element => {
    if (hideActions) {
      return <div />
    } else {
      return (
        <div>
          <button />
        </div>
      )
    }
  }

  return (
    <nav className="w-full px-12 py-10 flex flex-row justify-between">
      <div className="flex items-center">
        <img src="./vol_logo.png" alt="logo" height="75px" width="390px" className="mr-6" />
        <h1 className="text-5xl font-bold text-green-500">Hero Editor</h1>
      </div>
      {renderActions()}
    </nav>
  )
}

export default Navbar
