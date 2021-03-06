# JS Fiddle Edition

This [Absolute Beginners](http://members.shaw.ca/sites/AbsoluteBeginners/beginner1.htm) tutorial is great, but if "Create an HTML5 document" is already making you want to crawl under your desk with I-don't-know-how-to-do-that frustration, you could just use JSFiddle to get started.


JSFiddle isn't a subtitute for real web hosting, but it makes it easy to ask for help as you go.

1. Start a new [JSFiddle](http://www.jsfiddle.net). 

    1. On the far left, under Frameworks & Extensions, select "jQuery 1.11.0" (actually, almost any version of jQuery will work but I've tested 1.11) from the pulldown.
    2. Under "External Resources", add <http://cdn.jsdelivr.net/jquery.imagemapster/1.2.10/jquery.imagemapster.min.jss>
    
2. You can either create a pair of images (original and rollover) or download the [tutorial](http://members.shaw.ca/sites/AbsoluteBeginners/beginner1.htm) zip file and use the images provided there. Either way, you'll need to put them on the internet someplace. For practice, <https://imgur.com/> is handy. But you can also upload them to [Digital Storage](http://tech.journalism.cuny.edu/documentation/digital-storage/) or attach them to a WordPress post. 

3. Map your image -- [image maps](http://en.wikipedia.org/wiki/Image_map#Client-side_image_map) are pretty old-school in the world of HTML, and there are a decent number of tools that will help you actually create an image map. [Maschek.hu](http://www.maschek.hu/imagemap/imgmap) is great. In some browsers I've had a hard time making polygons, but they seem to be working fine right now. [Image-Maps.com](http://www.image-maps.com/) is reliable but tucks a 2x2 square of its own on your image. 

4. Copy the HTML for your map into the HTML pane in JSFiddle. You should have an image tag (`<img src="..." />`) and a map tag (`<map ...> ... </map>`). Between the opening and closing `<map>` tags, you should have a series of `<area ... />` tags.   
If you're new to HTML, you'll notice that you're dealing with a couple of things:  the tag itself (`img`, `map` and `area` are tags), attributes ([`img`](http://www.w3.org/wiki/HTML/Elements/img) should have at least a `src` attribute and an `alt` attribute, and in this case will need `usemap`, [`area`](http://www.w3.org/wiki/HTML/Elements/area) has a `shape` and `coords`, [`map`](http://www.w3.org/wiki/HTML/Elements/map) needs a `name` -- that will be the name you reference  in the image's `usemap`) and each attribute will have a value, in quotes. So your format is always either `<tag attribute="value">...</tag>` or `<tag attribute="value" />` 

5. Confirm that the `usemap` value of your image matches the `name` value of your map. Note that `usemap` takes a `#` at the start, so you'll have something like `name="butterflyMap"` in your `<map ...>` tag and `usemap=#butterflyMap` in your `<img... \>` tag.

6. Establish a key. The tutorial uses `color`, I prefer `name`. Add a name (or color) attribute to each `area` element. Do that with a string like `name="simple_word". Don't use spaces or punctutation (`-` and `_` are ok) in the key value. 

7. Add an `id` attribute to your image. Something specific to the image is usually a good idea, something like `id="roughButterfly"` if you're using the tutorial images. 

8. Add a mapster function to your image by dropping the code below into the JavaScript tab on your fiddle. Substitute the `id` value that you gave your image for `imgID`. So if I had `id="roughButterfly"` in my `<img ...` tag, I'd use `$('#roughButterfly').mapster({` to       

        $(document).ready(function (){
        	$('#imgID').mapster({        	
                staticState: true,  
                fillColor: 'ff0000'  
            });
        });


9. Now would be a good time to "run" your JSFiddle to make sure the image shows up and check for errors with JSHint. You should see a red screen all of your map areas. If you don't, start troubleshooting. If you do, use "Save" to store this good baseline if you don't see any errors. 

10. Add a [`mapKey`](http://www.outsharked.com/imagemapster/default.aspx?docs.html#mapkey) to your function. If you used `name` to set the keys, you'd add `mapKey: 'name'`: 

        $(document).ready(function (){
        	$('#imgID').mapster({        	
                staticState: true,  
                fillColor: 'ff0000',
                mapKey: 'name'
            });
        }); 

11. Check your work! From here on out, figure that after every step you'll want to check your work with "Run". In this case you won't see any changes, but you want to make sure you didn't break anything.

12. Add some tooltips. I have three `area` set in my `map`. They're named "cashdoubler", "crossword" and "letters". Keep track of your commas!
 
        showToolTip: true,
        toolTipClose: ["area-mouseout"],
        areas: [{
            key: "church",
            toolTip: "As New York City churches shutter their doors, groups like AA that have traditionally relied on church basements for meeting space are left wandering."
        }, {
            key: "bank",
            toolTip: "348 14th Street was built as a bank. It has housed a pharmacy for the last 10 years."
        }, {
            key: "woodframe",
            toolTip: "City law only regulates rents on buildings with more than 4 units. "
        }]

13. Test your work! Update if it's working so you've got a new good baseline. If it isn't working, troubleshoot. For reference, here's what I've got so far: <http://jsfiddle.net/aHDyy/1/>
14. What are you actually doing? Go look up those options in the [Mapster documentation](http://www.outsharked.com/imagemapster/default.aspx?docs.html#tooltip-options). Don't worry too much if half of it seems Greek. Get in the habit of looking over the documentation, even if some of it is far too dense.

14. Add a hover image. 

    render_highlight: {
        altImage: 'http://brooklynlocal.info/craft2/tutorials/homes_color.png'
    }
        
15. You've done a lot already. Well done. Here's what I wound up with: <http://jsfiddle.net/aHDyy/2/>



## Troubleshooting

* Make sure that the `href=""` attribute on each `area` is present and points to either a real URL or `#`
* Did you really complete Step 1?
* Eyeball your code. If you have a red block that means that JSFiddle sees an error. 
* Did you close all the `(` and `{` and `[` that you opened? 
* Run JSHint -- it will flag missing commas and errant spaces.
* Do your names or ids have spaces in them? Punctuation? Do they start with numbers? All of those break things sometimes. The only punctuation you should have is `-` or `_`. If you want to go deep on the whys and wherefores of restricted punctuation go for it. Or trust me. Start with a letter, don't include spaces, no punctuation other than underscores and dashes. 
* Do your map name and img usemap match? 
* Does your function use your img id? 
