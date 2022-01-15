events.listen("recipes", function (event) {
	
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

 	// Kibe Magnet 
    event.remove({ output: "kibe:magnet" });	
    event.shaped(item.of("kibe:magnet"), [
    ["minecraft:red_dye"             , "#minecraft:beacon_payment_items", "#minecraft:beacon_payment_items"],
    ["#minecraft:beacon_payment_items", "minecraft:ender_eye"           , "null"                           ],
    ["minecraft:red_dye"             , "#minecraft:beacon_payment_items", "#minecraft:beacon_payment_items"],
    ]);
})