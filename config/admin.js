module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5c18eb8d621357cd6c0a5b77a9f5dbd2'),
  },
});
