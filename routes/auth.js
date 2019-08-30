//jwt is a library to convert token to trusted string

const jwt = require("express-jwt");

const getTokenFromHeaders = req => {
  const {
    headers: { authorization }
  } = req;

  if (authorization && authorization.split(" ")[0] === "Token") {
    return authorization.split(" ")[1];
  }
  return null;
};

// get the payload of jwt

const auth = {
  required: jwt({
    secret: "secret",
    userProperty: "payload",
    getToken: getTokenFromHeaders
  }),
  optional: jwt({
    secret: "secret",
    userProperty: "payload",
    getToken: getTokenFromHeaders,
    credentialsRequired: false
  })
};

module.exports = auth;
