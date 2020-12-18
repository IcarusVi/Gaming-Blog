//this is the index for the authors page
import Layout from "../../components/layout";
import AuthorCard from '../../components/AuthorCard'
import { Grid } from "@material-ui/core";
import { gql, useQuery } from '@apollo/client';
import { ALL_AUTHORS } from '../../queries'
import Head from "next/head"

export default function AuthorsList() {

    const { loading, error, data } = useQuery(ALL_AUTHORS)

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

    const allAuthors = data.writers;
    console.log(allAuthors)

    return (
        <Layout>
            <Head>
                <title> Author Results </title>
            </Head>
            <Grid container justify="center">
                {allAuthors.map(author => {
                    
                    return (
                        <Grid item xs={9} md={10}>

                            <AuthorCard author={author}/>

                        </Grid>
                    )
                })}
            </Grid>

        </Layout>
    )
}
