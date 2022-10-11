export const sanityConfig = {
  dataset: process.env.SANITY_STUDIO_API_DATASET || 'production',
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  useCdn: process.env.NODE_ENV !== 'production',
  apiVersion: '2021-03-25'
}
