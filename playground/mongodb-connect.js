// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected successfully to MongoDB');

  /*  db.collection('Todos').insertOne({
      text:'This the first todo notes text',
      completed:false
    },(error,result)=>{
      if(error){
        console.log("Error inserting todo ",error);
      }else {
        console.log("successfully inserted: ",result);
      }
    });*/

/*  db.collection('Users').insertOne({
    name: 'Long Distance',
    age: 25,
    location: 'Mombasa'
  }, (error, result) => {
    if (error) {
      console.log("Error inserting todo ", error);
    } else {
      console.log("successfully inserted: ", result.ops[0]._id.getTimestamp());
    }
  });
*/
  db.close();

});
