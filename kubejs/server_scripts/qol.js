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
	
  // Buckets
  event.shaped(item.of("minecraft:bucket", 9), [
	["null"          , "null"          , "null"          ],
	["#c:iron_blocks", "null"          , "#c:iron_blocks"],
	["null"          , "#c:iron_blocks", "null"          ],
   ]);

  // Chests
  event.shaped(item.of("minecraft:chest", 4), [
	["#minecraft:logs_that_burn", "#minecraft:logs_that_burn", "#minecraft:logs_that_burn"],
	["#minecraft:logs_that_burn", null                       , "#minecraft:logs_that_burn"],
	["#minecraft:logs_that_burn", "#minecraft:logs_that_burn", "#minecraft:logs_that_burn"],
   ]);

  // Firework Rockets  
  event.remove({ output: "minecraft:firework_rocket" });	
  event.shaped(item.of("minecraft:firework_rocket", 9), [
     ["minecraft:gunpowder", "minecraft:paper", "null"],
     ["minecraft:gunpowder", "minecraft:paper", "null"],
     ["minecraft:gunpowder", "minecraft:paper", "null"],
   ]);
 	
  event.remove({ output: "minecraft:firework_rocket" });	
  event.shaped(item.of("minecraft:firework_rocket", 6), [
     ["minecraft:gunpowder", "minecraft:paper", "null"],
     ["minecraft:gunpowder", "minecraft:paper", "null"],
   ]);
    
  event.remove({ output: "minecraft:firework_rocket" });	
  event.shaped(item.of("minecraft:firework_rocket", 3), [
    ["minecraft:gunpowder", "minecraft:paper", "null"],
   ]);
});
