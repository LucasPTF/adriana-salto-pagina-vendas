import { CheckIcon, ClockIcon, RouteIcon, VideoIcon } from "./Icons";

export function ThankYouPage() {
  return (
    <main className="thanks-page">
      <div className="thanks-shell">
        <a className="brand thanks-brand" href="/a1" aria-label="Adriana Salto, voltar à página principal">
          <span className="brand-mark">AS</span>
          <span className="brand-copy"><strong>Adriana Salto</strong><small>Rota da Aprovação 40+</small></span>
        </a>
        <section className="thanks-card">
          <div className="thanks-check"><CheckIcon /></div>
          <p className="eyebrow">Inscrição concluída</p>
          <h1>Agora, prepare-se para viver o workshop ao vivo.</h1>
          <p className="thanks-lead">
            O próximo passo é acessar a plataforma pelo link recebido após a compra. Dentro dela estará o link da aula no Google Meet.
          </p>
          <div className="thanks-steps">
            <article><span>01</span><RouteIcon /><h2>Acesse a plataforma</h2><p>Use o link disponibilizado após a confirmação da compra.</p></article>
            <article><span>02</span><VideoIcon /><h2>Localize a aula</h2><p>O link do encontro ao vivo no Google Meet estará dentro da plataforma.</p></article>
            <article><span>03</span><ClockIcon /><h2>Reserve o horário</h2><p>Anote a data e o horário assim que forem comunicados. O encontro não terá replay.</p></article>
          </div>
          <div className="thanks-note">
            <strong>Importante</strong>
            <p>Se o acesso não aparecer imediatamente, aguarde a confirmação da plataforma e confira as instruções mostradas após o pagamento.</p>
          </div>
          <a className="button thanks-button" href="/a1">Voltar para a página</a>
        </section>
      </div>
    </main>
  );
}
