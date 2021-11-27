import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                
                    <Navbar.Brand ><Link to="/">Simple E-commerce</Link></Navbar.Brand>
                    <Nav className="me-auto navbar_warapper">
                        <Link to="/products">Products List</Link>
                        <Link to="/add">Add Product</Link>
                        <Link to="/update">update Product</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </Nav>
                
            </Navbar>

        </div>
    );
}

export default Header;