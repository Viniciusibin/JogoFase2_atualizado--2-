// Criando as variáveis
var jusMetaF3;
var setaDeVolta;
var bolaSeta;

class LinkJusMetaF3 extends Phaser.Scene {
    constructor () {
        super({ key: "LinkJusMetaF3"});
    }

    // Carregando as imagens do jogo
    preload() {

        this.load.image("pagJusMetaF1" ,"../../assets/Fornecedor_3_img/fornecedor3_jusMeta.png")
        this.load.image("setaDeVolta", "../../assets/Jogo_img/setaDeVolta.png");
        this.load.image("bolaSeta" , "../../assets/Jogo_img/bolaSeta.png");

    }

    // Adicionando as imagens do jogo
    create() {

        jusMetaF3 = this.add.image(gameState.larguraJogo/2, gameState.alturaJogo/1.17, "pagJusMetaF3");

        bolaSeta = this.add.image(gameState.larguraJogo / 5.38, gameState.alturaJogo / 31, "bolaSeta");
        bolaSeta.setVisible(false);

        setaDeVolta = this.add.image(gameState.larguraJogo / 5.38, gameState.alturaJogo / 31, "setaDeVolta");

        // Lógica para o "scroll" do mouse
        this.input.on('wheel', function (pointer, gameObjects, deltaX, deltaY, deltaZ) {

            if (deltaY > 0 && jusMetaF3.y > 100) {
                // Se o deltaY for positivo, a roda do mouse foi rolada para cima
                jusMetaF3.y -= 20;
                setaDeVolta.y -= 20;
            } 
            
            if (deltaY <= 0 && jusMetaF3.y < 500 ) {
                // Se o deltaY for negativo, a roda do mouse foi rolada para baixo
                jusMetaF3.y += 20;
                setaDeVolta.y += 20;
            }
        });

        //Interatividade com o mouse
        setaDeVolta.setInteractive({ cursor: "pointer" });
        setaDeVolta.on("pointerdown", () => {
            
            this.scene.start("BrowserF3");
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