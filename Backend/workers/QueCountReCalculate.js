// In your server initialization file or a dedicated scheduler file
import cron from 'node-cron';
import { Topics } from '../Database/schema.js';


// Run every day at midnight
cron.schedule('22 0 * * *', async () => {
  console.log('Running scheduled task: recalculateAllCounts');
  try {
    await Topics.recalculateAllCounts();
    console.log('Scheduled recalculation completed successfully');
  } catch (error) {
    console.error('Error during scheduled recalculation:', error);
  }
});