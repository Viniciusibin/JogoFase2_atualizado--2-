// Criando as variáveis
var linkReclameF1;
var linkBancoF1;
var linkJusMetaF1;

var linha1;
var linha2;
var linha3;

class BrowserF1 extends Phaser.Scene {
    constructor() {
        super({ key: "BrowserF1" });
    }

    // Carregando as imagens
    preload() {

        this.load.image("browserF1", "././assets/Fornecedor_1_img/browser_fornecedor1.png");
        this.load.image("reclameF1", "././assets/Fornecedor_1_img/link_forn1_reclame_cropped.png");
        this.load.image("bancoF1", "././assets/Fornecedor_1_img/link_forn1_banco_cropped.png");
        this.load.image("jusMetaF1", "././assets/Fornecedor_1_img/link_forn1_jusMeta_cropped.png");
        this.load.image("linha", "././assets/Jogo_img/linha.png");

    }



    create() {

        // Adionando as imagens do jogo
        this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "browserF1").setScale(1.3, 1.185);
        linkReclameF1 = this.add.image(gameState.larguraJogo / 5.57, gameState.alturaJogo / 2.57, "reclameF1").setScale(1.2);
        linkBancoF1 = this.add.image(gameState.larguraJogo / 5.24, gameState.alturaJogo / 1.6, "bancoF1").setScale(1.2);
        linkJusMetaF1 = this.add.image(gameState.larguraJogo / 5.88, gameState.alturaJogo / 1.14, "jusMetaF1").setScale(1.2);
        
        linha1 = this.add.image(gameState.larguraJogo / 5.57, gameState.alturaJogo / 2.54, "linha");
        linha1.setVisible(false);
        linha1.setScale(0.9, 1);

        linha2 = this.add.image(gameState.larguraJogo / 5.24, gameState.alturaJogo / 1.57, "linha");
        linha2.setVisible(false);


        linha3 = this.add.image(gameState.larguraJogo / 5.88, gameState.alturaJogo / 1.14, "linha");
        linha3.setVisible(false);
        linha3.setScale(0.8, 1);



        // Fazendo com que ao apertar em um link o jogo mude de cena
        linkReclameF1.setInteractive({ cursor: "pointer" });
        linkReclameF1.on("pointerdown", () => {
            
            this.scene.start("LinkReclameF1");
        })
        
        linkBancoF1.setInteractive({ cursor: "pointer" });
        linkBancoF1.on("pointerdown", () => {
            
            this.scene.start("LinkBancoF1");
        })

        linkJusMetaF1.setInteractive({ cursor: "pointer" });
        linkJusMetaF1.on("pointerdown", () => {
            
            this.scene.start("LinkJusMetaF1");
        })


        // Passando o mouse por cima do linkReclameF1
        linkReclameF1.on('pointerover', function () {
            linha1.setVisible(true);
        })

        linkReclameF1.on('pointerout', function () {
            linha1.setVisible(false);
        })

        // Passando o mouse por cima do linkBancoF1
        linkBancoF1.on('pointerover', function () {
            linha2.setVisible(true);
        })

        linkBancoF1.on('pointerout', function () {
            linha2.setVisible(false);
        })

        // Passando o mouse por cima do linkJusMetaF1
        linkJusMetaF1.on('pointerover', function () {
            linha3.setVisible(true);
        })

        linkJusMetaF1.on('pointerout', function () {
            linha3.setVisible(false);
        })


    }


    update() {


    }


}