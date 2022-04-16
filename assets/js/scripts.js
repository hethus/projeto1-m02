const alterar = document.querySelectorAll(".role");

function handleChange() {
  let numero = Math.floor(Math.random() * 5) + 1;
  console.log(alterar);

  if (numero === 1) {
    //alterar img
    alterar[0].setAttribute("src", "./assets/img/top.png");
    alterar[1].innerHTML =
      "<h3>Top laner</h3><br><h3>É a Lane localizada na extremidade superior do mapa. A Top Lane geralmente abriga geralmente campeões Lutadores ou Tanques, que absorvem grandes quantias de dano e desferem uma quantidade mediana de dano em troca. Normalmente, a rota está livre de preocupações adicionais, o que a torna a melhor rota para iniciantes.</h3>";
    alterar[2].setAttribute("src", "https://www.youtube.com/embed/7cu3sVlFSwk");
  } else if (numero === 2) {
    alterar[0].setAttribute("src", "./assets/img/jg.png");
    alterar[1].innerHTML =
      "<h3>Jungler</h3><br><h3>Jungler é uma função considerada essencial para todas as equipes, ao menos as competitivas. Isto porque um jungler abre espaço para que todos os campeões do jogo possam tirar proveito dos recursos disponíveis. O top laner e o mid laner podem farmar sozinhos (e o bot também, tecnicamente; mas este ainda dividirá sua exp com o suporte). Isto permita que eles cresçam e ganhem muito mais ouro do que eles ganhariam se tivessem que dividir farm com um outro campeão na lane.</h3>";
    alterar[2].setAttribute("src", "https://www.youtube.com/embed/Os7wGB5GHQQ");
  } else if (numero === 3) {
    alterar[0].setAttribute("src", "./assets/img/mid.png");
    alterar[1].innerHTML =
      "<h3>Mid Lane</h3><br><h3>É a Lane localizada no centro do mapa (Para Ambos os Times). A Mid Lane abriga campeões variados, em sua maioria Magos com alto alcance, que conseguem jogar de forma segura e eficaz, e Assassinos com alta mobilidade, que conseguem chegar perto do alvo rapidamente e desferir uma grande quantia de dano em pouco tempo. Os dois exemplos citados tem alto dano, considerados como dano Explosivo (muito dano em pouco tempo). A rota é mediana em termos de dificuldade, e apresenta as responsabilidades de avisar sobre inimigos avistandos indo para certo lugar (MIA), além de também ser uma rota na qual você pode sair e vaguear (GANKAR) para outra rota, normalmente para ajudar ou garantir um avanço.</h3>";
    alterar[2].setAttribute("src", "https://www.youtube.com/embed/EBzzjHXKXYE");
  } else if (numero === 4) {
    alterar[0].setAttribute("src", "./assets/img/bot.png");
    alterar[1].innerHTML =
      "<h3>AD Carry</h3><br><h3>Normalmente se encarrega do dano do time, é o jogador que farma na rota inferior (BOT LANE) localizada na extremidade inferior do mapa, e também é o jogador que mata. Normalmente os Carrys's, conhecidos também como ADC's ou APC's (geralmente como ADC's), são jogadores que ficam recuados nas batalhas 5v5 (Team Fights), e são a fonte principal de dano do time.</h3>";
    alterar[2].setAttribute("src", "https://www.youtube.com/embed/XiWIm1resl4");
  } else if (numero === 5) {
    alterar[0].setAttribute("src", "./assets/img/suporte.png");
    alterar[1].innerHTML =
      "<h3>Suporte</h3><br><h3>São voltados, normalmente, a Utilidade (Cura, Remoção de Controles de Grupo, etc.) ou ao Controle de Grupo (Enraízamento, Atordoamento, etc.), o que ajuda o time em batalhas. Ficam a maior parte do tempo junto do AD Carry na rota inferior (BOT LANE) localizada na extremidade inferior do mapa. Eles costumam não necessitar de itens para si mesmos como os outros do time, ou seja, não farmam ou matam. O ouro de um suporte é proveniente, em sua maioria, das Assistências.</h3>";
    alterar[2].setAttribute("src", "https://www.youtube.com/embed/LOpZnGIXsVk");
  }

  console.log(alterar);
}
