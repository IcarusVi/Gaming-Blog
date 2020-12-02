import { gql } from '@apollo/client'

export const ALL_POSTS = gql`
  query {
    blogPosts {
        headline
        title
        linkRef
        altImgTitle
        link4thumbnail
        Content
        published_at
        Thumbnail{
            url
        }
        writer{
            FirstName
            LastName
        }
        tag{
            name
        }
    }
        
  }
`
export const FIND_ARTICLE = gql`
query findPost($chosenLinkRef: String!) {
  blogPosts(where: {linkRef: $chosenLinkRef}  ) {
    headline
    title
    linkRef
    altImgTitle
    link4thumbnail
    Content
    published_at
    Thumbnail {
      url
    }
    writer {
      FirstName
      LastName
    }
    tag {
      name
    }
  }
}

`
