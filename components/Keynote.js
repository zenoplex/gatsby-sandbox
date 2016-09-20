// @flow
import React from 'react';
import KeynoteProfile from './KeynoteProfile';

const Keynote = () =>
  <section id="keynote" className="top-section top-keynote --keynote">
    <p className="top-keynote__messages --former">
      <img src="//feedtech.net/images/img_keynote-01.png" alt="イベントの幕開けを告げる注目セッション！" />
    </p>
    <p className="top-keynote__messages --latter">
      <img src="//feedtech.net/images/img_keynote-02.png" alt="これを聴かなきゃ、始まらない。" />
    </p>
    <div className="container">
      <header className="top-section__header top-keynote__header">
        <h3 className="top-keynote__heading">KEYNOTE SESSIONS</h3>
        <div className="top-section__content">
          <div className="grid-2_sm-1">
            <div className="col">
              <KeynoteProfile
                avatar="//feedtech.net/images/thumb_keynote_fb.jpg"
                logo="//feedtech.net/images/logo_keynote_fb.png"
                company="Facebook"
                title="Partner Manager"
                name="大谷 直史"
                description="デジタル広告専業のスタートアップ企業にてセールス担当として広告業界でのキャリアをスタート。その後、国内ハウスエージェンシーでデジタルメディアプランナーとして主に大手通信企業のデジタル広告戦略の立案、運用業務を担当。2012年よりPublicisグループのクリエイティブエージェンシーにてデジタルプランナーとして大手自動車クライアントのブランディング活動に携わる。Facebookの広告プロダクトに魅了され2015年末より現職。パートナー代理店、広告主と共にFacebook広告の市場への更なる浸透、パフォーマンス向上を目指し、提案、サポートを行う。"
              />
            </div>
            <div className="col">
              <KeynoteProfile
                avatar="//feedtech.net/images/thumb_keynote_next.jpg"
                logo="//feedtech.net/images/logo_keynote_next.png"
                company="株式会社ネクスト"
                title="HOME'S 事業本部マーケティング戦略部"
                name="多田隈 文"
                description="2013年11月、株式会社ネクスト中途入社。不動産情報サイトHOME'Sのサイトディレクション、集客領域のLP開発やSEO等々幅広い様々な領域を担当したのち、2015年4月よりダイレクトレスポンス領域の責任者として集客最大化と効率改善に従事。現在は、TVCMやOOHをメインとする部署に異動し、デジタルをブランディング領域で活用するための手法を模索中。"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  </section>;

export default Keynote;
