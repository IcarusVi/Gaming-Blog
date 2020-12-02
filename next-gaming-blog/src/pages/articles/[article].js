import Layout from "../../components/layout";
import Article from '../../components/Article';
import { useRouter } from 'next/router'
import { Grid } from "@material-ui/core";
import { gql, useQuery } from '@apollo/client';
import { FIND_ARTICLE } from '../../queries'

export default function ArticlePage() {
  const router = useRouter()
  const articleQuery = router.query.article


  const { loading, error, data } = useQuery(FIND_ARTICLE, {
    variables: { chosenLinkRef: articleQuery },
  })


  if (error) {
    return <div>
      Error loading article
    </div>
  }


  else if (loading) {
    return <div>
      Loading article
    </div>
  }

  console.log(data)


  return (
    <Layout>
      <Grid container justify="center">
        <Grid item xs={12} md={9}>
          <Article chosenArticle={data.blogPosts[0]} />
        </Grid>
      </Grid>

    </Layout>
  )
}
