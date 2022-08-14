import { defineConfig } from 'tsup'

export default defineConfig(options => {
  if (options.env?.TEST === 'yes') {
    return {
      noExternal: ['noisejs'],
      outDir: 'tmp/tests',
      entry: ['src'],
      external: ['ava'],
      format: ['esm']
    }
  } else {
    return {
      minify: options.watch !== true,
      noExternal: ['noisejs'],
      clean: true,
      dts: true,
      format: ['esm'],
      sourcemap: options.watch === true,
      entry: ['src/topography-paintlet.ts']
    }
  }
})
