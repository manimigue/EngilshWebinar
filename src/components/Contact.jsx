import React,{ Component } from 'react';

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){
    const mail = "manimigue0701@gmail.com";
    return (
      <div className="contact-form">
        <h2 className="title">Contact</h2>
        <form method="POST" action={"https://formspree.io/" + mail} >
            <p>お名前</p>
            <input type='text' name='お名前' placeholder="佐藤　太郎" />
            <p>メールアドレス</p>
            <input type="email" name="返信先" placeholder="you@example.com"/>
            <p>電話番号</p>
            <input type="tel" name="電話番号" placeholder="0123456789" />
            <p>お問い合わせ内容</p>
            <textarea name='お問い合わせ内容'></textarea>
            <input className='submit' type="submit" value='Send'/>
        </form>
      </div>
    )
  }
}

export default Contact