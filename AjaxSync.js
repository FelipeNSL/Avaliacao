
let imagem = document.querySelector("#github-avatar");
let btn = document.querySelector("#buscar-avatar");

const getFotoGithub = function(){
    let buscar = document.querySelector("#username").value;

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let resposta = JSON.parse(this.responseText);
                    imagem.src = resposta.avatar_url;
            }   
    }
    ajax.open("GET", "https://api.github.com/users/"+buscar, true);
    
    ajax.send();
}