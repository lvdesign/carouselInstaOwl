/*

Don't forget to document your plugin! 
Include any assumptions that your plugin is making.
version 1.0
auteur : Laurent Vignaux pour lvdesign.com.fr
contact : mailbox(at)lvdesign.com.fr

methode :
$('.owl-slider').makeCarousel();

besoin de :
# plugins : 
owl.js version 1 
instafeed.js

# parametrer vos variables pour 
-> instafeed.js
https://github.com/stevenschobert/instafeed.js#advanced-options

-> Owl.js  v1.3.2
http://owlgraphic.com/owlcarousel/
*/

/*chargement des styles du carousel Owl v1 et specifique */
$(document.head).append('<link rel="stylesheet" href="lv-carousel-v1/owl-v1/lv-carousel.css">');


//plugin
$.fn.makeCarouselInstaOwl = function(){

//
if(!$.fn.owlCarousel )throw new Error('Warning, plugin owlCarousel() must be loaded for action "makeCarouselInstaOwl" .');
if(!new Instafeed() )throw new Error('Warning, plugin instafeed.js must be loaded for action "makeCarouselInstaOwl" .');

var $carousel = this; //



//Set up instafeed
 var feed = new Instafeed({
 
     clientId: '97ae5f4c024c4a91804f959f43f2635f', /* votre clientID */
     target: 'instafeed',
     get: 'tagged',
     tagName: 'cat', /* votre hashtag reference*/
     links: true,
     limit: 25, /*nb*/
     sortBy: 'most-recent',
     resolution: 'standard_resolution',
     /* pleins d'autres options voir notice
     https://github.com/stevenschobert/instafeed.js
     https://github.com/stevenschobert/instafeed.js#advanced-options
     */
    
    after: function () {
//Set up Owl carousel       
                           $carousel.owlCarousel({
                              loop:true,
                               margin:10,
                               navigation: true,
                               autoPlay: 4000, //Set AutoPlay to 4 seconds
                               items : 4,
                               itemsDesktop : [1199,3],
                           itemsDesktopSmall : [979,3] 
                           });
               
                /* Custom Navigation Events pour plus de possibilitees, 
                debut de style avec css mais peut faire mieux
                dans ce cas mettre dans parametres $carousel.owlCarousel({}); : navigation:false,
                
                  $(".next").click(function(){
                    $carousel.trigger('owl.next');
                  })
                  $(".prev").click(function(){
                    $carousel.trigger('owl.prev');
                  })
                  $(".play").click(function(){
                    $carousel.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
                  })
                  $(".stop").click(function(){
                    $carousel.trigger('owl.stop');
                  })
                */
              
               },
                template: '<div class="item"><a href="{{link}}" target="_blank"><span><img src="{{image}}" alt="{{caption}}"/></span></a></div>',
                /*possibilite de rajouter des elements au template selon la presentation voulue, voir :
                https://github.com/stevenschobert/instafeed.js#advanced-options
                */
            });               
                  
feed.run();

}//end$