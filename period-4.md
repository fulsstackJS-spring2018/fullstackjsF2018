# Period-4 
### GraphQL

*In this period we will introduce GraphQL, a new API standard that provides a more efficient, powerful and flexible alternative to REST. It was developed and open-sourced by Facebook and is now maintained by a large community of companies and individuals from all over the world.*

[Learning Goals Period 4](https://docs.google.com/document/d/12XGTMDxsDwwS4Fi1Ojy9bT3BGXJwX9J_qNjq63Sm3hQ/edit?usp=sharing)

## 25-04-Wednesday
* An introduction to GraphQL
* Setting up a simple GraphQL backend with an Express Server and a Mongo Database

#### Before this lesson you should:

- Skim this tutorial [How to GraphQL]( https://www.howtographql.com/)
- Watch and CODE ALONG this GREAT [tutorial](https://www.lynda.com/GraphQL-tutorials/GraphQL-Essential-Training/614315-2.html) (this will give you allmost everything you need to design the miniproject GraphQL backend)
##### Hints for the Lynda-tutorial
- The tutorial uses two database (to really illustrate the power of GraphQL), but skip the part related to a relational database (and anything related to Aliens ;-), and focus only the parts related to MongoDB
- The tutorial includes a section related to, how you set up a local instance of MongoDB. I suggest you just stick to your mlab-acount and create a new database up here.
-- Also skip the part (4.1) that install Robo 3T, since mlab provides you with a fine enough GUI
- It seems like the authour haven't noticed that mongoose now supports promises. So when you get to the "mongoose-part" instead of doing this:
````javascript
return new Promise((resolve, object) => {
                newFriend.save((err) => {
                    if (err) reject(err)
                    else resolve(newFriend)
                })
            }) 
````
you can just do this (but the example above, one more time, nicely illustrates how you can convert a callback based design into a promise based):

````javascript 
return newFriend.save();
````


#### Exercises
If not already done, complete the  [Lynda-tutorial](https://www.lynda.com/GraphQL-tutorials/GraphQL-Essential-Training/614315-2.html).
If done, start focusing on the miniproject

## 26-04- Thuersday

I will be in room 1.03 and provide assistence if you miss required parts from period-3

## 02-05 - Wednesday
No teacher. If you follow the Security Course 26-04 is the replacement day, otherwise just work on the mini-project
## 03-05 - Thuersday
No teacher. If you follow the Security Course May 1th is the replacement day, otherwise just work on the mini-project


## 01-05 - Monday (replacement lesson)

**Exercises:** 
[Mini Project, part4 (Backend)](https://docs.google.com/document/d/11i1RJAfjQMgU-6RTLjcJNYyXRtAQzZOJFI-j4Kf2LVA/edit?usp=sharing)

## 09-05 - Wednesday
- GraphQL with Express, MongoDB cont. 
- GraphQL client Side with React and Apollo

#### Before this lesson you should:

- Read/Skim/Code this document [Apollo getting started](https://www.apollographql.com/docs/react/essentials/get-started.html)
- Read/Skim/Code this document [Queries](https://www.apollographql.com/docs/react/essentials/queries.html)

Both articles above is refered to in the exercises below

**Exercises:** 
- [Mini Project, part4 (Complete the backend)](https://docs.google.com/document/d/11i1RJAfjQMgU-6RTLjcJNYyXRtAQzZOJFI-j4Kf2LVA/edit?usp=sharing)
- [Apollo/React-exercises (TBD)](https://docs.google.com/document/d/1IIFoYyl3CMuSQ8oGHyGZBWh3-SroFyoaQWn-LPI9qVc/edit?usp=sharing)

## 16-05 - Wednesday
GraphQL Client Side with React and Apollo. 

**Exercises:** 
- [Apollo/React-exercises](https://docs.google.com/document/d/1IIFoYyl3CMuSQ8oGHyGZBWh3-SroFyoaQWn-LPI9qVc/edit?usp=sharing)
- [Mini Project, part4 (client)](https://docs.google.com/document/d/11i1RJAfjQMgU-6RTLjcJNYyXRtAQzZOJFI-j4Kf2LVA/edit?usp=sharing)

## 17-05 - Wednesday
GraphQL Client Side with React and Apollo continued 

**Exercises:** 
- Complete the [Apollo/React-exercises](https://docs.google.com/document/d/1IIFoYyl3CMuSQ8oGHyGZBWh3-SroFyoaQWn-LPI9qVc/edit?usp=sharing)
- [Mini Project, part4-client (TBD)](#)

## 23-05 - Wednesday
- Complete the mini project
- Any questions you might have
- About the exam

**Period Milestones:**
* Period Hand-in: TBD
* Hand-in Document: TBD

