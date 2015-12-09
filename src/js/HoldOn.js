
(function(window){'use strict';
    
    function HoldOnAction(){
            if("undefined"==typeof jQuery){
                throw new Error("HoldOn.js requires jQuery");
            }
            
            var HoldOn = {};
            
            HoldOn.open = function(properties){
                $('#holdon-overlay').remove();//RemoveIfCalledBefore
                var theme = "sk-rect";
                var content = "";
                var message = "";
                
                if(properties){
                    if(properties.hasOwnProperty("theme")){//Choose theme if given
                        theme = properties.theme;
                    }
                    
                    if(properties.hasOwnProperty("message")){//Choose theme if given
                        message = properties.message;
                    }
                }
                
                switch(theme){
                    case "custom":
                        content = '<div style="text-align: center;">' + properties.content + "</div>";
                    break;
                    case "sk-dot":
                        content = '<div class="sk-dot"> <div class="sk-dot1"></div> <div class="sk-dot2"></div> </div>';
                    break;
                    case "sk-rect":
                        content = '<div class="sk-rect"> <div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div> </div>';
                    break;
                    case "sk-cube":
                        content = '<div class="sk-cube"> <div class="sk-cube1"></div> <div class="sk-cube2"></div> </div>';
                    break;
                    case "sk-bounce":
                        content = '<div class="sk-bounce"> <div class="bounce1"></div> <div class="bounce2"></div> <div class="bounce3"></div> </div>';
                    break;
                    case "sk-circle":
                        content = '<div class="sk-circle"> <div class="sk-circle1 sk-child"></div> <div class="sk-circle2 sk-child"></div> <div class="sk-circle3 sk-child"></div> <div class="sk-circle4 sk-child"></div> <div class="sk-circle5 sk-child"></div> <div class="sk-circle6 sk-child"></div> <div class="sk-circle7 sk-child"></div> <div class="sk-circle8 sk-child"></div> <div class="sk-circle9 sk-child"></div> <div class="sk-circle10 sk-child"></div> <div class="sk-circle11 sk-child"></div> <div class="sk-circle12 sk-child"></div> </div>';
                    break;
                    case "sk-cube-grid":
                        content = '<div class="sk-cube-grid"> <div class="sk-cube-child sk-cube-grid1"></div> <div class="sk-cube-child sk-cube-grid2"></div> <div class="sk-cube-child sk-cube-grid3"></div> <div class="sk-cube-child sk-cube-grid4"></div> <div class="sk-cube-child sk-cube-grid5"></div> <div class="sk-cube-child sk-cube-grid6"></div> <div class="sk-cube-child sk-cube-grid7"></div> <div class="sk-cube-child sk-cube-grid8"></div> <div class="sk-cube-child sk-cube-grid9"></div> </div>';
                    break;
                    case "sk-folding-cube":
                        content = '<div class="sk-folding-cube"> <div class="sk-cubechild1 sk-cube-parent"></div> <div class="sk-cubechild2 sk-cube-parent"></div> <div class="sk-cubechild4 sk-cube-parent"></div> <div class="sk-cubechild3 sk-cube-parent"></div> </div>';
                    break;
                    case "sk-fading-circle":
                        content = '<div class="sk-fading-circle"> <div class="sk-fading-circle1 sk-circle-child"></div> <div class="sk-fading-circle2 sk-circle-child"></div> <div class="sk-fading-circle3 sk-circle-child"></div> <div class="sk-fading-circle4 sk-circle-child"></div> <div class="sk-fading-circle5 sk-circle-child"></div> <div class="sk-fading-circle6 sk-circle-child"></div> <div class="sk-fading-circle7 sk-circle-child"></div> <div class="sk-fading-circle8 sk-circle-child"></div> <div class="sk-fading-circle9 sk-circle-child"></div> <div class="sk-fading-circle10 sk-circle-child"></div> <div class="sk-fading-circle11 sk-circle-child"></div> <div class="sk-fading-circle12 sk-circle-child"></div> </div>';
                    break;
                    default:
                        content = '<div class="sk-rect"> <div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div> </div>';
                        console.warn(theme + " doesn't exist for HoldOn.js");
                    break;
                }
                
                var Holder    = '<div id="holdon-overlay">\n\
                                    <div id="holdon-content-container">\n\
                                        <div id="holdon-content">'+content+'</div>\n\
                                        <div id="holdon-message">'+message+'</div>\n\
                                    </div>\n\
                                </div>';
                //no body append just a part of loading 
                $(properties.el).appendTo(Holder).fadeIn(300);
                
                if(properties){
                    //custom css style setting (object)
                    if(properties.style){
                        $("#holdon-overlay").css(properties.style);
                    }

                    if(properties.backgroundColor){
                        $("#holdon-overlay").css("backgroundColor",properties.backgroundColor);
                    }
                    
                    if(properties.backgroundColor){
                        $("#holdon-message").css("color",properties.textColor);
                    }
                }
            };
            
            HoldOn.close = function(){
                $('#holdon-overlay').fadeOut(300, function(){
                    $(this).remove();
                });
            };
            
        return HoldOn;
    }
    
    if(typeof(HoldOn) === 'undefined'){
        window.HoldOn = HoldOnAction();
    }
    
})(window);
