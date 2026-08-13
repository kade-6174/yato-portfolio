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
        <a className="wordmark" href="#top" aria-label="ページの先頭へ">yato<span>.</span></a>
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
        <div className="hero-orbit" aria-hidden="true"><i /></div>
        <p className="eyebrow">YATO&apos;S LAB <b>•</b> HYOGO, JAPAN</p>
        <div className="hero-content">
          <p className="hero-index">01 / INTRODUCTION</p>
          <h1 id="site-title">アイデアを、<br /><em>動かしてみる。</em></h1>
          <p className="intro">思いついたことを、AIと一緒に少しずつ形にしています。</p>
        </div>
        <div className="hero-foot">
          <p>STUDENT / CREATOR<br />2008 —</p>
          <a className="x-link" href="https://x.com/yato_dev_" target="_blank" rel="noreferrer">
            X / @yato_dev_ <Arrow />
          </a>
        </div>
      </section>

      <section className="about" aria-labelledby="about-title">
        <div className="section-label"><span>02</span><h2 id="about-title">about me</h2></div>
        <div className="about-grid">
          <div className="about-copy">
            <p>兵庫県に住む、18歳・高校3年生。<br />カメラ、Webアプリ開発、野鳥観察が好きです。</p>
            <p>アイデアはあるけれど、それを形にする技術はまだ勉強中。AIと一緒に、頭の中の「つくりたい」を実験しています。</p>
          </div>
          <aside className="profile-note" aria-label="プロフィール概要">
            <p className="note-title">CURRENTLY EXPLORING</p>
            <ul><li>Web apps</li><li>Photography</li><li>Bird watching</li></ul>
            <p className="note-mark">Y / 18</p>
          </aside>
        </div>
      </section>

      <section className="works" aria-labelledby="works-title">
        <div className="section-label"><span>03</span><h2 id="works-title">selected works</h2></div>
        <a className="work-card" href="https://tangodots.yato-lab.com/" target="_blank" rel="noreferrer" aria-label="Tango Dots を開く">
          <div className="work-number">01</div>
          <div className="work-body">
            <p className="work-kind">WEB APP <span>2026</span></p>
            <h3>Tango Dots <Arrow /></h3>
            <p className="work-description">言葉と点をつなげながら、気軽に楽しめる小さなWebアプリ。</p>
          </div>
          <div className="dot-field" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        </a>
      </section>

      <footer><p>© 2026 yato</p><p>made with curiosity + AI</p></footer>
    </main>
  );
}
