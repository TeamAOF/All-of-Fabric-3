//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
	
//╔════════════════════════════════════════╗
//║             WOODEN HOPPERS             ║
//╚════════════════════════════════════════╝

  // Oak Hopper
  event.remove({ output: "woodenhoppers:oak_hopper" });	
  event.shaped(item.of("woodenhoppers:oak_hopper"), [
	["minecraft:oak_planks", "#minecraft:beacon_payment_items", "minecraft:oak_planks"],
	["minecraft:oak_planks", "#minecraft:beacon_payment_items", "minecraft:oak_planks"],
	["null"				   , "minecraft:oak_planks"           , "null"	              ],
   ]);

  // Spruce Hopper
  event.remove({ output: "woodenhoppers:spruce_hopper" });	
  event.shaped(item.of("woodenhoppers:spruce_hopper"), [
	["minecraft:spruce_planks", "#minecraft:beacon_payment_items", "minecraft:spruce_planks"],
	["minecraft:spruce_planks", "#minecraft:beacon_payment_items", "minecraft:spruce_planks"],
	["null"				      , "minecraft:spruce_planks"        , "null"                   ],
   ]);

  // Birch Hopper
  event.remove({ output: "woodenhoppers:birch_hopper" });	
  event.shaped(item.of("woodenhoppers:birch_hopper"), [
	["minecraft:birch_planks", "#minecraft:beacon_payment_items", "minecraft:birch_planks"],
	["minecraft:birch_planks", "#minecraft:beacon_payment_items", "minecraft:birch_planks"],
	["null"				     , "minecraft:birch_planks"         , "null"	              ],
   ]);

  // Jungle Hopper
  event.remove({ output: "woodenhoppers:jungle_hopper" });		
  event.shaped(item.of("woodenhoppers:jungle_hopper"), [
	["minecraft:jungle_planks", "#minecraft:beacon_payment_items", "minecraft:jungle_planks"],
	["minecraft:jungle_planks", "#minecraft:beacon_payment_items", "minecraft:jungle_planks"],
	["null"				      , "minecraft:jungle_planks"        , "null"			        ],
   ]);

  // Acacia Hopper
  event.remove({ output: "woodenhoppers:acacia_hopper" });		
  event.shaped(item.of("woodenhoppers:acacia_hopper"), [
	["minecraft:acacia_planks", "#minecraft:beacon_payment_items", "minecraft:acacia_planks"],
	["minecraft:acacia_planks", "#minecraft:beacon_payment_items", "minecraft:acacia_planks"],
	["null"				      , "minecraft:acacia_planks"        , "null"                   ],
   ]);

  // Dark Oak Hopper
  event.remove({ output: "woodenhoppers:dark_oak_hopper" });		
  event.shaped(item.of("woodenhoppers:dark_oak_hopper"), [
	["minecraft:dark_oak_planks", "#minecraft:beacon_payment_items", "minecraft:dark_oak_planks"],
	["minecraft:dark_oak_planks", "#minecraft:beacon_payment_items", "minecraft:dark_oak_planks"],
	["null"				        , "minecraft:dark_oak_planks"      , "null"                     ],
   ]);

  // Crimson Hopper
  event.remove({ output: "woodenhoppers:crimson_hopper" });		
  event.shaped(item.of("woodenhoppers:crimson_hopper"), [
	["minecraft:crimson_planks", "#minecraft:beacon_payment_items", "minecraft:crimson_planks"],
	["minecraft:crimson_planks", "#minecraft:beacon_payment_items", "minecraft:crimson_planks"],
	["null"				       , "minecraft:crimson_planks"       , "null"                    ],
   ]);

  // Warped Hopper
  event.remove({ output: "woodenhoppers:warped_hopper" });		
  event.shaped(item.of("woodenhoppers:warped_hopper"), [
	["minecraft:warped_planks", "#minecraft:beacon_payment_items", "minecraft:warped_planks"],
	["minecraft:warped_planks", "#minecraft:beacon_payment_items", "minecraft:warped_planks"],
	["null"				      , "minecraft:warped_planks"        , "null"                   ],
   ]);
});