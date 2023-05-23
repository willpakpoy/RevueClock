import { nodeResolve } from '@rollup/plugin-node-resolve';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import postcss from 'rollup-plugin-postcss';
import path from 'path';
import { babel } from '@rollup/plugin-babel';
import replace from "rollup-plugin-replace";

//import alias from 'rollup-plugin-alias';



export default {
    input: 'src/index.js',
    output: {
        file: path.resolve("build/bundle.js"),
        format: 'iife',
        name: "bundle"
    },
    plugins: [
        nodeResolve(), 
        postcss({
            // Or with custom file name, it will generate file relative to bundle.js in v3
            extract: path.resolve('build/bundle.css')
        }),
        htmlTemplate({
            template: 'src/index.html',
            target: 'build/index.html',
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify( 'development' )
        }),
        babel({ 
            babelHelpers: 'bundled'
        }),
    ]
  };
