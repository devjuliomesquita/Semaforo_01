//DECLARAÇÃO DE VARIÁVEIS
let todos_botoes = document.getElementById("todos_botoes");
let imagem = document.getElementById("imagem");
let intervalo = null;
let cor_index = 0;

//CRIAR O OBJETO
let ligar = {
    'vermelho': () => semaforo.src = "./IMAGE/vermelho.png",
    'amarelo':  () => semaforo.src = "./IMAGE/amarelo.png",
    'verde':    () => semaforo.src = "./IMAGE/verde.png",
    'auto':     () => intervalo = setInterval(mudar_cor,1000)    
};

//CRIANDO A FUNÇÃO
let semaforo = (event) => {
    stopauto();
    ligar[event.target.id]();
};

//MUDANÇA DE COR
let mudar_cor = () =>{
    let cores = ['vermelho','amarelo','verde'];
    let cor = cores[cor_index];
    ligar[cor]();
    next_index();
};

//SE COMO OPERADOR TERNÁRIO
let next_index = () => cor_index = cor_index < 2 ? ++cor_index : 0;

//PARAR AUTOMÁTICO
let stopauto = () =>{
    clearInterval(intervalo);
};

//CHAMAR FUNÇÃO
todos_botoes.addEventListener('click', semaforo);