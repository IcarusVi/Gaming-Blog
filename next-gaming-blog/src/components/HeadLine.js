import { CardContent, CardMedia, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles'
import "fontsource-roboto"
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'rgba(0, 0, 0, 0.44)',
        color: 'white',
        textAlign: "center",



    },
    h1: {
        [theme.breakpoints.up('xs')]: {
            fontSize: 24,

        },
        [theme.breakpoints.up('md')]: {
            fontSize: 60,

        },
    },
    h3: {
        [theme.breakpoints.up('xs')]: {
            fontSize: 20,

        },
        [theme.breakpoints.up('md')]: {
            fontSize: 30,

        }
    }
}))

export default function HeadLine({ article: { link4thumbnail, writer, title, altImgTitle, linkRef } }) {
    const classes = useStyles();
    return (
        <Grid item xs={11}>
            <Link href={`/articles/${linkRef}`}>
                <Card className={classes.root} raised={true}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            src={link4thumbnail}
                            title={altImgTitle}
                        />
                        <CardContent style={{ fontFamily: 'Roboto' }}>
                            <h1 className={classes.h1}>{title}</h1>
                            <h3 className={classes.h3}>{writer.FirstName} {writer.LastName}</h3>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </Link>

        </Grid>

    )

}