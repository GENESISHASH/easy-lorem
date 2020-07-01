# vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2
log = (x...) -> try console.log x...

_ = require('wegweg')({
  globals: off
})

text = require './text'

module.exports = lorem = {
  std: (->
    help = ((code) =>
      log """
        Usage: .
      """
      exit(code ? 0)
    )

    help() if _.arg('help')

    @run()
  )

  run: (->
    return _.first(_.shuffle(text))
  )
}

##
if !module.parent or process.env.LOREM_STD
  log lorem.run()

