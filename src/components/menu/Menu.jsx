import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavMenu from './navMenu/NavMenu'
import Basket from './basket/Basket'
import Modal from './modal/Modal'
function Menu() {
  const [modal, setModal] = useState(true)
  const location = useLocation()
  return (
    <div>
      {location.pathname !== "/menu/featured" && <NavMenu/>}
      <div className="d-flex">
        <Outlet />
      </div>
      {location.pathname == "/menu" && modal ?location.pathname == "/menu" && <Basket modal={modal} setModal={setModal} /> :location.pathname == "/menu" && <Modal setModal={setModal} />}

    </div>
  )
}

export default Menu
