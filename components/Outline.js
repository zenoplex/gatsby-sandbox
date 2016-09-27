// @flow
import React from 'react';

const Outline = () =>
  <section id="outline" className="top-section top-outline">
    <div className="top-outline__overview">
      <div className="container">
        <header className="c-header top-section__header">
          <span className="c-header__subtitle --color-pink">OUTLINE</span>
          <h3 className="c-header__heading top-outline__heading">
            分散型メディア時代の、
            <br className="is-pc-hide" />
            最新トレンドを学ぶ。
          </h3>
        </header>
        <div className="top-section__content top-outline__content">
          <p>
            FeedTechは、データフィードに関わる可能性のあるすべての方を対象にした、
            <br className="is-sp-hide" />
            日本最大級のデータフィード専門イベントです。
          </p>
          <p>
            2015年のデータフィード元年以降、広告領域ではより実践的なフェーズに入ってきており、
            <br className="is-sp-hide" />
            活用領域の拡大と共に関連するプレイヤーも続々と増加してきています。
            <br />
            そこで、FeedTech2016では「Datafeed Everywhere! 」をテーマに掲げ、
            <br className="is-sp-hide" />
            ダイナミック広告はもちろん、分散型メディア時代を見据えたコンテンツ配信、
            <br className="is-sp-hide" />
            各種レコメンド、DMPなど幅広いテーマを対象に、徹底的に語りつくします！
          </p>
          <p>
            プラットフォーマーはデータフィードをどのように位置づけ、今後どのようにしていくつもりなのか、
            <br className="is-sp-hide" />
            広告主にはどのような課題があり、どう乗り越えているのか、メディア運営者はこの分散型メディア時代をどう捉えていくべきなのか、
            <br className="is-sp-hide" />
            業界を牽引する企業によるセッションと展示でお届けしていきます。
          </p>
        </div>
      </div>
    </div>
    <div className="top-outline__details">
      <div className="top-outline__inner">
        <div className="container">
          <div className="top-outline__info">
            <div className="grid-2_sm-1-equalHeight-noGutter">
              <div className="col-7_sm-12">
                <div>
                  <h4 className="top-outline__title">
                    <span>開催概要</span>
                  </h4>
                  <div className="top-outline__data">
                    <dl className="top-outline__list">
                      <dt>イベント名</dt>
                      <dd>FeedTech2016</dd>
                    </dl>
                    <dl className="top-outline__list">
                      <dt>日程</dt>
                      <dd>2016年9月6日（火）</dd>
                    </dl>
                    <dl className="top-outline__list">
                      <dt>時間</dt>
                      <dd>10:30 ～ 17:30 （開場 10:00）</dd>
                    </dl>
                    <dl className="top-outline__list">
                      <dt>参加費</dt>
                      <dd>無料</dd>
                    </dl>
                    <dl className="top-outline__list">
                      <dt>会場</dt>
                      <dd>
                        御茶ノ水ソラシティカンファレンスセンター 2F
                        <br />
                        東京都千代田区 神田駿河台4-6
                        <br />
                        JR中央線・総武線 「御茶ノ水」駅 聖橋口から徒歩1分
                        <br />
                        東京メトロ千代田線「新御茶ノ水駅」 B2出口[直結]
                      </dd>
                    </dl>
                    <div className="top-outline__mapBtn">
                      <a
                        href="https://goo.gl/YJwMLk"
                        className="c-button --color-blue --bd-blue --icon"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="c-button__text">Google map で地図を見る</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.118034749228!2d139.76429221525922!3d35.69871288019019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c1bcfc39b39%3A0xf6fcc2e7b75e674c!2ssola+city+Conference+Center!5e0!3m2!1sja!2sjp!4v1465270827604"
                className="col-5_sm-12 top-outline__map"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;

export default Outline;
