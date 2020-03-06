import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import ReactGA from 'react-ga';

export default class Tickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketTypeNum : 1,
      on : "on"
    };
  }

  // addTicket = () => {
  //   if (this.state.ticketTypeNum < 3){
  //     this.setState({
  //       ticketTypeNum : this.state.ticketTypeNum + 1
  //     })
  //   }
  // }

  // reduceTicket = () => {
  //   if (this.state.ticketTypeNum > 1){
  //     this.setState({
  //       ticketTypeNum : this.state.ticketTypeNum - 1
  //     })
  //   }
  // }

  onWhich = (on,component) => {
    switch (on) {
      case "on":
        return component;
      case "commingSoon":
        return <h5 style={{marginBottom:"30px"}}>Comming soon</h5>;
      case "end":
        return <h5 style={{marginBottom:"30px"}}>販売終了しました。</h5>;
      default:
        return ;
    }
  }

  gaSubmit = (action) => {
    ReactGA.event({
      category: 'User',
      action: action
    });
  }

  render() {
    const mail = "info@lilys-transupport.jp";

    const ticketTypeNum = this.state.ticketTypeNum;
    const ticketTypes = [
      {
        name : "１チケット",
        price : "1500円"
      },
      {
        name : "５チケット",
        price : "6500円"
      },
      {
        name : "１０チケット",
        price : "10000円"
      }
    ];
    const purchaseTypes = [
      "銀行振込み",
      "クレジットカード",
      "PayPal"
    ];
    const ticketSelect = (type) => (
      <div className={"ticket-type type" + type.toString()}>
        <p>券種</p>
        <Form.Control name={'券種' + type.toString()} as="select" disabled={type > ticketTypeNum}>
          {
            ticketTypes.map((t) => (<option key={t.name} value={t.name}>{t.name}[{t.price}]</option>))
          }
        </Form.Control>
      </div>
    )

    const purchaseSelect = (
      <div className="purchase-type">
        <p>チケット購入方法</p>
        <Form.Control name="購入方法" as="select">
          {
            purchaseTypes.map((p) => (<option key={p} value={p}>{p}</option>))
          }
        </Form.Control>
      </div>
    )

    // for multiple ticket types
    // <h5>券種{type}</h5>
    // <Fade collapse when={2 <= ticketTypeNum}>{ ticketSelect(2) }</Fade>
    // <Fade collapse when={3 <= ticketTypeNum}>{ ticketSelect(3) }</Fade>
    // {this.state.ticketTypeNum < 3 ? <Button onClick={this.addTicket} className='add-ticketTypes'> + </Button> : null}
    // {this.state.ticketTypeNum > 1 ? <Button onClick={this.reduceTicket} className='reduce-ticketTypes'> - </Button> : null}

    const ticketForm = () => (
      <React.Fragment>
        <p>下記のフォームに入力していただき、送信してください。</p>
        <form method="POST" action={"https://formspree.io/" + mail} >
          { ticketSelect(1) }
          <p>お名前</p>
          <input type='text' name='名' placeholder="佐藤　太郎" />
          <p>ニックネーム</p>
          <input type='text' name='ニックネーム' placeholder="Taro" />
          <p>メールアドレス</p>
          <input type="email" name="返信先メールアドレス" placeholder="you@example.com"/>
          <p>電話番号</p>
          <input type="tel" name="返信先電話番号" placeholder="09012345678"/>
          { purchaseSelect }
          <p>その他お問い合わせ</p>
          <textarea name='お問い合わせ内容'></textarea>
          <input className='submit' type="submit" value='Send' onClick={() => this.gaSubmit('Tickets reservation')}/>
        </form>
      </React.Fragment>
    )

    return (
      <div className='tickets' id="tickets">
        <h2 className="title">Tickets</h2>
        <div className='tickets-buy' >
          <h4>チケット予約</h4>
          <div className='tickets-form'>
            {this.onWhich(this.state.on,ticketForm())}
          </div>
        </div>
      </div>
    );
  }
}