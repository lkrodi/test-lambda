// src/app.js

exports.handler = async (event) => {
  // Simple handler for demonstration
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Lambda!' }),
  };
};
