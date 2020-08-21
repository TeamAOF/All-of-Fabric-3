events.listen("recipes", function (event) {
  
  /*
  // Kitchen Knife
  event.remove({ output: "sandwichable:kitchen_knife" });

  event.shaped(item.of("sandwichable:kitchen_knife"), [
    ["minecraft:iron_nugget"],
    ["minecraft:iron_nugget"],
    ["minecraft:stick"],
  ]);
  */

  // Chest
  event.shaped(item.of("minecraft:chest", 4), [
    ["#minecraft:logs", "#minecraft:logs", "#minecraft:logs"],
    ["#minecraft:logs", null, "#minecraft:logs"],
    ["#minecraft:logs", "#minecraft:logs", "#minecraft:logs"],
  ]);

  // Iron Plating / Iron Furnace
  event.replaceInput(
    { id: "blockus:iron_plating" },
    "minecraft:iron_ingot",
    "techreborn:iron_plate"
  );

  // Diamond Chain
  event.replaceInput(
    { id: "mochains:diamond_chain" },
    "mochains:diamond_nugget",
    "astromine:diamond_fragment"
  );

  // Fragments
  event.remove({ output: "techreborn:diamond_nugget" });
  event.remove({ output: "techreborn:emerald_nugget" });

  // Crude Storage Unit
  event.remove({
    id: "techreborn:crafting_table/unit/storage/crude_storage_unit",
  });
  event.replaceInput(
    { type: "minecraft:crafting_shapeless" },
    "minecraft:barrel",
    "#blockus:barrels"
  );

  //Empty Cell / Tin Gear
  event.remove({ id: "techreborn:crafting_table/cell" });
  event.shaped(item.of("techreborn:cell", 4), [
    [null, "#c:tin_ingots", null],
    ["#c:tin_ingots", "minecraft:glass", "#c:tin_ingots"],
    [null, "#c:tin_ingots", null],
  ]);

  // Remove Indrev furnace stuff
  event.remove({ id: "indrev:copper_ingot_from_ore" });
  event.remove({ id: "indrev:copper_ingot_from_smelting" });
  event.remove({ id: "indrev:tin_ingot_from_ore" });
  event.remove({ id: "indrev:tin_ingot_from_smelting" });

  // Industrial Revolution Gear
  var indrevGear = [
    "copper_helmet",
    "copper_chestplate",
    "copper_leggings",
    "copper_boots",
    "copper_pickaxe",
    "copper_axe",
    "copper_shovel",
    "copper_sword",
    "copper_hoe",
    "tin_helmet",
    "tin_chestplate",
    "tin_leggings",
    "tin_boots",
    "tin_pickaxe",
    "tin_axe",
    "tin_shovel",
    "tin_sword",
    "tin_hoe",
    "steel_helmet",
    "steel_chestplate",
    "steel_leggings",
    "steel_boots",
    "steel_pickaxe",
    "steel_axe",
    "steel_shovel",
    "steel_sword",
    "steel_hoe",
  ];

  indrevGear.forEach(function (item, index) {
    event.remove({ type: "crafting_shaped", output: "indrev:" + item });
  });
});
