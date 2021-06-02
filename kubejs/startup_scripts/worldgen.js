onEvent('worldgen.add', event => {
    //Lignite zone 0
    event.addOre(ore => {
        ore.block = 'modern_industrialization:lignite_coal_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['minershorizon:rocky_plains']

        ore.clusterMaxSize = 17
        ore.clusterCount = 30
        ore.minHeight = 100
        ore.maxHeight = 255
        ore.squared = true
    })
    //Lignite zone 1
    event.addOre(ore => {
        ore.block = 'modern_industrialization:lignite_coal_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['minershorizon:rocky_plains']

        ore.clusterMaxSize = 17
        ore.clusterCount = 5
        ore.minHeight = 60
        ore.maxHeight = 100
        ore.squared = true
    })
    //Antimony zone 0
    event.addOre(ore => {
        ore.block = 'modern_industrialization:antimony_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['minershorizon:rocky_plains']

        ore.clusterMaxSize = 8
        ore.clusterCount = 15
        ore.minHeight = 100
        ore.maxHeight = 255
        ore.squared = true
    })
    //Antimony zone 1-3
    event.addOre(ore => {
        ore.block = 'modern_industrialization:antimony_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['minershorizon:rocky_plains']

        ore.clusterMaxSize = 8
        ore.clusterCount = 5
        ore.minHeight = 0
        ore.maxHeight = 100
        ore.squared = true
    })
    //Prosperity zone 0
    event.addOre(ore => {
        ore.block = 'mysticalagriculture:prosperity_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['minershorizon:rocky_plains']

        ore.clusterMaxSize = 8
        ore.clusterCount = 2
        ore.minHeight = 100
        ore.maxHeight = 255
        ore.squared = true
    })
    //Prosperity zone 1-3
    event.addOre(ore => {
        ore.block = 'mysticalagriculture:prosperity_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['minershorizon:rocky_plains']

        ore.clusterMaxSize = 9
        ore.clusterCount = 5
        ore.minHeight = 0
        ore.maxHeight = 100
        ore.squared = true
    })
    //Inferium zone 0
    event.addOre(ore => {
        ore.block = 'mysticalagriculture:inferium_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['minershorizon:rocky_plains']

        ore.clusterMaxSize = 8
        ore.clusterCount = 2
        ore.minHeight = 100
        ore.maxHeight = 255
        ore.squared = true
    })
    //Inferium zone 1-3
        event.addOre(ore => {
        ore.block = 'mysticalagriculture:inferium_ore'
        ore.spawnsIn.values = ['#minecraft:base_stone_overworld']
        ore.biomes.blacklist = false
        ore.biomes.values = ['minershorizon:rocky_plains']

        ore.clusterMaxSize = 9
        ore.clusterCount = 5
        ore.minHeight = 0
        ore.maxHeight = 100
        ore.squared = true
    })
})