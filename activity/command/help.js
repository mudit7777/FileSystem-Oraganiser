function help(src) { 
    console.log(`list of all the commands
                            1. node main.js tree with path :---> ${src}
                            2. node main.js organize "path" :---> ${src}
                            3. node main.js help`);
};
module.exports = {
    helpfxn: help
}