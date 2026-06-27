import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(import.meta.dirname, 'index.html'),
                privacy: resolve(import.meta.dirname, 'privacy.html'),
            },
        },
    },
    server: {
        port: 8888,
        open: true,
    },
});
