def calc(n1, n2, oper):
    if oper == 1:
        return n1 + n2
    elif oper == 2:
        return n1 - n2
    elif oper == 3:
        return n1 * n2
    elif oper == 4:
        return n1 / n2
    else:
        return 0

n1 = float(input("Digite o primeiro numero para o calculo: "))
n2 = float(input("Digite o segundo numero para o calculo: "))
oper = int(input("Informe qual operaçao a ser executada: 1.Soma 2.Subtração 3.Multiplicação 4.Divisão: "))
print(calc(n1,n2,oper))