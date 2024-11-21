Mongodb:
BSON
NOSQL
For web and mobile applications
Able to handle unstructured data
Document oriented database

{
_id: ObjectId(“CDSGGVDX”)	---------->				Fields
Name: “Sudha”                                                                            Document
Age : 18
}               
The above set of fields combine to form as single document
Set of documents combine to be a Collections
All of the collections combined will give us a Database

Summary:
Field : specific piece of data that has value
Document : set of key value pair represent single record
Collection : Group of related documents that share common structure stored in same database
Database : Conatiner for collection of JSON like documents


Provide connection string for mongodb
Connect to mongo shell : mongosh
>>>show dbs     
(list all databases)


>>>> db.getName()
(current database)

>>>> const data = { “Name” : “xyz”,  age: 18}
(stores this as document)
>>> data
(displays the document)

Test >>> db.movies.insertOne({“Name”: “xyz”,  age: 18})
(Creates a collection with collection name movie inside test database and adds document to collection )

>>>> Show collections
(list all collections)

>>>const data1 = { “Name” :“abc”,  age: 18}
>>>> db.movies.insertMany ( [ {“Name”: “xyz”,  age: 18},  {“Name”: “xyz1”,  age: 19}, data,data1 ]  )
(insert many documents into collection)

>>>> db.movies.find()
(display the all documents of collection movies)

>>>> db.movies.find ({“Name”: “xyz”})
   Display that document in collection

>>>> db.movies.find ({“Name”: “xyz”,  age: 18})
   Display that document in collection

>>>> db.movies.find ({“Name”: “xyz” }, {“Name” : 1})
   Display that document in collection with only name field-value
>>>> db.movies.find ({“Name”: “xyz” }, {“Name” : 0})
   Display that document in collection without name field

>>>> db.movies.find ({ }, {“Name” : 1})
   Display all documents in collection with only name field-value

>>>db.movies.find().limit(2)
gives the first 2 documents

>>>db.movies.find().count()
gives the count of all the documents in collection

>>>>db.movies.find({},{"Name":1}).sort({"Name":1})
gives all the documents only with name field ordered in ascending order

>>>>db.movies.find({},{"Name":1}).sort({"Name":-1})
gives all the documents only with name field ordered in descending order

>>>>db.movies.find({},{"Name":1}).sort({"Name":1}).skip(1)
gives all the documents with the first one skipped
only with name field ordered in ascending order

>>>>db.movies.find({age:{$lt: 20} })
//gives all the document whose age less than 20

>>>db.movies.updateOne({“Name”: “xyz”},{$set:{"Name":"Sudha"}})
set the name in that particulat document

>>>db.movies.updateOne({“Name”: "Sudha"},{$set:{age:20}})
set the age in that particulat document

Inorder to update many documents with the same field
>>>db.movies.updateMany({age: 19},{$set:{age:20}})
set all the documents with age 19 to age 20

In order to delete the document
>>>db.movies.deleteOne({“Name”: "Sudha"})
deletes that particular document

>>>db.movies.deleteMany({age:20})
deletes all the documents with age 20

Insert some documents into our collection movies
>>>const data2 = { “Name” :“abc”,  age: 18}
>>>const data3 = { “Name” :“abcd”,  age: 28}
>>>const data4 = { “Name” :“abcde”,  age: 19}
>>>const data5 = { “Name” :“abcdef”,  age: 20}
>>>const data6 = { “Name” :“abcdefg”,  age: 17}
>>>>db.movies.insertMany([data2,data3,data4,data5,data6])

Store all the data present in collection in a variable using find method
>>> const results = db.movies.find().toArray()
converts all the above data into an array

Inorder to display data as a table
>>>> console.table(results)

