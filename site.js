onload = () => {
    console.log('oi')
    executaPesquisa();
}

//const API_KEY = 'e213fc91b7504a358567a927bf3dc854';

function exibeNoticias(){
    let divTela = document.getElementsByClassName('map');
    let texto = '';

    //montar texto html das noticias
    let dados = JSON.parse(this.responseText); //pegar o texto do news api e transformar em objeto
    console.log(dados)
    console.log(divTela)
    for(i = 0; i < divTela.length; i++)//passar por cada noticia e colocar em cada noticia
    {
        texto = '';
        console.log(divTela[i])
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        texto = texto + `
            <div class="example-2 card">
              <div class="wrapper cv" style="background-image: url('${noticia.urlToImage}');">
                <div class="header">
                  <div class="date">
                    <span class="day">${data.toLocaleDateString()}</span>
                  </div>
                  <ul class="menu-content">
                    <li>
                      <a href="#" class="fa fa-bookmark-o"></a>
                    </li>
                    <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
                    <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
                  </ul>
                </div>
                <div class="data">
                  <div class="content">
                    <span class="author">${noticia.author}</span>
                    <h2 class="title"><a href="${noticia.url}" target="_blank">${noticia.title}</a></h2>
                    <p class="text">
                    ${noticia.content}</p>
                  </div>
                </div>
              </div>
            </div>
        `;
        divTela[i].innerHTML = texto; //preencher a div com o texto html
    };
    
}

function executaPesquisa(){
    let query = "filmes";


    let xhr = new XMLHttpRequest (); //criou o objeto
    xhr.onload = exibeNoticias; //quando as info chegarem, exibe noticias
    xhr.open ('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`); //abriu a requisição
    xhr.send(); //enviou a requisição
}

//document.getElementById('btnPesquisa').addEventListener ('click', executaPesquisa); //toda vez que clicar no botao, a função é chamada