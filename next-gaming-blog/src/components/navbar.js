import { Grid, TextField } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { fade, makeStyles } from '@material-ui/core/styles';
import Link from "next/link"
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
    searchBar:{
        display:'flex',
        flexDirection:'row',
        
    }


}))

const NavBar = () => {
    const classes = useStyles()
    return (
        <Grid item xs={12}>
            <AppBar className={classes.root} position="static">
                <Toolbar className={classes.toolBar}>
                    <div className={classes.actionBar}>
                        <div className="link-block">Authors</div>
                        <Link href="/">
                            <div className='logo-placeholder'>Logo Placeholder</div>
                        </Link>
                        <div className="link-block">Gaming</div>
                    </div>
                    <MenuIcon className={classes.menu} />

                    <div className='search-bar'>
                        <SearchIcon />
                        <TextField style={{backgroundColor:'orange'}} label="Standard"/>
                    </div>

                </Toolbar>
            </AppBar>
        </Grid>

    )
}
export default NavBar