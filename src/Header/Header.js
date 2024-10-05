import logo from './logo.svg';
// import { Navbar } from '@mui/material';
import { Grid } from '@mui/material';
function Header () {
    return (

        <header>
            {/* <div className="logoContainer"> */}
               <img src={logo} className="logo" alt="logo" /> 
            {/* </div> */}

            <div className="navContainer">
                <div className="phone">(214)123-2345</div>
                <nav >
                    <button className="navButton">Services</button>
                    <button className="navButton">Booking</button>
                    <button className="navButton">About Us</button>
                </nav>
            </div>
        </header>

    )

}

export default Header;