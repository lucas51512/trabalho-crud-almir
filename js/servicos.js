console.log('Olá Pessoas!');
console.log('Contruindo CRUDS');

//[CRUD] JavaScript BÁSICO
    const paginaMae = {
        usuarios: [
            {
                username: 'lucas',
            }
        ],

        posts: [
            {
                id: 1,
                owner: 'lucas',
                content: 'Meu primeiro tweet',
            }
        ],
    };
// CREATE
function criaPost(dados){
    paginaMae.posts.push({
        id: paginaMae.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}
criaPost({owner: 'lucas', content:'Segundo tweet'});

//READ
function pegaPosts(){
    return paginaMae.posts;
}

//UPDATE
function atualizaContentDoPost(id, novoConteudo){
    const postQueVaiSerAtualizado = pegaPosts().find((post) => {
        return post.id === id;
    });
    console.log(postQueVaiSerAtualizado);
    postQueVaiSerAtualizado.content = novoConteudo;

}
atualizaContentDoPost(2, 'Novo conteúdo do post');
console.log(pegaPosts());

//DELETE
function apagaPost(id){
    const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id;
    })
    paginaMae.posts = listaDePostsAtualizada;
    console.log(listaDePostsAtualizada);
}
;