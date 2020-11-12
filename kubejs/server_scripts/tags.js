////////////////////////
/// Made by Team AOF ///
////////////////////////

events.listen('item.tags', function (event) {
  
  // Salt
  event.get('c:salt_dusts').add('sandwichable:salt')
  event.get('c:salt_dusts').add('croptopia:salt')
  event.get('c:salt_ores').add('croptopia:salt_ore')

 
 // Chests
 var chests = [
  "oak",
  "spruce",
  "birch",
  "jungle",
  "acacia",
  "dark_oak",
  "crimson",
  "warped",
];

  chests.forEach(function (item, index) {
  event.get("c:wooden_chests").add("charm:" + item + "_chest")
  event.get("c:wooden_chests").add("charm:" + item + "_trapped_chest")
});
  
});
