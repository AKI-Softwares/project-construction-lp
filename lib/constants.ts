export const SITE = {
  name: 'CheckObra',
  backofficeUrl: 'https://project-construction-front.vercel.app',
  whatsappUrl:
    'https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1%2C+tenho+interesse+no+CheckObra.+Gostaria+de+agendar+uma+demonstra%C3%A7%C3%A3o.',
} as const

export const PAIN_POINTS = [
  { icon: 'FileX', title: 'Formulários em papel', description: 'Checklists se perdem, rasgam ou somem.' },
  { icon: 'Table2', title: 'Planilhas Excel', description: 'Sem colaboração em tempo real nem histórico confiável.' },
  { icon: 'MessageCircleX', title: 'WhatsApp como sistema', description: 'Fotos e NCs sem rastreabilidade ou vínculo ao apartamento.' },
  { icon: 'EyeOff', title: 'Gestores sem visibilidade', description: 'Sem saber o que acontece em campo até o final do dia.' },
  { icon: 'RefreshCw', title: 'Retrabalho caro', description: 'Inspetor não sabe quais itens já foram corrigidos.' },
  { icon: 'Scale', title: 'Risco jurídico', description: 'Histórico perdido quando comprador contesta uma NC.' },
] as const

export const FEATURES = [
  { icon: 'Smartphone', title: 'Mobile-first para inspetores', description: 'App Android com fluxo completo sem abrir o laptop.' },
  { icon: 'Bell', title: 'Notificações push instantâneas', description: 'Inspetor recebe atribuição no celular e abre a vistoria com um tap.' },
  { icon: 'RotateCcw', title: 'Re-inspeção automatizada', description: 'Sistema gera nova vistoria contendo apenas os itens NOK.' },
  { icon: 'PenLine', title: 'Assinatura digital', description: 'Inspetor assina o laudo com o dedo no app.' },
  { icon: 'FileText', title: 'Relatório PDF automático', description: 'Gerado e compartilhável por WhatsApp em segundos.' },
  { icon: 'BarChart3', title: 'Analytics completo', description: 'KPIs de produtividade, SLA, qualidade e evolução temporal.' },
] as const

export const DIFFERENTIALS: {
  feature: string
  checkobra: boolean | string
  planilhas: boolean | string
  tradicional: boolean | string
}[] = [
  { feature: 'App mobile nativo para inspetor', checkobra: true, planilhas: false, tradicional: 'Parcial' },
  { feature: 'Notificações push de atribuição', checkobra: true, planilhas: false, tradicional: 'Raramente' },
  { feature: 'Re-inspeção automática (só itens NOK)', checkobra: true, planilhas: false, tradicional: false },
  { feature: 'Assinatura digital no app', checkobra: true, planilhas: false, tradicional: 'Raramente' },
  { feature: 'Relatório PDF automatizado', checkobra: true, planilhas: 'Manual', tradicional: true },
  { feature: 'Rastreabilidade jurídica', checkobra: true, planilhas: false, tradicional: 'Parcial' },
  { feature: 'Analytics com ranking e timeline', checkobra: true, planilhas: 'Manual', tradicional: true },
  { feature: 'Custo de implantação', checkobra: 'Baixo (SaaS)', planilhas: 'Zero', tradicional: 'Alto' },
]

export const PLANS = [
  { name: 'Start', price: 'R$ 1.490', period: '/mês', buildings: '3 edifícios', users: '5 usuários', featured: false, implementationFee: 'R$ 3.000' },
  { name: 'Growth', price: 'R$ 3.490', period: '/mês', buildings: '15 edifícios', users: '20 usuários', featured: true, implementationFee: 'R$ 5.000' },
  { name: 'Enterprise', price: 'R$ 6.490', period: '/mês', buildings: 'Ilimitado', users: 'Ilimitado', featured: false, implementationFee: 'R$ 8.000' },
] as const

export const FAQ = [
  { question: 'O sistema funciona offline?', answer: 'O app opera com tolerância a falhas de rede. Os dados são sincronizados automaticamente ao reconectar.' },
  { question: 'Preciso de um servidor próprio?', answer: 'Não. O CheckObra é SaaS — toda a infraestrutura é gerenciada pela plataforma, sem necessidade de servidor próprio.' },
  { question: 'Posso ter mais de uma empresa na mesma conta?', answer: 'Cada construtora tem conta e dados completamente isolados. Multi-empresa é suportado a nível de plataforma.' },
  { question: 'Como funciona a implantação?', answer: 'Nossa equipe configura edifícios, usuários e checklists junto com você. A taxa de implantação é única e opcional.' },
  { question: 'O app está disponível para iOS?', answer: 'Hoje o app está disponível para Android. O iOS está no roadmap e será lançado em breve.' },
  { question: 'Como os inspetores recebem as vistorias?', answer: 'Por notificação push diretamente no celular, com link direto para a vistoria atribuída.' },
  { question: 'Os dados ficam seguros?', answer: 'Sim. Cada empresa tem dados totalmente isolados, hospedados em infraestrutura de nuvem com alta disponibilidade.' },
  { question: 'Posso cancelar a qualquer momento?', answer: 'Sim. Não há fidelidade mínima. A assinatura é mensal recorrente e pode ser cancelada a qualquer momento.' },
] as const
