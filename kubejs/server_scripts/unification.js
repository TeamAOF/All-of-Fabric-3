////////////////////////
/// Made by Team AOF ///
////////////////////////

events.listen("recipes", function (event) {
  // --------- INDUSTRIAL REVOLUTION --------- //

  var indrev_materials = ["copper", "gold", "iron", "tin", "steel"];

  var indrev_dusts = [
    "copper",
    "gold",
    "iron",
    "tin",
    "steel",
    "diamond",
    "coal",
  ];

  var indrev_metals = ["copper", "tin", "steel"];

  var indrev_ores = ["copper", "tin"];

  // Plates
  indrev_materials.forEach(function (item, index) {
    event.remove({
      type: "crafting_shaped",
      output: "techreborn:" + item + "_plate",
    });

    event.replaceOutput(
      {},
      "indrev:" + item + "_plate",
      "techreborn:" + item + "_plate"
    );

    event.remove({
      id: "indrev:shapeless/" + item + "_plate" + "_from_hammer",
    });
  });

  // Dusts
  indrev_dusts.forEach(function (item, index) {
    event.replaceOutput(
      {},
      "indrev:" + item + "_dust",
      "techreborn:" + item + "_dust"
    );
  });

  event.replaceInput(
    {},
    "indrev:netherite_scrap_dust",
    "astromine:raw_netherite_dust"
  );

  event.replaceOutput(
    {},
    "indrev:netherite_scrap_dust",
    "astromine:raw_netherite_dust"
  );

  event.remove({ id: "indrev:smelting/netherite_scrap" });
  event.remove({ id: "indrev:smelting/netherite_scrap" });

  // Ingots
  indrev_metals.forEach(function (item, index) {
    event.replaceOutput(
      {},
      "indrev:" + item + "_ingot",
      "techreborn:" + item + "_ingot"
    );

    // Blocks
    event.replaceOutput(
      {},
      "indrev:" + item + "_block",
      "techreborn:" + item + "_storage_block"
    );

    // REI
    event.remove({ id: "indrev:shapeless/" + item + "_ingot_from_block" });
    event.remove({ id: "indrev:shapeless/" + item + "_nugget" });
    event.remove({ id: "indrev:shaped/" + item + "_ingot_from_nuggets" });
    event.remove({ id: "indrev:shaped/" + item + "_block" });
  });

  indrev_materials.forEach(function (item, index) {
    event.remove({ id: "indrev:smelting/" + item + "_ingot_from_smelting" });
    event.remove({ id: "indrev:smelting/" + item + "_ingot_from_dust" });
    event.remove({ id: "indrev:smelting/" + item + "_ingot" });
    event.remove({ id: "indrev:blasting/" + item + "_ingot_from_smelting" });
    event.remove({ id: "indrev:blasting/" + item + "_ingot_from_dust" });
  });

  indrev_ores.forEach(function (item, index) {
    event.remove({ id: "indrev:smelting/" + item + "_ingot_from_ore" });
    event.remove({ id: "indrev:blasting/" + item + "_ingot_from_ore" });
  });

  // --------- ASTROMINE --------- //

  var allAstroPlates = [
    "metite_plates",
    "stellum_plates",
    "univite_plates",
    "iron_plates",
    "gold_plates",
    "steel_plates",
    "copper_plates",
    "tin_plates",
    "lead_plates",
    "silver_plates",
    "bronze_plates",
    "electrum_plates",
    "netherite_plates",
  ];

  var astro_materials = [
    "copper",
    "tin",
    "lead",
    "silver",
    "steel",
    "bronze",
    "electrum",
  ];

  var astro_plates = [
    "copper",
    "tin",
    "lead",
    "silver",
    "steel",
    "bronze",
    "electrum",
    "gold",
    "iron",
  ];

  var astro_dusts = [
    "coal_dust",
    "charcoal_dust",
    "iron_dust",
    "gold_dust",
    "quartz_dust",
    "diamond_dust",
    "emerald_dust",
    "quartz_dust",
    "copper_dust",
    "lead_dust",
    "tin_dust",
    "silver_dust",
    "steel_dust",
    "bronze_dust",
    "electrum_dust",
  ];

  var astro_ores = ["copper", "tin", "lead", "silver"];

  // Plates
  astro_plates.forEach(function (item, index) {
    event.replaceOutput(
      {},
      "astromine:" + item + "_plate",
      "techreborn:" + item + "_plate"
    );

    event.remove({
      type: "crafting_shaped",
      output: "techreborn:" + item + "_plate",
    });
  });

  for (var plate in allAstroPlates) {
    event.remove({
      type: "crafting_shaped",
      output: "astromine:" + allAstroPlates[plate],
    });
  }

  // Dusts
  astro_dusts.forEach(function (item, index) {
    event.replaceOutput({}, "astromine:" + item, "techreborn:" + item);
  });

  // Blocks
  astro_materials.forEach(function (item, index) {
    event.replaceOutput(
      {},
      "astromine:" + item + "_block",
      "techreborn:" + item + "_storage_block"
    );
  });

  // Ingots
  astro_materials.forEach(function (item, index) {
    event.replaceOutput(
      {},
      "astromine:" + item + "_ingot",
      "techreborn:" + item + "_ingot"
    );

    // Nuggets
    event.replaceOutput(
      {},
      "astromine:" + item + "_nugget",
      "techreborn:" + item + "_nugget"
    );
  });

  // Ores
  astro_ores.forEach(function (item, index) {
    event.remove({ id: "astromine:" + item + "_ingot_from_smelting_ore" });
    event.remove({ id: "astromine:" + item + "_ingot_from_blasting_ore" });
  });

  // REI
  astro_materials.forEach(function (item, index) {
    event.remove({ id: "astromine:" + item + "_ingot_from_block" });
    event.remove({ id: "astromine:" + item + "_block_from_ingot" });
    event.remove({ id: "astromine:" + item + "_ingot_from_nugget" });
    event.remove({ id: "astromine:" + item + "_nugget_from_ingot" });
  });

  astro_plates.forEach(function (item, index) {
    event.remove({ id: "astromine:" + item + "_ingot_from_smelting_dust" });
    event.remove({ id: "astromine:" + item + "_ingot_from_blasting_dust" });
  });

  event.remove({ id: "astromine:quartz_from_smelting_dust"});

  // --------- MODERN INDUSTRIALIZATION --------- //

  var modern_materials = [
    "copper",
    "aluminum",
    "bronze",
    "chrome",
    "electrum",
    "gold",
    "invar",
    "redstone",
    "iron",
    "quartz",
    "lead",
    "nickel",
    "silver",
    "steel",
    "tin",
    "titanium",
  ];

  var modern_dusts = [
    "charcoal",
    "coal",
    "copper",
    "aluminum",
    "bronze",
    "chrome",
    "electrum",
    "gold",
    "invar",
    "nickel",
    "redstone",
    "iron",
    "quartz",
    "lead",
    "ruby",
    "nickel",
    "silver",
    "steel",
    "tin",
    "titanium",
  ];

  var modern_tinydusts = [
    "copper",
    "coal",
    "bronze",
    "electrum",
    "gold",
    "quartz",
    "redstone",
    "iron",
    "lead",
    "silver",
    "steel",
    "tin",
  ];

  var modern_metals = [
    "copper",
    "aluminum",
    "bronze",
    "chrome",
    "electrum",
    "invar",
    "redstone",
    "lead",
    "nickel",
    "silver",
    "steel",
    "tin",
    "titanium",
  ];

  var modern_ores = ["copper", "bauxite", "lead", "silver", "tin"];

  var modern_gears = ["copper", "bronze", "steel", "tin"];

  // Plates
  modern_materials.forEach(function (item, index) {
    event.replaceOutput(
      {},
      "modern_industrialization:" + item + "_plate",
      "techreborn:" + item + "_plate"
    );
  });

  // Dusts
  modern_dusts.forEach(function (item, index) {
    event.replaceOutput(
      {},
      "modern_industrialization:" + item + "_dust",
      "techreborn:" + item + "_dust"
    );
  });

  // Tiny Dusts
  modern_tinydusts.forEach(function (item, index) {
    event.replaceOutput(
      {},
      "modern_industrialization:" + item + "_tiny_dust",
      "astromine:" + item + "_tiny_dust"
    );
  });

  // Ingots
  modern_metals.forEach(function (item, index) {
    event.replaceOutput(
      {},
      "modern_industrialization:" + item + "_ingot",
      "techreborn:" + item + "_ingot"
    );

    // Blocks
      event.replaceInput(
        {},
        "modern_industrialization:" + item + "_block",
        "techreborn:" + item + "_storage_block"
      );
  });

  // Ores
  modern_ores.forEach(function (item, index) {
    event.replaceOutput(
      {},
      "modern_industrialization:" + item + "_ore",
      "techreborn:" + item + "_ore"
    );
  });

  event.replaceOutput(
    {},
    "modern_industrialization:salt_ore",
    "croptopia:salt_ore"
  );

  // Gears
  modern_gears.forEach(function (item, index) {
    event.replaceOutput(
      {},
      "modern_industrialization:" + item + "_gear",
      "astromine:" + item + "_gear"
    );
  });

  // REI
  modern_materials.forEach(function (item, index) {
    event.remove({
      id:
        "modern_industrialization:generated/materials/" +
        item +
        "/smelting/dust_smelting",
    });

    event.remove({
      id:
        "modern_industrialization:generated/materials/" +
        item +
        "/smelting/tiny_dust_smelting",
    });

    event.remove({
      id:
        "modern_industrialization:generated/materials/" +
        item +
        "/smelting/tiny_dust_blasting",
    });

    event.remove({
      id:
        "modern_industrialization:generated/materials/" +
        item +
        "/smelting/dust_blasting",
    });
  });

    modern_tinydusts.forEach(function (item, index) {
    event.remove({
      id:
        "modern_industrialization:generated/materials/" +
        item +
        "/craft/dust_from_tiny_dust",
    });
    
    event.remove({
      id:
        "modern_industrialization:generated/materials/" +
        item +
        "/craft/tiny_dust_from_dust",
    });
  });

  modern_ores.forEach(function (item, index) {
    event.remove({
      id:
        "modern_industrialization:generated/materials/" +
        item +
        "/smelting/ore_smelting",
    });

    event.remove({
      id:
        "modern_industrialization:generated/materials/" +
        item +
        "/smelting/ore_blasting",
    });
  });

  modern_metals.forEach(function (item, index) {
    event.remove({
      id:
        "modern_industrialization:generated/materials/" +
        item +
        "/craft/main_from_nugget",
    });

    event.remove({
      id:
        "modern_industrialization:generated/materials/" +
        item +
        "/craft/nugget_from_main",
    });

    event.remove({
      id:
        "modern_industrialization:generated/materials/" +
        item +
        "/craft/main_from_block",
    });

    event.remove({
      id:
        "modern_industrialization:generated/materials/" +
        item +
        "/craft/block_from_main",
    });
  });

  // --------- APPLIED ENERGESTICS 2 --------- //

  var applied_dusts = ["gold", "iron"];

  applied_dusts.forEach(function (item, index) {
    event.remove({
      id: "appliedenergistics2:smelting/" + item + "_ingot",
    });
  });

  // --------- CROPTOPIA --------- //

  var salt = ["sandwichable:salt", "modern_industrialization:salt_dust"];

  salt.forEach(function (item, index) {
    event.replaceOutput({}, item, "croptopia:salt");

    event.replaceInput({}, item, "croptopia:salt");
  });

  // --------- ULTIMATE REI FIX --------- //

  var rei_materials = [
    "tin",
    "copper",
    "lead",
    "aluminum",
    "chrome",
    "bronze",
    "silicon",
    "electrum",
    "invar",
    "nickel",
    "iron",
    "gold",
    "silver",
    "steel",
    "titanium",
    "tungsten",
  ];

  var rei_ingots = [
    "tin",
    "copper",
    "lead",
    "aluminum",
    "bronze",
    "electrum",
    "chrome",
    "invar",
    "nickel",
    "silver",
    "steel",
    "titanium",
    "tungsten",
  ];

  var rei_dusts = [
    "coal",
    "charcoal",
    "iron",
    "gold",
    "diamond",
    "emerald",
    "manganese",
    "chrome",
    "ruby",
    "nickel",
    "quartz",
    "copper",
    "aluminum",
    "lead",
    "tin",
    "silver",
    "steel",
    "bronze",
    "electrum",
    "titanium",
    "chrome",
  ];

  var rei_tinydusts = [
    "coal",
    "charcoal",
    "iron",
    "gold",
    "diamond",
    "emerald",
    "quartz",
    "copper",
    "lead",
    "tin",
    "silver",
    "steel",
    "bronze",
    "electrum",
  ];

  var rei_ores = ["tin", "copper", "lead", "bauxite", "silver", "salt"];

  var rei_gears = ["steel", "copper", "bronze", "tin"];

  // REI Dusts
  rei_dusts.forEach(function (item, index) {
    event.replaceInput(
      {},
      "#c:" + item + "_dusts",
      "techreborn:" + item + "_dust"
    );
  });

  // REI Tiny Dusts
  rei_tinydusts.forEach(function (item, index) {
    event.replaceInput(
      {},
      "#c:" + item + "_tiny_dusts",
      "astromine:" + item + "_tiny_dust"
    );
  });

  // REI Plates
  rei_materials.forEach(function (item, index) {
    event.replaceInput(
      {},
      "#c:" + item + "_plates",
      "techreborn:" + item + "_plate"
    );
  });

  // REI Gears
  rei_gears.forEach(function (item, index) {
    event.replaceInput(
      {},
      "#c:" + item + "_gears",
      "astromine:" + item + "_gear"
    );
  });

  // REI Ores
  rei_ores.forEach(function (item, index) {
    event.replaceInput(
      { id: "techreborn:smelting/" + item + "_ingot" },
      "#c:" + item + "_ores",
      "techreborn:" + item + "_ore"
    );
  });

  rei_ores.forEach(function (item, index) {
    event.replaceInput(
      { id: "techreborn:blasting/" + item + "_ingot" },
      "#c:" + item + "_ores",
      "techreborn:" + item + "_ore"
    );
  });

  // REI Ingots
  rei_ingots.forEach(function (item, index) {
    event.replaceInput(
      {},
      "#c:" + item + "_ingots",
      "techreborn:" + item + "_ingot"
    );
  });

  // REI Nuggets
  rei_ingots.forEach(function (item, index) {
    event.replaceInput(
      {},
      "#c:" + item + "_nuggets",
      "techreborn:" + item + "_nugget"
    );
  });

  // REI Blocks
  rei_ingots.forEach(function (item, index) {
    event.replaceInput(
      {},
      "#c:" + item + "_blocks",
      "techreborn:" + item + "_storage_block"
    );
  });
});
