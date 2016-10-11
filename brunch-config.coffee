module.exports =

  files:
    javascripts: joinTo: 'app.js'
    stylesheets: joinTo: 'app.css'
    templates: joinTo: 'app.js'

  watcher:
    awaitWriteFinish: true
    usePolling: true

  plugins:
    babel:
      presets: ['latest']
    postcss:
      processors: [ require('postcss-cssnext') ]
