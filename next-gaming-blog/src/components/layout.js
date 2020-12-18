import Head from "next/head"
import Container from '@material-ui/core/Container'
import NavBar from './navbar'
import { Grid } from "@material-ui/core"

export default function Layout({ children }) {
    return (
        <Container className="testSpace" disableGutters maxWidth="lg">
            <Head>
                <link href='https://fonts.googleapis.com/css?family=Roboto' rel="stylesheet" />
            </Head>
            <NavBar />
            
            <Grid container>
                
                {children}

            </Grid>

        </Container>
    )
}