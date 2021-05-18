 priority: 2

onEvent('worldgen.remove', event => {
    event.removeOres(ores => {
      ores.blocks = [ 'bewitchment:silver_ore']
    })
  })