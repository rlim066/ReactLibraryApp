import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar"> 
      <h1>Library Management System</h1>

      <div className="links">

      <Link to="/">Home</Link>
        <Link to="/AddBook" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Add Book</Link>

    

      </div>

    </nav>
    );
}
 
export default Navbar ;