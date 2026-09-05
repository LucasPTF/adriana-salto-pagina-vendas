import type { ReactNode } from "react";
import {
  audience,
  faqs,
  workshopBuilds,
  workshopParts,
  type HeroVersion,
} from "../content/pageContent";
import {
  ArrowIcon,
  CheckIcon,
  ClockIcon,
  RouteIcon,
  ShieldIcon,
  VideoIcon,
} from "./Icons";

const CHECKOUT_URL = "";

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container ${className}`}>{children}</div>;
}

function CTA({ children, className = "" }: { children: ReactNode; className?: string }) {
  const href = CHECKOUT_URL || "#inscricao";
  return (
    <a
      className={`button ${className}`}
      href={href}
      data-checkout-status={CHECKOUT_URL ? "ready" : "pending"}
    >
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-intro reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="section-lead">{text}</p> : null}
    </div>
  );
}

export function SalesPage({ hero }: { hero: HeroVersion }) {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <header className="site-header">
        <Container className="header-inner">
          <a className="brand" href="#inicio" aria-label="Adriana Salto, início">
            <span className="brand-mark">AS</span>
            <span className="brand-copy">
              <strong>Adriana Salto</strong>
              <small>Concursos para mulheres 40+</small>
            </span>
          </a>
          <a className="header-cta" href="#inscricao">Quero participar</a>
        </Container>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <Container className="hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">Workshop ao vivo | Rota da Aprovação 40+</p>
              <h1>
                {hero.title} <em>{hero.emphasis}</em>
              </h1>
              <p className="hero-support">{hero.support}</p>
              <CTA>{hero.cta}</CTA>
              <div className="hero-facts" aria-label="Informações do workshop">
                <span><VideoIcon />Ao vivo no Google Meet</span>
                <span><ClockIcon />Cerca de 3 horas</span>
                <span><RouteIcon />Aplicação prática</span>
              </div>
            </div>
            <div className="hero-visual" aria-label="Retrato profissional de Adriana Salto">
              <div className="hero-photo-frame">
                <img
                  src="/images/adriana-hero.webp"
                  alt="Adriana Salto em retrato profissional"
                  width="1024"
                  height="1536"
                  fetchPriority="high"
                />
              </div>
              <div className="hero-note">
                <span>38 anos</span>
                <p>de serviço público</p>
              </div>
            </div>
          </Container>
          <div className="route-thread" aria-hidden="true"><span /></div>
        </section>

        <section className="section section-paper">
          <Container>
            <div className="problem-grid">
              <SectionIntro
                eyebrow="Talvez o problema nunca tenha sido falta de capacidade"
                title="Você tenta encaixar um plano ideal em uma vida que já está cheia."
              />
              <div className="problem-copy reveal">
                <p>
                  Você trabalha, cuida da casa, resolve problemas de todo mundo e ainda tenta encontrar energia para estudar. Começa uma matéria, muda de estratégia, baixa outro material e monta outro cronograma.
                </p>
                <p>
                  Por alguns dias, parece que agora vai. Depois a rotina aperta, o cansaço chega e você para de novo. A cada recomeço, a pergunta fica mais pesada: será que ainda dá tempo para mim?
                </p>
                <blockquote>
                  Tentar várias vezes não prova que você é incapaz. Pode mostrar que a forma de estudar ainda não foi construída para a sua realidade.
                </blockquote>
              </div>
            </div>
          </Container>
        </section>

        <section className="section section-ink">
          <Container className="school-grid">
            <div className="school-statement reveal">
              <p className="eyebrow eyebrow-light">O ponto que muda a preparação</p>
              <h2>Concurso não é escola.</h2>
            </div>
            <div className="school-content reveal">
              <p>
                Muita preparação vira uma fila infinita de aulas: assistir, anotar, terminar uma matéria e seguir para a próxima. Mas prova de concurso não recompensa quem apenas consumiu mais conteúdo.
              </p>
              <p>
                Ela cobra decisão. O que priorizar, como revisar, quando fazer questões, onde corrigir erros e como continuar quando a semana não sai como planejado.
              </p>
              <p className="school-highlight">Sem uma rota, mais horas podem significar apenas mais cansaço.</p>
            </div>
          </Container>
        </section>

        <section className="section method-section">
          <Container>
            <SectionIntro
              eyebrow="Método PermaneSER"
              title="Uma preparação que combina estratégia e continuidade."
              text="A rota começa pelo ponto em que você está hoje. Depois, transforma sua realidade em prioridades claras e cria uma forma possível de continuar."
            />
            <div className="method-grid reveal-list">
              <article className="method-card">
                <span className="method-number">01</span>
                <h3>Diagnóstico</h3>
                <p>Entender onde você está, quais erros consomem seu tempo e o que realmente precisa mudar.</p>
              </article>
              <article className="method-card featured">
                <span className="method-number">02</span>
                <h3>Rota</h3>
                <p>Transformar trabalho, filhos, casa e tempo disponível em um plano com prioridades claras.</p>
              </article>
              <article className="method-card">
                <span className="method-number">03</span>
                <h3>Permanência</h3>
                <p>Continuar depois do cansaço, da frustração, de uma prova ruim ou de uma semana imperfeita.</p>
              </article>
            </div>
            <p className="method-close reveal">
              A proposta não é depender de motivação. É saber o que fazer, por que fazer e como voltar para a rota quando a vida sair do plano.
            </p>
          </Container>
        </section>

        <section className="section section-sand">
          <Container className="build-grid">
            <SectionIntro
              eyebrow="O que você vai construir"
              title="Você sai do encontro com um começo mais claro e possível."
            />
            <ul className="check-list reveal-list">
              {workshopBuilds.map((item) => (
                <li key={item}><CheckIcon /><span>{item}</span></li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="section schedule-section">
          <Container>
            <SectionIntro
              eyebrow="Como será o encontro"
              title="Cerca de 3 horas para entender, organizar e começar."
              text="A aula combina explicação, diagnóstico e aplicação prática."
            />
            <div className="schedule-list reveal-list">
              {workshopParts.map((part) => (
                <article className="schedule-item" key={part.number}>
                  <span>{part.number}</span>
                  <div>
                    <h3>{part.title}</h3>
                    <p>{part.text}</p>
                  </div>
                </article>
              ))}
              <article className="schedule-item schedule-final">
                <span>05</span>
                <div>
                  <h3>O próximo nível de acompanhamento</h3>
                  <p>Para quem precisar de uma rota individual, ajustes e acompanhamento, Adriana apresentará o Método PermaneSER.</p>
                </div>
              </article>
            </div>
          </Container>
        </section>

        <section className="section section-ink audience-section">
          <Container>
            <div className="audience-grid">
              <SectionIntro
                eyebrow="Para quem este workshop foi criado"
                title="Para a mulher que não quer mais confundir esforço com direção."
              />
              <ul className="audience-list reveal-list">
                {audience.map((item) => (
                  <li key={item}><CheckIcon /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <p className="not-for reveal">
              Este encontro não é para quem procura aprovação rápida, fórmula mágica ou resultado sem estudo.
            </p>
          </Container>
        </section>

        <section className="section authority-section">
          <Container className="authority-grid">
            <div className="authority-photo reveal">
              <img
                src="/images/adriana-autoridade.webp"
                alt="Adriana Salto em seu escritório"
                width="992"
                height="1586"
                loading="lazy"
              />
            </div>
            <div className="authority-copy reveal">
              <p className="eyebrow">Quem vai conduzir</p>
              <h2>Adriana transformou concurso público em caminho de estabilidade e mudança de vida.</h2>
              <p>
                Adriana Salto atua no serviço público há 38 anos e trabalha na internet com orientação para concursos há 4 anos. Quando precisava de um salário maior para sustentar uma nova fase da vida com o filho, prestou seis concursos em nove meses e foi aprovada em três, entre eles TJSP e MPSP.
              </p>
              <p>
                Com ensino médio, construiu sua trajetória usando estratégia de prova, organização e permanência. Hoje, ajuda mulheres que já tentaram, se frustraram e perderam confiança a entender onde estão errando e organizar a preparação.
              </p>
              <div className="authority-stats" aria-label="Experiência de Adriana Salto">
                <span><strong>38</strong> anos no serviço público</span>
                <span><strong>6</strong> concursos em 9 meses</span>
                <span><strong>3</strong> aprovações nesse período</span>
                <span><strong>2</strong> alunas aprovadas após seguirem o acompanhamento até o fim</span>
              </div>
            </div>
          </Container>
        </section>

        <section className="section section-sand included-section">
          <Container>
            <SectionIntro
              eyebrow="O que você recebe"
              title="Tudo o que precisa para aplicar o primeiro planejamento."
            />
            <div className="included-grid reveal-list">
              <article><VideoIcon /><h3>Workshop ao vivo</h3><p>Cerca de 3 horas no Google Meet, com aplicação prática durante o encontro.</p></article>
              <article><RouteIcon /><h3>Planejamento inicial</h3><p>Uma estrutura para organizar o estudo de acordo com a vida que você tem hoje.</p></article>
              <article><CheckIcon /><h3>Planilhas de organização</h3><p>Materiais de apoio para dar forma às prioridades definidas no workshop.</p></article>
              <article><ShieldIcon /><h3>Provas com gabarito</h3><p>Recursos para apoiar a prática de questões e a leitura dos próprios erros.</p></article>
            </div>
          </Container>
        </section>

        <section className="section next-step-section">
          <Container className="next-step-grid">
            <div className="reveal">
              <p className="eyebrow">Transparência sobre o próximo passo</p>
              <h2>O workshop entrega a rota inicial. O acompanhamento aprofunda a execução.</h2>
            </div>
            <div className="next-step-card reveal">
              <div className="next-step-card-header">
                <div className="guarantee-seal" aria-label="Garantia de 7 dias do Método PermaneSER">
                  <span className="guarantee-seal__label">Garantia</span>
                  <strong className="guarantee-seal__number">7</strong>
                  <span className="guarantee-seal__unit">dias</span>
                </div>
                <p>
                  Ao final do encontro, Adriana apresentará o Método PermaneSER para quem quiser acompanhamento individualizado durante a execução.
                </p>
              </div>
              <dl>
                <div><dt>Duração</dt><dd>8 semanas</dd></div>
                <div><dt>Investimento informado</dt><dd>R$ 4.000</dd></div>
                <div><dt>Garantia informada</dt><dd>7 dias</dd></div>
              </dl>
              <small>A garantia de 7 dias se refere ao Método PermaneSER apresentado no workshop.</small>
            </div>
          </Container>
        </section>

        <section className="section faq-section">
          <Container>
            <SectionIntro
              eyebrow="Perguntas frequentes"
              title="Antes de transformar mais uma tentativa em uma nova rota."
            />
            <div className="faq-list reveal-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        <section className="section offer-section" id="inscricao">
          <Container className="offer-grid">
            <div className="offer-copy reveal">
              <p className="eyebrow eyebrow-light">Workshop Rota da Aprovação 40+</p>
              <h2>Transforme o próximo começo em uma preparação com direção.</h2>
              <p>Você não precisa provar que consegue estudando até a exaustão. Precisa entender onde está, construir uma rota e aprender a permanecer nela.</p>
            </div>
            <div className="offer-card reveal">
              <p className="offer-label">Inscrição</p>
              <div className="price"><small>R$</small><strong>37</strong></div>
              <ul>
                <li><CheckIcon />Workshop ao vivo no Google Meet</li>
                <li><CheckIcon />Cerca de 3 horas de aplicação</li>
                <li><CheckIcon />Planilhas de organização</li>
                <li><CheckIcon />Provas com gabarito</li>
              </ul>
              <CTA className="button-full">Quero minha vaga no workshop</CTA>
              <p className="offer-note">A data e o horário ainda serão informados. Não haverá replay.</p>
            </div>
          </Container>
        </section>
      </main>

      <footer className="site-footer">
        <Container className="footer-inner">
          <div>
            <strong>Adriana Salto</strong>
            <p>Concurso público com direção, estratégia e permanência.</p>
          </div>
          <a href="https://www.instagram.com/adrianasaltoconcursos/" target="_blank" rel="noreferrer">Instagram</a>
        </Container>
      </footer>
    </>
  );
}
