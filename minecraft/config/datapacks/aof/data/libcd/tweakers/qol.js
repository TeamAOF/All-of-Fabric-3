print("QOL script loaded!");


var RecipeTweaker = libcd.require("libcd.recipe.RecipeTweaker");
var TweakerUtils = libcd.require("libcd.util.TweakerUtils");



// Chest
RecipeTweaker.addShaped([
	    ["#minecraft:logs", "#minecraft:logs", "#minecraft:logs"],
        ["#minecraft:logs", null,              "#minecraft:logs"],
        ["#minecraft:logs", "#minecraft:logs", "#minecraft:logs"]], 
        TweakerUtils.createItemStack("minecraft:chest", 4));



// Crafting Station
RecipeTweaker.addShapeless(
	    ["improved-stations:crafting_station"],
        TweakerUtils.createItemStack("minecraft:crafting_table"));

RecipeTweaker.removeRecipe("improved-stations:crafting_station_slab");
RecipeTweaker.addShapeless(
	    ["improved-stations:crafting_station"],
        TweakerUtils.createItemStack("improved-stations:crafting_station_slab"));

RecipeTweaker.addShapeless(
	    ["improved-stations:crafting_station_slab"],
        TweakerUtils.createItemStack("improved-stations:crafting_station"));