// sanity.config.js
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { codeInput } from '@sanity/code-input'
import { visionTool } from '@sanity/vision'
import schemas from './schemas/schema'

export default defineConfig([
  {
    name: 'Production',
    title: 'l2oy-cms - Prod',
    basePath: '/production',
    projectId: 't7m67vu1',
    dataset: 'production',
    plugins: [deskTool(), codeInput()],
    schema: {
      types: schemas,
    },
  },
  {
    name: 'Development',
    title: 'l2oy-cms - Dev',
    basePath: '/development',
    projectId: 't7m67vu1',
    dataset: 'development',
    plugins: [
      deskTool(),
      codeInput(),
      visionTool({ defaultApiVersion: '2022-10-21' }),
    ],
    schema: {
      types: schemas,
    },
  },
])
