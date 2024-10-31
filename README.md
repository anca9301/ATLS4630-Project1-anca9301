# ATLS4630-Project1-anca9301
 
to run, use npm run dev 
npm run build

## Milestone 1: Proposal

### Project Description
A fun website about narwhals and containing narwhal facts.

### Wireframe (hand-drawn)
![website_layout_concept](/blogPhotos/website_layout_concept.jpg)
![webpage_layout_concept](/blogPhotos/webpage_concept.jpg)
![swimming_animation_concept](/blogPhotos/swim_animation_concept.jpg)

### How a JavaScript library will enhance user experience

The website use animations to create a playful atmosphere and create an animated journey. Since the purpose of this website is to inform people about narwhals and create a fun experience, I plan on using anime.js (and potentially aos.js) to add fun animations. If there's time, I want to include interactive animations so that users to hover over/click certain spots and prompt something.  

The plan is that people will be more drawn towards these and retain more information. I was inspired by Species In Pieces (http://www.species-in-pieces.com/#) for the concept.

### Content and/or Information Sources
- https://wwf.ca/species/narwhals/
- https://www.worldwildlife.org/species/narwhal
- https://www.worldwildlife.org/stories/unicorn-of-the-sea-narwhal-facts 
- https://www.nationalgeographic.com/animals/mammals/facts/narwhal
- https://seaworld.org/animals/facts/mammals/narwhal/
- https://oceanexplorer.noaa.gov/facts/narwhal.html

### Responsive Website Goals
When the length of the screen is shorter than its height, I plan on rearranging to screen so that the facts will pop-up on the top and bottom with the middle empty.

### Project Goals
#### Prototyping/Proof Of Concept
- website with page transitions and pop-up boxes
- website also includes some/most of the facts filled in

#### Minimum Viable Product
- a website that uses animation to transition between the pages
- a navigation bar at the bottom of the website
- flowing water & background animations
- create an animation of a swimming narwhal

#### Stretch Goals
- add additional interactive animations

## Milestone 2: Check-In
### Progress Report
I have completed the code for a general animation of a wave and the swimming narwhal motion. I also have code for the water surface rising as the narwhal dives but have not connected the animation yet.

After giving the swimming concept more thought, I'll probably have to use a simple gif to animate the movement of the narwhal. The movement animation requires too many parts, and additional animation on top of too much could mess up all my progress.

Besides animation, I've made progress on the layout of the website. Since I want to use a horizontal scroll, I've come across a lot of trouble while positioning and overlapping elements.

With my current progress, I'll have to rethink how the diving animation will work. I'll probably have to connect it to a button instead of having it as an automatic action when you reach a certain point.

I've decided that animating textbox popups is not necessary because it won't add much and the animate on scroll library uses css? for the code. It's now a stretch goal in case I finish everything else early.

I've also gathered some facts about narwhals but haven't put them on the website yet. I plan on adding them and styling the page after I figure out the website code.

About Narwhals: https://docs.google.com/document/d/1t-_iC3C2EHUyp6oscho0jM_p4fxnTzrt5LVdV31l4dc/edit?usp=sharing 

Overrall, I have made decent progress. Looking over my milestone 1 goals, they still seem reasonable. However, I was probably confused about the prototyping/proof of concept because I seem to have completed more of the minimum viable product goals.

## Milestone 3: Critique Day


## Milestone 4: Reflection
For my project, I created a animated website about narwhals. My initial idea was having a animated background that the user can interact with and making it horizontally scrollable. 

### Comparing Intended vs Achieved
Looking back on my intended vs achieved, I completed all the things I intended to do for the most part. While the methods I used were different from the initial concept and there were changes from the original design, I think I accomplished everything on the list.


### Describing the Process & Challenges
#### Animating the Background
I first worked on was the background animation and learning anime.js because those were the parts that I thought were going to be the hardest. I used rectangles as placeholders and figured out how movement worked. For the most part, the movement I wanted was simple back/forward and left/right, so I spent most of my time figuring out how to stagger the movement so that the water wasn't synced together. After trying stagger, delay, and other parameters, I realized that the animation had to be split up else they would continue to effect each other.

Afterward, I began working on the diving animation. My plan was to make it function that would move the background up and hold it there for an indefinite amount of time. However, I had to scrap the concept because anime.js reverts positions after an animation. The positions also glitched when I tried to delay resetting the animation. I attempted to resolve this by change the final y-position of the water, but it didn't work because I would need to reverse the diving animation for surfacing. Hence, I turned diving and surfacing into one animation that randomly triggered when the user used the bottom scroll.

As I worked on the motion animation, I decided that anime.js wouldn't work for my narwhal swimming animation. It would require too much additional time that I do not have, and I had personal ideas about how the animation would look. Hence, I decided to use a gif instead. Using similar steps, I added swimming fish.

#### Horizontal Scroll
My initial idea was to have a horizontal scroll. However, it ended up being extremely confusing and messy. Because I wanted the information boxes to move along the screen, they couldn't have absolute positioning, so they kept on pushing each other around. Moreover, their relative positions were also affected by other elements, so they were extremely hard to position. I tried using a flex box, but it would've caused trouble on smaller screens. After some effort, I got a buggy horizontal scroll with a bottom scrollbar using z-index, but I wasn't satisfied with that.

When I looked through the anime.js documentation, I noticed example code about seeking moments in timelines. After some consideration, I scrapped the horizontal scroll and used anime.js to make the website scrollable. I attached a left/right animation onto the div that contained the textboxes and attached the animation onto a range type input. The input controls the progress animation and acts as the scroll.

#### CSS & Responsive Website
Throughout my entire process, I probably spent the most time messing around with CSS. Most of the elements on the website have absolute positions on and off the screen. Hence, I spent a while figuring out the best positions for different screen sizes. I originally used % and rem but later switched to vw and vh to better adjust to the view window size.

I added some additional CSS for better styling on other screen size, but it's not perfect. However, it works decently well.

### Major Takeaways & Reflections
From this project, I learned about the anime.js library and how to use it. Additionally, I learned and implemented additional CSS and JavaScript features into my website: setTimeout(), z-index, hiding scroll, preventing touch, and vw/vh. While there exists bugs (view window shifting when you reload the page, fish swimming in the air, etc.), I completed the website.

setTimeout() allows you to delay code which let me set cool down time after an animation and stagger the time between different animations. z-index helped me organize the arrangement of elements and decrease conflict between them. Hiding scroll and preventing touch inputs solved some of the bugs I ran into that shifted the screen. Finally, vw/vh was especially helpful in consistent styling and responsive designing by adjusting positions to match the window size.

Looking back on the critiques, it was recommended that I attached the playing/pausing of the scroll to a button, added more moving pieces/animations to the background, and decrease the scroll speed. These are all things that I would add in if I had more time.

I implement the changes by turning the play/pause indicator into a button, adding randomly floating ice sheets and icebergs to the background animation, and increasing the duration of the scrolling animation. Additionally, I could fiz the fishes by attaching them to the background and having them move with the diving animation.