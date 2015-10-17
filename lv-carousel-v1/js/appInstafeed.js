 $(document).ready(function(){
 
    //Set up instafeed
    var feed = new Instafeed({
    
        clientId: '97ae5f4c024c4a91804f959f43f2635f', /* votre clientID */
        target: 'instafeed',
        get: 'tagged',
        tagName: 'lvdesignfr', /* votre tag reference*/
        links: true,
        limit: 25,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        /* pleins d'autres options voir notice
        https://github.com/stevenschobert/instafeed.js
        */
       
       after: function () {
       
                     var basic = $('.owl-slider');
                     
                            basic.owlCarousel({
                                 loop:true,
                                  margin:10,
                                  navigation: true,
                                  autoPlay: 4000, //Set AutoPlay to 4 seconds
                                  items : 4,
                                  itemsDesktop : [1199,3],
                              itemsDesktopSmall : [979,3] 
                              });
                  
                   /* Custom Navigation Events pour plus de possibilitees, debut de style avec css mais peut faire mieux
                   dans ce cas mettre dans parametres basic : navigation : false,
                   
                     $(".next").click(function(){
                       basic.trigger('owl.next');
                     })
                     $(".prev").click(function(){
                       basic.trigger('owl.prev');
                     })
                     $(".play").click(function(){
                       basic.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
                     })
                     $(".stop").click(function(){
                       basic.trigger('owl.stop');
                     })
                   */
                 
                  },
                   template: '<div class="item"><a href="{{link}}" target="_blank"><span><img src="{{image}}" alt="{{caption}}"/></span></a></div>',
       
               });               
                     
   feed.run();
 
});
