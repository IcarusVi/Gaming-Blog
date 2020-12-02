import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    contentStyle: {
        color: 'white',
        [theme.breakpoints.up('xs')]: {
            fontSize: 24

        },
        [theme.breakpoints.down('xl')]: {
            fontSize: 36
        },
    }

}))

const Article = ({ chosenArticle: { writer, title, Content, link4thumbnail } }) => {
    const classes = useStyles();


    return (

        <div className="article">
            <h3>{title}</h3>
            <p id="article-author">{writer.FirstName} {writer.LastName}</p>
            {
                /* Make sure to feed a 1920x1080p Img anything smaller 
                will mess up flow of page*/
            }
            <img src={link4thumbnail} />
            <p className={classes.contentStyle}>{Content}</p>
        </div>
    )
}


export default Article