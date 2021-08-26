// First way
import { Navbar, Nav } from 'react-bootstrap'

// Second way
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// this last import method is slightly more efficient for react-bootstrap

// import {} is for components that are not exported as DEFAULT

const MyNavbar = ({ title, color }) => {
    // props is an object
    // {
    //   title: 'Strivestaurant'
    //   color: 'dark
    // }
    return (
        <Navbar onClick={(e) => console.log('clicked!', e)} collapseOnSelect expand="lg" bg={color} variant={color}>
            <Navbar.Brand href="#home">{title} - Strive for food</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#features">Menu</Nav.Link>
                    <Nav.Link href="#pricing">Reservation</Nav.Link>
                    <Nav.Link href="#pricing">Find us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar