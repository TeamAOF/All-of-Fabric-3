events.listen("recipes", function (event) {
  
  // Rotten Flesh
   event.smelting('minecraft:leather', 'minecraft:rotten_flesh').xp(0.1);
})

