const faturamentoPEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
}

const faturamentoTotal = Object.values(faturamentoPEstado).reduce(
  (total, valor) => total + valor,
  0
)

const percentuaisPEstado = {}
for (let estado in faturamentoPEstado) {
  const percentual = (faturamentoPEstado[estado] / faturamentoTotal) * 100
  percentuaisPEstado[estado] = percentual.toFixed(2)
}

console.log(percentuaisPEstado)
