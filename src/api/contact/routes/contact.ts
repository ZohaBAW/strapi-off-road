
'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/contact',
      handler: 'contact.submit',
      config: {
        auth: false,      // set true if you want auth
        policies: [],
        middlewares: [],
      },
    },
  ],
};


