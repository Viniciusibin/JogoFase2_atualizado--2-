// Criando as variáveis
var linkReclameF2;
var linkBancoF2;
var linkJusMetaF2;

var linha1;
var linha2;
var linha3;

class BrowserF2 extends Phaser.Scene {
    constructor() {
        super({ key: "BrowserF2" });
    }

    // Carregando as imagens do jogo
    preload() {

        this.load.image("browserF2", "././assets/Fornecedor_2_img/browser_fornecedor2.png");
        this.load.image("reclameF2", "././assets/Fornecedor_2_img/link_forn2_reclame_cropped.png");
        this.load.image("bancoF2", "././assets/Fornecedor_2_img/link_forn2_banco_cropped.png");
        this.load.image("jusMetaF2", "././assets/Fornecedor_2_img/link_forn2_jusMeta_cropped.png");
        this.load.image("linha", "././assets/Jogo_img/linha.png");

    }



    create() {

        // Adionando as imagens do jogo
        this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "browserF2").setScale(1.3, 1.185);
        linkReclameF2 = this.add.image(gameState.larguraJogo / 5.57, gameState.alturaJogo / 2.57, "reclameF2").setScale(1.2);
        linkBancoF2 = this.add.image(gameState.larguraJogo / 5.24, gameState.alturaJogo / 1.6, "bancoF2").setScale(1.2);
        linkJusMetaF2 = this.add.image(gameState.larguraJogo / 5.88, gameState.alturaJogo / 1.14, "jusMetaF2").setScale(1.2);
        
        linha1 = this.add.image(gameState.larguraJogo / 5.57, gameState.alturaJogo / 2.54, "linha");
        linha1.setVisible(false);
        linha1.setScale(0.9, 1);

        linha2 = this.add.image(gameState.larguraJogo / 5.24, gameState.alturaJogo / 1.57, "linha");
        linha2.setVisible(false);


        linha3 = this.add.image(gameState.larguraJogo / 5.88, gameState.alturaJogo / 1.14, "linha");
        linha3.setVisible(false);
        linha3.setScale(0.8, 1);



        // Fazendo com que ao apertar em um link o jogo mude de cena
        linkReclameF2.setInteractive({ cursor: "pointer" });
        linkReclameF2.on("pointerdown", () => {
            
            this.scene.start("LinkReclameF2");
        })
        
        linkBancoF2.setInteractive({ cursor: "pointer" });
        linkBancoF2.on("pointerdown", () => {
            
            this.scene.start("LinkBancoF2");
        })

        linkJusMetaF2.setInteractive({ cursor: "pointer" });
        linkJusMetaF2.on("pointerdown", () => {
            
            this.scene.start("LinkJusMetaF2");
        })


        // Passando o mouse por cima do linkReclameF2
        linkReclameF2.on('pointerover', function () {
            linha1.setVisible(true);
        })

        linkReclameF2.on('pointerout', function () {
            linha1.setVisible(false);
        })

        // Passando o mouse por cima do linkBancoF2
        linkBancoF2.on('pointerover', function () {
            linha2.setVisible(true);
        })

        linkBancoF2.on('pointerout', function () {
            linha2.setVisible(false);
        })

        // Passando o mouse por cima do linkJusMetaF2
        linkJusMetaF2.on('pointerover', function () {
            linha3.setVisible(true);
        })

        linkJusMetaF2.on('pointerout', function () {
            linha3.setVisible(false);
        })


    }


    update() {


    }


}
