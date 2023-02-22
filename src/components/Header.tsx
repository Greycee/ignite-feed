import styles from './Header.module.css'

import logo from '../assets/logo.svg'

export default function Header() {
  const { header } =  styles

  return(
    <header className={header}>
      <img src={logo} />
    </header>
  )
}