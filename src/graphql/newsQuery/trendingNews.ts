import { gql } from "@apollo/client";

export const getAllTrendingNews = gql`
  query getAllTrendingNews($page: Int, $pageSize: Int) {
    news(
      sort: "trendingSequence"
      filters: { isTrending: { eq: true } }
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      meta {
        pagination {
          total
        }
      }
      data {
        attributes {
          icon {
            data {
              id
              attributes {
                url
              }
            }
          }
          bgImage {
            data {
              id
              attributes {
                url
              }
            }
          }
          title
          description
          category {
            data {
              id
              attributes {
                category
              }
            }
          }
          slug
          tag {
            data {
              id
              attributes {
                tag
              }
            }
          }
          author {
            data {
              id
              attributes {
                avatar {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
                name
                designation
                updatedAt
              }
            }
          }
        }
      }
    }
  }
`;