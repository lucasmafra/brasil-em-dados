import gql from 'graphql-tag'

export const CATEGORIES = gql`
    query Categories {
        categories {
            title
            slug
            statistics {
                shortTitle
                slug
            }
        }
    }
`