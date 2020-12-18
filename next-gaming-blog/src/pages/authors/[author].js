import { useRouter } from 'next/router'

import Layout from "../../components/layout";
import AuthorPage from '../../components/AuthorPage';
import { Grid } from "@material-ui/core";
import { useQuery } from '@apollo/client';
import { FIND_AUTHOR_POSTS } from '../../queries'
import Head from "next/head"


export default function WriterPage() {
  const router = useRouter()
  const authorQuery = router.query.author
  console.log(authorQuery)


  const { loading, error, data } = useQuery(FIND_AUTHOR_POSTS, {
    variables: { author2Find: authorQuery },
  })


  if (error) {
    return <div>
      Error loading author
    </div>
  }


  else if (loading) {
    return <div>
      Loading {authorQuery} page
    </div>
  }



  return (
    <Layout>
      <Head>
        <title> {data.writers[0].FirstName} {data.writers[0].LastName} </title>
      </Head>
      <Grid container justify="center">
        <AuthorPage author={data.writers[0]} />
      </Grid>
    </Layout>
  )
}
