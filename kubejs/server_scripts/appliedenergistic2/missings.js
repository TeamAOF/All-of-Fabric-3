//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝

events.listen("recipes", function (event) {

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