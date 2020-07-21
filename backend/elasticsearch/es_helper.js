var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: ['http://aaquib19:123123@localhost:9200'], //'localhost:9200',
  log: 'trace',
});
module.exports = client;  

