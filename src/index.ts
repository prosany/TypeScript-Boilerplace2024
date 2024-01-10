import { server } from '@/utils/createServer';
import '@/app';
import config from '@/configs';

const serverInstance = server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully');
  serverInstance.close(() => {
    console.log('Process terminated');
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Shutting down gracefully');
  serverInstance.close(() => {
    console.log('Process terminated');
  });
});
