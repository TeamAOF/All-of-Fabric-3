////////////////////////
/// Made by Team AOF ///
////////////////////////

events.listen("recipes", function (event) {
  // Silicon
  event.recipes.minecraft.blasting(
    item.of("appliedenergistics2:silicon"),
    "appliedenergistics2:certus_quartz_dust"
  );

  event.recipes.minecraft.smelting(
    item.of("appliedenergistics2:silicon"),
    "appliedenergistics2:certus_quartz_dust"
  );

  // Oak Sign
  event.replaceInput(
    { id: "minecraft:oak_sign" },
    "minecraft:oak_planks",
    "#minecraft:planks"
  );

  // Wool Tarp
  event.shaped(item.of("campanion:wool_tarp"), [
    ["minecraft:white_wool", "minecraft:white_wool", "minecraft:white_wool"],
  ]);

});
