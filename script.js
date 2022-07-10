const relogio = document.querySelector('[data-js="relogio"]');
const botao_iniciar = document.querySelector('[data-js="botao-iniciar"]');
const botao_pausar = document.querySelector('[data-js="botao-pausar"]');
const botao_zerar = document.querySelector('[data-js="botao-zerar"]');

function atualizarRelogio() {
  const relogioAtual = relogio.textContent;
  const horas = Number(relogio.textContent.split(':')[0]);
  const minutos = Number(relogio.textContent.split(':')[1]);
  const segundos = Number(relogio.textContent.split(':')[2]);

  let novasHoras = 0;
  let novosMinutos = 0;
  let novosSegundos = 0;

  novasHoras = minutos + 1 === 60 && segundos + 1 === 60 ? horas + 1 : horas;
  novosMinutos = segundos + 1 === 60 ? minutos + 1 : minutos;
  novosMinutos = novosMinutos === 60 ? 0 : novosMinutos;
  novosSegundos = segundos + 1 === 60 ? 0 : segundos + 1;

  const stringHoras = novasHoras < 10 ? `0${novasHoras}` : String(novasHoras);
  const stringMinutos =
    novosMinutos < 10 ? `0${novosMinutos}` : String(novosMinutos);
  const stringSegundos =
    novosSegundos < 10 ? `0${novosSegundos}` : String(novosSegundos);

  relogio.textContent = `${stringHoras}:${stringMinutos}:${stringSegundos}`;
}

setInterval(atualizarRelogio, 1000);
