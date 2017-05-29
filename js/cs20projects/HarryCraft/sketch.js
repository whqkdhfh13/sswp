var world;

function setup() {

    world = createWorld();

    console.log(world);
    console.log(world[1][2][3]);

}

function draw() {

}


function createWorld() {
    // Make the world
    var tWorld = [];
    var tLevel,tArray = [];

    for (var i = 0; i < 100; i++) {
        tArray.push("0");
    }

    for (var level = 0; level < 100; level++) {
        // Make one level
        tLevel = [];
        for (var i = 0; i < 100; i++) {
            tLevel.push(tArray);
        }
        // Add level to tWorld
        tWorld.push(tLevel);
    }
    return tWorld;
}
