// Criando as variáveis
var reclameF2;
var setaDeVolta;
var bolaSeta;
    
class LinkReclameF2 extends Phaser.Scene {

    constructor () {
        super({ key: "LinkReclameF2"});
    }
    
    // Carregando as imagens
    preload() {

        this.load.image("pagReclameF2", "../../assets/Fornecedor_2_img/fornecedor2_reclame.png");
        this.load.image("setaDeVolta", "../../assets/Jogo_img/setaDeVolta.png");
        this.load.image("bolaSeta" , "../../assets/Jogo_img/bolaSeta.png");

    }

    // Adicionando as imagens do jogo
    create() {
        
        reclameF2 = this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 1.17, "pagReclameF2");

        bolaSeta = this.add.image(gameState.larguraJogo / 5.38, gameState.alturaJogo / 31, "bolaSeta");
        bolaSeta.setVisible(false);
        
        setaDeVolta = this.add.image(gameState.larguraJogo / 5.38, gameState.alturaJogo / 31, "setaDeVolta");

        // Lógica para o "scroll" do mouse
        this.input.on('wheel', function (pointer, gameObjects, deltaX, deltaY, deltaZ) {

            if (deltaY > 0 && reclameF2.y > 100) {
                // Se o deltaY for positivo, a roda do mouse foi rolada para cima
                reclameF2.y -= 20;
                setaDeVolta.y -= 20;
            } 
            
            if (deltaY <= 0 &&  reclameF2.y < 500 ) {
                // Se o deltaY for negativo, a roda do mouse foi rolada para baixo
                reclameF2.y += 20;
                setaDeVolta.y += 20;
            }
        });

        // Interatividades com o mouse
        setaDeVolta.setInteractive({ cursor: "pointer" });
        setaDeVolta.on("pointerdown", () => {
            
            this.scene.start("BrowserF2");
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