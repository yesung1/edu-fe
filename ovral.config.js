const path = require('path');

module.exports = {
  petstore: {
    input: {
        target:"https://api.clus.dev/v3/api-docs/CLUS",
        // override: {
        //     transformer: './orval-transform-student.js',
        //   },
    },
    output: {
      mode: 'tags-split',
      target: path.resolve(__dirname, 'packages/shared/generated/api/fn/student/ApiPathReactQuery.ts'),
      schemas: path.resolve(__dirname, 'packages/shared/generated/api/model'),
      client: 'react-query',
      mock: true,
      prettier: true,
      tslint: true,
      clean: true,
      override: {
        mutator: {
          path: path.resolve(__dirname, 'packages/shared/generated/api/config/axios-instance.ts'),
          name: 'axiosInstance',
        },
        query: {
          useQuery: true,
        },
      },
    }
  }
};
