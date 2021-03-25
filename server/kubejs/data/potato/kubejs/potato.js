// Enable recipe logging, off by default
// settings.logAddedRecipes = true
// settings.logRemovedRecipes = true

// Listen to server recipe event
events.listen('recipes', function (event) {

    // Add shaped recipe for chests
    event.shaped(item.of('minecraft:chest', 4), [
        'WWW',
        'W W',
        'WWW'
    ], {
        W: '#minecraft:logs'
    })

    // Add shaped recipe for clay block
    event.shaped(item.of('minecraft:clay', 8), [
        'SDS',
        'DWD',
        'SDS'
    ], {
        S: 'minecraft:sand',
        D: 'minecraft:dirt',
        W: 'minecraft:water_bucket'
    })

    // Add shaped recipe for dragon breath
    event.shaped(item.of('minecraft:dragon_breath'), [
        'BBB',
        'BLB',
        'BBB'
    ], {
        L: 'minecraft:lava_bucket',
        B: 'minecraft:glass_bottle'
    })

    // Add shaped recipe for golden orchid seeds to nuggets
    event.shaped(item.of('forbidden_arcanus:arcane_gold_nugget'), [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'forbidden_arcanus:golden_orchid_seeds'
    })

    // Add shapeless recipe for sugarcane
    event.shapeless(item.of('minecraft:sugar_cane', 1), ['minecraft:sugar', 'minecraft:stick'])

    // Add shapeless recipe for Create Potato book
    event.shapeless(item.of('patchouli:guide_book', { 'patchouli:book': 'patchouli:potato' }), ['minecraft:book', 'minecraft:dirt'])

    // Add shapeless recipe for Silent's Gems book
    event.shapeless(item.of('patchouli:guide_book', { 'patchouli:book': 'patchouli:silentsgems' }), ['minecraft:book', '#silentgems:gems'])

    // Add shapeless recipe for making sticks from logs
    event.shapeless(item.of('minecraft:stick', 16), [
        '#minecraft:logs', '#minecraft:logs'
    ])

    // Add shaped recipe for bamboo
    event.shaped(item.of('minecraft:bamboo', 1), [
        'R',
        'R',
        'S'
    ], {
        R: '#forge:rods/wooden',
        S: '#minecraft:saplings'
    })
})