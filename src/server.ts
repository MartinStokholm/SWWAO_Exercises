import app from "./app";
const { PORT } = process.env;
console.log("Server running on port: " + PORT);
app.listen(PORT);
