## Social Network API (NoSQL)

## User Story

AS A social media startup  
I WANT an API for my social network that uses a NoSQL database  
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria

GIVEN a social network API  
WHEN I enter the command to invoke the application  
THEN my server is started and the Mongoose models are synced to the MongoDB database  
WHEN I open API GET routes in Insomnia for users and thoughts  
THEN the data for each of these routes is displayed in a formatted JSON  
WHEN I test API POST, PUT, and DELETE routes in Insomnia  
THEN I am able to successfully create, update, and delete users and thoughts in my database  
WHEN I test API POST and DELETE routes in Insomnia  
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Installation

Use "git clone" to clone this code to your local machine  
Type "npm i" to install the required packages to run this app  
Type "node index.js" in the terminal to run the application  
Use Insomnia to see the output. Details are in the Demo video

## Resources

Repo Link: https://github.com/hovigmk/Social_Network_API_NoSQL  
Walkthrough video: [Demo](./assets/Demo.webm)
