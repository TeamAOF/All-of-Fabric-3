events.listen("recipes", function (event) {
    
  // Ingot Unification
  var ingots = [
    "copper_ingot", 
    "tin_ingot",
    "lead_ingot",
    "silver_ingot",
    "steel_ingot", 
    "bronze_ingot",
  ];

  ingots.forEach(function (item, index) {
    event.replaceOutput({}, "astromine:" + item, "techreborn:" + item);
  });

  // Dust Unification
  var dusts = [
      "copper_dust",
      "lead_dust", 
      "tin_dust",
      "silver_dust", 
      "steel_dust", 
      "bronze_dust",
    ];

  dusts.forEach(function (item, index) {
    event.replaceOutput({}, "astromine:" + item, "techreborn:" + item);
  });

  // Plate Unification
  var plates = [
    "iron_plate",
    "gold_plate",
    "steel_plate",
    "silver_plate",
    "lead_plate",
    "copper_plate",
    "tin_plate",
    "bronze_plate",
  ];

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
    "netherite_plates",
  ];

  plates.forEach(function (item, index) {
    event.replaceOutput({}, "astromine:" + item + "s", "techreborn:" + item);

    event.remove({
      type: "crafting_shaped",
      output: "techreborn:" + item,
    });

    event.remove({
      id: "indrev:shapeless/" + item + "_from_hammer",
    });
  });

  for (var plate in allAstroPlates) {
    event.remove({
      type: "crafting_shaped",
      output: "astromine:" + allAstroPlates[plate],
    });
  }

});
