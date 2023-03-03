
/**
 * @roxi/routify 2.18.11
 * File generated Thu Mar 02 2023 20:09:30 GMT-0500 (Eastern Standard Time)
 */

export const __version = "2.18.11"
export const __timestamp = "2023-03-03T01:09:30.047Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "absolutePath": "src/pages",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/rolandspoofy/Documents/Projects/GitHub/QUESTions/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "set",
      "filepath": "/set",
      "name": "set",
      "ext": "",
      "badExt": false,
      "absolutePath": "/Users/rolandspoofy/Documents/Projects/GitHub/QUESTions/src/pages/set",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/set/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/rolandspoofy/Documents/Projects/GitHub/QUESTions/src/pages/set/index.svelte",
          "importPath": "../src/pages/set/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/set/index",
          "id": "_set_index",
          "component": () => import('../src/pages/set/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/set"
    }
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

