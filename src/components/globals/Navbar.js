import React,{useState} from 'react'
import {Link} from 'gatsby';
import Logo from '../../images/logo.svg';
import {
    FaCartArrowDown
} from 'react-icons/fa';


export default function Navbar() {

    // states
    const [navOpen,setNavOpen] = useState(false);
    const [css,setCss] = useState('collapse navbar-collapse');
    const [links,setLinks] = useState([{
        id: 1,
        path: '/',
        text: 'home'
    },{
        id: 2,
        path: '/about',
        text: 'about'
    }]);

    // functions

    const navBarHandler = () => {
        if(navOpen){
            setNavOpen(false);
            setCss("collapse navbar-collapse");
        }
        else {
            setNavOpen(true);
            setCss("collapse navbar-collapse show");
        }
    }

    return (
       <nav className="navbar navbar-expand-sm bg-light navbar-light">
          <Link to="" className="navbar-brand">
              <img src={Logo} alt="Logo" />
          </Link>
          <button 
            className="navbar-toggler"
            type="button"
            onClick={() => navBarHandler()}
          >
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className={css}>
              <ul className="navbar-nav mx-auto">
                   {
                       links.map(link=>(
                           <li 
                           key={link.id} 
                           className="nav-item text-capitalize">
                               <Link className="nav-link text-capitalize" to={link.path}>
                                {link.text}
                                </Link>
                         </li>
                       ))
                   }

                   <li className="nav-item ml-sm-5">
                        <FaCartArrowDown 
                            className="cart-icon"
                        />
                   </li>
              </ul>
          </div>
       </nav>
    )
}
