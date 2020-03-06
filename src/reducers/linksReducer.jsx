const initialState = {
  headerLinks:[
    {
      type: 'Route',
      url : '/tickets',
      text : 'チケット'
    },
    {
      type: 'Route',
      url : '/contact',
      text : 'お問い合わせ'
    },
    {
      type: 'Route',
      url : '/member',
      text : 'メンバーページ'
    },
    {
      type: 'Route',
      url : '/',
      text : 'ホーム'
    }
  ]
};

function linksReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default linksReducer;
