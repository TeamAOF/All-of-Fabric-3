////////////////////////
/// Made by Team AOF ///
////////////////////////

events.listen('item.tags', function (event) {
  
  
  // Salt
  event.get('c:salt_dusts').add('croptopia:salt')
  event.get('c:salt_ores').add('croptopia:salt_ore')

 
 // Chests
 var charm_chests = [
  "oak",
  "spruce",
  "birch",
  "jungle",
  "acacia",
  "dark_oak",
  "crimson",
  "warped",
];

var be_stuff = [
  "mossy_glowshroom",
  "pythadendron",
  "end_lotus",
  "lacugrove",
  "dragon_tree",
  "tenanea",
  "helix_tree",
  "umbrella_tree",
  "jellyshroom"
];

  charm_chests.forEach(function (item, index) {
  event.get("c:wooden_chests").add("charm:" + item + "_chest")
  event.get("c:wooden_chests").add("charm:" + item + "_trapped_chest")
});

be_stuff.forEach(function (item, index) {
  event.get("c:wooden_chests").add("betterend:" + item + "_chest")
  event.get("charm:barrels").add("betterend:" + item + "_barrel")
});

  // Dank Storage
  event.get("dankstorage:blacklisted_storage").remove("minecraft:stone");

// Workbenches
var workbench = [
  'byg:nightshade_crafting_table',
  'byg:bulbis_crafting_table',
  'byg:ether_crafting_table',
];

workbench.forEach(function (item, index) {
  event.get("c:workbench").add(item)
});

 // Barrels
 var blockus_barrels = [
  "charred",
  "white_oak",
  "bamboo",
];

blockus_barrels.forEach(function (item, index) {
  event.get("charm:barrels").add("blockus:" + item + "_barrel")
});
  
});
