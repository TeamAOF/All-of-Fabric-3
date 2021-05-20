events.listen('recipes', function(event) {
    
    //Logic Processor recipe
    event.recipes.indrev.infuse({
        ingredients: [
            {
                item: 'minecraft:gold_ingot',
                count: 8
            },
            {
                item: 'minecraft:iron_block'
            }
        ],
        output: {
            item: 'appliedenergistics2:logic_processor_press'
        },
        processTime: 200
    })

    //Calculation Processor recipe
    event.recipes.indrev.infuse({
        ingredients: [
            {
                item: 'appliedenergistics2:certus_quartz_crystal',
                count: 8
            },
            {
                item: 'minecraft:iron_block'
            }
        ],
        output: {
            item: 'appliedenergistics2:calculation_processor_press'
        },
        processTime: 200
    })

    //Engineering Processor recipe
    event.recipes.indrev.infuse({
        ingredients: [
            {
                item: 'minecraft:diamond',
                count: 8
            },
            {
                item: 'minecraft:iron_block'
            }
        ],
        output: {
            item: 'appliedenergistics2:engineering_processor_press'
        },
        processTime: 200
    })

    //Silicon Plate recipe
    event.recipes.indrev.infuse({
        ingredients: [
            {
                item: 'appliedenergistics2:silicon',
                count: 8
            },
            {
                item: 'minecraft:iron_block'
            }
        ],
        output: {
            item: 'appliedenergistics2:silicon_press'
        },
        processTime: 200
    })
});