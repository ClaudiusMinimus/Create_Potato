// Enable recipe logging, off by default
// settings.logAddedRecipes = true
// settings.logRemovedRecipes = true

// Listen to server recipe event
events.listen('recipes', function (event) {

    //smelt aluminum ingots
    event.smelting('allomancy:aluminum_ingot', 'create:crushed_aluminum_ore')

    //smelt aluminum ingots
    event.blasting('allomancy:aluminum_ingot', 'create:crushed_aluminum_ore')

})
