import server from './app';
import {conn} from './db';

conn.sync({ force: true }).then(() => {
    server.listen(3001, () => {
      console.log('% listening at 3001'); // eslint-disable-line no-console
    });
  });