import React from "react";
import ModalAlert from "./ModalALert";

function Header() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <header>
      <nav id='navbar'>
        <div className='container'>
          <img id='logo' src='lo.png' alt='' />
          <h1>Users</h1>
          <ul>
            <li>
              <button onClick={() => setModalShow(true)}>Add User</button>
            </li>
            <li>
              <button onClick={() => setModalShow(true)}>Remove User</button>
            </li>
          </ul>
          <ModalAlert show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
