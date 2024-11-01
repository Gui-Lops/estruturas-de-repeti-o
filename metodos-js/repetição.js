const usuario = {nome: 'johnny', idade: 17, time: 'sem querê'};

const boasVindas = 'Bem vindo'
const boasVindas2 = 'Muito bem vindo'
const boasVindas3 = 'Mal vindo'

if (usuario.time === 'sem querê') {
    console.log(boasVindas2)
} else if (usuario.time === 'Paraíba do sertão') {
    console.log(boasVindas);
} else {
    console.log(boasVindas3);
}

const escolha = 'clique no setor para o qual deseja comprar seu ingresso';
const mensagemFinal = 'Divirta-se no maracanã!';

console.log(escolha);
console.log(mensagemFinal);

//>No curso de Desenvolvimento de Sistemas do Senai Morvan Figueiredo, os alunos têm várias provas e atividades avaliativas. Para ajudar os professores, crie um programa que calcule a média de três notas e determine se o aluno passou (média ≥ 6) ou ficou de recuperação (média < 6). Exiba a mensagem correspondente.<//

function aprovadoReprovado (a, b, c) {
    const somaDasNotas = a + b + c;
    if (somaDasNotas >= 6) {
        console.log(`Sua nota é suficiente pra vc passar`);
    } else if (somaDasNotas < 6) {
        console.log(`Você está de recuperação`);
    } 
}

aprovadoReprovado(10, 7, 5);

//>A escola Senai Morvan Figueiredo está implementando um sistema para facilitar o cadastro dos alunos. Crie um programa que pergunte a idade de uma pessoa e exiba uma mensagem indicando se ela pode ou não se inscrever no curso de Desenvolvimento de Sistemas. Para este curso, é necessário ter pelo menos 16 anos.<//

function usuarioSenai (nome, idade) {
    let cadastro = {nome: nome, idade: idade}
    if (idade >= 16) {
        console.log(`${cadastro.nome} você tem idade suficiente pra se cadastrar no senai `);
    }
}

usuarioSenai("Alex", 17);

//>A biblioteca do Senai Morvan Figueiredo oferece descontos em materiais didáticos para alunos. Crie um programa que calcule o valor final a ser pago, aplicando um desconto de 10% se o valor do material for superior a R$ 50.<//

function calculaDesconto (valorDoMaterial) {
    if (valorDoMaterial > 50) {
        console.log(`O valor do material ficou em R$${valorDoMaterial*0.90}`)
    } else {
        console.log(`O material selecionado não possui desconto`);
    }
}

calculaDesconto(135,99);

//>No Senai Morvan Figueiredo, para um aluno ser aprovado, ele deve ter pelo menos 75% de presença. Crie um programa que pergunte a porcentagem de presença de um aluno e exiba uma mensagem informando se ele está apto ou não a ser aprovado.<//

function presença (porcentagem) {
    if (porcentagem >= 75) {
        console.log(`Você está aprovado`)
    } else {
        console.log(`Você está reprovado por falta`);
    }
}

presença(88);

//>Os cursos do Senai Morvan Figueiredo são oferecidos em turnos diferentes. Crie um programa que pergunte ao aluno seu turno (M para Matutino, V para Vespertino, N para Noturno) e exiba uma mensagem personalizada de acordo com o turno informado.<//

const phrase = `Qual o seu período de estudos? M para Matutino, V para Vespertino, N para Noturno `

function dados (nome, idade, periodo) {
    let dadosDoUsuario = {nome:nome, idade:idade, periodo:periodo}
    if (dadosDoUsuario.periodo === 'V') {
        console.log(`${dadosDoUsuario.nome} você está matriculado no periodo vespertino`)
    } else if (dadosDoUsuario.periodo === 'M') {
        console.log(`${dadosDoUsuario.nome} você está matriculado no periodo matutino`)
    } else if (dadosDoUsuario.periodo === 'N') {
        console.log(`${dadosDoUsuario.nome} você está matriculado no periodo noturno`)
    }
}

dados('Alison', 34, 'M')

//>No curso de Desenvolvimento de Sistemas, a nota mínima para aprovação nas disciplinas é 6. Crie um programa que receba três notas de um aluno e determine se ele passou direto, ficou de recuperação ou reprovou (nota < 4 em uma das provas). Exiba a situação do aluno.<//

function notas (a, b, c) {
    let somaNota = [a + b + c]
    let resultado = somaNota / 3
    if (resultado >= 6) {
        console.log('Aprovado');      
    } else {
        console.log('Reprovado');
    }
}

notas(10, 3, 10);

//>O Senai Morvan Figueiredo possui um laboratório de informática que utiliza diversos equipamentos, como monitores e teclados. Crie um programa para gerenciar o estoque. Pergunte ao usuário a quantidade atual de cada item e, se for menor que 10, exiba uma mensagem de “Repor Estoque”, caso contrário, exiba “Estoque Suficiente”.<//

function equipamentos (monitores, teclados) {
    if (monitores < 10 || teclados < 10) {
        console.log('Repor Estoque.')
    } else {
        console.log('Estoque Suficiente.');
    }
}

equipamentos(10, 10)

//>A escola Senai Morvan Figueiredo deseja categorizar os alunos em três níveis de desempenho com base em suas médias finais:<//

function nota (a) {
    if (a >= 8) {
        console.log(`Excelente`)
    } else if (a >= 6 && a < 8) {
        console.log(`Bom`)
    } else {
        console.log(`Precisa Melhorar`)
    }
}

