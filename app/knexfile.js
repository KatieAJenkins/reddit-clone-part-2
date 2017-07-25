module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'reddit-clone',
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'reddit-clone-test',
    }
  // },
  //
  // test: {
  //   client: 'pg',
  //     database: process.env.DATABASE_URL,
  // }

};
