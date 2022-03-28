module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '96bb8d0275973973dbad2b40a4a58ac9'),
  },
});
