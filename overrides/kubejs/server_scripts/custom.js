////////////////////////
/// Made by Team AOF ///
////////////////////////
//disable lagging stuff
events.listen("recipes", function (event) {
  event.remove({ output: "techreborn:chunk_loader" });
  //event.remove({ output: "techreborn:auto_crafting_table" }); //The Lag should be fixed we will see
  //to stop lag
  event.remove({ id: "kibe:chunk_loader" });
  //blast.. but not removing mod so obligatory bomb fights can happen with ops
  event.remove({ id: "blast:bomb" });
  event.remove({ id: "blast:golden_bomb" });
  event.remove({ id: "blast:diamond_bomb" });
  event.remove({ id: "blast:trigger_bomb" });
  event.remove({ id: "blast:golden_trigger_bomb" });
  event.remove({ id: "blast:diamond_trigger_bomb" });
  event.remove({ id: "blast:stripminer" });
  event.remove({ id: "blast:naval_mine" });
    
  // no nuke
  event.remove({ output: "techreborn:nuke" });

  //advanced turtle - reenabled as dig is disabled
  //event.remove({ output: "computercraft:turtle_advanced" });

  //Remove Claim Anchor Upgrades as they are infinite use
  event.remove({ id: "goml:angelic_aura" });
  event.remove({ id: "goml:chaos_zone" });
  event.remove({ id: "goml:ender_binding" });
  event.remove({ id: "goml:village_core" });
  event.remove({ id: "goml:heaven_wings" });
  event.remove({ id: "goml:lake_spirit_grace" });
  event.remove({ id: "goml:withering_seal" });

  //easier makeshift anchor
  event.remove({ output: "goml:makeshift_claim_anchor" });
  event.shaped(item.of("goml:makeshift_claim_anchor"), [
    ["#minecraft:logs", "minecraft:stone", "#minecraft:logs"],
    ["minecraft:stone", "minecraft:gold_ingot", "minecraft:stone"],
    ["#minecraft:logs", "minecraft:stone", "#minecraft:logs"],
  ]);
  //bad signs
  event.remove({ id: "betterend:umbrella_tree_sign" });
  event.remove({ id: "betterend:mossy_glowshroom_sign" });
  event.remove({ id: "betterend:end_lotus_sign" });
  event.remove({ id: "betterend:lacugrove_sign" });
  event.remove({ id: "betterend:pythadendron_sign" });
  event.remove({ id: "betterend:dragon_tree_sign" });
  event.remove({ id: "betterend:tenanea_sign" });
  event.remove({ id: "betterend:helix_tree_sign" });
  event.remove({ id: "betterend:jellyshroom_sign" });

  // this is to have these items not conflict
  event.remove({ id: "gateofbabylon:diamond_katana" });
  event.remove({ id: "gateofbabylon:golden_katana" });
  event.remove({ id: "gateofbabylon:iron_katana" });
  event.remove({ id: "gateofbabylon:stone_katana" });
  event.remove({ id: "gateofbabylon:wooden_katana" });

  event.shaped(item.of("gateofbabylon:wooden_katana"), [
    ['#minecraft:planks', null, null],
    [null, '#minecraft:planks', null],
    [null, null, "minecraft:stick"],
  ]);
    event.shaped(item.of("gateofbabylon:stone_katana"), [
    ['minecraft:stone', null, null],
    [null, 'minecraft:stone', null],
    [null, null, "minecraft:stick"],
  ]);
    event.shaped(item.of("gateofbabylon:iron_katana"), [
    ['minecraft:iron_ingot', null, null],
    [null, 'minecraft:iron_ingot', null],
    [null, null, "minecraft:stick"],
  ]);
    event.shaped(item.of("gateofbabylon:golden_katana"), [
    ['minecraft:gold_ingot', null, null],
    [null, 'minecraft:gold_ingot', null],
    [null, null, "minecraft:stick"],
  ]);
    event.shaped(item.of("gateofbabylon:diamond_katana"), [
    ['minecraft:diamond', null, null],
    [null, 'minecraft:diamond', null],
    [null, null, "minecraft:stick"],
  ]);

  event.remove({ id: "winged:ceremonial_knife" });
  event.shaped(item.of("winged:ceremonial_knife"), [
    [null, null, 'minecraft:iron_nugget'],
    [null, 'minecraft:iron_nugget', 'minecraft:iron_nugget'],
    ['minecraft:stick', null, null],
  ]);
  event.remove({ id: "bewitchment:ectoplasm" });
  event.shaped(item.of("bewitchment:ectoplasm"), [
    [null, 'biomemakeover:ectoplasm', 'minecraft:stick'],
    [null, null, null],
    [null, null, null],
  ]);
  event.remove({ id: "croptopia:pepper" });
  event.shaped(item.of("croptopia:pepper"), [
    [null, 'croptopia:chile_pepper_seed', 'croptopia:bell_pepper_seed'],
    [null, null, null],
    [null, null, null],
  ]);
});