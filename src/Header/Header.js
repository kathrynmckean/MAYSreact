import logo from './logo.svg';
// import { Navbar } from '@mui/material';
import { Grid } from '@mui/material';
function Header () {
    return (
        <header>
            {/* <img src={logo} className="logo" alt="logo" />
       
                <div className="phone">(214)123-2345</div>
                <div className='nav'>
                <button>Services</button>
                <button>Booking</button>
                <button>About Us</button>
                    </div> */
 

/* <img src={logo} className="logo" alt="logo" />
<nav>
    <button>Services</button>
    <button>Booking</button>
    <button>About</button>
</nav> */

                    }
                   <Grid container spacing={2}>
    <Grid item xs={4}>
      {/* <p>blank</p> */}
    </Grid>
    <Grid item xs={4}>
    <img src={logo} className="logo" alt="logo" />
    </Grid>
    <Grid item xs={4}>
        <Grid className='nav' container spacing = {2}>
            <Grid item xs={12}>
                <button>(214)123-2345</button>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing = {2}>
                    <Grid item xs={4}>
                        <button>Services</button>
                    </Grid>
                    <Grid item xs={4}>
                        <button>Booking</button>
                    </Grid>
                    <Grid item xs={4}>
                        <button>About</button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
</Grid>


        </header>

    )

}

export default Header;