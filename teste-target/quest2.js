const num = 10
const sequencia = [0, 1]

while (sequencia[sequencia.length - 1] < num) {
  sequencia.push(
    sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2]
  )
}

if (sequencia.includes(num)) {
  console.log(`O número ${num} pertence à sequência !`)
} else {
  console.log(`O número ${num} NÃO pertence à sequência !`)
}

// o número dez não pertence à sequência.
