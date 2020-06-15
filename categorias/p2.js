onload = () => {
    console.log('oi')
    executaPesquisa();
}

//const API_KEY = 'e213fc91b7504a358567a927bf3dc854';

function exibeNoticias(){
    let divTela = document.getElementById('tela');
    let texto = '';

    let dados = JSON.parse(this.responseText);
    for(i = 0; i < dados.articles.length; i++)
    {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        texto = texto + `
            <div class="box-noticia">
                <img src="${noticia.urlToImage}" alt="">
                <span class="titulo branco">${noticia.title}</span><br>
                <span class="creditos">${data.toLocaleDateString()} - ${noticia.author}</span><br>
                <span class="text">
                ${noticia.content}<br>
                <a href="${noticia.url}" class="vermelho" target="_blank">Leia mais...</a>
                </span>
            </div>
        `;
    };

    divTela.innerHTML = texto;
    //preencher a div com o texto html
    
}

function executaPesquisa(){
    let query = "filmes";


    let xhr = new XMLHttpRequest (); //criou o objeto
    xhr.onload = exibeNoticias; //quando as info chegarem, exibe noticias
    xhr.open ('GET', `http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e213fc91b7504a358567a927bf3dc854`); //abriu a requisição
    xhr.send(); //enviou a requisição
}

//document.getElementById('btnPesquisa').addEventListener ('click', executaPesquisa); //toda vez que clicar no botao, a função é chamada