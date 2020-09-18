import React from "react";
import { Navbar, Nav, NavbarBrand} from "reactstrap";

const Header = (props) => {
  return (
    
    <header>
    <Navbar className='header'>
        <NavbarBrand href='/'><p>WelCoMe tO My bi0!</p></NavbarBrand>
        <Nav className='ml-auto' navbar >
            
            
        </Nav>
    </Navbar>
</header>
    
  );
};

export default Header;

// import React, { useState } from "react";
// import { Navbar, NavbarBrand, Nav, NavLink } from "reactstrap";
// import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

// const Header = (props) => {
//   return (
//     <header>
//       <Navbar className="headerStyling">

//         <Nav className="ml-auto" navbar>

//       <Breadcrumb>
//         <BreadcrumbItem><a href="https://github.com/dhelmy22" target="_blank">GitHub</a></BreadcrumbItem>
//         <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
//         <BreadcrumbItem active>Data</BreadcrumbItem>
//       </Breadcrumb>
//       </Nav>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;
