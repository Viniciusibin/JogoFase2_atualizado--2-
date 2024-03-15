// Criando as variáveis
var linkReclameF4;
var linkBancoF4;
var linkJusMetaF4;

var linha4;
var linha4;
var linha4;

class BrowserF4 extends Phaser.Scene {
    constructor() {
        super({ key: "BrowserF4" });
    }

    // Carregando as imagens
    preload() {

        this.load.image("browserF4", "../../assets/Fornecedor_4_img/browser_fornecedor4.png");
        this.load.image("reclameF4", "../../assets/Fornecedor_4_img/link_forn4_reclame_cropped.png");
        this.load.image("bancoF4", "../../assets/Fornecedor_4_img/link_forn4_banco_cropped.png");
        this.load.image("jusMetaF4", "../../assets/Fornecedor_4_img/link_forn4_jusMeta_cropped.png");
        this.load.image("linha", "../../assets/Jogo_img/linha.png");

    }



    create() {

        // Adionando as imagens do jogo
        this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "browserF4").setScale(1.3, 1.185);
        linkReclameF4 = this.add.image(gameState.larguraJogo / 5.57, gameState.alturaJogo / 2.57, "reclameF4").setScale(1.2);
        linkBancoF4 = this.add.image(gameState.larguraJogo / 5.24, gameState.alturaJogo / 1.6, "bancoF4").setScale(1.2);
        linkJusMetaF4 = this.add.image(gameState.larguraJogo / 5.88, gameState.alturaJogo / 1.14, "jusMetaF4").setScale(1.2);
        
        linha1 = this.add.image(gameState.larguraJogo / 5.57, gameState.alturaJogo / 2.54, "linha");
        linha1.setVisible(false);
        linha1.setScale(0.9, 1);

        linha2 = this.add.image(gameState.larguraJogo / 5.24, gameState.alturaJogo / 1.57, "linha");
        linha2.setVisible(false);


        linha3 = this.add.image(gameState.larguraJogo / 5.88, gameState.alturaJogo / 1.14, "linha");
        linha3.setVisible(false);
        linha3.setScale(0.8, 1);



        // Fazendo com que ao apertar em um link o jogo mude de cena
        linkReclameF4.setInteractive({ cursor: "pointer" });
        linkReclameF4.on("pointerdown", () => {
            
            this.scene.start("LinkReclameF4");
        })
        
        linkBancoF4.setInteractive({ cursor: "pointer" });
        linkBancoF4.on("pointerdown", () => {
            
            this.scene.start("LinkBancoF4");
        })

        linkJusMetaF4.setInteractive({ cursor: "pointer" });
        linkJusMetaF4.on("pointerdown", () => {
            
            this.scene.start("LinkJusMetaF4");
        })


        // Passando o mouse por cima do linkReclameF1
        linkReclameF4.on('pointerover', function () {
            linha1.setVisible(true);
        })

        linkReclameF4.on('pointerout', function () {
            linha1.setVisible(false);
        })

        // Passando o mouse por cima do linkBancoF1
        linkBancoF4.on('pointerover', function () {
            linha2.setVisible(true);
        })

        linkBancoF4.on('pointerout', function () {
            linha2.setVisible(false);
        })

        // Passando o mouse por cima do linkJusMetaF1
        linkJusMetaF4.on('pointerover', function () {
            linha3.setVisible(true);
        })

        linkJusMetaF4.on('pointerout', function () {
            linha3.setVisible(false);
        })


    }


    update() {


    }


}