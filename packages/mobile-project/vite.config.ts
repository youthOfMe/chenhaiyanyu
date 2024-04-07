import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'

// 配置svg插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 获取环境
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [VantResolver()],
      }),
      Components({
        resolvers: [VantResolver()],
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    // 代理跨域
    server: {
      proxy: {
        [env.VITE_APP_BASE_URL]: {
          // 获取数据的服务器地址设置
          target: env.VITE_SERVER,
          // 是否需要代理服务器跨域
          changeOrigin: true,
          // 路径重写 将匹配到的路径中的/api替换为空串
          // rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
