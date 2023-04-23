import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
    return (
        <nav class="navbar navbar-light bg-light">
        <form class="container-fluid justify-content-start">
          <button class="btn btn-outline-success me-2" type="button">Main button</button>
          <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
        </form>
      </nav>
    );
  };
  export default Navbar;
  