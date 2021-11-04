

////////////////////////
/// Made by Team AOF ///
////////////////////////


events.listen("recipes", function (event) {


  // Heart of the Sky
  event.remove({ output: "winged:heart_of_the_sky" });


  // Angel Ring
  event.remove({ output: "kibe:angel_ring" });
  event.shaped(item.of("kibe:angel_ring"), [
    ['indrev:module_feather_falling', null,         'indrev:module_feather_falling'],
    ['netherite_plus:netherite_elytra', 'kibe:diamond_ring', 'netherite_plus:netherite_elytra'],
    ['minecraft:end_crystal', 'minecraft:nether_star', 'minecraft:dragon_breath'],
  ]);

    // Master Infusion Crystal
    event.remove({ output: "mysticalagriculture:master_infusion_crystal" });
    event.shaped(item.of("mysticalagriculture:master_infusion_crystal"), [
      ['mysticalagriculture:supremium_ingot', 'mysticalagriculture:infusion_crystal',         'mysticalagriculture:supremium_ingot'],
      ['mysticalagriculture:infusion_crystal', 'mysticalagriculture:supremium_gemstone_block', 'mysticalagriculture:infusion_crystal'],
      ['mysticalagriculture:supremium_ingot', 'mysticalagriculture:infusion_crystal', 'mysticalagriculture:supremium_ingot'],
    ]);


  // Quantum Suit
  event.remove({ output: "techreborn:quantum_chestplate" });
  event.shaped(item.of("techreborn:quantum_chestplate"), [
    ["techreborn:tungstensteel_plate",  null,                                   "techreborn:tungstensteel_plate"],
    ["techreborn:superconductor_cable", "kibe:angel_ring",                      "techreborn:superconductor_cable"],
    ["techreborn:data_storage_chip",    "techreborn:iridium_neutron_reflector", "techreborn:data_storage_chip"],
  ]);

  // Cobweb
  event.shaped(item.of("minecraft:cobweb"), [
    ["minecraft:string", "minecraft:string", "minecraft:string"],
    ["minecraft:string", "minecraft:string", "minecraft:string"],
    ["minecraft:string", "minecraft:string", "minecraft:string"],
  ]);

  // Compressor (Tech Reborn)
  event.remove({ output: "techreborn:compressor" });
  event.shaped(item.of("techreborn:compressor"), [
    ["techreborn:iron_plate", "techreborn:iron_plate",          "techreborn:iron_plate"],
    ["minecraft:stone",       "techreborn:electronic_circuit",  "minecraft:stone"],
    ["minecraft:stone",       "techreborn:basic_machine_frame", "minecraft:stone"],
  ]);

  // Solar Panels
  event.remove({ id: "techreborn:crafting_table/solar_panel/ultimate_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/industrial_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/advanced_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/advanced_solar_panel_alt" });

  // Metals
  event.remove({ id: "indrev:shapeless/steel_dust" });

  // Obsidian Tools
  event.remove({ id: "vanilla-hammers:obsidian_hammer" });
  event.remove({ id: "vanilla-excavators:obsidian_excavator" });

    // Light Ring
    event.remove({ output: "kibe:light_ring" });
    event.shaped(item.of("kibe:light_ring"), [
      ["iron-jetpacks:diamond_capacitor",            "modern_industrialization:tank_stainless_steel", "iron-jetpacks:diamond_capacitor"],
      ["modern_industrialization:bucket_light_fuel", "kibe:diamond_ring",                             "modern_industrialization:bucket_light_fuel"],
      ["iron-jetpacks:diamond_capacitor",            "modern_industrialization:tank_stainless_steel", "iron-jetpacks:diamond_capacitor"],
    ]);

      //Gem Tools & Gear
  var gems = [
    "ruby",
    "sapphire",
    "peridot",
  ];

  gems.forEach(function (item, index) {
    event.remove({ output: "techreborn:" + item + "_pickaxe"});
    event.remove({ output: "techreborn:" + item + "_spade"});
    event.remove({ output: "techreborn:" + item + "_axe"});
    event.remove({ output: "techreborn:" + item + "_hoe"});
    event.remove({ output: "techreborn:" + item + "_sword"});
  });

    // Minecart in Rolling Machine
    event.remove({ id: "techreborn:rolling_machine/minecart" });

    // MRE
  event.remove({ output: "campanion:mre" });
  
    // Remove boss key
  event.remove({ output: "battletowers:boss_key" });
});
