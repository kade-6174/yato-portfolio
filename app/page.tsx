"use client";

import { useEffect, useState } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <main>
      <header>
        <a className="wordmark" href="#top">yato<span>.</span></a>
        <button
          className="theme-toggle"
          type="button"
          aria-label={darkMode ? "ライトモードに切り替え" : "ダークモードに切り替え"}
          aria-pressed={darkMode}
          onClick={() => setDarkMode((value) => !value)}
        >
          <span className="theme-icon" aria-hidden="true">{darkMode ? "☀" : "◐"}</span>
          <span>{darkMode ? "LIGHT" : "DARK"}</span>
        </button>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">PORTFOLIO / 2026</p>
        <div className="hero-content">
          <p className="name">yato <span>（やと）</span></p>
          <p className="intro">兵庫県在住の高校3年生。<br />Webアプリを作っています。</p>
          <div className="tags" aria-label="興味のあること">
            <span>CAMERA</span><span>WEB APPS</span><span>BIRD WATCHING</span>
          </div>
        </div>
        <a className="x-link" href="https://x.com/yato_dev_" target="_blank" rel="noreferrer">X / @yato_dev_ <Arrow /></a>
      </section>

      <section className="about" aria-labelledby="about-title">
        <div className="section-label"><span>01</span><h2 id="about-title">about</h2></div>
        <div className="about-copy">
          <p>カメラ、Webアプリ開発、野鳥観察が好きです。</p>
          <p>思いついたアイデアを、AIを使いながら少しずつWebサイトやアプリにしています。まだ勉強中ですが、作りたいものを増やしていきたいです。</p>
        </div>
      </section>

      <section className="works" aria-labelledby="works-title">
        <div className="section-label"><span>02</span><h2 id="works-title">works</h2></div>
        <a className="work-card" href="https://tangodots.yato-lab.com/" target="_blank" rel="noreferrer" aria-label="Tango Dots を開く">
          <div className="work-number">01</div>
          <div className="work-body">
            <p className="work-kind">WEB APP</p>
            <h3>Tango Dots <Arrow /></h3>
            <p className="work-description">単語と点をつなげながら楽しめる、シンプルなWebアプリです。</p>
          </div>
          <span className="open-label">OPEN <Arrow /></span>
        </a>
      </section>

      <footer><p>© 2026 yato</p><p>built with AI</p></footer>
    </main>
  );
}
