events.listen("recipes", function (event) {

//╔════════════════════════════════════════╗
//║             ROTTEN FLESH               ║
//╚════════════════════════════════════════╝

   event.smelting('minecraft:leather', 'minecraft:rotten_flesh').xp(0.1);
})

