// Criando as variáveis
var linkReclameF3;
var linkBancoF3;
var linkJusMetaF3;

var linha1;
var linha2;
var linha3;

class BrowserF3 extends Phaser.Scene {
    constructor() {
        super({ key: "BrowserF3" });
    }

    // Carregando as imagens
    preload() {

        this.load.image("browserF3", "././assets/Fornecedor_3_img/browser_fornecedor3.png");
        this.load.image("reclameF3", "././assets/Fornecedor_3_img/link_forn3_reclame_cropped.png");
        this.load.image("bancoF3", "././assets/Fornecedor_3_img/link_forn3_banco_cropped.png");
        this.load.image("jusMetaF3", "././assets/Fornecedor_3_img/link_forn3_jusMeta_cropped.png");
        this.load.image("linha", "././assets/Jogo_img/linha.png");

    }



    create() {

        // Adionando as imagens do jogo
        this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "browserF3").setScale(1.3, 1.185);
        linkReclameF3 = this.add.image(gameState.larguraJogo / 5.57, gameState.alturaJogo / 2.57, "reclameF3").setScale(1.2);
        linkBancoF3 = this.add.image(gameState.larguraJogo / 5.24, gameState.alturaJogo / 1.6, "bancoF3").setScale(1.2);
        linkJusMetaF3 = this.add.image(gameState.larguraJogo / 5.88, gameState.alturaJogo / 1.14, "jusMetaF3").setScale(1.2);
        
        linha1 = this.add.image(gameState.larguraJogo / 5.57, gameState.alturaJogo / 2.54, "linha");
        linha1.setVisible(false);
        linha1.setScale(0.9, 1);

        linha2 = this.add.image(gameState.larguraJogo / 5.24, gameState.alturaJogo / 1.57, "linha");
        linha2.setVisible(false);


        linha3 = this.add.image(gameState.larguraJogo / 5.88, gameState.alturaJogo / 1.14, "linha");
        linha3.setVisible(false);
        linha3.setScale(0.8, 1);



        // Fazendo com que ao apertar em um link o jogo mude de cena
        linkReclameF3.setInteractive({ cursor: "pointer" });
        linkReclameF3.on("pointerdown", () => {
            
            this.scene.start("LinkReclameF3");
        })
        
        linkBancoF3.setInteractive({ cursor: "pointer" });
        linkBancoF3.on("pointerdown", () => {
            
            this.scene.start("LinkBancoF3");
        })

        linkJusMetaF3.setInteractive({ cursor: "pointer" });
        linkJusMetaF3.on("pointerdown", () => {
            
            this.scene.start("LinkJusMetaF3");
        })


        // Passando o mouse por cima do linkReclameF3
        linkReclameF3.on('pointerover', function () {
            linha3.setVisible(true);
        })

        linkReclameF3.on('pointerout', function () {
            linha3.setVisible(false);
        })

        // Passando o mouse por cima do linkBancoF3
        linkBancoF3.on('pointerover', function () {
            linha3.setVisible(true);
        })

        linkBancoF3.on('pointerout', function () {
            linha3.setVisible(false);
        })

        // Passando o mouse por cima do linkJusMetaF1
        linkJusMetaF3.on('pointerover', function () {
            linha3.setVisible(true);
        })

        linkJusMetaF3.on('pointerout', function () {
            linha3.setVisible(false);
        })


    }


    update() {


    }


}