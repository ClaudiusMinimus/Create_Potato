// Enable recipe logging, off by default
// settings.logAddedRecipes = true
// settings.logRemovedRecipes = true

// Listen to server recipe event
events.listen('recipes', function (event) {

    //smelt lead ingots
    event.smelting('allomancy:lead_ingot', 'create:crushed_lead_ore')

    //smelt lead ingots
    event.blasting('allomancy:lead_ingot', 'create:crushed_lead_ore')

})
