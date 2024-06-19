import { exec } from "child_process";
import "dotenv/config";
import moment from "moment";

const backupCommand = `mongodump --uri=${
  process.env.DB_CONNECTION
} --out="/var/backups/mongo-backups/${moment().format(
  "YYYY-MM-DD"
)}-projectName"`;

const dbBackup = () => {
  try {
    exec(backupCommand, (error) => {
      if (error) {
        console.error("Backup failed:", error);
        return;
      }
      console.log("Backup completed successfully");
    });
  } catch (error) {
    console.log(error);
  }
};

export default dbBackup;
