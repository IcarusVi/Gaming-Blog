import Layout from '../components/layout'
import "fontsource-roboto"
import { Grid } from '@material-ui/core'
import AuthorPage from '../components/AuthorPage'


let data = {
  writers: [
      {
          FirstName: "Reach",
          LastName: "Regalia",
          Description: "The best gaming/coding/blogging creator in the game",
          ProfilePic: {
              url: "/uploads/compressed_Reach_Logo_9c3cfc16b4.png",
          },
          blogPosts: [
              {
                  title: "Yakuza Like a Dragon: a groundbreaking new entry for JRPG fans",
                  linkRef: "yakuzaReview",
                  link4thumbnail: "https://images5.alphacoders.com/109/thumb-1920-1090924.jpg",
                  published_at: "2020-11-30T03:13:51.136Z",
                  altImgTitle: "Background picture for Yakuza Like a Dragon",
                  writer: {
                    "FirstName": "Reach",
                    "LastName": "Regalia"
                  }
              }
          ]
      }
  ]
}

let chosenAuthor=data.writers[0]

export default function TestPage() {
  return (
    <Layout>
      <Grid container justify='center'>
        <AuthorPage author={chosenAuthor}/>
      </Grid>
    </Layout>

  )
}
