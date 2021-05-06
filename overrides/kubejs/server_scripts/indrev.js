////////////////////////
/// Made by Team AOF ///
////////////////////////


events.listen("recipes", function (event) {
    event.recipes.indrev.compress({
        
        ingredients: {
            item: "techreborn:tin_plate",
            count: 4
        },
        output: {
            item: "indrev:empty_upgrade",
            count: 1
        },
        processTime: 300
    });

    event.recipes.indrev.compress({
        
        ingredients: {
            item: "techreborn:saw_dust",
            count: 4
        },
        output: {
            item: "indrev:planks",
            count: 1
        },
        processTime: 300
    });
});
