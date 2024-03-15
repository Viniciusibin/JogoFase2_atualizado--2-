var gameState = {
    larguraJogo: window.innerWidth,
    alturaJogo: window.innerHeight,
};

var config = {
    type: Phaser.AUTO,
    width: gameState.larguraJogo,
    height: gameState.alturaJogo,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0},
            debug: true,
        },

    },
    parent: "game",
            dom:{
               createContainer: true,
            },
    scene: [mainBrowser ,BrowserF1 , LinkReclameF1, LinkBancoF1, LinkJusMetaF1],
};

var game = new Phaser.Game(config);