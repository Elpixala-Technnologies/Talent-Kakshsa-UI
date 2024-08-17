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
        }
      }
    }
  }
`;
