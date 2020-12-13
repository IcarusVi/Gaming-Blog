import SearchResult from './searchResults'
import { makeStyles } from '@material-ui/core/styles'


import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
    },
    text: {
        textAlign: 'center'
    },

    img: {
        width: '80%',
        height: '100%'
    },

}))



const AuthorPage = ({ author }) => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root} item xs={9}>
            <Grid item xs={12}>
                <h2 style={{ textAlign: 'center' }} >{author.FirstName} {author.LastName}</h2>
            </Grid>
            <Grid item xs={12} sm={6}>
                <img className={classes.img} src='https://pbs.twimg.com/profile_images/1267537529697419264/daH5WOtT_400x400.jpg' />
            </Grid>
            <Grid item xs={12} sm={6}>
                <a className={classes.descrip}>
                    {author.Description}
                </a>
            </Grid>

            <Grid item xs={12}>
                <h2 style={{ textAlign: 'center' }}>Recent posts</h2>

            </Grid>
            <Grid item xs={12}>
                
                <Grid  container justify="center">
                    {author.blogPosts.map((post, i) => {
                        return (
                            <SearchResult key={i} article={post} />
                        )
                    })}
                </Grid>

            </Grid>

        </Grid>

    )
}

export default AuthorPage
{/* <Grid item xs={12}>
                <h2 className={classes.text}>Next Author</h2>
            </Grid>
            <Grid item xs={12}>
                <img className='fixImg' src='https://pbs.twimg.com/profile_images/1267537529697419264/daH5WOtT_400x400.jpg' />
            </Grid>
            <Grid item xs={12}>
                <div className='placeHolder'></div>
            </Grid>*/}
