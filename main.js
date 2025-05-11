require("dotenv").config();
const { app } = require("./app");
const port = process.env.PORT;

const startApp = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running at ${port}`);
    });
  } catch (error) {
    console.log(" Error while starting server", error);
  }
};

startApp();
