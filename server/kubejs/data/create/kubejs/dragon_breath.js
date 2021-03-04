onEvent('recipes', event => {
  event.recipes.create.filling('minecraft:dragon_breath', [
    'minecraft:glass_bottle',
    Fluid.of('minecraft:lava', 100)
  ])
})
