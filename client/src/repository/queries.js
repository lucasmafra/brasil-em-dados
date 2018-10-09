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

export const STATISTIC = gql`
    query Statistic($slug: String!) {
        statistic(slug: $slug) {
            title
            shortTitle
            slug
            points {
                xValue
                yValue
                government
            }
            source
            dataURL
            description
        }
    }
`