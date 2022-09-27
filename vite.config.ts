import {defineConfig} from 'vite'
import {createVuePlugin} from 'vite-plugin-vue2'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [createVuePlugin()],
    server: {
        open: true,
        port: 3001
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement:'/src'
            }
        ]
    }
})
