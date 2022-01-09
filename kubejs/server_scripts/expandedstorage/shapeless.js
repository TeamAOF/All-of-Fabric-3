//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝

events.listen("recipes", function (event) {
	
//╔════════════════════════════════════════╗
//║         EXPANDEDSTORAGE/CHESTS         ║
//╚════════════════════════════════════════╝

	event.shapeless('expandedstorage:old_wood_chest', ['expandedstorage:wood_chest'])
	event.shapeless('expandedstorage:wood_chest', ['expandedstorage:old_wood_chest']);
});