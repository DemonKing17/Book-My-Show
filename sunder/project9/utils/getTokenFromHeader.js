const getToken = (req) => {
  const headerObj = req.headers;
  const authorizationHeader =
    headerObj["authorization"] || headerObj["Authorization"];

  if (!authorizationHeader) {
    // Handle the case where the Authorization header is missing
    return null;
  }

  const tokenParts = authorizationHeader.split(" ");
  if (tokenParts.length !== 2 || tokenParts[0].toLowerCase() !== "bearer") {
    // Handle the case where the Authorization header is not in the expected format
    return null;
  }

  return tokenParts[1]; // Return the extracted token
};

module.exports = getToken;
