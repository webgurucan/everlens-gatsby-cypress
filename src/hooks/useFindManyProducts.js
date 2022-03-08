import { graphql, useStaticQuery } from "gatsby"

// temporary workaround on data fetch
const useFindManyProducts = ({ productIds }) => {
  const data = useStaticQuery(graphql`
    query {
      products: allContentfulProduct(filter: { productId: { nin: [null] } }) {
        nodes {
          id
          productId
          displayName

          longDescription {
            longDescription
          }

          productCardImage {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }

          symptomList {
            title
            longDescription {
              json
            }
          }

          markerList {
            title
            markers {
              description {
                description
              }
            }
          }
        }
      }
    }
  `)

  return (
    data?.products?.nodes?.filter(
      ({ productId }) => !!productIds.includes(productId)
    ) || []
  )
}

export default useFindManyProducts
