import React  from 'react';
import { Link, useNavigate} from 'react-router-dom';

const Nav = ()=>{
    const auth = localStorage.getItem('users');
    const navigate = useNavigate();

    const logout=()=>{
        localStorage.clear();
        navigate('/signup');
    }

    return (
        <div>
            <img alt="LOGO" src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" className='logo'/>
            {
                auth ? < ul className='nav-ul'>

                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/add">Add Product</Link></li>
                    <li><Link to="/update">Update Product</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li> <Link onClick={logout} to="/signup">Logout</Link> </li>
                </ul> :
                    <ul className='nav-ul nav-right' >
                        <li><Link to="/signup">Sign Up</Link> </li>
                        <li><Link to="/login">Login</Link></li>

                    </ul>
            } 
        </div>
    );
}

export default Nav;