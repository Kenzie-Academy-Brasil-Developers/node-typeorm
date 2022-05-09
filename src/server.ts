import app from "./app";
import { AppDataSource } from "./data-source";

(async () => {
  await AppDataSource.initialize();

  app.listen(process.env.PORT || 3000, () =>
    console.log("App running on http://localhost:3000")
  );
})();
