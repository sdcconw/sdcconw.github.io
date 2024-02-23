import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import HomeCarousel from "./components/HomeCarousel"

function App() {
  return (
    <>
      <NavBar />
      <HomeCarousel />
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <section>
              <h2>Information</h2>
              <p>本会の<a href="/docs/sdcconw2106-1.pdf">オープンネットワーク利用規約</a>を改定いたしました。</p>
              <p>東京都板橋区に新たにIXPを開設致しました。（2021年4月16日）</p>
              <p>本会の<a href="/docs/sdcc2011-1.pdf">会則</a>並びに<a href="/docs/sdcconw2011-2.pdf">オープンネットワーク利用規約</a>を改訂いたしました。［会則、利用規約について、一部誤解を招く表現があったため、修正いたしました。］（2020年10月25日追記）</p>
              <p>当会が運営するオープンネットワークにつきまして、新たに埼玉拠点を開設いたしました。（2020年9月17日）</p>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <section>
              <h2>About Us</h2>
              <p>
                島根県内を中心に、データセンター関連技術に興味を持つ人たちの集まりです。<br />
                島根県にご在住の方に限らず、サーバーやネットワーク、電源設備、建築技術など、データセンターに関わる技術に興味、関心のある方のご参加をお待ちしております。
              </p>
              <p>
                また、不定期に勉強会を実施し、会員間の技術の共有なども実施しております。ご興味のある方、お気軽にお問い合わせください。
              </p>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <section>
              <h2>Service</h2>
              <ul>
                <li>サーバ、ネットワーク機器貸出</li>
                <li>サーバー、ネットワーク保守部材共有</li>
                <li>インターネット接続性提供サービス</li>
                <li>独自閉域網</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
