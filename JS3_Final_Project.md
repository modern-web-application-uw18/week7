Carol Farris
Final Project Proposal

////Project Name: React cowntdown timer with uploadable/searchable visuals using firebase

///Long term goal: Learn React by building tools for parents/teachers to better support autistic children. 

///Project: Visual timer with customized/retrievable pictures

//////Elevator Pitch:
Children with Autism and other children with special needs often benefit from having a visual timer
that shows the remaining time viaually (with numbers and a progress bar). There are lots of visual timers
available on the web and small physical ones that can be used. 
What is missing from any timer I have seen is a supporting image of either the expectation 
(what the child is supposed to do) OR the reward (what the child is working for). These visuals are often
made available close by these timers to remind the child what they are supposed to do, or their reward.

This timer is unique in that it supplies images commonly used with autistic children as visual motivators
to their end goal. The top half is a standard timer, the bottom half supplies an image that will help the child successfully complete the task. However, since each child is motivated by something different, the user can upload the images they commonly use with the child (A limit of 10 images per user).

The user has the option to show the image or hide it. They have ready access to all their images (displayed by title below) the images will be stored by firebase and the site will (hopefully) be deployed by firebase.  

The first prototype will have the timer, responsivity, options to pick from the standard library of images. 
If I have time, I want to build the image database for users, and allow them to add/edit their images.

This will help therapists and parents have a consistent clear visual timer that will provide the child
a visual reinforcer reminding them of the expectation or goal each time they look at it. This is helpful
outside of a therapy room, when parents/therapists may not have access to all desired pictures.

///React App:
Have a skeleton homepage to link to fun /accessible online apps for special needs kids
Link to the simple countdown timer I create below, as my first contribution.


Create a simple count down timer with an image below

//////Wireframes:
+-----------------------------+ Link top left to return to homepage offering other quick tools for special needs kids.
|                             |
|    hour minutes seconds     |
|    [  ]   [ ]      [ ]      |  user enters the numeric value. default values are 0
|                           
|      |click to start!|          
|   _______________________        *small check box present to allow user to hide images             
|   |Click to upload Image |  |    user can choose to upload an image that will show during cowntdown
|   _______________________   |     (sign in with google account to access this feature)
|   |  pick from standard |   |
|           library           |   user can select from stock images commonly used to support kids. 
+-----------------------------+     (no sign up required)





 +-----------------------------+
|  hours   minutes  seconds    |    Once time is selected, the countdown begins
    []   :   []  :   []

 [start] [stop] [pause] [reset]      Buttons are shown once the click button has started

  [PROGRESS BAR.............]       The progress bar shows how much time they have left.

    +------------------------+|
    |                        ||     THE IMAGE SELECTED BY USER (OR NONE )
    |     Image shown        ||
    |                        ||                          
    +________________________+|
|                             |
|   +Image Caption below      |     The image caption is stored with the image
+-----------------------------+


////Dependencies:
React
react-dom
react-router-dom
Firebase database to upload a maximum of 10 images to each users account (similar to do list)
Firebase deployment? (otherwise use now, and deploy on github pages)

Interesting projects that my be helpful in guiding my efforts:
https://github.com/firebase/friendlypix


////Process:
Create images using Create-React-App

Stage 1/Week 1:
Create a homepage that links to my timer as well as other good online apps supporting autistic kids
Create simple timer (component A)
Set up Firebase to store user provided images  
Create progress bar (component B)
Create option to show images (component C)
Create Component to select for and show stock images provided (component D)

Stage 2/Week 2:
Create link top left linking to generic homepage (But homepage isn't the focus of this project)
Focus on CSS and styling

Nice to haves:
Show a link at bottom allowing user to add/remove images (shown as thumbnails) from their allotted 10 images.

TO DRAW IN USERS:
USER CAN USE STOCK PHOTOS WITHOUT LOGIN TO FIREBASE.
QUICK LOGIN TO FIREBASE GIVES THEM 10 IMAGES THEY CAN UPLOAD (AND RETRIEVE)
USER CAN DELETE AND RELOAD IMAGES BUT THEY ARE LIMITED TO 10 (UNLESS THEY SIGN UP FOR MORE!)

