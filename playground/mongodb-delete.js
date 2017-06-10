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
/*//deletes the first true document and ignores the rest
db.collection('Todos').deleteOne({text:'Home visit'}).then((result)=>{
  console.log(result);
},(error)=>{
  console.log(error);
})
//finds and deletes all the matching documents
db.collection('Todos').deleteMany({text:'Hospital visit'}).then((success)=>{
  console.log('Successfully deleted!', success);
},(error)=>{
  console.log(error);
});*/

//findOneandDelete
db.collection('Todos').findOneAndDelete({completed:true}).then((result)=>{
  console.log(result);
},(error)=>{
  console.log(error);
})

  // db.close();

});
