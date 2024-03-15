// Criando as variáveis
var reclameF1
var setaDeVolta;
var bolaSeta;

class LinkReclameF1 extends Phaser.Scene {
    constructor() {
        super({ key: "LinkReclameF1" });
    }

    // Carregando as imagens
    preload() {

        this.load.image("pagReclameF1", "././assets/Fornecedor_1_img/fornecedor1_reclame.png");
        this.load.image("setaDeVolta", "././assets/Jogo_img/setaDeVolta.png");
        this.load.image("bolaSeta" , "././assets/Jogo_img/bolaSeta.png");

    }

    // Adicionando as imagens do jogo
    create() {
        
        reclameF1 = this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 1.17, "pagReclameF1");

        bolaSeta = this.add.image(gameState.larguraJogo / 5.38, gameState.alturaJogo / 31, "bolaSeta");
        bolaSeta.setVisible(false);
        
        setaDeVolta = this.add.image(gameState.larguraJogo / 5.38, gameState.alturaJogo / 31, "setaDeVolta");

        // Lógica para o "scroll" do mouse
        this.input.on('wheel', function (pointer, gameObjects, deltaX, deltaY, deltaZ) {

            if (deltaY > 0 && reclameF1.y > 100) {
                // Se o deltaY for positivo, a roda do mouse foi rolada para cima
                reclameF1.y -= 20;
                setaDeVolta.y -= 20;
            } 
            
            if (deltaY <= 0 &&  reclameF1.y < 500 ) {
                // Se o deltaY for negativo, a roda do mouse foi rolada para baixo
                reclameF1.y += 20;
                setaDeVolta.y += 20;
            }
        });

        // Interatividades com o mouse
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