////////////////////////
/// Made by Team AOF ///
////////////////////////

events.listen("recipes", function (event) {

   // Charm Barrel
   event.remove({ output: "minecraft:barrel" });

   event.shapeless('charm:spruce_barrel', ['minecraft:barrel'])
   event.shapeless('minecraft:barrel', ['charm:spruce_barrel'])
  
  // Remove Empty Recipe - Trent87
  event.remove({ id: "byg:gray_dye" });

  // Gunpowder Block
  event.remove({ output: "blast:gunpowder_block" });

  event.shaped(item.of("blast:gunpowder_block"), [
    ["minecraft:gunpowder", "minecraft:gunpowder", "minecraft:gunpowder"],
    ["minecraft:gunpowder", "minecraft:coal_block", "minecraft:gunpowder"],
    ["minecraft:gunpowder", "minecraft:gunpowder", "minecraft:gunpowder"],
  ]);

  // Kitchen Knife
  event.remove({ output: "sandwichable:kitchen_knife" });

  event.shaped(item.of("sandwichable:kitchen_knife"), [
    ["minecraft:iron_nugget"],
    ["minecraft:iron_nugget"],
    ["minecraft:stick"],
  ]);

  // Ender Binding
  event.remove({ output: "goml:ender_binding" });
  event.shaped(item.of("goml:ender_binding"), [
    ["minecraft:obsidian", "minecraft:crying_obsidian", "minecraft:obsidian"],
    ["minecraft:crying_obsidian", "minecraft:ender_eye", "minecraft:crying_obsidian"],
    ["minecraft:obsidian", "minecraft:crying_obsidian", "minecraft:obsidian"],
  ]);

  // Wooden Bucket / Small Logs
  event.remove({ output: "blockus:oak_small_logs" });
  event.remove({ output: "blockus:spruce_small_logs" });
  event.remove({ output: "blockus:birch_small_logs" });
  event.remove({ output: "blockus:jungle_small_logs" });
  event.remove({ output: "blockus:acacia_small_logs" });
  event.remove({ output: "blockus:dark_oak_small_logs" });
  event.remove({ output: "blockus:white_oak_small_logs" });

  event.shaped(item.of("blockus:oak_small_logs", 3), [
    ["minecraft:oak_log", "minecraft:oak_log", "minecraft:oak_log"],
  ]);
  event.shaped(item.of("blockus:spruce_small_logs", 3), [
    ["minecraft:spruce_log", "minecraft:spruce_log", "minecraft:spruce_log"],
  ]);
  event.shaped(item.of("blockus:birch_small_logs", 3), [
    ["minecraft:birch_log", "minecraft:birch_log", "minecraft:birch_log"],
  ]);
  event.shaped(item.of("blockus:jungle_small_logs", 3), [
    ["minecraft:jungle_log", "minecraft:jungle_log", "minecraft:jungle_log"],
  ]);
  event.shaped(item.of("blockus:acacia_small_logs", 3), [
    ["minecraft:acacia_log", "minecraft:acacia_log", "minecraft:acacia_log"],
  ]);
  event.shaped(item.of("blockus:dark_oak_small_logs", 3), [
    [
      "minecraft:dark_oak_log",
      "minecraft:dark_oak_log",
      "minecraft:dark_oak_log",
    ],
  ]);
  event.shaped(item.of("blockus:white_oak_small_logs", 3), [
    ["blockus:white_oak_log", "blockus:white_oak_log", "blockus:white_oak_log"],
  ]);

  // Charcoal & Glowstone
  event.remove({ output: "techreborn:glowstone_small_dust" });

  event.shaped(item.of("techreborn:glowstone_small_dust", 4), [
    ["minecraft:glowstone_dust"],
  ]);

  // Iron Plating / Iron Furnace
  event.replaceInput(
    { id: "blockus:iron_plating" },
    "minecraft:iron_ingot",
    "techreborn:iron_plate"
  );

  // Gold Plating
    event.replaceInput(
      { id: "blockus:gold_plating" },
      "minecraft:gold_ingot",
      "techreborn:gold_plate"
    );

  // Chests
  event.replaceInput({}, "#c:wooden_chests", "#c:wooden_chests");

  // Fragments
  event.remove({ output: "techreborn:diamond_nugget" });
  event.remove({ output: "techreborn:emerald_nugget" });

  // Barrels
  event.replaceInput(
    { type: "minecraft:crafting_shaped" },
    "minecraft:barrel",
    "#charm:barrels"
  );

  // Bamboo
  event.remove({ output: "bambootweaks:bamboo_block" });

  event.shaped(item.of("bambootweaks:bamboo_block", 2), [
    ["minecraft:bamboo", "minecraft:bamboo", "minecraft:bamboo"],
    ["minecraft:bamboo", "minecraft:bamboo", "minecraft:bamboo"],
    ["minecraft:bamboo", "minecraft:bamboo", "minecraft:bamboo"],
  ]);
 
  
  //Blockus Golden bars
  event.remove({ output: "blockus:golden_bars" });

  event.shapeless('blockus:golden_bars', ['charm:gold_bars'])
  event.shapeless('charm:gold_bars', ['blockus:golden_bars'])

  // Basic Coil / Red Alloy Compound
  event.remove({ output: "rswires:red_alloy_compound" });

  event.shaped(item.of("rswires:red_alloy_compound"), [
    ["minecraft:iron_ingot", "minecraft:redstone", "minecraft:redstone"],
  ]);

  // Empty Cell / Tin Gear
  event.remove({ id: "techreborn:crafting_table/cell" });
  event.shaped(item.of("techreborn:cell", 4), [
    [null, "#c:tin_ingots", null],
    ["#c:tin_ingots", "minecraft:glass", "#c:tin_ingots"],
    [null, "#c:tin_ingots", null],
  ]);

  // AE2 Grindstone
  event.remove({ output: "appliedenergistics2:grindstone" });

  // Seeds
  event.remove({ id: "sandwichable:tomato_seeds_from_tomato" });
  event.remove({ id: "sandwichable:cucumber_seeds" });

  // Barrels
  var blockus_barrels = [
    "oak",
    "birch",
    "jungle",
    "acacia",
    "dark_oak",
    "crimson",
    "warped",
  ];

  blockus_barrels.forEach(function (item, index) {
    event.remove({
      type: "crafting_shaped",
      output: "blockus:" + item + "_barrel",
    });
  });
});
