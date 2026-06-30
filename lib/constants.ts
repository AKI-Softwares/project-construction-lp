export const SITE = {
  name: 'CheckObra',
  backofficeUrl: 'https://project-construction-front.vercel.app',
  whatsappUrl:
    'https://wa.me/5544998354194?text=Ol%C3%A1%2C+tenho+interesse+no+CheckObra.+Gostaria+de+agendar+uma+demonstra%C3%A7%C3%A3o.',
} as const

export const PAIN_POINTS = [
  { icon: 'FileX', title: 'Checklists que somem', description: 'Cada formulário perdido é mais um dia de prazo que você não recupera.' },
  { icon: 'Table2', title: 'Planilha não é evidência', description: 'Na contestação judicial, você precisa de rastreabilidade — planilha não resolve.' },
  { icon: 'MessageCircleX', title: 'Foto no WhatsApp não prova nada', description: 'Sem data, local ou vínculo ao apartamento, o registro não vale nada no processo.' },
  { icon: 'EyeOff', title: 'Você descobre o problema tarde demais', description: 'O que está acontecendo em campo agora? Se você não sabe, o prejuízo já começou.' },
  { icon: 'RefreshCw', title: 'Retrabalho que come sua margem', description: 'Cada retorno desnecessário do inspetor ao mesmo apartamento custa horas — e horas custam dinheiro.' },
  { icon: 'Scale', title: 'Uma contestação pode custar muito mais', description: 'Sem rastreabilidade, o comprador tem razão por padrão. O CheckObra é sua prova.' },
] as const

export const FEATURES = [
  { icon: 'Smartphone', title: 'App pensado para o campo', description: 'Fluxo completo no celular, sem abrir laptop.' },
  { icon: 'Bell', title: 'Zero atraso na atribuição', description: 'Da atribuição ao início da vistoria em segundos.' },
  { icon: 'RotateCcw', title: 'Reinspeção automática', description: 'Só os itens pendentes são reagendados.' },
  { icon: 'PenLine', title: 'Laudo assinado em campo', description: 'Dedo no app, validade jurídica garantida.' },
  { icon: 'FileText', title: 'Laudo PDF em segundos', description: 'Pronto para enviar ao cliente na hora da entrega.' },
  { icon: 'BarChart3', title: 'Visibilidade total do portfólio', description: 'KPIs de todos os empreendimentos em tempo real.' },
] as const

export const DIFFERENTIALS: {
  feature: string
  checkobra: boolean | string
  planilhas: boolean | string
  tradicional: boolean | string
}[] = [
  { feature: 'App mobile nativo para inspetor', checkobra: true, planilhas: false, tradicional: 'Parcial' },
  { feature: 'Notificações push em tempo real', checkobra: true, planilhas: false, tradicional: 'Raramente' },
  { feature: 'Reinspeção só com itens pendentes', checkobra: true, planilhas: false, tradicional: false },
  { feature: 'Assinatura digital com validade jurídica', checkobra: true, planilhas: false, tradicional: 'Raramente' },
  { feature: 'Laudo PDF gerado automaticamente', checkobra: true, planilhas: 'Manual', tradicional: true },
  { feature: 'Proteção contra contestações jurídicas', checkobra: true, planilhas: false, tradicional: 'Parcial' },
  { feature: 'Dashboard com ranking e evolução', checkobra: true, planilhas: 'Manual', tradicional: true },
  { feature: 'Investimento', checkobra: 'Cabe no bolso', planilhas: 'Zero', tradicional: 'Alto' },
]

export const PLANS = [
  { name: 'Start', price: 'R$ 1.490', period: '/mês', buildings: '3 edifícios', users: '5 usuários', featured: false, implementationFee: 'R$ 3.000' },
  { name: 'Growth', price: 'R$ 3.490', period: '/mês', buildings: '15 edifícios', users: '20 usuários', featured: true, implementationFee: 'R$ 5.000' },
  { name: 'Enterprise', price: 'R$ 6.490', period: '/mês', buildings: 'Ilimitado', users: 'Ilimitado', featured: false, implementationFee: 'R$ 8.000' },
] as const

export const FAQ = [
  { question: 'Em quanto tempo consigo ver resultado?', answer: 'Construtoras relatam redução de retrabalho e mais controle das entregas já nas primeiras semanas. A implantação leva poucos dias — nossa equipe configura tudo junto com você.' },
  { question: 'Meus inspetores vão conseguir usar?', answer: 'Sim. O app foi projetado para ser tão simples quanto o WhatsApp. Sem treinamento longo — o inspetor abre, recebe a vistoria e começa. Ponto.' },
  { question: 'Funciona para vários empreendimentos ao mesmo tempo?', answer: 'Sim. Gerencie quantos empreendimentos precisar na mesma plataforma, com visão consolidada e dados isolados por empresa.' },
  { question: 'Preciso de servidor ou equipe de TI?', answer: 'Não. O CheckObra é 100% SaaS — toda a infraestrutura é gerenciada por nós. Você acessa de qualquer lugar, sem custo de TI.' },
  { question: 'E se o inspetor estiver sem internet na obra?', answer: 'O app opera normalmente sem conexão e sincroniza tudo automaticamente quando a rede volta — sem perder nenhum dado.' },
  { question: 'O laudo tem validade jurídica?', answer: 'Sim. Cada vistoria gera um registro rastreável com data, responsável e fotos vinculadas ao apartamento — documentação sólida em caso de contestação.' },
  { question: 'Qual o risco de ficar preso no contrato?', answer: 'Nenhum. Assinatura mensal, sem fidelidade mínima, sem multa de cancelamento. Você fica porque funciona, não por obrigação.' },
  { question: 'O app está disponível para iPhone?', answer: 'Hoje disponível para Android. A versão iOS está no roadmap — entre em contato para ser avisado no lançamento.' },
] as const
