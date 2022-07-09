// const dev = process.env.NODE_ENV !== "production";
const dev = process.env.NODE_ENV === "development";
// console.log("environment: ", dev);

const apiServer = dev ? "http://localhost:4000/v1" : "https://api.stellaebamconsulting.com/v1";

export default apiServer;