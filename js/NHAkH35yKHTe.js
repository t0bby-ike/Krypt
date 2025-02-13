
/*
Tipue Slide 1.0
Tipue Slide Copyright (c) 2018 Tipue
Tipue Slide is released under the MIT License
http://www.tipue.com/slide
*/


(function($) {

     $.fn.tipueslide = function(options) {
     
          var set = $.extend( {

               'newTab'                 : false,               
               'show'                   : 6,
               'speed'                  : 300
          
          }, options);

          return this.each(function() {
               
               var out = '<div class="tipue-slide-wrap">';
               
               out += '<input type="text" placeholder="Search..." id="tipue-slide-input" autocomplete="off">';
               out += '<div class="tipue-slide-clear-wrap"><div class="tipue-slide-clear">&#10005;</div></div>';
               out += '</div>';
               
               out += '<div class="tipue-slide-close tipue-slide-toggle">&#10005;</div><div class="tipue-clear"></div><div id="tipue-slide-content"></div>';
               
               $('#tipue-slide').html(out);
               
               $('#tipue-slide-input').keyup(function(event)
               {
                    getTipueslide($('#tipue-slide-input'));
               });
   			   
			   function boldString(str, find)
			   {
					var re = new RegExp(find, 'g');
					
					return str.replace(re, '<b style="color:white;">'+find+'</b>');
			   }
			   
               function getTipueslide($obj)
               {
                    if ($obj.val())
                    {					
                         $('.tipue-slide-clear').fadeIn(100);
                         
                         out = '';
                          
						 $('#tipue-slide-content').html(out);
						  
						 var c = 0;
						 
                         var searchTerm = $obj.val();
						 
						 for (var i = 0; i < tipueslide.pages.length; i++)
                         {
                              var pat = new RegExp($obj.val(), 'i');
							  	
								var title 	= tipueslide.pages[i].title;
								var content = tipueslide.pages[i].text;
								
								//new RegExp(searchTerm, 'i').test(title) ||
							    if (new RegExp(searchTerm, 'i').test(content)) 								
								{      			
									out += '<a class="tipue-not" href="' + tipueslide.pages[i].url + '"';									
									out += '><div class="tipue-slide-text">' + title + '</div></a>';
									
									var startPos = content.toLowerCase().search(searchTerm.toLowerCase());

									if(startPos != null && startPos > 0)
									{
										var details = content.substr(startPos, 100);	
										
										details = boldString(details.toLowerCase(), searchTerm.toLowerCase());										
										
										details += '...'
										out += '<div class="tipue-slide-text-content">' + details + '</div>'
									}
									
									c++;
								}
							  
                         }
						 
						 console.log('number of items found: ' + c );
						 
                         if (c != 0)
                         {              
                              $('#tipue-slide-content').html(out);
                              $('#tipue-slide-content').fadeIn(set.speed);
                         }
						 else
						 {
							 out += '<div class="tipue-slide-text-no-results">No search results</div>';	
							 $('#tipue-slide-content').html(out);
                             $('#tipue-slide-content').fadeIn(set.speed);							 
						 }
                    }
                    else
                    {
                         $('#tipue-slide-content').fadeOut(set.speed);
                         $('.tipue-slide-clear').fadeOut(100);
                    }
               }
 
               $('.tipue-slide-toggle').on('click', function(event)
               {
                    event.preventDefault();
                    var slide = $('#tipue-slide');
                    var slideWidth = $('#tipue-slide').width();   	

                    slide.toggleClass('open');

                    if (slide.hasClass('open'))
                    {
                         $('.tipue-slide-screen').show();
                         slide.animate({left: '0'}, 200);
                         $('.tipue-slide-wrap').fadeIn(700);    
                    }
                    else
                    {
                         $('.tipue-slide-screen').hide();
                         slide.animate({left: -slideWidth-1}, 200);
                    }
               });
               
               $('.tipue-slide-clear').on('click', function(event)
               {
                    $('#tipue-slide-input').val('');
                    $('#tipue-slide-content').fadeOut(set.speed, function()
                    {
                         $('#tipue-slide-content').html('');
                    })
                    $('.tipue-slide-clear').fadeOut(100);    
               });
                                   
          });
     };
     
})(jQuery);
