// Criando variáveis
var bancoF4;
var setaDeVolta;
var bolaSeta;

class LinkBancoF4 extends Phaser.Scene {
    constructor () {
        super({ key: "LinkBancoF4"});
    }

    // Carregando as imagens
    preload() {

        this.load.image("pagBancoF4" ,"../../assets/Fornecedor_4_img/fornecedor4_banco.png");
        this.load.image("setaDeVolta", "../../assets/Jogo_img/setaDeVolta.png");
        this.load.image("bolaSeta" , "../../assets/Jogo_img/bolaSeta.png");
        
    }

    // Adicionando as imagens do jogo
    create() {

        bancoF4 = this.add.image(gameState.larguraJogo/2, gameState.alturaJogo/1.17, "pagBancoF4"); 

        bolaSeta = this.add.image(gameState.larguraJogo / 5.38, gameState.alturaJogo / 31, "bolaSeta");
        bolaSeta.setVisible(false);

        setaDeVolta = this.add.image(gameState.larguraJogo / 5.38, gameState.alturaJogo / 31, "setaDeVolta");

        // Lógica do "scroll" do mouse
        this.input.on('wheel', function (pointer, gameObjects, deltaX, deltaY, deltaZ) {

            if (deltaY > 0 && bancoF4.y > 100) {
                // Se o deltaY for positivo, a roda do mouse foi rolada para cima
                bancoF4.y -= 20;
                setaDeVolta.y -= 20;
            } 
            
            if (deltaY <= 0 && bancoF4.y < 500 ) {
                // Se o deltaY for negativo, a roda do mouse foi rolada para baixo
                bancoF4.y += 20;
                setaDeVolta.y += 20;
            }
        });

        //Interatividades com mouse
        setaDeVolta.setInteractive({ cursor: "pointer" });
        setaDeVolta.on("pointerdown", () => {
            
            this.scene.start("BrowserF4");
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