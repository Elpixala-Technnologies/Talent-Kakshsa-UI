import { gql } from "@apollo/client";

export const getAllBlogs = gql`
  query getAllBlogs(
    $category: String
    $newsSortingParameter: [String]
    $page: Int
    $pageSize: Int
  ) {
    blogs(
      sort: $newsSortingParameter
      filters: { category: { category: { eq: $category } } }
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      meta {
        pagination {
          total
        }
      }
      data {
        id
        attributes {
          title
          slug
          featuredImage {
            data {
              id
              attributes {
                url
              }
            }
          }
          description
          tag {
            data {
              attributes {
                tag
              }
            }
          }
          author {
            data {
              attributes {
                avatar {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                name
                designation
              }
            }
          }
          category {
            data {
              attributes {
                category
              }
            }
          }
        }
      }
    }
  }
`;
export const getBlogDetails = gql`
  query getBlogDetails($ID: ID) {
    blog(id: $ID) {
      data {
        id
        attributes {
          title
          slug
          featuredImage {
            data {
              attributes {
                url
              }
            }
          }
          description
          author {
            data {
              attributes {
                avatar {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                name
                designation
              }
            }
          }
          content
        }
      }
    }
  }
`;
export const getAllBlogsSortingParameter = gql`
  query getAllBlogsSortingParameter {
    blogs {
      data {
        attributes {
          updatedAt
          popularSequence
          featuredSequence
        }
      }
    }
  }
`;
