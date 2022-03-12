
module.exports = ({ env }) => ({
  'transformer': {
    enabled: true,
    config: {
      prefix: '/api/'
    }
  },
  'strapi-plugin-moesif': {
    enabled: true,
    config: {
      moesif: {
        enabled: true,
        debug: false,
        applicationId: env('MOESIF_APPLICATION_ID', 'eyJhcHAiOiIxMDkxOjEyNyIsInZlciI6IjIuMCIsIm9yZyI6IjI2Mjo2ODkiLCJpYXQiOjE2NDYwOTI4MDB9.iBbxqLD_P5SqPDbANyCtEV5kNgqu3WvER36jdJGj-8U'),
        identifyUser: function (req, res) {
          if (req.state && req.state.user) {
            return String(req.state.user.id);
          }
          return undefined;
        },
        skip: function (req, res) {
            // don't log non JSON types
            return res.headers && !res.headers['Content-Type'].includes('application');
        },
        disableBatching: false,
        logBody: true,
        debug: false
      }
    },
  },
  // ...
});
