import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
    server: {
   host: true,
   port: 8000, // This is the port which we will use in docker
     // Thanks @sergiomoura for the window fix
     // add the next lines if you're using windows and hot reload doesn't work
      watch: {
        usePolling: true
      }
   }
  };
});
