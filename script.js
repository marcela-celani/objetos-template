// PRÁTICA GUIADA I
const estudante = {
    nome: 'Buda',
    sobrenome: 'Peste',
    numeroDeMatricula: 123456,
    notasDoSemestre: [6.5, 5, 7.5, 10, 8]
}

estudante.modulo = 3
console.log(estudante)

// PRÁTICA GUIADA II

/* imprima no console a propriedade nome
imprima no console a segunda nota da pessoa no semestre
imprima o módulo em que a pessoa está */

const nomeDeEstudante = estudante.nome
console.log(`Nome:`, nomeDeEstudante)

const segundaNotaDoSemestre = estudante.notasDoSemestre[1]
console.log(`Segunda nota do semestre:`, segundaNotaDoSemestre)

const moduloAtual = estudante.modulo
console.log(`Modulo atual:`, moduloAtual)

// PRÁTICA GUIADA III

/* alterar o nome para Astrodev;
adicionar a nota 9 às notas do semestre;
alterar o módulo para o próximo módulo;
imprimir o objeto com as atualizações. */

//fazendo primeiro uma copia do objeto original
const copiaEstudante = {
    ...estudante,
}

copiaEstudante.nome = 'Astrodev'
copiaEstudante.notasDoSemestre.push(9)

console.log(copiaEstudante)

// exemplo escrevendo ja dentro do objeto
const copiaEstudante2 = {
    ...estudante,
    nome: 'Astrodev',
    modulo: 4,
    notasDoSemestre: [...estudante.notasDoSemestre, 9]
}

// criando array de estudantes da labenu
const estudantesLabenu = []

estudantesLabenu.push(estudante, copiaEstudante, copiaEstudante2)

console.log(`Array de estudantes: `, estudantesLabenu)

// EXERCICIO DE FIXAÇAO I

// adicionar um atributo com lista (array) de compras que contem varias informaçoes, dentro do objeto carrinho

const carrinho = {
    nome: 'Marcela',
    formaDePagamento: 'Crédito',
    endereço: 'Rua dos bobos, S/N'
}

carrinho.compras = [
    {nome: 'banana', preco: 'R$ 5,00', quantidade: 3},
    {nome: 'morango', preco: 'R$ 10,00', quantidade: 2},
    {nome: 'abacaxi', preco: 'R$ 4,00', quantidade: 1}
]

console.log(carrinho)

// imprimir quantidade de itens do carrinho
console.log(`Esta é a quantidade de produtos no seu carrinho de compras:`, carrinho.compras.length)

// criar copia do carrinho e mudar para presentear alguem
const carrinhoPresente = {
    ...carrinho, 
    nome: 'Alex', 
    formaDePagamento: 'cartão-presente'
}

console.log(`Carrinho original: `, carrinho,) 
console.log(`Carrinho presente: `, carrinhoPresente)

// acessar o numero de unidades do terceiro produto

const unidadesTerceiroProduto = carrinho.compras[2].quantidade

console.log(unidadesTerceiroProduto)