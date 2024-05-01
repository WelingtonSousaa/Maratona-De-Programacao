// function calcularProbabilidadeDeVitoria(vitoriasTimeA, vitoriasTimeB) {
//   let totalVitorias = vitoriasTimeA + vitoriasTimeB + 2; // Adicionando pseudocount de 1 para cada time

//   let probabilidadeTimeA = ((vitoriasTimeA + 1) / totalVitorias) * 100;
//   let probabilidadeTimeB = ((vitoriasTimeB + 1) / totalVitorias) * 100;

//   return {
//     timeA: probabilidadeTimeA.toFixed(2),
//     timeB: probabilidadeTimeB.toFixed(2),
//   };
// }

// let probabilidade = calcularProbabilidadeDeVitoria(2, 1);
// console.log("Probabilidade de A ganhar: " + probabilidade.timeA + "%");
// console.log("Probabilidade de B ganhar: " + probabilidade.timeB + "%");

function calcularProbabilidadeDeGanharMaratona(
  VitoriasTime,
  VitoriasTodosTimes,
  QuantPartidasMaratonas
) {
  let probabilidadeVitoriaTime = VitoriasTime / VitoriasTodosTimes;
  console.log("probabilidadeVitoriaTime = " + probabilidadeVitoriaTime);
  let probabilidade = Math.pow(
    probabilidadeVitoriaTime,
    QuantPartidasMaratonas
  );
  console.log("probabilidade = " + probabilidade);

  probabilidade *= 100;

  console.log(
    "Probabilidade de o time ganhar " +
      QuantPartidasMaratonas +
      " partidas e ser campeão: " +
      probabilidade.toFixed(2) +
      "%"
  );
}

calcularProbabilidadeDeGanharMaratona(2, 14, 2);
