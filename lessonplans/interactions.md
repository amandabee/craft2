#Mouseover Walk Through

## Step 1 ##

We need to define the zones we're going to work with.

Right click the image to get an image URL. Paste that in text wrangler and look it over.

http://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/THE_BRONX_IN_MANHATTAN%2C_NEW_YORK._TRANSPORTATION_IN_AN_URBAN_AND_INDUSTRIAL_AREA_LIKE_NEW_YORK_PRODUCES_ENVIRONMENTAL..._-_NARA_-_555748.jpg/800px-THE_BRONX_IN_MANHATTAN%2C_NEW_YORK._TRANSPORTATION_IN_AN_URBAN_AND_INDUSTRIAL_AREA_LIKE_NEW_YORK_PRODUCES_ENVIRONMENTAL..._-_NARA_-_555748.jpg

Open up <http://www.image-maps.com/>, and give them the URL for your image.

When it says "Click to Continue" guess what you're going to do?

That message:

> Right Click on image to bring up menu. For Mac Users "Control + Click".close 

it is your friend. We'll outline the car and the GM sign. This is just a basic x,y axis. In this case the top left corner is 0,0 and the bottom right corner is the max. So you could just write these out by hand (and there are actually a ton of ways to generate an image map.)

Then right click and select "get code" -- the code is there at the bottom. 

        <img id="Image-Maps-Com-image-maps-2014-04-22-142029" src="http://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/THE_BRONX_IN_MANHATTAN%2C_NEW_YORK._TRANSPORTATION_IN_AN_URBAN_AND_INDUSTRIAL_AREA_LIKE_NEW_YORK_PRODUCES_ENVIRONMENTAL..._-_NARA_-_555748.jpg/800px-THE_BRONX_IN_MANHATTAN%2C_NEW_YORK._TRANSPORTATION_IN_AN_URBAN_AND_INDUSTRIAL_AREA_LIKE_NEW_YORK_PRODUCES_ENVIRONMENTAL..._-_NARA_-_555748.jpg" border="0" width="800" height="542" orgWidth="800" orgHeight="542" usemap="#image-maps-2014-04-22-142029" alt="" />
        <map name="image-maps-2014-04-22-142029" id="ImageMapsCom-image-maps-2014-04-22-142029">
        <area  alt="" title="GM Sign" href="http://www.image-maps.com/" shape="rect" coords="270,373,304,406" style="outline:none;" target="_self"     />
        <area shape="rect" coords="798,540,800,542" alt="Image Map" style="outline:none;" title="Image Map" href="http://www.image-maps.com/index.php?aff=mapped_users_0" />
        <area  alt="" title="Middle building" href="http://www.image-maps.com/" shape="poly" coords="343,76,338,194,552,199,553,79" style="outline:none;" target="_self"     />
        <area  alt="" title="Rear Car" href="http://www.image-maps.com/" shape="poly" coords="481,340,561,343,595,329,666,337,701,359,735,368,742,386,704,386,692,388,681,397,667,397,652,388,612,386,558,380,543,378,530,379,513,379,504,371,504,362,488,364" style="outline:none;" target="_self"     />
        </map>
    
We're going to make some tweaks to it. You have two pieces here: an image, and a map. And the map has a bunch of sub pieces, which are "areas". The map has a name, and the image has a "usemap" attribute that specifies the name of the map to use.

        <img id="bronx_auto" src="http://brooklynlocal.info/craft2/lessonplans/imagemap/Bronx_555748.jpg" border="0" width="800" height="542" orgWidth="800" orgHeight="542" usemap="#demo_map" alt="" />
        <map name="demo_map" id="bronx_auto_map">
            <area alt="" title="GM Sign" href="http://www.image-maps.com/" shape="rect" coords="270,373,304,406" style="outline:none;" target="_self"     />
            <area shape="rect" coords="798,540,800,542" alt="Image Map" style="outline:none;" title="Image Map" href="http://www.image-maps.com/index.php?aff=mapped_users_0" />
            <area alt="" title="Middle building" href="http://www.image-maps.com/" shape="poly" coords="343,76,338,194,552,199,553,79" style="outline:none;" target="_self"     />
            <area alt="" title="Rear Car" href="http://www.image-maps.com/" shape="poly" coords="481,340,561,343,595,329,666,337,701,359,735,368,742,386,704,386,692,388,681,397,667,397,652,388,612,386,558,380,543,378,530,379,513,379,504,371,504,362,488,364" style="outline:none;" target="_self"     />
        </map>
    
  
And then we're going to pop over to JSFiddle. Where we've got a few things in place: jQuery and the imagemapster.js scripts. 
    
Each of these areas has a bunch of attributes. It has a title that we gave it. It has a shape, which is either circle, rectangle or polygon. It has some style. Because we're going to use some javascript, we're also going to give each one a name. No spaces, all lowercase. 

You'll notice that there's an extra one, a 2px by 2px zone at the bottom right of the image. That's our tool marking its tree. You can delete it.

Notice the conventions are different between JS and HTML. HTML uses `attribute=""` while javascript uses `attribute: "",` That makes a difference, but our goal here isn't to write JS from scratch.

So here's my working fiddle: http://jsfiddle.net/s38bw/2/

And a super bare bones version: http://jsfiddle.net/s38bw/5/

#Mouseovers

We used to be able to use Zeega for some of this, but it doesn't do half of what it used to.

We can still use basic HTML and jQuery. You can use Hype, though I'm of the opinion that your time is better spent scaling down your plans and then using some basic HTML. 

Examples: Boston bombing explainer. 


## Using jQuery

To read: http://www.itorian.com/2012/06/image-map-mouse-hover-effect-on-area.html

This is good: http://stackoverflow.com/questions/745110/using-jquery-hover-with-html-image-map

US Map only: http://newsignature.github.io/us-map/

This is great: http://www.outsharked.com/imagemapster/examples/usa.html

We could do this in class: http://jsfiddle.net/sb9j7/

http://www.image-maps.com/

https://pbs.twimg.com/media/Bj_GTPNIcAEWGaq.jpg:large

This is a nice demo, too: http://davidlynch.org/projects/maphilight/docs/demo_features.html#

More nice demos: http://www.outsharked.com/imagemapster/default.aspx?demos.html#skeleton

To read: http://www.markistaylor.com/image-maps-and-jquery/

Good rundown of tools: http://bashooka.com/coding/powerful-jquery-image-map-plugins/



