import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom';
import {useStateValue} from './StateProvider'
import {auth} from './firebase';


function Header() {

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }

    }

    const[{basket , user}, dispatch] = useStateValue();

    return (
        <div  className="header">
            <Link to ="/">
            <img 
            className=" header_logo"
            src="https://nickiekrommingahill.com/wp-content/uploads/2020/05/white-amazon-logo-png-6.png" 
            alt="" /></Link>
            <div className="header_search">
                <input
                className="header_searchInput"
                type="text" />
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <Link to = {!user && '/login'}>
                <div className="header_option" onClick={handleAuthentication}>
                    <span className = 'header_optionLineOne'>
                        Hello {user? user.email : 'Guest'}
                    </span>
                    <span className = 'header_optionLineTwo'>
                        {user? 'Sign Out' : 'Sign In'}
                    </span>

                </div>
                </Link>
                <div className="header_option">
                <span className = 'header_optionLineOne'>
                        Returns
                    </span>
                    <span className = 'header_optionLineTwo'>
                        & Orders
                    </span>
                    
                </div>
                <div className="header_option">
                <span className = 'header_optionLineOne'>
                        Your
                    </span>
                    <span className = 'header_optionLineTwo'>
                        Prime
                    </span>
                    
                </div>
                <Link to = "/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header_optionLineTwo      header_basketCount">{basket?.length}</span>
                </div> 
                </Link>
            </div>

        </div>
    )
}

export default Header
