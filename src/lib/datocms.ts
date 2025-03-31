// lib/datocms.ts
import { GraphQLClient } from 'graphql-request';

const DATOCMS_API_TOKEN = process.env.DATOCMS_API_TOKEN;
const DATOCMS_API_URL = 'https://graphql.datocms.com/';

export const client = new GraphQLClient(DATOCMS_API_URL, {
  headers: {
    authorization: `Bearer ${DATOCMS_API_TOKEN}`,
  },
});
