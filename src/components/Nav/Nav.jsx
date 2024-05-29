import React from 'react'
import Link from 'next/link'
import style from './Nav.module.scss'

const Nav = () => (
  <nav className={style.nav}>
    <ul>
      <li>
        <Link href='/'>
          Home
        </Link>
      </li>
    </ul>

   
  </nav>
)

export default Nav
