# stackignite  

Javascript implementation of a flamegraph, focused on performance.  

It is a work in progress, so no npm yet. Also it declares functions on global scope.  
Maybe I will clean this up, but it is usable, just copy stackignite.js to your project.

![screenshot](https://github.com/beothorn/stackignite/blob/main/screenshot.png?raw=true)


# Features  

- Rasterized rendering with canvas.  
- Bar size by timestamp or children count.
- Resizable, responsive
- Customizable color palette
- Instant zoom span on click  


# Graph Types

- ChildrenCallCount: Count all children recursively for a span and gives the space according to the count. Useful if you want all entries to show up.  
- Timestamp: Uses the fields "entryTime" and "exitTime" to place the spans. It will not show entries with interval of 0. Used for performance flamegraph.

# Usage  

Example:  

```html
<div id="inPlaceQuickSortByChildrenCount"></div>
```

```javascript
const data = {
    name: "A",
    children: [
        {
            name: "AA"
        },
        {
            name: "AB", 
            children: [
                {name: "ABC"}
            ]
        }
    ]
}

loadData({
    elementId: "inPlaceQuickSortByChildrenCount",
    data: data,
    graphType: "ChildrenCallCount",
    colorPalette: ["rgb(249, 237, 105)", "rgb(240, 138, 93)", "rgb(184, 59, 94)", "rgb(106, 44, 112)"], // optional
    onClick: (n) => console.log(n), // optional
    zoomOnClick: true // optional
});
```