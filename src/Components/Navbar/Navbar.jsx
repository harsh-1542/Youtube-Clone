import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar'
import './Navbar.css'
import menu_icon from '../../assets/svgs/menu.svg'
import logo from '../../assets/svgs/logo_youtube.svg'
import search_icon from '../../assets/svgs/search.svg'
import account from '../../assets/svgs/account.svg'
import notification from '../../assets/svgs/notification.svg'
import upload_icon from '../../assets/svgs/studio.svg'
import wallet from '../../assets/svgs/wallet.svg'


const Navbar = ({ setSidebar }) => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu-icon' onClick={() => { setSidebar(prev => prev === false ? true : false) }} src={menu_icon} alt='ffaff' />

        <Link to='/'>
          <img className='logo' src={logo} alt='helo' />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className='search-box flex-box'>

          <input type='text' placeholder='Search' />
          <button>

            <img src={search_icon} alt='Search' />
          </button>
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={notification} alt="" />
        <img src={upload_icon} alt="" />
        <img src={wallet} alt="" />
        <img src={account} className='user-icon' alt="" />
      </div>

    </nav>
  )
}

export default Navbar