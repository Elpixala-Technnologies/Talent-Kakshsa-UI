import { gql } from "@apollo/client";

export const createDiscussionForum = gql`
  mutation createDiscussionForum($input: DiscussionForumInput!) {
    createDiscussionForum(data: $input) {
      data {
        id
        attributes {
          text
          camera {
            data {
              id
              attributes {
                url
              }
            }
          }
          images {
            data {
              id
              attributes {
                url
              }
            }
          }
          video {
            data {
              id
              attributes {
                url
              }
            }
          }
          codeSnippet
          codeLang
          fileName
          title
          tags {
            data {
              id
              attributes {
                tag
              }
            }
          }
          publishedAt
        }
      }
    }
  }
`;

export const updateDiscussionForum = gql`
  mutation updateDiscussionForum($ID: ID!, $input: DiscussionForumInput!) {
    updateDiscussionForum(id: $ID, data: $input) {
      data {
        id
        attributes {
          text
          camera {
            data {
              id
              attributes {
                url
              }
            }
          }
          images {
            data {
              id
              attributes {
                url
              }
            }
          }
          video {
            data {
              id
              attributes {
                url
              }
            }
          }
          codeSnippet
          codeLang
          fileName
          title
          tags {
            data {
              id
              attributes {
                tag
              }
            }
          }
          publishedAt
        }
      }
    }
  }
`;

export const deleteDiscussionForum = gql`
  mutation deleteDiscussionForum($ID: ID!) {
    deleteDiscussionForum(id: $ID) {
      data {
        id
        attributes {
          text
        }
      }
    }
  }
`;

export const createThread = gql`
mutation($input: ThreadTagInput!) {
  createThreadTag(data: $input) {
    data {
      id
      attributes {
        tag
        publishedAt
      }
    }
  }
`;
// {
//   "input": {
//     "text": "Example discussion text",
//     "camera": "1",
//     "images": ["2", "3"],
//     "video": "4",
//     "codeSnippet": "print('Hello, World!')",
//     "codeLang": "Python",
//     "fileName": "exampleFileName.txt",
//     "title": "title",
//     "tags": ["1"],
//     "publishedAt": "2024-08-25T10:00:00Z"
//   }
// }
