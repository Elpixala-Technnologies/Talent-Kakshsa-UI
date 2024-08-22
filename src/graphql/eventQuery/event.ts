import { gql } from "@apollo/client";
export const getAllEvents = gql`
  query getAllEvents {
    events {
      meta {
          pagination: { page: $page, pageSize: $pageSize }
      }
      data {
        id
        attributes {
          title
          hostName
          usersAvatars {
            data {
              id
              attributes {
                url
              }
            }
          }
          timeFrom
          timeTo
          eventMedium
        }
      }
    }
  }
`;