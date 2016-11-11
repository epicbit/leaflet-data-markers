# Leaflet Data Markers 

Extends [L.divIcon](http://leafletjs.com/reference-1.0.0.html#divicon) and [L.icon](http://leafletjs.com/reference-1.0.0.html#icon)

Tested on Leaflet 1.0.

### Usage

Include script after leaflet.


#### L.dataDivIcon
```javascript
var myIcon = L.dataDivIcon({
      className: "leaflet-data-marker",
      html: '<p>I like the internet.</p>',
      data: {
        exampleone: "My Awesome Example",
        exampleTwo: 892,
        thisIsExampleThree: "Mom's House",
        anythingWorks: "I Like The Internet!"
      }
    });
    
L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
```

Would generate this element:
```html
<div class="leaflet-marker-icon leaflet-data-marker leaflet-zoom-animated leaflet-interactive" style="margin-left: -6px; margin-top: -6px; width: 12px; height: 12px; transform: translate3d(1111px, 296px, 0px); z-index: 296;" data-exampleone="My Awesome Example" data-example-two="892" data-this-is-example-three="Mom's House" data-anything-works="I Like The Internet!" tabindex="0">
	<p>I like the internet.</p>
</div>
```



#### L.dataIcon
```javascript
var myIcon = L.dataIcon({
      iconUrl: 'https://placeholdit.imgix.net/~text?txtsize=11&bg=ff0000&txtclr=000000&txt=I&w=32&h=32',
      data: {
        exampleone: "My Awesome Example",
        exampleTwo: 892,
        thisIsExampleThree: "Mom's House",
        anythingWorks: "I Like The Internet!"
      }
    });
    
L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
```

Would generate this element:
```html
<img src="https://placeholdit.imgix.net/~text?txtsize=11&amp;bg=ff0000&amp;txtclr=000000&amp;txt=I&amp;w=32&amp;h=32" class="leaflet-marker-icon leaflet-div-icon leaflet-zoom-animated leaflet-interactive" style="margin-left: -6px; margin-top: -6px; width: 12px; height: 12px; transform: translate3d(1111px, 296px, 0px); z-index: 296; outline: medium none;" data-exampleone="My Awesome Example" data-example-two="892" data-this-is-example-three="Mom's House" data-anything-works="I Like The Internet!" tabindex="0">
```


This should be enough to get you going using HTML 5 Data Attributes on your custom markers, contribute if you like!
