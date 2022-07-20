nome = input("Digite seu nome: ")
nota1 = float(input("Digite sua primeira nota: "))
nota2 = float(input("Digite sua segunda nota: "))
faltas = int(input("Quantas faltas você tem: "))
media = (nota1 + nota2)/ 2

if media < 7.0:
    print("Aluno,",nome,",reprovado com media,",media)
elif faltas > 3: 
    print("Aluno,",nome,",reprovado por falta")
else:
    print("Aluno,",nome,",foi aprovado por media," ,media)