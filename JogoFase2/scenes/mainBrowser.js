// Definição da cena MainBrowser
class mainBrowser extends Phaser.Scene {
    constructor() {
        super({ key: "mainBrowser" });
    }

    preload() {
        this.load.image("fundo", "./assets/Jogo_img/googleMeta.png");
        this.load.image("dicas", "./assets/Jogo_img/dicas.png");
        this.load.image("botaoDicas1", "./assets/Jogo_img/botaoDicas.png");
        this.load.image("botaoDicas2", "./assets/Jogo_img/botaoDicas2_cropped.png");
        this.load.image("pesquiseNoBrowser", "./assets/Jogo_img/pesquiseNoBrowser.png");
        this.load.html("form", "assets/form.html");
    }

    create() {
        // Configuração das teclas e variáveis da cena
        this.cursors = this.input.keyboard.createCursorKeys();
        this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.nameFilled = false;

        // Carregar os assets nas antigas posições
        const fundoX = gameState.larguraJogo / 2;
        const fundoY = gameState.alturaJogo / 2;
        const dicasX = gameState.larguraJogo / 2;
        const dicasY = gameState.alturaJogo / 1.12;
        const botaoDicas1X = gameState.larguraJogo / 2.37;
        const botaoDicas1Y = gameState.alturaJogo / 1.04;
        const botaoDicas2X = gameState.larguraJogo / 1.94;
        const botaoDicas2Y = gameState.alturaJogo / 1.045;

        const fundo = this.add.image(fundoX, fundoY, "fundo").setScale(1.3, 1.185);
        const dicas = this.add.image(dicasX, dicasY, "dicas");
        const botaoDicas1 = this.add.image(botaoDicas1X, botaoDicas1Y, "botaoDicas1");
        const botaoDicas2 = this.add.image(botaoDicas2X, botaoDicas2Y, "botaoDicas2");

        // Configuração de eventos para atualizar o nome
        var inputSize = { width: 270, height: 42, padding: 15 };
        var inputButton = { width: 425, height: 12 };
        var inputCoords = {
            xposition: (this.game.config.width - inputSize.width) / 2 - inputButton.width,
            yposition: (this.game.config.height - inputSize.height - inputSize.padding * 2) / 2,
        };
        this.inputName = this.add.dom(inputCoords.xposition, inputCoords.yposition).createFromCache('form').setOrigin(0, 0);
        this.returnKey.on("down", event => {
            this.updateName(this.inputName);
        });

        // Configuração de interatividade dos botões de dicas
        botaoDicas1.setInteractive({ cursor: "pointer" });
        botaoDicas1.on("pointerup", () => {
            dicas.y = 350;
            botaoDicas1.y = 390;
            botaoDicas2.y = 390;
        });

        botaoDicas2.setInteractive({ cursor: "pointer" });
        botaoDicas2.on("pointerup", () => {
            dicas.y = 535;
            botaoDicas1.y = 504;
            botaoDicas2.y = 505;
        });

        var inputSize = { width: 270, height: 42, padding: 15 };
        var inputButton = { width: 425, height: 12 };
        var inputCoords = {
            xposition: (this.game.config.width - inputSize.width) / 2 - inputButton.width,
            yposition: (this.game.config.height - inputSize.height - inputSize.padding *2) / 2,
        };
        this.inputName = this.add.dom(inputCoords.xposition, inputCoords.yposition).createFromCache('form').setOrigin(0, 0);
        this.returnKey.on("down", event => {
            this.updateName(this.inputName);
        });

        this.spaceKey.on("down", event => {
            this.insertSpace(this.inputName);
        });
    }

    updateName(inputNameElement) {
        let name = inputNameElement.getChildByName("name");
        if (name.value != "") {
            console.log("Hello " + name.value);
            this.nameFilled = true;
            this.game.name = name.value;
        }
    }

    insertSpace(inputNameElement) {
        let name = inputNameElement.getChildByName("name");
        name.value += " ";
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.returnKey) && this.nameFilled === true) {
            let name = this.inputName.getChildByName("name").value.trim().toLowerCase();
            if (name === "mmc") {
                this.scene.start("BrowserF1");
                this.scene.stop("mainBrowser");
            } if (name === "shinemaster") {
                this.scene.start("BrowserF2");
                this.scene.stop("mainBrowser");
            } if (name === "luxlight") {
                this.scene.start("BrowserF3");
                this.scene.stop("mainBrowser");
            }
        }
    }
}