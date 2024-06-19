import cron from "node-cron";
import dbBackup from "../config/dbBackup";

cron.schedule("0 0 */3 * *", async () => {
  console.log("The cron job will run every three days at midnight.");
  dbBackup();
});
