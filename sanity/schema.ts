import { type SchemaTypeDefinition } from 'sanity'
import blog from './schema/blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog],
}
