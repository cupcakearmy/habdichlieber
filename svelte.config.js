import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import { imagetools } from 'vite-imagetools'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    target: '#svelte',
    vite: {
      plugins: [imagetools({ force: true })],
    },
  },
}

export default config
