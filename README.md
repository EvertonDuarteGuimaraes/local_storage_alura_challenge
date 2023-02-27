<h1 align="center">  Exercício com local Storage </h1>

<p> Durante o curso "JavaScript na Web: armazenando dados no navegador", um desafio propôs armazenar dados utilizando local storage do próprio navegador, então resolvi aplicar de tal maneira. Optei por fazer um mini game para não apenas manter salvo strings de opções selecionadas previamente bem como através do JSON.stringfy selecionar determinados elementos de um objeto para depois recarregar o mesmo aplicado tal caracteristica e assim recuperar o seu estado ao recarregar a página, nesse caso, a cor selecionada, o número de tentativas restantes e a posição dos blocos destacados no jogo</p>

<h2> Regras do jogo </h2>

<p> O jogo é quebra cabeças do qual você tem 10 tentativas para completar, e você começa o jogo com uma configuração de 9 blocks, sendo alguns deles apagados e outros destacados. Seu objetivo é detacar todos os blocos ao mesmo tempo para completar o quebra cabeças, você pode fazer isso clicando nos blocos e assim vai alternar a cor do mesmo para destacar ou remover o destaque do mesmo. Entretando, a cada bloco alvejado com um click, os blocos vizinhos também terão sua cor alternada com exceção vizinhos nas diagonai, sendo:</p>

<p align="center" justify="center">b_____<strong>B</strong>_____b</p>
<p align="center" justify="center"><strong>B</strong>_____b_____b</p>
<p align="center" justify="center"><strong>B</strong>_____b_____<strong>B</strong></p>

<p align="center" justify="center">Então se clicarmos no bloco do centro, iremos alternar o seu destaque e também os de cima, abaixo, à esquerda e direita, obetendo:<p/p

<p align="center" justify="center">b_____b_____b</p>
<p align="center" justify="center">b_____<strong color="purple">B</strong>_____<strong>B</strong></p>
<p align="center" justify="center"><strong>B</strong>_____<strong>B</strong>_____<strong>B</strong></p>

<h2>Melhorias</h2>
<p align=>Ainda falta algumas features para serem criadas ou melhoradas, como para o jogo ao finalizar o número de tentativas e alguns estilos mais refinados ao destacar o blocos, como um transition por exemplo. Pretendo ver mais cursos e aprender como aprimorar isso em breve. Criticas e são bem víndas, dicas e conselhos ainda mais.</p>

<h2>Agradecimentos</h2>
<p>É um quebra cabeças simples porém apenas para exercitar alguns fudamentos que aprendi durante os curos "Java Script para Web: Crie páginas dinâmicas", "Java Script Programação Orientada a Objetos", "JavaScript: manipulando o DOM", "CSS: dispondo elementos com Flexbox e Grid", "HTML e CSS: responsividade com mobile-first" e entre outros aprendidos com os  professores: Matheus Alberto, Mônica Mazzochi Hillman, Pedro Marins, Ricardo Bugan Debs, Vanessa Me Tonini.</p>

<p align="center" justify="center">Um obrigado a todos, divirtam-se com o jogo.</p>
