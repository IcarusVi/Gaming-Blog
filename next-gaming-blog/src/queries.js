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

export const ALL_AUTHORS = gql`
  query allAuthors {
    writers{
      FirstName
      LastName
      Description
      ProfilePic{
        url
      }
    }
  }
`
//Currently the query searches by using LastName but if people with the same lastnames show
//up we're gonna have to find a different solution
export const FIND_AUTHOR = gql`
query findAuthor($author2Find: String!) {
  writers(where: {LastName: $author2Find}){
    FirstName
    LastName
    Description
    ProfilePic{
      url
    }
  }
}

`
//Query to find all posts by a specific author and details of said author
export const FIND_AUTHOR_POSTS = gql `
query findAuthorPosts($author2Find: String!) {
  writers(where: { LastName: $author2Find }) {
    FirstName
    LastName
    Description
    ProfilePic{
      url
    }
    blogPosts{
      title
      linkRef
      link4thumbnail
      published_at
      altImgTitle
      writer{
        FirstName
        LastName
      }
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

export const FIND_TAG = gql`
query allTags($tagToFind: String!) {
  tags(where: { name: $tagToFind }) {
    name
    posts{
      title
      published_at
      writer{
        FirstName
        LastName
      }
      link4thumbnail
      altImgTitle
      linkRef
    }
  }
}

`