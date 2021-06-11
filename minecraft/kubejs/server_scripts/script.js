// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  // Change recipes here
})

onEvent('item.tags', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

events.listen('player.chat', function (event) {
  // Check if message equals discord, ignoring case
  if (event.message.trim().equalsIgnoreCase('discord')) {
    // Schedule task in 1 tick
    event.server.scheduleInTicks(1, event.server, function (callback) {
      callback.data.tell(Text.of([Text.green('Join the official discord '), Text.blue('here').click('https://discord.com/invite/jXrx4Tu')]));
    })
  }
})
