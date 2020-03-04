import React, { Component } from 'react';
import List from '../List'
import Lily from '../..//img/about-rily@240w.jpg'

export default class Introduction extends Component {
    render() {
        const links = [
            {
                text : <React.Fragment>フィギュアスケート エフゲニー・プルシェンコ選手記者会見<br />（羽生結弦選手凱旋公演 Together on Ice）</React.Fragment>
            },
            {
                text : "キャロライン・ケネディ元駐日アメリカ大使・仙台市長の表敬訪問"
            },
            {
                text : "2016年G7 財務大臣・中央銀行総裁会議にて衆議院議長大島理森氏付きで通訳を担当"
            },
            {
                text : "ブロックチェーンカンファレンス"
            },
            {
                text : "NECパーソナルコンピュータ株式会社"
            },
            {
                text : "Lenovo Japan株式会社"
            },
            {
                text : "早稲田大学"
            },
            {
                text : "山形大学"
            },
            {
                text : "NHK文化センター　仙台教室・名古屋教室"
            }
        ]
        const careers = links.map(link => {
            return (
              <List text={link.text} />
            );
          });
        return (
            <div className="introduction">
                <h2 className="title">講師紹介</h2>
                <div className="introductionTop">
                    <div className="portrait">
                        <img 
                            src={Lily}
                            alt="莉々 紀子【肖像】"
                        />
                    </div>
                    <div className="introductionContent">
                        <h4 className="yomigana">りり のりこ</h4>
                        <h3 className="namae">莉々 紀子</h3>
                        <p className="position">Lily’s TranSupport（リリーズ・トランサポート）代表</p>
                        <p className="job">同時通訳者・会議通訳者</p>
                        <div className="content">
                            <p>主にIT・Fintech・人工知能など、技術系の通訳を得意とする</p>
                            <p>全国規模で通訳業務を行うほか、企業での英語トレーニング研修も積極的にこなしつつ、海外生活の経験なしにプロ通訳者になれるだけの英語力を身につけたトレーニング法を提供している。</p>
                        </div>
                    </div>
                </div>
                <div className="careerWrapper">
                    <h4>主な実績</h4>
                    <div className="career">
                        <ul>{careers}</ul>
                    </div>
                </div>
            </div>
        )
    }
}
