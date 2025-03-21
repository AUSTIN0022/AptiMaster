// In your server initialization file or a dedicated scheduler file
import cron from 'node-cron';
import { Leaderboard } from '../Database/schema.js';


// Run every day at midnight
cron.schedule('* * * * *', async () => {
    console.log('\nRunning scheduled task: recalculateAllRanks');
  try {
    await Leaderboard.recalculateAllRanks();
    console.log('Scheduled Update Ranks completed successfully');    
  } catch (error) {
    console.error('Error during scheduled recalculation:', error);
  }
});