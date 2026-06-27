export const SITE = {
  name: 'CheckObra',
  backofficeUrl: 'https://project-construction-front.vercel.app',
  whatsappUrl:
    'https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1%2C+tenho+interesse+no+CheckObra.+Gostaria+de+agendar+uma+demonstra%C3%A7%C3%A3o.',
} as const

export const PAIN_POINTS = [
  { icon: 'FileX', title: 'Checklists que somem', description: 'Formulários rasgam, desaparecem e atrasam a entrega das chaves.' },
  { icon: 'Table2', title: 'Planilhas que não escalam', description: 'Sem histórico centralizado, qualquer dado contestado vira problema jurídico.' },
  { icon: 'MessageCircleX', title: 'Registros perdidos no WhatsApp', description: 'Fotos sem localização, apartamento ou data — inúteis na hora da contestação.' },
  { icon: 'EyeOff', title: 'Gestão às cegas', description: 'Você descobre o andamento real só no fim do dia — tarde demais para agir.' },
  { icon: 'RefreshCw', title: 'Inspetor volta ao mesmo lugar', description: 'Sem saber o que já foi corrigido, o inspetor retrabalha o que poderia ter avançado.' },
  { icon: 'Scale', title: 'Exposição jurídica real', description: 'Quando o comprador contesta a entrega, você precisa de evidências. Sem rastreabilidade, você perde.' },
] as const

export const FEATURES = [
  { icon: 'Smartphone', title: 'App pensado para o campo', description: 'Interface simples e rápida: o inspetor abre, vistoria e finaliza — sem treinamento longo.' },
  { icon: 'Bell', title: 'Zero atraso entre atribuição e execução', description: 'O inspetor recebe a vistoria no celular em segundos e já inicia com um toque.' },
  { icon: 'RotateCcw', title: 'Reinspeção automática e inteligente', description: 'Só os itens com pendência são reagendados — sem retrabalho, sem percorrer o apartamento inteiro de novo.' },
  { icon: 'PenLine', title: 'Laudo assinado em campo', description: 'Assinatura digital com o dedo no app: sem imprimir, sem digitalizar, com validade jurídica.' },
  { icon: 'FileText', title: 'Laudo PDF profissional em segundos', description: 'Gerado automaticamente e compartilhado com o cliente via WhatsApp na hora da entrega.' },
  { icon: 'BarChart3', title: 'Visibilidade total do portfólio', description: 'Produtividade, SLA e qualidade de cada empreendimento, em tempo real, de qualquer lugar.' },
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
  { feature: 'Investimento', checkobra: 'SaaS acessível', planilhas: 'Zero', tradicional: 'Alto' },
]

export const PLANS = [
  { name: 'Start', price: 'R$ 1.490', period: '/mês', buildings: '3 edifícios', users: '5 usuários', featured: false, implementationFee: 'R$ 3.000' },
  { name: 'Growth', price: 'R$ 3.490', period: '/mês', buildings: '15 edifícios', users: '20 usuários', featured: true, implementationFee: 'R$ 5.000' },
  { name: 'Enterprise', price: 'R$ 6.490', period: '/mês', buildings: 'Ilimitado', users: 'Ilimitado', featured: false, implementationFee: 'R$ 8.000' },
] as const

export const FAQ = [
  { question: 'O app funciona sem internet na obra?', answer: 'Sim. O app opera com tolerância a falhas de rede e sincroniza tudo automaticamente quando a conexão volta — sem perder nenhum dado.' },
  { question: 'Preciso de servidor ou infraestrutura própria?', answer: 'Não. O CheckObra é 100% SaaS — toda a infraestrutura é gerenciada por nós. Você acessa de qualquer lugar, sem custo de TI.' },
  { question: 'Funciona para múltiplos empreendimentos?', answer: 'Sim. Gerencie quantos empreendimentos precisar na mesma plataforma, com dados isolados por empresa e visão consolidada para o gestor.' },
  { question: 'Como é a implantação? Demora muito?', answer: 'Nossa equipe configura edifícios, usuários e checklists junto com você em poucos dias. A taxa de implantação é única e cobre o setup completo.' },
  { question: 'O app está disponível para iPhone?', answer: 'Hoje disponível para Android. A versão iOS está no roadmap e chegará em breve — entre em contato para ser avisado primeiro.' },
  { question: 'Como os inspetores recebem as vistorias?', answer: 'Por notificação push direto no celular. O inspetor toca na notificação e já entra na vistoria atribuída — sem acessar e-mail ou planilha.' },
  { question: 'Os dados da minha empresa ficam protegidos?', answer: 'Sim. Cada empresa tem dados 100% isolados, com backups automáticos e infraestrutura em nuvem com alta disponibilidade.' },
  { question: 'Posso cancelar quando quiser?', answer: 'Sim, sem multa e sem burocracia. Assinatura mensal — cancele quando precisar, sem fidelidade mínima.' },
] as const
