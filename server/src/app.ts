import logger from './utils/logger';
import createServer from './utils/server';

const PORT = process.env.PORT || 3001;

const app = createServer();

app.listen(PORT, () => {
  logger.info(`App is running on port ${PORT}`);
});
