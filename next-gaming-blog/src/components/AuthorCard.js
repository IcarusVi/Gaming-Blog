import { CardContent, CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles'
import "fontsource-roboto"
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'rgba(252, 163, 17, 1)',
        color: 'black',
        fontFamily: "Roboto",
        display: "flex",
        flexDirection: 'row',
        maxHeight: 200,
        //width: "fit-content",
        marginTop:10,

        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            maxHeight: "none",
        },
        '@media (max-width: 410px)': {
            width: 'auto',
            margin:'auto'

        }
    },
    content: {
        padding: 0,
        paddingLeft: 18,
        [theme.breakpoints.down('md')]: {
            maxWidth: 400
        },
        "& h1": {
            fontWeight: "medium",
            [theme.breakpoints.up('xs')]: {
                fontSize: 16,

            },

            [theme.breakpoints.up('md')]: {
                fontSize: 20,

            },

            [theme.breakpoints.up('lg')]: {
                fontSize: 32,

            }
        },

        "& p": {
            display: "inline",
            [theme.breakpoints.up('xs')]: {
                fontSize: 12,

            },

            [theme.breakpoints.up('md')]: {
                fontSize: 22,

            }
        },

        "& h2": {
            [theme.breakpoints.up('xs')]: {
                fontSize: 14,

            },

            [theme.breakpoints.up('md')]: {
                fontSize: 24,

            }

        },

        "& h3": {
            display: "inline",
            marginRight: 5,
            [theme.breakpoints.up('xs')]: {
                fontSize: 14,

            },

            [theme.breakpoints.up('lg')]: {
                fontSize: 22,

            }
        },

    },
    img: {
        // prev height was 200 causing weird errors
        width:'auto',
        maxWidth: 400,
        display: "flex",
        flex: '1 0 auto',

    }
}))
const AuthorCard = ({ author: { FirstName, LastName, Description, ProfilePic, linkRef } }) => {
    const classes = useStyles();

    return (
        <Link href={`/authors/${LastName}`}>
            <Card raised className={classes.root}>
                <CardMedia
                    component="img"
                    src={`http://localhost:1337${ProfilePic.url}`}
                    title={`Profile pic of ${FirstName}`}
                    className={classes.img}
                />
                <CardContent className={classes.content} style={{ fontFamily: 'Roboto' }}>
                    <h1>{FirstName} {LastName}</h1>
                    <h2>{Description}</h2>
                </CardContent>
            </Card>
        </Link>

    )

}

export default AuthorCard