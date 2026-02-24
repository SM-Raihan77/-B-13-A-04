Q-01: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


Ans 01: To get the element with the specific id,we use getElementById and any id should be unique.it returns an element with a specified value.


To get all elements with class then we use getElementByClassName,and it returns an HTMLCollection.


querySelector is a css selector .It returns the first element that matches a CSS selector.
To return all matches (not only the first), use the querySelectorAll,and it returns Node list.


Q-o2: How do you create and insert a new element into the DOM?

Ans 02:
To create a new element we use document.createElement('')
example: const newDiv = document.createElement('div');

To insert a new element we use appendChild()



Q-03:What is Event Bubbling? And how does it work?

Event Bubbling is a concept in the DOM. It happens when an element receives an event, and that event bubbles up to its parent and in the DOM tree until it gets to the root element.
To prevent bubbling we can use stopPropagation().


Q-04: What is Event Delegation in JavaScript? Why is it useful?

Ans 04: Event delegation is a technique where we can attach a single event listener to a parent element instead of adding multiple listeners to each child element.
 It is very useful coz it saves memory by using only one evenlistener.




 Q 05: What is the difference between preventDefault() and stopPropagation() methods?

 Ans 05: We use preventDefault()to prevent browser default action, and stopPropagation() to prevent bubbling.
