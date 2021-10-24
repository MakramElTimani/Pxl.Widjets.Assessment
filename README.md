# Pxl.Widjets.Assessment

## Anagram problem:

### How to run:
```
cd Anagram
node app.js
```
If you want to add your own tests, you can add a json file with an array inside the tests folder in the Anagrams folder following the other examples 

If you just want to run the app without file tests:

Comment out this code block:
```
const fs = require('fs');
fs.readdir('tests', (err, files) => {
    if(err)
     return;
    
     files.forEach(file => {
        let rawdata = fs.readFileSync(`tests/${file}`);
        let input = JSON.parse(rawdata)
        console.log(listAnagrams(input))
     })
})
```
and uncomment this code block:
```
console.log(listAnagrams([ 
    "rope", 
    "pore",  
    "repo", 
    "red rum", 
    "murder", 
    "listen", 
    "silent",  
    "endeavour" 
]));
```


## Rijks Search Web App

### How to run
```
cd RijksApp
npm i
ng serve --open
```

This will open development server for the angular app created.

### Pages

1. Art listing page
    - Search field with a keypress listener on [enter / return] keys. When pressed a search will occur
    - Filter Button: will be filled with the Facet array from the response of the search 
    - Filter popup: contains list of all filters returned from the search as drop downs and colors as a custom color select; when show matches is clicked, popup will close and the filter will occur
    - Art listing: masonry grid of the result returned from the search
2. Art Details page:
    - Background cover image of the art selected
    - View Image button: opens image in new tab
    - Back button: returns user to previous page with the state of the search still available (i.e. arts list, filters, selected filters and scroll location)
    - Piece Details card: contains basic information about the requested art piece
    - Piece Statistics card: contains a chart with the colors used in the requested art piece


## Decisions

For the assignment, I focused on 3 points.
1. Finishing the task required 100% with good UX and almost no bugs. To accomplish this, I did alot of testing and debugging to catch bugs and designed an acceptable UX. Some of these bugs and UX features where:
    - Masonry layout bug with image lazy loading. to fix it I called the masonry layout function when the result was completed
    - Keeping state of filters + search results when clicking on a particular art piece. To handle this, I created a state service that I pass to art list component and set and get the values for the search results and other infomration (like scroll position) in the variables I am using in the UI
    - When the user scrolls to bottom of listing page, the next page call for the api should start and new results should be fetched and displayed. This is a better approach than pagination for this kind of content
2. Retackle Angular: I took this opportunity to revisit angular since the last time I worked with it was back when it was still Angular 2. I was surprised with the number of new updates and the power that this framework now gives it's developers. I will be enhancing my Angular skills even more going forward
3. Adding something that wasn't on the Rijksmuseum search page. I wanted to add a new feature that wasn't suggested in the assessment and wasn't already in the advanced / details pages of pieces on the Rijksmuseum website. In my main job experience, I am a full stack engineer with an emphasis on backend tasks, so I wanted to keep the new feature strictly frontend; to show my frontend skills. I chose a colors chart to display the percentages of colors used in the piece. This shows that I am competant with working with 3rd party libraries and that I know my way around handling data


## Timeframes
1. Anagram problem: Thursday - 30 minutes to complete, 30 minutes writing some testing functionality
2. Rijks App:
    - Thursday night: discover and test api; set up angular project
    - Friday night: working on listing
    - Saturday: finished listing along with filtering; worked on details page; enhancing UI
    - Sunday: final touches; bug fixes; writing Readme file
    

## Conclusion

Thank you for allowing me to participate and work on such a fun project

Looking forward to hearing from you
