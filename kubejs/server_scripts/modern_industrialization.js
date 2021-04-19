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
});
