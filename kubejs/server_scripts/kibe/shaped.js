//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
	
//╔════════════════════════════════════════╗
//║              KIBE/LASSO                ║
//╚════════════════════════════════════════╝

	// Cursed Lasso
	event.remove({ output: "kibe:cursed_lasso" });	
	event.shaped(item.of("kibe:cursed_lasso"), [ 
	["kibe:cursed_seeds", "kibe:cursed_kibe", "kibe:cursed_seeds"],
	["mysticalagriculture:sheep_essence", "minecraft:lead", "mysticalagriculture:sheep_essence"],
	["mysticalagriculture:cow_essence"  , "mysticalagriculture:wither_skeleton_essence", "mysticalagriculture:cow_essence"],
	]);

	// Diamond Lasso
	event.remove({ output: "kibe:diamond_lasso" });	
	event.shaped(item.of("kibe:diamond_lasso"), [ 
	["mysticalagriculture:zombie_essence"  , "kibe:diamond_kibe", "mysticalagriculture:zombie_essence"],
	["mysticalagriculture:enderman_essence", "kibe:golden_lasso", "mysticalagriculture:enderman_essence"],
	["mysticalagriculture:blaze_essence"   , "mysticalagriculture:creeper_essence", "mysticalagriculture:blaze_essence"],
	]);
	
	// Golden Lasso
	event.remove({ output: "kibe:golden_lasso" });	
	event.shaped(item.of("kibe:golden_lasso"), [ 
	["mysticalagriculture:rabbit_essence"  , "kibe:golden_kibe" , "mysticalagriculture:rabbit_essence"  ],
	["mysticalagriculture:skeleton_essence", "kibe:cursed_lasso", "mysticalagriculture:skeleton_essence"],
	["mysticalagriculture:chicken_essence" , "mysticalagriculture:ghast_essence", "mysticalagriculture:chicken_essence"],
	]);

//╔════════════════════════════════════════╗
//║              KIBE/RINGS                ║
//╚════════════════════════════════════════╝
//
//	// Angel Ring
//	event.remove({ output: "kibe:angel_ring" });	
//	event.shaped(item.of("kibe:angel_ring"), [ 
//	["winged:angel_feather", "minecraft:elytra"                   , "winged:angel_feather"],
//	["modern_industrialization:iron_gear"  , "modern_industrialization:air_intake", "modern_industrialization:iron_gear"  ],
//	["kibe:diamond_ring"   , "indrev:module_feather_falling"      , "kibe:diamond_ring"   ],
//	]);
//	
//	// Light Ring
//	event.remove({ output: "kibe:light_ring" });	
//	event.shaped(item.of("kibe:light_ring"), [
//	["modern_industrialization:gold_curved_plate", "kibe:diamond_ring", "modern_industrialization:gold_curved_plate"],
//	["kibe:golden_lasso", "modern_industrialization:bucket_light_fuel", "kibe:golden_lasso"  ],
//	["minecraft:gold_ingot", "modern_industrialization:lv_circuit_board" , "minecraft:gold_ingot"],
//	]);
//	
//	// Diamond Ring
//	event.remove({ output: "kibe:diamond_ring" });	
//	event.shaped(item.of("kibe:diamond_ring"), [
//	["minecraft:diamond", "modern_industrialization:gold_crushed_dust", "minecraft:diamond"],
//	["modern_industrialization:gold_crushed_dust", "mysticalagriculture:gold_essence","modern_industrialization:gold_crushed_dust"],
//	["minecraft:diamond", "modern_industrialization:gold_crushed_dust", "minecraft:diamond"],
//	]);
//
//╔════════════════════════════════════════╗
//║              KIBE/MAGNET               ║
//╚════════════════════════════════════════╝

  event.remove({ output: "kibe:magnet" });	
  event.shaped(item.of("kibe:magnet"), [
	["minecraft:red_dye"             , "#minecraft:beacon_payment_items", "#minecraft:beacon_payment_items"],
	["#minecraft:beacon_payment_items", "minecraft:ender_eye"           , "null"                           ],
	["minecraft:red_dye"             , "#minecraft:beacon_payment_items", "#minecraft:beacon_payment_items"],
  ]);
})