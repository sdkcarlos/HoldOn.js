
(function(window,$){'use strict';
    
    function HoldOnAction(){
            if("undefined"==typeof jQuery){
                throw new Error("HoldOn.js requires jQuery");
            }
            
            var _holdon = {};
            var _core = {};
            var _settings = {
                instanceProtection:null
            };
            
            /**
             * 
             * @param {type} properties
             * @returns {undefined}
             */
            _holdon.open = function(properties){
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
                
                content = _core.getHtml(theme,properties);
                
                var Holder  = '<div id="holdon-overlay" style="display: none;">\n\
                                    <div id="holdon-content-container">\n\
                                        <div id="holdon-content">'+content+'</div>\n\
                                        <div id="holdon-message">'+message+'</div>\n\
                                    </div>\n\
                                </div>';
                
                // Remove protection and overlay before add the new one
                clearInterval(_settings.instanceProtection);
                $("#holdon-overlay").remove();
                
                $(Holder).appendTo('body').fadeIn(300);
                
                if(properties){
                    if(properties.backgroundColor){
                        $("#holdon-overlay").css("backgroundColor",properties.backgroundColor);
                    }
                    
                    if(properties.backgroundColor){
                        $("#holdon-message").css("color",properties.textColor);
                    }
                    
                    _core.protectInstance(properties);
                }
                
                return true;
            };
            
            /**
             * Closes the active instance of HoldOn
             * 
             * @returns {undefined}
             */
            _holdon.close = function(){
                if(document.getElementById('holdon-overlay')){
                    clearInterval(_settings.instanceProtection);

                    $('#holdon-overlay').fadeOut(300, function(){
                        $(this).remove();
                    });

                    _settings.instanceProtection = null;

                    return true;
                }
                
                return false;
            };
            
            
            /**
             * Activate remove protection for HoldOn.js
             * 
             * @param {type} properties
             * @returns {undefined}
             */
            _core.protectInstance = function(properties){
                var protection = setInterval(function(){
                    if(!document.getElementById('holdon-overlay')){
                        _holdon.open(properties);
                    }
                }, 100);
                
                console.log("hat");
                        
                _settings.instanceProtection = protection;
            };
            
            /**
             * Returns the html content with a given theme
             * 
             * @param {type} theme
             * @param {type} properties
             * @returns {String}
             */
            _core.getHtml = function(theme,properties){
                switch(theme){
                    case "custom":
                    return '<div style="text-align: center;">' + properties.content + "</div>";
                    case "sk-dot":
                    return '<div class="sk-dot"> <div class="sk-dot1"></div> <div class="sk-dot2"></div> </div>';
                    case "sk-rect":
                    return '<div class="sk-rect"> <div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div> </div>';
                    case "sk-cube":
                    return '<div class="sk-cube"> <div class="sk-cube1"></div> <div class="sk-cube2"></div> </div>';
                    case "sk-bounce":
                    return '<div class="sk-bounce"> <div class="bounce1"></div> <div class="bounce2"></div> <div class="bounce3"></div> </div>';
                    case "sk-circle":
                    return '<div class="sk-circle"> <div class="sk-circle1 sk-child"></div> <div class="sk-circle2 sk-child"></div> <div class="sk-circle3 sk-child"></div> <div class="sk-circle4 sk-child"></div> <div class="sk-circle5 sk-child"></div> <div class="sk-circle6 sk-child"></div> <div class="sk-circle7 sk-child"></div> <div class="sk-circle8 sk-child"></div> <div class="sk-circle9 sk-child"></div> <div class="sk-circle10 sk-child"></div> <div class="sk-circle11 sk-child"></div> <div class="sk-circle12 sk-child"></div> </div>';
                    case "sk-cube-grid":
                    return '<div class="sk-cube-grid"> <div class="sk-cube-child sk-cube-grid1"></div> <div class="sk-cube-child sk-cube-grid2"></div> <div class="sk-cube-child sk-cube-grid3"></div> <div class="sk-cube-child sk-cube-grid4"></div> <div class="sk-cube-child sk-cube-grid5"></div> <div class="sk-cube-child sk-cube-grid6"></div> <div class="sk-cube-child sk-cube-grid7"></div> <div class="sk-cube-child sk-cube-grid8"></div> <div class="sk-cube-child sk-cube-grid9"></div> </div>';
                    case "sk-folding-cube":
                    return '<div class="sk-folding-cube"> <div class="sk-cubechild1 sk-cube-parent"></div> <div class="sk-cubechild2 sk-cube-parent"></div> <div class="sk-cubechild4 sk-cube-parent"></div> <div class="sk-cubechild3 sk-cube-parent"></div> </div>';
                    case "sk-fading-circle":
                    return '<div class="sk-fading-circle"> <div class="sk-fading-circle1 sk-circle-child"></div> <div class="sk-fading-circle2 sk-circle-child"></div> <div class="sk-fading-circle3 sk-circle-child"></div> <div class="sk-fading-circle4 sk-circle-child"></div> <div class="sk-fading-circle5 sk-circle-child"></div> <div class="sk-fading-circle6 sk-circle-child"></div> <div class="sk-fading-circle7 sk-circle-child"></div> <div class="sk-fading-circle8 sk-circle-child"></div> <div class="sk-fading-circle9 sk-circle-child"></div> <div class="sk-fading-circle10 sk-circle-child"></div> <div class="sk-fading-circle11 sk-circle-child"></div> <div class="sk-fading-circle12 sk-circle-child"></div> </div>';
                    default:
                    console.warn(theme + " doesn't exist for HoldOn.js");
                    return '<div class="sk-rect"> <div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div> </div>';
                }
            };
            
            
        return _holdon;
    }
    
    if(typeof(HoldOn) === 'undefined'){
        window.HoldOn = HoldOnAction();
    }
    
})(window,jQuery);