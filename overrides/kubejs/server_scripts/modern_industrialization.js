////////////////////////
/// Made by Team AOF ///
////////////////////////


events.listen("recipes", function (event) {
event.recipes.modern_industrialization.forge_hammer_hammer({

  eu: 2,
  duration: 200,
  id: "aof3:forge_hammer/gold_plates",
  item_inputs: [
      {
          item: "modern_industrialization:gold_double_ingot",
          amount: 1
      }
  ],
  item_outputs: [
      {
          item: "techreborn:gold_plate",
          amount: 1
      }
  ],
});



  event.recipes.modern_industrialization.forge_hammer_hammer({
  eu: 2,
  duration: 200,
  id: "aof3:forge_hammer/gold_double_ingot",
  item_inputs: [
      {
          item: "minecraft:gold_ingot",
          amount: 2
      }
  ],
  item_outputs: [
      {
          item: "modern_industrialization:gold_double_ingot",
          amount: 1
      }
  ]
  });

  event.recipes.modern_industrialization.macerator({
    eu: 2,
    duration: 200,
    id: "aof3:macerator/inferium_ore",
    item_inputs: [
        {
            item: "mysticalagriculture:inferium_ore",
            amount: 1
        }
    ],
    item_outputs: [
        {
            item: "mysticalagriculture:inferium_essence",
            amount: 9
        }
    ],
  });

  event.recipes.modern_industrialization.macerator({
    eu: 2,
    duration: 200,
    id: "aof3:macerator/prosperity_ore",
    item_inputs: [
        {
            item: "mysticalagriculture:prosperity_ore",
            amount: 1
        }
    ],
    item_outputs: [
        {
            item: "mysticalagriculture:prosperity_shard",
            amount: 7
        }
    ],
  });


});
