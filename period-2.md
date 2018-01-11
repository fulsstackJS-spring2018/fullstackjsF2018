# Period-2  
### Node.js Express and Testing with JavaScript   

*In this period we will introduce Express, a minimal and flexible node.js package, that provides a robust set of features for web and mobile applications. We will also introduce the Mocha test framework together with a number of supplementing packages for assertions, mocking etc.*

[Learning Goals Period 2](https://docs.google.com/document/d/19_PQi8gEQeoRmTqndb6jd87iSihU8HRW0koIH8nEES8/edit)

# **13-09-Wednesday** 
* Using Express
* Express Middleware
* Server Side Rendering with Express


#### Before this lesson you should:

Before this lesson you should:
Watch watch this video (but see notes below first): [Server Side Apps with Node/Express](https://www.youtube.com/watch?v=QseHOX-5nJQ)
**Note:** things change extremely fast in the Node-world, so do the following to get a start project (instead of the instructions in the video)
* Create a new folder called express1
* Open a terminal and type:  npm init
* Enter an name (express1) when requested and app.js as entry point and use defaults for the rest
* Observe that this has created a file package.json in you folder.
* Now type npm install express --save
* Observe how this created a folder node_modules and added "something" to your package.json file
 
Now just follow the tutorial :-)


**Exercises:** [From allmost Zero to start](https://docs.google.com/document/d/12AKRDn-PGH4mkBuKgVpKxqXAw33R5x9DX-QrIHzaPAY) , [Exercises](https://docs.google.com/document/d/1-Bu_FC___DM9tS8fugsLe4EnwjPs4OSYCe6PMsCVE2Y/edit?usp=sharing)   
**Slides:** [Express intro](http://slides.mydemos.dk/express1/express1.html)

# **20-09-Wednesday**
* Express Continued
* Server Side Rendering Libraries
* REST with node/Express

#### Before this lesson you should:
[Watch this key-note speech](http://expressjs.com/)

**Exercises:**
* [Complete exercises from last week](https://docs.google.com/document/d/1-Bu_FC___DM9tS8fugsLe4EnwjPs4OSYCe6PMsCVE2Y/edit?usp=sharing)
* [Deploy your Express App to DO](https://docs.google.com/document/d/1wPaS9vSoMQNbSR5KTSro7CXt2yfQzm2s9cPM3ZCvmTg/edit?usp=sharing)

[Slides](http://slides.mydemos.dk/rest/rest.html)

# **22-09-Friday**
* JavaScript Testing
* JavaScript Backend Testing using Mocha
* Testing asynchronous code
* Mocking with JavaScript

#### Before this lesson you should:
[Watch the Keynote speech](http://expressjs.com/)

### Read/Watch
If you like videos, since it gives you a chance to code along in your own speed, Lynda.com have a complete Node/Express course with some cool testing videos. 
Once logged in to Lynda search for "Node.js Essential Training" and watch:
* Testing with mocha and Chai
*	Asynchronous mocha testing
*	Mocking a server with NOCK
*	Code Coverage with Istanbul

As usual, the API descriptions should be your main resource for Mocha/Chai-questions.
*	[Mocha] (http://mochajs.org/ )
* [Chai](http://chaijs.com/api/bdd/#method_throw)


**Exercises:** [JavaScript Backend Testing](https://docs.google.com/document/d/1JyQ4Qgdori9QYZ8Pfjp5x7P5vIGImx0Byc4pNrG9DXA/edit?usp=sharing)

[Cool Mocha Tutorial](https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha)

[Slides](http://slides.mydemos.dk/test1/unitTestingBackend.html#1)


# **27-09-Wednesday**
Short introduction to NoSQL, MongoDB and Mongoose

#### Before this lesson you should:
I don't plan to talk about NoSQL in general, since Martin Fowler does it a lot better than me. Watch the video given below, either before or afther the lesson. It covers all "general questions" related to NoSQL

Usually I always recommend a local database for development. Since we only have one day for this topic however, I suggest you create a free account on mlab.com as outlined below, and use this account for all exercises related to MongoDB and Mongoose.
- Create an Account on mlab.com
- Log in
- Create new database
- Just choose amazon or Google or .. and SANDBOX
- Select Europe
- Give it a name
- Click on the database and select Users
- Add database user (otherwise we can’t connect)
- Then copy the standard URI (mongodb// …)
- Use this URL in your Code Examples

### Read/Watch
- [Introduction to NoSQL - Martin Fowler](https://www.youtube.com/watch?v=qI_g07C_Q5I)
- [What is Mongoose](https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications) (this is also one of the exercises for today)

### Exercises
 [What is Mongoose](https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications)
 
 *This is part of a larger tutorial, related to Express. Complete this tutorial (you also have a great deal of next week) to get a complete Express example including a database*
 
 [Express Tutorial Part 3: Using a Database (with Mongoose)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#Mongoose_primer)

#### Slides
[Mongo/Mongoose Slides](http://slides.mydemos.dk/noSQL/mongo_mongoose.html)

# **29-09-Friday**
BAsic Web-Security for Node Applications

#### Before this lesson you should:
To "tune" everyone into this new topic, we will make a **hacker competition**, focused around sessions hijacking and cross-site scripting. I will set up a siiiimpel session-driven server that you are allowed to attack and:

- First hacker who discover "secret" data from another user,  receives a GOOD beer ;-)

Before the lesson, you should read the following:

- XSS: https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)
- Session Hijacking: https://www.owasp.org/index.php/Session_hijacking_attack
- A bit about it all and jwt's: https://stormpath.com/blog/build-secure-user-interfaces-using-jwts

A couple of quick videos that can be enjoyed on the couch

- Cross Site Scripting (XSS): https://www.youtube.com/watch?v=L5l9lSnNMxg
- Cross Site Request Forgery Explained: https://www.youtube.com/watch?v=vRBihr41JTo
- Cookie Stealing: https://www.youtube.com/watch?v=T1QEs3mdJoc

#### Snippets

[snippet](https://docs.google.com/document/d/1LIDVt8stIi770lm9xzgiawvOOrCQR3VHgqqBj6UEkeU/edit?usp=sharing)

##### Exercises:
There is "only" one exercise for this period (prepare youself for the Security Questions in the learning goal for this period)


[Site to hack will follow](#)

##### Slides:
TBD
[Slides (please note, a great deal of the slides is "active" meant for "hacker day")](http://slides.mydemos.dk/security1/security.html#32)

# **4-10-Wednesday**
###Complete Hand-in for Period-2

**Period Milestones:**
* Period Hand-in: October 4th. 20.00
* Reviews must be completed: October 5th. 22.00.
* Hand-in Document [Add your git-links here (Closed)](#):  
* [How to hand in](#)


