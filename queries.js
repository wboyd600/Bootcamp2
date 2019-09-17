/* Add all the required libraries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listings = require('./ListingSchema.js'), 
    config = require('./config');
/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri,{ useNewUrlParser: true });
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listings.findOne({'code':'LBW'},function(err,listing){
    if(err) throw err;

    console.log("Finding Library West",listing);    
  });

};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listings.findOneAndRemove({'code': 'CABL'},function(err,listing){
    if(err) throw err;

    console.log("Removing Cable",listing);    
  });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listings.findOneAndUpdate({'code': 'PHL'},{ $set: { 'address' : '1275 Center Drive, Gainesville, FL 32611' }},function(err,listing){
    if(err) throw err;

    console.log("Updating Phelps Memorial Hospital Center",listing);    
  });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listings.find(function(err,listingData){
    console.log("All listings \n", listingData);
  });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();