// const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }

  db.collection('Users').find({
    name: 'Korean Chinqu'
  }).toArray().then((result) => {
    console.log(result);
  }, (error) => {
    console.log('Error fettching data: ', error);
  });

  console.log('Connected successfully to MongoDB');
  //fetch all the documents from Todos collection
  ///'then' call returns a promise
  // db.collection('Todos').find().toArray().then((docs)=>{
  db.collection('Todos').find({
    completed: true
  }).toArray().then((docs) => {

    console.log('Fetched Todos');
    //undefined for filter func and 2 for sopacing
    console.log(JSON.stringify(docs, undefined, 4));
  }, (error) => {
    console.log('Failed to fetch docs: ', error);
  });

  // db.close();

});
