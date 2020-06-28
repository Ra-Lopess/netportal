const API_KEY = 'e213fc91b7504a358567a927bf3dc854';

onload = () =>{
    if(localStorage.getItem('pesquisa')){
        query = localStorage.getItem('pesquisa');

        let xhr = new XMLHttpRequest ();
        xhr.onload = exibeNoticias;
        xhr.open ('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
        xhr.send ();
    }else{
        executaPesquisa;
    }
}


function exibeNoticias () {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText);
    for (i=0; i< dados.articles.length; i++) {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        texto = texto + `
            <div class="box-noticia pt-3">
                <img src="${noticia.urlToImage}" alt="">
                <span class="titulo branco">${noticia.title}</span><br>
                <span class="creditos">${data.toLocaleDateString ()} - 
                    ${noticia.source.name} - 
                    ${noticia.author}</span><br>
                <span class="text">
                ${noticia.content} <br><a href="${noticia.url}"  class="vermelho" target="_blank">Leia mais ...</a>
                </span>
            </div>            
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function executaPesquisa () {
    let query = document.getElementById('TextPesquisa').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send ();
}

document.getElementById ('btnPESQUISA').addEventListener ('click', executaPesquisa);