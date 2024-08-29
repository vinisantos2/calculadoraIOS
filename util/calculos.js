export class Calculos {
    soma(num1, num2) {
        const calculo = (num1 + num2).toString().replace(".", ",")

        return calculo

    }

    mutiplicacao(num1, num2) {
        const calculo = (num1 * num2).toString().replace(".", ",")

        return calculo

    }
    divisao(num1, num2) {
        const calculo = (num1 / num2).toString().replace(".", ",")
        console.log(calculo)
        return calculo

    }
    subtracao(num1, num2) {
        const calculo = (num1 - num2).toString().replace(".", ",")
        return calculo

    }
}