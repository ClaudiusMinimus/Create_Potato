// Recipe for doubling Ancient Debris to Netherite Scrap
onEvent('recipes', event => {
    event.recipes.create.mixing(Item.of('minecraft:netherite_scrap', 2), [
        'minecraft:ancient_debris'
    ]).superheated()
  })
  