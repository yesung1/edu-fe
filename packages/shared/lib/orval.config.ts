import { defineConfig } from 'orval'

export default defineConfig({
  path_admin: {
    output: {
      mode: 'tags-split',
      target: '../generated/api',
      schemas: '../generated/model',
      client: 'react-query',
      mock: true,
      prettier: true,
      tslint: true,
      clean: true,
      override: {
        mutator: {
          path: './src/config/axios-instance.ts',
          name: 'axiosInstance',
        },
        query: {
          useQuery: true,
        },
      },
    },
    input: {
      target: 'https://api.clus.dev/v3/api-docs/',
      // override: {
      //     transformer: './orval-transform-admin.js',
      // },
    },
  },
})
