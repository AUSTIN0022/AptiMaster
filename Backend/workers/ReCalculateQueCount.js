// In your server initialization file or a dedicated scheduler file
import cron from 'node-cron';
import { Leaderboard, Topics } from '../Database/schema.js';


// Run every day at midnight
cron.schedule('32 23 * * *', async () => {
  console.log('Running scheduled task: recalculateAllCounts');
  try {
    await Topics.recalculateAllCounts();
    console.log('Scheduled recalculation completed successfully');

    await Leaderboard.recalculateAllRanks();
    console.log('Scheduled Update Ranks completed successfully');    
  } catch (error) {
    console.error('Error during scheduled recalculation:', error);
  }
});