// Enable recipe logging, off by default
// settings.logAddedRecipes = true
// settings.logRemovedRecipes = true

// Listen to server recipe event
events.listen('recipes', function (event) {

    //smelt tin ingots
    event.smelting('allomancy:tin_ingot', 'create:crushed_tin_ore')

    //smelt tin ingots
    event.blasting('allomancy:tin_ingot', 'create:crushed_tin_ore')

})
