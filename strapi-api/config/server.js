module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 8085),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "52f16c3e5e83ab41c0458863bc8482e6"),
    },
  },
});
