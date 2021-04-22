// Enable recipe logging, off by default
// settings.logAddedRecipes = true
// settings.logRemovedRecipes = true

// Listen to server recipe event
events.listen('recipes', function (event) {

    // Remove Bone Hoe due to crashes
    event.remove({id: 'forbidden_arcanus:bone_hoe'})

})
