// Criando as variáveis
var jusMetaF1;
var setaDeVolta;
var bolaSeta;

class LinkJusMetaF1 extends Phaser.Scene {
    constructor () {
        super({ key: "LinkJusMetaF1"});
    }

    // Carregando as imagens do jogo
    preload() {

        this.load.image("pagJusMetaF1" ,"././assets/Fornecedor_1_img/fornecedor1_jusMeta.png")
        this.load.image("setaDeVolta", "././assets/Jogo_img/setaDeVolta.png");
        this.load.image("bolaSeta" , "././assets/Jogo_img/bolaSeta.png");

    }

    // Adicionando as imagens do jogo
    create() {

        jusMetaF1 = this.add.image(gameState.larguraJogo/2, gameState.alturaJogo/1.17, "pagJusMetaF1");

        bolaSeta = this.add.image(gameState.larguraJogo / 5.38, gameState.alturaJogo / 31, "bolaSeta");
        bolaSeta.setVisible(false);

        setaDeVolta = this.add.image(gameState.larguraJogo / 5.38, gameState.alturaJogo / 31, "setaDeVolta");

        // Lógica para o "scroll" do mouse
        this.input.on('wheel', function (pointer, gameObjects, deltaX, deltaY, deltaZ) {

            if (deltaY > 0 && jusMetaF1.y > 100) {
                // Se o deltaY for positivo, a roda do mouse foi rolada para cima
                jusMetaF1.y -= 20;
                setaDeVolta.y -= 20;
            } 
            
            if (deltaY <= 0 && jusMetaF1.y < 500 ) {
                // Se o deltaY for negativo, a roda do mouse foi rolada para baixo
                jusMetaF1.y += 20;
                setaDeVolta.y += 20;
            }
        });

        //Interatividade com o mouse
        setaDeVolta.setInteractive({ cursor: "pointer" });
        setaDeVolta.on("pointerdown", () => {
            
            this.scene.start("BrowserF1");
        })

        setaDeVolta.on("pointerover", function () {
            bolaSeta.setVisible(true);
        })

        setaDeVolta.on("pointerout", function () {
            bolaSeta.setVisible(false);
        })

    }

    update() {



    }

}