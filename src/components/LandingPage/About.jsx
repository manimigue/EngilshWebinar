import React, { Component } from 'react'
import Apply from '../Buttons/Apply';
import Link from '../Buttons/Link';
import { HashLink } from 'react-router-hash-link';


export default class About extends Component {
  
  render() {
    const seminars = this.props.seminars;
    const topSeminars = seminars.map((seminar) => {
      return (
      <li className="seminar">{ seminar.short }{ seminar.level }</li>
      )
    })
    return (
      <div className="about">
        <div className="aboutTop">
          <h1 className="title">Lily's英語ブートキャンプ ウェビナー</h1>
          <p>
            先が見えない今だからこそ！<br />
            自宅で英語のスキルアップを！<br />
            プロ通訳・翻訳者による<br/>英語スキルアップウェビナー！<br/>
            4月12日までは毎日１～５回ウェビナー開催。<br/>
            １ウェビナーを1,000円で受講できます（テキストもメールでもらえます）！
          </p>
          <Apply>チケットの購入はこちら</Apply>
        </div>
        <div className="aboutType">
          <h2 className="title">ジャンル</h2>
          <ul>
            {topSeminars}
            <HashLink smooth to="/#details">詳細はこちら</HashLink>
          </ul>
          
        </div>
        <div className="aboutHowto">
          <h3 className="title">★どうやって参加するの？ </h3>
          <h4 className="subTitle"><span className="hide500">～</span>Zoom使用できればＯＫです！ＰＣでもスマホでも受講可能<span className="hide500">～</span></h4>
          <br/>
          <ol>
            <li>Zoomに<Link type="a" url='https://zoom.us/'>サインアップ（登録）</Link>してください。</li>
            <li>メールアドレスでウェビナーのカレンダーを共有します（Googleスプレッドシート）。</li>
            <li>ウェビナーのカレンダーから受けたいセミナーに申し込みます。（ウェビナー開始2時間前までに申し込みが可能）。</li>
            <li>ウェビナー開始2時間前までにチケットを購入します（お支払い方法は、銀行振込み、クレジットカード、PayPal）</li>
            <li>ウェビナーお申込みが確認とれましたらZoomに入るURLをお知らせします。開始１時間前にメールでテキストを送りますので、メモをとりながら受講できます。</li>
          </ol>
        </div>
        <div className="aboutTicket">
          <h3 className="title">★登録料０円</h3>
          <p>チケットをご購入いただきご参加いただけます。 </p>
          <p>１チケット＝1,500円 <br />
          ５チケット＝6,500円（１レッスンあたり<strong>1,300円</strong>） <br />
          １０チケット＝10,000円（１レッスンあたり<strong>1,000円</strong>）</p>
        </div>
        <Apply>チケットの購入はこちら</Apply>
      </div>
    )
  }
}
