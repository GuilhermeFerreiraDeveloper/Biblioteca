const prompt = require("prompt-sync")();




let livros = [];
let sairMenu = false;

do {
    console.log(" MENU DA BIBLIOTECA \n" +
        "\n[1] - Adicionar novo Livro;" +
        "\n[2] - Buscar livro pelo Titulo;" +
        "\n[3] - Listar todos os Livros;" +
        "\n[4] - Remover um Livro;" +
        "\n[5] - Sair do Aplicativo,"
    );

    opcao = parseInt(prompt("Escolha uma opção: "));
    console.clear();
    switch (opcao) {
        case 1:
            AdicionarLivro();
            break;
        case 2:
            BuscarLivros();
            break;
        case 3:
            MostrarLivros();
            break;
        case 4:
            RemoverLivro();
            break;
        case 5:
            sairMenu = true;
            break;
        default:
            break;
    }
} while (!sairMenu);










function AdicionarLivro() {
    sair = false;
    do {
        titulo = prompt("Digite o nome do Livro: ");
        let livroCadastrado = livros.some(livros => livros.titulo.toLowerCase() === titulo.toLowerCase());
        if (!livroCadastrado) {
            let autor = prompt("Digite o autor do livro: ");
            let quantidadeDeExemplares = prompt("Digite a Quantidade de exemplares: ");
            livros.push({ titulo, autor, quantidadeDeExemplares });
            sair = true;
            console.clear();
        } else {
            console.log("livro já existente, tente novamente; \n");
        }
    } while (!sair);
};

function MostrarLivros() {
    livros.forEach((livros) => {
        console.log(livros);
    });
};

function BuscarLivros() {
    let livroBuscado = prompt("Digite o titulo do livro que procura:");
    let livroBuscadoEncontrado = livros.some(livros => livros.titulo.toLowerCase() === livroBuscado.toLowerCase());
    if (livroBuscadoEncontrado) {
        console.log(`livro ${livroBuscado} encontrado.`);
    } else {
        console.log("livro não encontrado;");
    }
}

function RemoverLivro(){
    let livroParaRemover = prompt("Digite o nome do livro que deseja remover: ");
    let indiceParaRemover = livros.findIndex(livros => livros.titulo.toLowerCase() === livroParaRemover.toLowerCase())

    if(indiceParaRemover !== -1){
        livros.splice(indiceParaRemover,1)
        console.log("Livro removido; ")
    }

}