nota(7);

//>O Senai oferece cursos de extensão com desconto para alunos matriculados. Crie um programa que pergunte se o aluno está matriculado e o valor do curso. Aplique um desconto de 20% para alunos matriculados e exiba o valor final do curso.<//

function dadosDoAluno (nome, matricula) {
    let aluno = {nome:nome, matricula:matricula}
    let valorDoCurso = 5.540
    if (aluno.matricula === 'matriculado') {
        console.log(`O valor do curso de extenção recebeu um desconto de 20% ficando ${valorDoCurso - valorDoCurso/5}`)
    } else {
        console.log(`Você não está matriculado no SENAI, não terá desconto`);
    }
}

dadosDoAluno('Peso Alvares Sobral', 'matriculado')

//>Durante as aulas de Desenvolvimento de Sistemas, os alunos devem entregar projetos que são avaliados em três critérios: funcionalidade, design e documentação. Cada critério tem uma nota de 1 a 10. Crie um programa que receba as notas de cada critério e exiba uma avaliação final como "Excelente" (média ≥ 8), "Bom" (média entre 6 e 7.9) ou "Precisa Melhorar" (média < 6).<//

function notaSenai (funcionalidade, design, documentação) {
    let resultado = (funcionalidade + design + documentação) / 3
    if (resultado >= 8) {
        console.log(`Excelente`)
    } else if (resultado >= 6 && resultado < 8) {
        console.log(`Bom`)
    } else {
        console.log(`Precisa Melhorar`)
    }
}

notaSenai(7, 10, 8);

//>No Senai Morvan Figueiredo, um aluno é aprovado se tiver média ≥ 6 e frequência ≥ 75%. Crie um programa que receba a média e a frequência de um aluno e exiba se ele passou, ficou de recuperação (se a média está entre 4 e 5.9) ou foi reprovado.<//

function mediaEFrequencia (media, frequencia) {
    if (media >= 6 && frequencia >= 75) {
        console.log("Aprovado")
    } else if (media >= 4 || media < 6) {
        console.log("Você está de recuperação")
    } else {
        console.log("Reprovado")
    }
}

mediaEFrequencia(10, 60);

//>Para segurança, a escola possui um sistema de controle de acesso ao laboratório. Somente alunos com cartão de acesso válido podem entrar. Crie um programa que pergunte se o aluno possui o cartão e, caso ele tenha, pergunte se o cartão está ativo. Exiba uma mensagem informando se o acesso é permitido ou negado.<//

function crachá (posse, validade) {
    let dadosDoCartão = {posse:posse, validade:validade}
    if (posse === 'Possui' && validade === 'Válido') {
        console.log("Permitido");  
    } else if (posse !== 'Possui' && validade === 'Válido') {
        console.log('Negado');
    } else if (posse !== 'Possui' && validade !== 'Válido') {
        console.log('Negado')
    }   else if (posse === 'Possui' && validade !== 'Válido') {
        console.log('Negado')
    }
}

crachá('Possui', 'Válido')

//>A escola oferece recursos como notebooks e projetores para serem usados em projetos dos alunos. Crie um programa que receba o número de recursos solicitados e verifique se há itens suficientes no estoque. O programa deve verificar se o pedido é atendido ou se é necessário fazer uma reserva para uma data futura.<//

function equipamentos2 (notebooks, projetores) {
    const solicitado = {notebooks:10, projetores:8}
    if (notebooks < solicitado.notebooks || projetores < solicitado.projetores) {
        console.log('Reservar para uma data futura.')
    } else {
        console.log('Pedido atendido');
    }
}

equipamentos2(10, 10)

//>No curso de Desenvolvimento de Sistemas, algumas disciplinas são obrigatórias e outras são eletivas. Crie um programa que pergunte se o aluno deseja se matricular em uma disciplina obrigatória ou eletiva. Caso seja obrigatória, exiba uma mensagem de confirmação. Caso seja eletiva, pergunte se há vagas disponíveis e exiba uma mensagem de confirmação ou de espera.<//

function matriculaObrigatoriaEletiva (matricula) {
    let eletiva = 'fechado pra inscrições'
    if (matricula === 'Obrigatória') {
        console.log("Matricula aprovada")
    } else if (matricula === 'Eletiva')
        if (eletiva === 'aberto pra inscrições') {
            console.log('Matricula aprovada')
        } else if (eletiva === 'fechado pra inscrições') {
            console.log('Matricula reprovada. Em espera, aguardando vagas')
        }
    }

    matriculaObrigatoriaEletiva('Eletiva')

    //>Para simular o desempenho dos alunos, a escola desenvolveu um sistema onde são atribuídas notas aleatórias para verificar os níveis de aprendizado. Crie um programa que receba notas simuladas para três provas e exiba se o aluno passou (média ≥ 6), ficou de recuperação (média entre 4 e 5.9) ou foi reprovado (média < 4). Caso a média seja maior que 8, exiba uma mensagem de destaque.<//

    function notaSenai2 (funcionalidade, design, documentação) {
        let resultado = (funcionalidade + design + documentação) / 3
        if (resultado >= 8) {
            console.log(`Parabéns nota excelente`)
        } else if (resultado >= 6 && resultado < 8) {
            console.log(`Aprovado`)
        } else if (resultado >= 4 && resultado < 6) {
            console.log(`Resuperação`)
        } else if (resultado < 4) {
            console.log(`Reprovado`)
        }
    }
    
    notaSenai(7, 10, 8);