"use client";

import { useEffect, useState } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [dotsActive, setDotsActive] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <main>
      <header>
        <nav aria-label="ページ内ナビゲーション">
          <a href="#about">ABOUT</a>
          <a href="#works">WORKS</a>
        </nav>
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

      <section className="hero" id="top" aria-labelledby="site-title">
        <p className="eyebrow">PERSONAL PORTFOLIO</p>
        <div className="hero-content">
          <h1 id="site-title">portfolio</h1>
          <button
            className={`dot-button${dotsActive ? " is-active" : ""}`}
            type="button"
            aria-label="ドットの表示を切り替え"
            aria-pressed={dotsActive}
            onClick={() => setDotsActive((value) => !value)}
          >
            <span aria-hidden="true"><i /><i /><i /><i /><i /><i /></span>
            <small>DOTS</small>
          </button>
        </div>
        <div className="hero-foot">
          <p>2008 / HYOGO, JAPAN</p>
          <a className="x-link" href="https://x.com/yato_dev_" target="_blank" rel="noreferrer">X / @yato_dev_ <Arrow /></a>
        </div>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <div className="section-label"><span>01</span><h2 id="about-title">about</h2></div>
        <div className="about-copy">
          <p>兵庫県在住の高校3年生<br />カメラ、野鳥観察、Webアプリ開発などが好きな多趣味な人です。</p>
          <p>思いついたアイデアを、AIを使いながら少しずつWebサイトやアプリにしています。まだ勉強中ですが、作りたいものを増やしていきたいです。</p>
        </div>
      </section>

      <section className="works" id="works" aria-labelledby="works-title">
        <div className="section-label"><span>02</span><h2 id="works-title">works</h2></div>
        <a className="work-card" href="https://tangodots.yato-lab.com/" target="_blank" rel="noreferrer" aria-label="Tango Dots を開く">
          <div className="work-number">01</div>
          <div className="work-body">
            <p className="work-kind">WEB APP</p>
            <h3>Tango Dots <Arrow /></h3>
            <p className="work-description">FSRSを使って、英単語の習熟度と復習タイミングを管理する単語帳Webアプリです。</p>
          </div>
          <span className="open-label">OPEN <Arrow /></span>
        </a>
      </section>

      <footer><p>© 2026 yato</p><p>built with AI</p></footer>
    </main>
  );
}
