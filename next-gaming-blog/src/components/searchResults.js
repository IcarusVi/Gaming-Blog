import { CardContent, CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles'
import "fontsource-roboto"
import Link from 'next/link'
import { parseISO } from 'date-fns'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'rgba(252, 163, 17, 1)',
        color: 'black',
        fontFamily: "Roboto",
        display: "flex",
        flexDirection: 'row',
        maxHeight: 200,
        width: "auto",
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
            maxWidth: 400,
            paddingLeft: 0
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 0
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
                fontSize: 18,

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
        height: 200,
        width:'auto',
        maxWidth: 400,
        display: "flex",
        flex: '1 0 auto',

    }
}))
const SearchResult = ({ article: { link4thumbnail, published_at, writer, title, name, altImgTitle, linkRef } }) => {
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
                        <h3>{name}</h3><p>Posted on {parseISO(published_at).toString()}</p>
                    </div>
                </CardContent>
            </Card>
        </Link>

    )

}

export default SearchResult