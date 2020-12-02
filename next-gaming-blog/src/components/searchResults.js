import { CardContent, CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
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
        width: "fit-content",

        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            maxHeight: "none",
        },
        '@media (max-width: 410px)': {
            width: 'auto'

        }
    },
    content: {
        padding: 0,
        paddingLeft: 18,
        [theme.breakpoints.down('sm')]: {
            maxWidth: 400
        },
        "& h1": {
            fontWeight: "medium",
            [theme.breakpoints.up('xs')]: {
                fontSize: 20,

            },

            [theme.breakpoints.up('lg')]: {
                fontSize: 32,

            }
        },

        "& p": {
            display: "inline",
            [theme.breakpoints.up('xs')]: {
                fontSize: 14,

            },

            [theme.breakpoints.up('lg')]: {
                fontSize: 22,

            }
        },

        "& h2": {
            [theme.breakpoints.up('xs')]: {
                fontSize: 18,

            },

            [theme.breakpoints.up('lg')]: {
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
        height: 200,
        width: 400,
        display: "flex",
        flex: '1 0 auto',

    }
}))
const SearchResult = ({ article: { link4thumbnail, writer, title, tag, altImgTitle, linkRef } }) => {
    const classes = useStyles();

    return (
        <Link href={`/articles/${linkRef}`}>
            <Card raised className={classes.root}>
                <CardMedia
                    component="img"
                    src={link4thumbnail}
                    title={altImgTitle}
                    className={classes.img}
                />
                <CardContent className={classes.content} style={{ fontFamily: 'Roboto' }}>
                    <h1>{title}</h1>
                    <h2>{writer.FirstName} {writer.LastName}</h2>
                    <div>
                        <h3>{tag}</h3><p>Posted on 11/27/2020</p>
                    </div>
                </CardContent>
            </Card>
        </Link>


    )

}

export default SearchResult