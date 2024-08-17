import { gql } from "@apollo/client";

export const getAllNews = gql`
  query getAllNews {
    news {
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
