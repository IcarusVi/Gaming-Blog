import { Grid, IconButton, List, ListItem, TextField } from '@material-ui/core';
import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { fade, makeStyles } from '@material-ui/core/styles';
import Link from "next/link";
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Drawer from '@material-ui/core/Drawer';



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
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            display: 'flex'

        }
    },
    list: {
        backgroundColor: 'black',
        color: 'white'

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


    const [open, setOpen] = useState(false)
    const [hide, setHide] = useState(true)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(open)

    }


    const toggleSearch = () => {
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
            <AppBar className={classes.root} position="relative">
                <Toolbar className={classes.toolBar}>
                    <IconButton
                        edge="start"
                        className={classes.menu}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />

                    </IconButton>
                    <div className={classes.actionBar}>
                        <Link href="/authors">
                            <div className="link-block">Authors</div>
                        </Link>


                        <Link href="/">
                            <div className='logo-placeholder'>Home</div>
                        </Link>

                        <Link href="/gaming">
                            <div className="link-block">Gaming</div>
                        </Link>
                    </div>



                    <div className={classes.searchBar}>
                        <SearchIcon onClick={toggleSearch} fontSize="large" />
                    </div>

                </Toolbar>
                <TextField fullWidth={true} style={{ display: hide ? 'none' : 'block' }} className={classes.searchField} label="Search" />
            </AppBar>
            <Drawer open={open} anchor="top" onClose={toggleDrawer(false)}>

                <List
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                    className={classes.list}
                >
                    <ListItem>
                        <Link href="/authors">
                            Authors
                                </Link>
                    </ListItem>

                    <ListItem>
                        <Link href="/">
                            Home
                                </Link>
                    </ListItem>

                    <ListItem>
                        <Link href="/gaming">
                            Gaming
                                </Link>

                    </ListItem>

                </List>
            </Drawer>
        </Grid>

    )
}
export default NavBar