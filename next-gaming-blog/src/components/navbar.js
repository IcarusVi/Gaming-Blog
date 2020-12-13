import { Grid, TextField } from '@material-ui/core';
import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { fade, makeStyles } from '@material-ui/core/styles';
import Link from "next/link";
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';



const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 10,
        backgroundColor: '#000000',
        color: 'white',



    },
    toolBar: {
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            display: "flex",
            justifyContent: 'space-between'
        },

    },
    actionBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            display: "none"
        },

    },
    menu: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'flex'

        }
    },
    searchBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'

    },
    searchField: {
        backgroundColor: 'orange',


    }


}))

const NavBar = () => {
    const [hide, setHide] = useState(true)
    const toggleSearch = (e) => {
        if (hide) {
            setHide(false)
        }
        else {
            setHide(true)
        }
    }

    const classes = useStyles()
    return (
        <Grid item xs={12}>
            <AppBar className={classes.root} position="static">
                <Toolbar className={classes.toolBar}>
                    <div className={classes.actionBar}>
                        <Link href="/authors">
                            <div className="link-block">Authors</div>
                        </Link>
                        
                        
                        <Link href="/">
                            <div className='logo-placeholder'>Logo Placeholder</div>
                        </Link>
                        
                        <Link href="/gaming">
                            <div className="link-block">Gaming</div>
                        </Link>
                    </div>
                    <MenuIcon className={classes.menu} />

                    <div className={classes.searchBar}>
                        <SearchIcon onClick={toggleSearch} fontSize="large" />
                    </div>

                </Toolbar>
                <TextField fullWidth={true} style={{ display: hide ? 'none' : 'block' }} className={classes.searchField} label="Search" />
            </AppBar>
        </Grid>

    )
}
export default NavBar