let carros = [
  { nome: "Sedan", desempenho: 6, conforto: 8 },
  { nome: "SUV", desempenho: 5, conforto: 9 },
  { nome: "Esportivo", desempenho: 9, conforto: 6 },
  { nome: "Hatch", desempenho: 7, conforto: 7 },
  { nome: "Picape", desempenho: 8, conforto: 5 }
];

let desempenhoSlider;
let confortoSlider;

function setup() {
  createCanvas(500, 500);
  
  // Sliders para ajustar as preferências
  textSize(15);
  desempenhoSlider = createSlider(1, 10, 5);
  desempenhoSlider.position(100, 50);
  
  confortoSlider = createSlider(1, 10, 5);
  confortoSlider.position(100, 100);
}

function draw() {
  background(240);
  
  // Labels
  text("Desempenho:", 20, 55);
  text("Conforto:", 20, 105);
  
  // Obter valores dos sliders
  let desempenhoPref = desempenhoSlider.value();
  let confortoPref = confortoSlider.value();
  
  // Exibir valores escolhidos
  text(desempenhoPref, 260, 55);
  text(confortoPref, 260, 105);

  // Encontrar o carro mais adequado com base nos valores
  let melhorCarro = null;
  let melhorPontuacao = -1;

  for (let carro of carros) {
    let pontuacao = 10 - abs(desempenhoPref - carro.desempenho) - abs(confortoPref - carro.conforto);
    
    if (pontuacao > melhorPontuacao) {
      melhorPontuacao = pontuacao;
      melhorCarro = carro.nome;
    }
  }

  // Exibir recomendação
  text("Carro recomendado:", 20, 160);
  text(melhorCarro, 160, 160);
}