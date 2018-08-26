
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
                var icnstyle = '', color = '#333';
                if(properties.textColor != undefined && properties.textColor) color = properties.textColor;
                if(properties.iconColor != undefined && properties.iconColor) color = properties.iconColor;
                //if(color) icnstyle = ' style="background-color: ' + color + '"';
                if(color) icnstyle = ' style="--iconColor: '+color+'"';
                switch(theme){
                    case "custom":
                    return '<div style="text-align: center;">' + properties.content + "</div>";
                    case "sk-dot":
                    return '<div class="sk-dot"> <div class="sk-dot1"'+icnstyle+'></div> <div class="sk-dot2"'+icnstyle+'></div> </div>';
                    case "sk-rect":
                    return '<div class="sk-rect"> <div class="rect1"'+icnstyle+'></div> <div class="rect2"'+icnstyle+'></div> <div class="rect3"'+icnstyle+'></div> <div class="rect4"'+icnstyle+'></div> <div class="rect5"'+icnstyle+'></div> </div>';
                    case "sk-cube":
                    return '<div class="sk-cube"> <div class="sk-cube1"'+icnstyle+'></div> <div class="sk-cube2"'+icnstyle+'></div> </div>';
                    case "sk-bounce":
                    return '<div class="sk-bounce"> <div class="bounce1"'+icnstyle+'></div> <div class="bounce2"'+icnstyle+'></div> <div class="bounce3"'+icnstyle+'></div> </div>';
                    case "sk-circle":
                        var str = '<div class="sk-circle">';
                        for(var i=1;i<=12;i++) str += '<div class="sk-circle'+i+' sk-child"'+icnstyle+'></div>';
                        return str + '</div>';
                    case "sk-cube-grid":
                        var str = '<div class="sk-cube-grid">';
                        for(i=1;i<=9;i++) str += '<div class="sk-cube-child sk-cube-grid'+i+'"'+icnstyle+'></div>';
                        return str + '</div>';
                    case "sk-folding-cube":
                        var str = '<div class="sk-folding-cube">';
                        var idx = [1,2,4,3];
                        for(var i in idx) str += '<div class="sk-cubechild'+idx[i]+' sk-cube-parent"'+icnstyle+'></div>';
                        return str + '</div>';
                    case "sk-fading-circle":
                        var str = '<div class="sk-fading-circle">';
                        for(var i=1;i<=12;i++) str += '<div class="sk-fading-circle'+i+' sk-circle-child"'+icnstyle+'></div>';
                        return str + '</div>';
                    default:
                    console.warn(theme + " doesn't exist for HoldOn.js");
                    return '<div class="sk-rect"> <div class="rect1"'+icnstyle+'></div> <div class="rect2"'+icnstyle+'></div> <div class="rect3"'+icnstyle+'></div> <div class="rect4"'+icnstyle+'></div> <div class="rect5"'+icnstyle+'></div> </div>';
                }
            };
            
            
        return _holdon;
    }
    
    if(typeof(HoldOn) === 'undefined'){
        window.HoldOn = HoldOnAction();
    }
    
})(window,jQuery);
