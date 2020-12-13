//this is the index for the gaming page
import Layout from "../../components/layout";
import SearchResults from '../../components/searchResults';
import { useRouter } from 'next/router'
import { Grid } from "@material-ui/core";
import { gql, useQuery } from '@apollo/client';
import { FIND_TAG } from '../../queries'

export default function ArticlePage() {
    const router = useRouter()

    const { loading, error, data } = useQuery(FIND_TAG, {
        variables: { tagToFind: 'Gaming' },

    })

    if (error) {
        return <div>
            Error loading results
        </div>
    }
    else if (loading) {
        return <div>
            Loading results...
        </div>
    }

    const allGamingPosts = data.tags[0].posts;

    return (
        <Layout>
            <Grid container justify="center">
                {allGamingPosts.map((post, i) => {
                    return (
                        <Grid key={i} item xs={9} md={10}>

                            <SearchResults article={post} />

                        </Grid>
                    )
                })}
            </Grid>

        </Layout>
    )
}
