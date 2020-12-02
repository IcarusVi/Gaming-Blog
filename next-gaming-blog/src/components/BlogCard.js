import { CardContent, CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles'
import "fontsource-roboto"
import Link from 'next/link'

const useStyles = makeStyles((theme) =>({
    root: {
        backgroundColor: 'rgba(252, 163, 17, 1)',
        color: 'black',
        fontFamily: "Roboto"
    }
}))
const BlogCard = ({ article: { link4thumbnail, writer, title, altImgTitle, linkRef, tag } }) => {
    const classes = useStyles();

    return (
        <Link href={`/articles/${linkRef}`}>
            <Card raised className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        src={link4thumbnail}
                        title={altImgTitle}
                    />
                    <CardContent style={{ fontFamily: 'Roboto' }}>
                        <h3>{tag.name}</h3>
                        <h1>{title}</h1>
                        <h3>{writer.FirstName} {writer.LastName}</h3>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>


    )

}

export default BlogCard