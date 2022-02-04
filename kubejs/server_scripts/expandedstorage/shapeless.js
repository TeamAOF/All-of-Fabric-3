events.listen("recipes", function (event) {
	
	event.shapeless('expandedstorage:old_wood_chest', ['expandedstorage:wood_chest'])
	event.shapeless('expandedstorage:wood_chest', ['expandedstorage:old_wood_chest']);
});