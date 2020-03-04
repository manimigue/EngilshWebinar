const initialState = {
  headerLinks:[
    {
      type: 'Route',
      url : '/contact',
      text : 'Contact'
    },
    {
      type: 'Route',
      url : '/member',
      text : 'Member'
    },
    {
      type: 'Route',
      url : '/',
      text : 'Home'
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
