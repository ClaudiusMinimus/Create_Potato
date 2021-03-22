// Enable recipe logging, off by default
// settings.logAddedRecipes = true
// settings.logRemovedRecipes = true

// Listen to server recipe event
events.listen('recipes', function (event) {

    //smelt silver ingots
    event.smelting('allomancy:silver_ingot', 'create:crushed_silver_ore')

    //smelt silver ingots
    event.blasting('allomancy:silver_ingot', 'create:crushed_silver_ore')

})
