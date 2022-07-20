qtdrodas = int(input("Digite o numero de rodas do veiculo: "))
peso = float(input("Informe o peso bruto do veiculo: "))
qtdpessoa = int(input("Informe a capacidade para pessoas: "))

if qtdrodas < 4:
    print("A: Veículos com duas ou três rodas;")
elif qtdrodas == 4 and qtdpessoa <= 8 and peso <= 3500:
    print("B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;")
elif qtdrodas >= 4 and peso <= 6000 and qtpessoa <= 8:
    print("C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;")
elif qtdrodas >= 4 and peso <= 6000 and qtdpessoa > 8:
    print("D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;")
else:
    print("E: Veículos com quatro rodas ou mais e com mais de 6000 kg.")
