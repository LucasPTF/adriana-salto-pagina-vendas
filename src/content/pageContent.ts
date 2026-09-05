export type HeroVersion = {
  title: string;
  emphasis: string;
  support: string;
  cta: string;
};

export const heroVersions: Record<"a1" | "a2" | "a3", HeroVersion> = {
  a1: {
    title: "Você não precisa estudar mais.",
    emphasis: "Precisa parar de recomeçar.",
    support:
      "Em um workshop ao vivo de aproximadamente 3 horas, descubra por que você ainda não aprovou, identifique o que trava sua preparação e monte uma rota de estudos que cabe na sua vida.",
    cta: "Quero participar por R$ 37",
  },
  a2: {
    title: "Você pode estar estudando muito e, ainda assim,",
    emphasis: "treinando para a prova do jeito errado.",
    support:
      "Em 3 horas ao vivo, entenda por que assistir aula atrás de aula não é o mesmo que se preparar para concurso e monte uma rota baseada em prioridade, questões e na sua realidade.",
    cta: "Quero aprender a estudar para concurso",
  },
  a3: {
    title: "Você não está velha para concurso.",
    emphasis: "Está cansada de recomeçar sem saber o que mudar.",
    support:
      "Um workshop ao vivo para mulheres 40+ que querem voltar a estudar com uma rota possível, sem se comparar com quem tem outra idade, outra rotina e outro tempo disponível.",
    cta: "Quero construir minha rota",
  },
};

export const workshopBuilds = [
  "Um diagnóstico dos erros que podem estar mantendo você no ciclo de começar, parar e recomeçar.",
  "Uma nova leitura sobre por que concurso exige uma estratégia diferente da escola e da faculdade.",
  "Prioridades de estudo mais coerentes com o seu momento e com o tempo que você realmente tem.",
  "Um planejamento inicial adaptado à sua rotina, em vez de um cronograma ideal que desmorona na primeira semana difícil.",
  "Clareza sobre o que depende de técnica e o que depende de permanência para seguir no processo.",
];

export const workshopParts = [
  {
    number: "01",
    title: "Por que você ainda não aprovou",
    text: "Identifique padrões que fazem muita gente estudar muito sem transformar esforço em progresso claro.",
  },
  {
    number: "02",
    title: "Concurso não é escola",
    text: "Separe consumo de conteúdo de preparação estratégica e entenda por que prioridade, revisão e questões mudam o jogo.",
  },
  {
    number: "03",
    title: "Sua rota real de estudos",
    text: "Organize um plano inicial que considere trabalho, casa, filhos, energia e tempo disponível.",
  },
  {
    number: "04",
    title: "Como parar de abandonar a própria preparação",
    text: "Entenda o papel da mentalidade na continuidade e por que uma semana ruim não precisa virar mais um começo do zero.",
  },
];

export const audience = [
  "Mulheres 40+ que trabalham e precisam conciliar estudo com responsabilidades reais.",
  "Quem já começou a estudar mais de uma vez e sente que sempre perde o ritmo.",
  "Quem tem material, cursinho ou videoaulas, mas ainda não sabe o que priorizar.",
  "Quem se compara com pessoas mais novas e começa a duvidar da própria capacidade.",
  "Quem não busca atalhos, mas quer parar de desperdiçar esforço na direção errada.",
];

export const faqs = [
  {
    question: "Ainda dá tempo para mim?",
    answer:
      "Adriana retomou uma preparação decisiva aos 39 anos. O workshop não promete prazo de aprovação. Ele mostra como construir uma preparação possível a partir da realidade que você tem hoje.",
  },
  {
    question: "Eu trabalho e tenho pouco tempo. Vai funcionar para mim?",
    answer:
      "O workshop parte exatamente do tempo real disponível. A proposta é priorizar e organizar, sem fingir que você tem uma rotina que não existe.",
  },
  {
    question: "Já comprei cursinho. Preciso de outro material?",
    answer:
      "Não. O workshop não foi criado para empilhar material. Ele ajuda você a organizar o que já tem e entender o que realmente precisa entrar na sua rota.",
  },
  {
    question: "E se eu já tentei várias vezes?",
    answer:
      "As tentativas anteriores viram informação para o diagnóstico. O foco é identificar o que precisa mudar para que o próximo ciclo não repita o anterior.",
  },
  {
    question: "Vai ter replay?",
    answer:
      "Não. O workshop será realizado ao vivo e não terá replay. A experiência foi desenhada para aplicação prática durante o encontro.",
  },
];
