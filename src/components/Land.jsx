import React, { Component } from 'react';
import About from './LandingPage/About'
import Introduction from './LandingPage/Introduction'
import Details from './Details';
import Tickets from './Tickets';

export default class Land extends Component {

  render() {
    const seminars = [
      {
        title : "①目指せ通訳者・翻訳者、プロになるための始めの一歩",
        short : "①目指せ通訳者・翻訳者、プロになるための始めの一歩",
        level : "【中上級者向け】",
        text : <React.Fragment><p><b>通訳トレーニング</b>：TEDトーク、スピーチなどの教材を使って英日・日英の訳出演習をします。訳出方法は何通りもありますが、通訳者として心得ておくべきポイントを解説します。質問・フィードバックも対応。マイクをミュートにして聴講のみも可なので、レベルを問わず受講できます。<br/>聞き取り→分析（解釈）→メモ取り→訳出のプロセスを練習します。メモ取りには色々な方法がありますが、Lilyのメモをサンプルとして公開します。ウェビナー開始１時間前までに教材をメールで送ります。<br/></p><p><b>翻訳トレーニング</b>：主にビジネス翻訳（産業翻訳）を学びます。毎回課題とする教材をウェビナー開始１時間前までにメールで送ります（予習の必要はありません）。ウェビナー終了後に模範解答を送ります。</p></React.Fragment>
      },
      {
        title : "②しっかりきっちりビジネス英語（英語での交渉ハウツー、電話会議、プレゼンのコツ）",
        short : "②しっかりきっちりビジネス英語",
        level : "【中級者向け】",
        text : <p>ビジネスで使われるBATNA、Highball／Lowballといった交渉戦略を英語で学ぶ、英語プレゼンのストラクチャーを学ぶ、英語での電話会議のコツなど、毎回テーマを決めてレクチャーします。質問も大歓迎。<br/>ウェビナー開始１時間前までに使用する教材をメールで送ります。</p>
      },
      {
        title : "③異文化英語トーク（外国人ゲストを迎えて本音の異文化トーク『実のところ、日本のことどう思ってますか？』）",
        short : "③異文化英語トーク",
        level : "【全レベル向け】",
        text :  <p>毎回外国人ゲストを迎えて異文化トークをします。国の文化紹介はもちろん、ウェビナーだからこそ聞くことができるギリギリトークまで（？）。<br/>第１弾のテーマ国はイランを予定しています。<br/>このウェビナーは配布教材がありません。</p>
      },
      {
        title : "④バイリンガルニュース＆ディスカッション",
        short : "④バイリンガルニュース＆ディスカッション",
        level : "【中級者向け】",
        text : <p>事前にLilyがYouTubeにアップしたバイリンガルニュースを基に解説とディスカッションをします。ウェビナー開始までに動画を観ておいてください。<br/>配布教材は有りと無しの場合があります。</p>
      }
    ];
    return (
      <React.Fragment>
        <About seminars={seminars}/>
        <Introduction />
        <Details seminars={seminars}/>
        <Tickets />
      </React.Fragment>
    )
  }
}
