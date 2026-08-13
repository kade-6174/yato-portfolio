const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="site-title">
        <p className="eyebrow">YATO&apos;S LAB / 2026</p>
        <h1 id="site-title">
          yato<span className="dot">.</span>
        </h1>
        <p className="intro">
          ふと思いついたアイデアを、
          <br />
          少しずつ形にしています。
        </p>
        <a
          className="x-link"
          href="https://x.com/yato_dev_"
          target="_blank"
          rel="noreferrer"
        >
          X / @yato_dev_ <Arrow />
        </a>
      </section>

      <section className="about" aria-labelledby="about-title">
        <div className="section-label">
          <span>01</span>
          <h2 id="about-title">about</h2>
        </div>
        <div className="about-copy">
          <p>
            兵庫県に住む、18歳・高校3年生。
            <br />
            カメラ、Webアプリ開発、野鳥観察が好きです。
          </p>
          <p>
            アイデアはあるけれど、それを形にする技術はまだ勉強中。
            <br />
            AIと一緒に、頭の中の「つくりたい」を実験しています。
          </p>
        </div>
      </section>

      <section className="works" aria-labelledby="works-title">
        <div className="section-label">
          <span>02</span>
          <h2 id="works-title">works</h2>
        </div>
        <a
          className="work-card"
          href="https://tangodots.yato-lab.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Tango Dots を開く"
        >
          <div className="work-number">01</div>
          <div className="work-body">
            <p className="work-kind">WEB APP</p>
            <h3>Tango Dots <Arrow /></h3>
            <p className="work-description">
              言葉と点をつなげながら、気軽に楽しめる小さなWebアプリ。
            </p>
          </div>
        </a>
      </section>

      <footer>
        <p>© 2026 yato</p>
        <p>made with curiosity + AI</p>
      </footer>
    </main>
  );
}
