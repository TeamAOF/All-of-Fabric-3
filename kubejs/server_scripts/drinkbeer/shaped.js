//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝

events.listen("recipes", function (event) {

//╔════════════════════════════════════════╗
//║              DRINK BEER                ║
//╚════════════════════════════════════════╝

	event.remove({ output: "drinkbeer:iron_call_bell" });
	event.shaped(item.of("indrev:cooler_cell"), [
	["#c:iron_nuggets",   "null", "null"],
	["#c:iron_ingots" ,   "null", "null"],
	["#minecraft:planks", "null", "null"],
	]);
	
	event.remove({ output: "drinkbeer:gold_call_bell" });
	event.shaped(item.of("indrev:cooler_cell"), [
	["minecraft:gold_nugget",   "null", "null"],
	["minecraft:gold_ingot" ,   "null", "null"],
	["#minecraft:planks",       "null", "null"],
	]);
	
	event.remove({ output: "drinkbeer:lekas_call_bell" });
	event.shaped(item.of("indrev:cooler_cell"), [
	["techreborn:copper_nugget",   "null", "null"],
	["techreborn:copper_ingot" ,   "null", "null"],
	["#minecraft:planks",          "null", "null"],
	]);
});