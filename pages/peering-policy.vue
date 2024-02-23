<template>
    <PageHeading title="Peering Policy" />
    <div class="container">
        <div class="row">
            <div class="col">
                <p>
                    本ポリシーは島根データセンター友の会としてのポリシーです。閉域網内での各ポリシーは別途お問い合わせください。
                </p>
                <p>
                    島根データセンター友の会は、接続するASを積極的に増やし、高品質な接続を目指しています。<br />
                    なお、本ポリシーはピアリングを保証するものではありませんので、予めご了承ください。
                </p>
                <p>
                    本団体は、技術者の育成を目的としており、下記条件を満たさない場合でも個別にピアリングを認めることがありますので、お気軽にお問い合わせください。
                </p>
                <section>
                    <h2>AS番号</h2>
                    <ul>
                        <li>
                            AS38074 [SDCC Open Network] (<a href="https://as38074.peeringdb.com">https://as38074.peeringdb.com</a>)
                        </li>
                        <li>
                            AS140868 [SDCC ONW Testbed] (<a href="https://as140868.peeringdb.com">https://as140868.peeringdb.com</a>)
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>前提条件</h2>
                    <ul>
                        <li>IRRにroute objectとas-set objectを登録していること</li>
                        <li>Peering DBへの登録などにより、連絡先情報が公開されていること</li>
                        <li>ネットワークやセキュリティの技術的問題に対して対応可能な窓口が存在し、適切な技術者が対応できること</li>
                    </ul>
                </section>
                <section>
                    <h2>ピアリングポイント</h2>
                    <p>
                        本会の非営利という特性上、パブリック・ピアリングは実施しておりません。
                    </p>
                    <p>
                        接続受け入れ拠点は以下の通りです。
                    </p>
                    <ul>
                        <li>※現在準備中です。</li>
                    </ul>
                </section>
                <section>
                    <h2>技術要件</h2>
                    <p>
                        本会の非営利という特性上、専用線、ダークファイバー等を本団体としてご用意することができません。<br />
                        なお、貴ネットワーク側で設備をご用意いただく場合はこの限りではありません。
                    </p>
                    <p>
                        下記に該当しない方式の場合は、ご相談ください。
                    </p>
                    <ul>
                        <li>SINET5の仮想専用線サービスを利用した接続（要問合）</li>
                        <li>インターネットを利用したトンネル接続（IPv4 又は IPv6）</li>
                        <li>西日本電信電話株式会社および東日本電信電話株式会社が提供するNGN網の網内折り返し通信を利用したトンネル接続（IPv6）</li>
                    </ul>
                    <p>
                        トンネル方式: GRE , IP over IP , EtherIP , L2TPv3
                    </p>
                    <p>
                        ※拠点によって受入れ可能なプロトコルが異なります。詳細はピアリングの際にご相談ください。
                    </p>
                </section>
                <section>
                    <h2>ルーティング</h2>
                    <p>※現在準備中です。</p>
                </section>
                <section>
                    <h2>トラヒック要件</h2>
                    <p>最小要件は設けておりません。</p>
                </section>
                <section>
                    <h2>その他</h2>
                    <p>※現在準備中です。</p>
                </section>
            </div>
        </div>
    </div>
</template>