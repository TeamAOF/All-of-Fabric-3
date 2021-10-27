////////////////////////
/// Made by Team AOF ///
////////////////////////

events.listen("recipes", function (event) {
  // Silicon
  event.recipes.minecraft.blasting(
    item.of("appliedenergistics2:silicon"),
    "appliedenergistics2:certus_quartz_dust"
  );

  event.recipes.minecraft.smelting(
    item.of("appliedenergistics2:silicon"),
    "appliedenergistics2:certus_quartz_dust"
  );
  
  // Ebony Bookshelf
  event.shaped(item.of("byg:ebony_bookshelf", 1), ["EEE", "BBB", "EEE"], {
    E: "byg:ebony_planks",
    B: "minecraft:book",
  });
  
  // Oak Sign
  event.replaceInput(
    { id: "minecraft:oak_sign" },
    "minecraft:oak_planks",
    "#minecraft:planks"
  );

  // Wool Tarp
  event.shaped(item.of("campanion:wool_tarp"), [
    ["minecraft:white_wool", "minecraft:white_wool", "minecraft:white_wool"],
  ]);

  // Pine Slab
  event.shaped(item.of("woods_and_mires:pine_slab", 6), [
    ["woods_and_mires:pine_planks", "woods_and_mires:pine_planks", "woods_and_mires:pine_planks"],
  ]);

//╔════════════════════════════════════════╗
//║           AE2 MISSING SLABS            ║
//╚════════════════════════════════════════╝
    
	// Smooth slab
	event.remove({ output: "appliedenergistics2:smooth_sky_stone_slab" });	
    event.shaped(item.of("appliedenergistics2:smooth_sky_stone_slab", 6), [
    ["appliedenergistics2:smooth_sky_stone_block", "appliedenergistics2:smooth_sky_stone_block", "appliedenergistics2:smooth_sky_stone_block"],
   ]);
   
   	// Small Brick Slab
	event.remove({ output: "appliedenergistics2:sky_stone_small_brick_slab" });	
    event.shaped(item.of("appliedenergistics2:sky_stone_small_brick_slab", 6), [
    ["appliedenergistics2:sky_stone_small_brick", "appliedenergistics2:sky_stone_small_brick", "appliedenergistics2:sky_stone_small_brick"],
   ]);
   
	// Brick slab
	event.remove({ output: "appliedenergistics2:sky_stone_brick_slab" });	
    event.shaped(item.of("appliedenergistics2:sky_stone_brick_slab", 6), [
    ["appliedenergistics2:sky_stone_brick", "appliedenergistics2:sky_stone_brick", "appliedenergistics2:sky_stone_brick"],
   ]);
   
	// Fluix Slab
	event.remove({ output: "appliedenergistics2:fluix_slab" });	
    event.shaped(item.of("appliedenergistics2:fluix_slab", 6), [
    ["appliedenergistics2:fluix_block", "appliedenergistics2:fluix_block", "appliedenergistics2:fluix_block"],
   ]);

	// Stone Slab
	event.remove({ output: "appliedenergistics2:sky_stone_slab" });	
    event.shaped(item.of("appliedenergistics2:sky_stone_slab", 6), [
    ["appliedenergistics2:sky_stone_block", "appliedenergistics2:sky_stone_block", "appliedenergistics2:sky_stone_block"],
   ]);
   
	// Quartz Slab
	event.remove({ output: "appliedenergistics2:quartz_slab" });	
    event.shaped(item.of("appliedenergistics2:quartz_slab", 6), [
    ["appliedenergistics2:quartz_block", "appliedenergistics2:quartz_block", "appliedenergistics2:quartz_block"],
   ]);
   
	// Quartz Pillar Slab
	event.remove({ output: "appliedenergistics2:quartz_pillar_slab" });	
    event.shaped(item.of("appliedenergistics2:quartz_pillar_slab", 6), [
   ["appliedenergistics2:quartz_pillar", "appliedenergistics2:quartz_pillar", "appliedenergistics2:quartz_pillar"],
   ]);
   
	// Chiseled Quartz Slab
	event.remove({ output: "appliedenergistics2:chiseled_quartz_slab" });	
    event.shaped(item.of("appliedenergistics2:chiseled_quartz_slab", 6), [
    ["appliedenergistics2:chiseled_quartz_block", "appliedenergistics2:chiseled_quartz_block", "appliedenergistics2:chiseled_quartz_block"],
   ]);

//╔════════════════════════════════════════╗
//║          AE2 MISSING STAIRS            ║
//╚════════════════════════════════════════╝
    
	// Smooth Stairs
	event.remove({ output: "appliedenergistics2:smooth_sky_stone_stairs" });	
    event.shaped(item.of("appliedenergistics2:smooth_sky_stone_stairs", 6), [
	["appliedenergistics2:smooth_sky_stone_block", null, null],
    ["appliedenergistics2:smooth_sky_stone_block", "appliedenergistics2:smooth_sky_stone_block", "mull"],
	["appliedenergistics2:smooth_sky_stone_block", "appliedenergistics2:smooth_sky_stone_block", "appliedenergistics2:smooth_sky_stone_block"],
   ]);
   
   	// Small Brick Stairs
	event.remove({ output: "appliedenergistics2:sky_stone_small_brick_stairs" });	
    event.shaped(item.of("appliedenergistics2:sky_stone_small_brick_stairs", 6), [
    ["appliedenergistics2:sky_stone_small_brick", null, null],
    ["appliedenergistics2:sky_stone_small_brick", "appliedenergistics2:sky_stone_small_brick", null],
    ["appliedenergistics2:sky_stone_small_brick", "appliedenergistics2:sky_stone_small_brick", "appliedenergistics2:sky_stone_small_brick"],
   ]);
   
	// Brick Stairs
	event.remove({ output: "appliedenergistics2:sky_stone_brick_stairs" });	
    event.shaped(item.of("appliedenergistics2:sky_stone_brick_stairs", 6), [
    ["appliedenergistics2:sky_stone_brick", null, null],
	["appliedenergistics2:sky_stone_brick", "appliedenergistics2:sky_stone_brick", null],
	["appliedenergistics2:sky_stone_brick", "appliedenergistics2:sky_stone_brick", "appliedenergistics2:sky_stone_brick"],
   ]);
   
	// Fluix Stairs
	event.remove({ output: "appliedenergistics2:fluix_stairs" });
    event.shaped(item.of("appliedenergistics2:fluix_stairs", 6), [
    ["appliedenergistics2:fluix_block", "null", "null"],
    ["appliedenergistics2:fluix_block", "appliedenergistics2:fluix_block", "null"],
    ["appliedenergistics2:fluix_block", "appliedenergistics2:fluix_block", "appliedenergistics2:fluix_block"],
   ]);

	// Stone Stairs
	event.remove({ output: "appliedenergistics2:sky_stone_stairs" });	
    event.shaped(item.of("appliedenergistics2:sky_stone_stairs", 6), [
    ["appliedenergistics2:sky_stone_block", "null", "null"],
    ["appliedenergistics2:sky_stone_block", "appliedenergistics2:sky_stone_block", "null"],
    ["appliedenergistics2:sky_stone_block", "appliedenergistics2:sky_stone_block", "appliedenergistics2:sky_stone_block"],
   ]);
   
	// Quartz Stairs
	event.remove({ output: "appliedenergistics2:quartz_stairs" });	
    event.shaped(item.of("appliedenergistics2:quartz_stairs", 6), [
    ["appliedenergistics2:quartz_block", null, null],
    ["appliedenergistics2:quartz_block", "appliedenergistics2:quartz_block", null],
    ["appliedenergistics2:quartz_block", "appliedenergistics2:quartz_block", "appliedenergistics2:quartz_block"],
   ]);
   
	// Quartz Pillar Stairs
	event.remove({ output: "appliedenergistics2:quartz_pillar_stairs" });	
    event.shaped(item.of("appliedenergistics2:quartz_pillar_stairs", 6), [
   ["appliedenergistics2:quartz_pillar", null, null],
   ["appliedenergistics2:quartz_pillar", "appliedenergistics2:quartz_pillar", null],
   ["appliedenergistics2:quartz_pillar", "appliedenergistics2:quartz_pillar", "appliedenergistics2:quartz_pillar"],
   ]);
   
	// Chiseled Quartz Stairs
	event.remove({ output: "appliedenergistics2:chiseled_quartz_stairs" });	
    event.shaped(item.of("appliedenergistics2:chiseled_quartz_stairs", 6), [
    ["appliedenergistics2:chiseled_quartz_block", null, null],
    ["appliedenergistics2:chiseled_quartz_block", "appliedenergistics2:chiseled_quartz_block", "null"],
    ["appliedenergistics2:chiseled_quartz_block", "appliedenergistics2:chiseled_quartz_block", "appliedenergistics2:chiseled_quartz_block"],
   ]);
});
