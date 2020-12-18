//import data from "../fakeDB.json"
import BlogCard from '../components/BlogCard'
import Layout from '../components/layout'
import HeadLine from '../components/HeadLine'
import Head from "next/head"
import "fontsource-roboto"
import { Grid, Hidden } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { gql, useQuery } from '@apollo/client';
import { ALL_POSTS } from '../queries'

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 48,
    color: 'white',
    textAlign: 'center',
  },

}))

export default function Home() {


  const classes = useStyles();
  const { loading, error, data } = useQuery(ALL_POSTS);
  if (error) {
    return <div>
      Error loading articles
    </div>
  }
  else if (loading) {
    return <div>
      Loading data...
    </div>
  }

  let dataResults = data.blogPosts;

  return (
    <Layout>
      
      <Head>
        <title>Gaming Blog</title>
      </Head>

      {/*Grid of Blogs */}
      <Grid justify="center"
        container spacing={4}>
        <HeadLine article={dataResults.find(article => article.headline === true)} />

        <Hidden smDown>
          <Grid item md={12} >
            <h3 className={classes.root}>Latest Posts</h3>
          </Grid>
        </Hidden>
        {dataResults.map((article, i) => {
          if (!article.headline) {
            return (
              <Grid key={i} item xs={9} s={3} md={3}>
                <BlogCard article={article} />
              </Grid>
            )
          }
        })}

      </Grid>

    </Layout>

  )
}
