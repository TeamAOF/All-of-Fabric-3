////////////////////////
/// Made by Team AOF ///
////////////////////////

events.listen("recipes", function (event) {

  // Sticks
  event.shaped(item.of("minecraft:stick", 16), [
    ["#minecraft:logs"],
    ["#minecraft:logs"],
  ]);


  // Hopper
  event.remove({ id: "charm:variant_chests/hopper" });
    event.shaped(item.of("minecraft:hopper"), [
      ["minecraft:iron_ingot", "#minecraft:logs",     "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", "#minecraft:logs",     "minecraft:iron_ingot"],
      [null,                   "minecraft:iron_ingot", null],
    ]);
});
