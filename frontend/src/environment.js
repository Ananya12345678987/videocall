let IS_PROD = true;

const server = IS_PROD
  ? "https://video-call-d0ej.onrender.com"
  : "http://localhost:8000";

export default server;