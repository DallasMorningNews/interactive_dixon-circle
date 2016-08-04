$(document).ready(function(){function o(o,e){var a=$("#"+o);a.find("ul").children("li").eq(e).addClass("activeItem").siblings("li").removeClass("activeItem"),a.find(".dixonStory").addClass("noShow").eq(e).removeClass("noShow");var t=a.find(".dixonStory").eq(e);t.offset().top<=$(window).scrollTop()&&$("html, body").animate({scrollTop:t.offset().top-80+"px"},250)}function e(){$("#map").hasClass("viewable")===!0?($("#map").removeClass("viewable"),$("#mapExpander").removeClass("fa-times").addClass("fa-map-marker")):($("#map").addClass("viewable"),$("#mapExpander").removeClass("fa-map-marker").addClass("fa-times"))}function a(o){c.addSource("locations",{type:"geojson",data:o}),c.addLayer({id:"dixonCircle",source:"locations",type:"circle",paint:{"circle-radius":{stops:[[1,10],[8,10],[16,9]]},"circle-color":"#FBD44B","circle-opacity":{property:"opacity",stops:[[0,0],[1,1]]}}})}function t(o,e,a,t){c.easeTo({center:o,zoom:e,duration:a,pitch:t})}function i(){m=[];var o=$(window).scrollTop(),e=$(window).height(),a=e+o;$.each($(".dixonMap"),function(){a>$(this).offset().top+$(window).height()/2&&m.push($(this).attr("id"))});var i=m.length;m[i-1]!==p&&void 0!==m[i-1]?(t(d.features[i-1].geometry.coordinates,d.features[i-1].properties.zoom,750,0),p=m[i-1]):void 0===m[i-1]&&(t(r,15,750,0),p=""),a>$(".credits").offset().top&&(t(r,15,750,0),p="")}var n=new Date,l=n.getFullYear();$(".copyright").text(l),$("#readMore").click(function(o){o.preventDefault(),$("#splash").fadeOut(500),$("body").removeClass("noScroll")});var s=$(".dixonStories ul li");s.click(function(){var e=$(this).index(),a=$(this).closest(".dixonSection").attr("id");o(a,e)}),$(".next").click(function(){var e=$(this).closest(".dixonSection").attr("id"),a=$(this).parent(".dixonStory").index();o(e,a)}),$(window).scroll(function(){var o=$(window).scrollTop();o>52?($("#mapReset").addClass("moved"),$(".mapboxgl-ctrl-top-right").addClass("moved"),$("#mapExpander").addClass("moved")):($("#mapReset").removeClass("moved"),$(".mapboxgl-ctrl-top-right").removeClass("moved"),$("#mapExpander").removeClass("moved"));$(".dixonContent");$.each($(".dixonContent"),function(){$(this).offset().top+60<o&&$(this).offset().top+$(this).height()>o+50?$(this).find($("ul")).addClass("stuck"):$(this).find($("ul")).removeClass("stuck")})}),$("#mapExpander").click(function(){e()}),$(".mapper").click(function(){e()}),mapboxgl.supported()?console.log("Yay, maps!"):console.log("MapBox GL not supported");var r=[-96.7371063,32.7628376],d=[{number:"1",head:"Dixon Circle",lng:-96.73251,lat:32.76531,zoom:17,opacity:1},{number:"2",head:"The Corner",lng:-96.73539,lat:32.76385,zoom:17,opacity:1},{number:"3",head:"The Killing",lng:-96.73318,lat:32.76324,zoom:17,opacity:1},{number:"4",head:"The People",lng:-96.73413,lat:32.76522,zoom:17,opacity:1},{number:"5",head:"The Police",lng:-96.7371063,lat:32.7628376,zoom:15,opacity:0},{number:"6",head:"The Kid Who Got Out",lng:-96.7369,lat:32.76185,zoom:17,opacity:1},{number:"7",head:"Freddie’s Last Bust",lng:-96.73487,lat:32.76461,zoom:17,opacity:1},{number:"8",head:"The example",lng:-96.7371063,lat:32.7628376,zoom:15,opacity:0}];d=GeoJSON.parse(d,{Point:["lat","lng"],include:["number","head","zoom","opacity"]}),mapboxgl.accessToken="pk.eyJ1IjoibWFjbWFuIiwiYSI6ImVEbmNmZjAifQ.zVzy9cyjNT1tMYOTex51HQ";var c=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/satellite-streets-v9",center:r,zoom:15});c.on("load",function(){c.scrollZoom.disable(),c.addControl(new mapboxgl.Navigation),a(d)}),$("#mapReset").on("click",function(){t(r,15,750,0),p=""});var p,m=[];$(window).on("scroll",_.throttle(i,600))});
//# sourceMappingURL=scripts-bundle.js.map
