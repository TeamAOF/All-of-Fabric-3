print("Conflicts script loaded");


var RecipeTweaker = libcd.require("libcd.recipe.RecipeTweaker");
var TweakerUtils = libcd.require("libcd.util.TweakerUtils");



// Kitchen Knife
RecipeTweaker.removeRecipesFor("sandwichable:kitchen_knife");

RecipeTweaker.addShaped([
        [null, "minecraft:iron_nugget", null],
        [null, "minecraft:iron_nugget", null],
        [null, "minecraft:stick",       null]], 
        TweakerUtils.createItemStack("sandwichable:kitchen_knife"));


// Fragments
RecipeTweaker.removeRecipesFor("techreborn:diamond_nugget");
RecipeTweaker.removeRecipesFor("techreborn:emerald_nugget");


// Crude Storage Units
RecipeTweaker.removeRecipesFor("techreborn:crude_storage_unit");

RecipeTweaker.addShaped([
        ["#minecraft:planks", "#minecraft:planks", "#minecraft:planks"],
        ["#minecraft:planks", "#blockus:barrels",  "#minecraft:planks"],
        ["#minecraft:planks", "minecraft:paper",   "#minecraft:planks"]], 
        TweakerUtils.createItemStack("techreborn:crude_storage_unit"));