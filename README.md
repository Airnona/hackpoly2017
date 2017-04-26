# hackpoly2017
Attempted to make a chrome extension that helped combat procrastination.

In order to accomplish this goal, we attempted to make an extension that slowly started to blur out the chrome window if the user
was on a website that was added to a blacklist. We attempted to have the extension slowly make a website more and more blurry until
the user was unable to handle the blur, forcing them to stop using that website. 

We accomplished this by adding a filter over the entire webpage that was initially at 0% opacity, and over a certain period of time, 
based on a timer seen from the extension, the filter would slowly increase the opacity of that filter.
