// Enable recipe logging, off by default
// settings.logAddedRecipes = true
// settings.logRemovedRecipes = true

// Listen to server recipe event
events.listen('recipes', function (event) {

    // Add shaped recipe for chests
    event.shaped(item.of('botania:living_root', 8), [
        'LBL',
        'BWB',
        'LBL'
    ], {
        L: '#minecraft:logs',
        B: 'minecraft:bone_meal',
        W: 'minecraft:water_bucket'
    })
})
