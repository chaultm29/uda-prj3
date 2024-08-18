import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,

  'dialect': config.dialect,
  'storage': ':memory:',
});
// console.log('cpm', config);
// const addSampleData = async () => {
//   await sequelize.query('SELECT * FROM "User"');
//     // await sequelize.query('DELETE FROM "FeedItem" WHERE id=3');
//     // await sequelize.query('INSERT INTO "FeedItem" (id, caption, url) VALUES (1,\'This post is used for creating list\', \'img3.png\')');
//     console.log('Sample data added!');
// }; 

// addSampleData().catch(console.error);