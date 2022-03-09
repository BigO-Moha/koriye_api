module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eced79e40be9dc66111b177c28db852a'),
  },
});
