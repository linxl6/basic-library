import {name} from './package.json'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import image from 'rollup-plugin-img'
import RollupPluginDelete from 'rollup-plugin-delete'
import Path from 'path'
import RollupPluginTypescript2 from 'rollup-plugin-typescript2'
import nodeResolve from 'rollup-plugin-node-resolve'
// import serve from 'rollup-plugin-serve'
// import livereload from 'rollup-plugin-livereload'
export default {
    input: './src/index.ts',
    output:[
        {
            file: `./lib/watrix-${name}-umd.js`,
            format: 'umd',
            name: `watrix-${name}`,
            //当入口文件有export时，'umd'格式必须指定name
            //这样，在通过<script>标签引入时，才能通过name访问到export的内容。
            globals:{
                vue:'Vue',
                'ant-design-vue':'antd'
            },
        },
        {
            file: `./lib/watrix-${name}-es.js`,
            format: 'es'
        },
        {
            file: `./lib/watrix-${name}-cjs.js`,
            format: 'cjs'
        },

    ],
    external:['vue','ant-design-vue'],
    plugins:[
        RollupPluginDelete({
            targets:Path.resolve(__dirname,'lib/*'),
            watch:true
        }),
        vue({
            css:false
        }),
        postcss({
            plugins:[
                autoprefixer(),
                cssnano()
            ],
            extract: true
        }),
        RollupPluginTypescript2(),
        nodeResolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
        }),
        terser(),
        image({
            output: `./lib/images`, // 打包后的文件
            extensions: /\.(png|jpg|jpeg|gif|svg)$/,
            limit: 8192,  // 文件大小的限制(字节)。当一个文件没有超过限制时，它将被转换为 base64字符串，否则，它将被复制到output下
            exclude: 'node_modules/**'
        }),
        // serve({
        //     port:9001
        // }),
        // livereload('lib')
    ]
}