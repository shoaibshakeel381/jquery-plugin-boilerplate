/**
 * Plugin Description
 * 
 * @author Shoaib Shakeel
 * @version 1.5.0
 * 
 * @param {object} $ jQuery
 * @param {object} document
 * @param {object} window
 * @param {undefined} undefined 
 */
;(function($, document, window, undefined) {
    "use strict";
    /**
     * Class
     * 
     * @param {object} elem jQuery DOM instance of element with contains records
     * @param {object} options options for plugin customization
     */
    var PluginName = function(elem, options) {
        var plugin = this,
                globals = {}; //global private variable collection object
        
        /////////////////////////////////////////
        //
        // Public Properties
        //
        /////////////////////////////////////////
        /**
         * Default Options Values for plugin
         * 
         * @public
         * @type object
         */
        plugin.defaults = {
            /**
             * Description
             * 
             * @type string
             */
            constant1: "value",
            /**
             * Description
             * 
             * @type string
             */
            constant2: "value",
        };
        
        /**
         * overriden Options Values for plugin
         * 
         * @public
         * @type object
         */
        plugin.settings = {
            
        };
        
        /////////////////////////////////////////
        //
        // Public Methods
        //
        /////////////////////////////////////////
        
        /**
         * Plugin Public method
         * @public
         */
        plugin.publicMethod = function() {
            // to do implementation
            //dump plugin setings
            console.log(plugin.settings);
        };
        
        /////////////////////////////////////////
        //
        // Constructor and Private Metods
        //
        /////////////////////////////////////////
        /**
         * Initialize Plugin
         * @private
         */
        var init = function() {
            // save custom plugin configurations
            plugin.settings = $.extend({}, plugin.defaults, options);
            
            // save element
            globals.$element = $(elem);
            
            // call private method
            privateMethod();
        };
        
        /**
         * This will bind click handlers for events
         * @private
         */
        var privateMethod = function() {
            //call public method
            plugin.publicMethod();
        };
        
        // Call Plugin Initializer
        init();
    };
    
    /////////////////////////////////////////
    //
    // Plugins Definition and API getter
    //
    /////////////////////////////////////////
    /**
     * Plugin Definition in jQuery Library
     * @param {object} option options for plugin customization
     */
	$.fn.pluginName = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);
		var methodReturn;

		var $set = this.each(function () {
    		var $this   = $(this);
    		var data    = $this.data('pluginName');
    		var options = typeof option === 'object' && option;
                
            // if data is not already added then first add it
    		if(!data) $this.data('pluginName', (data = new PluginName(this, options)));
                
            // handle public method or property call
            // apply will pass extra arguments to methods
            // Public method Call structure will be like this:
            // $(elem).pluginName('methodName'[, arg1[, arg2[, ...]]])
            // Public Property Call structure will be like this:
    		// $(elem).pluginName('propertyName')
    		if(typeof option === 'string') {
                if(typeof data[option] === 'function') {
                    methodReturn = data[option].apply(data, args);
                } else {
                    methodReturn = data[option];
                }
            }
    	});
            
        // if public method or property was not found then return all data
    	return (methodReturn === undefined) ? $set : methodReturn;
    };
})(jQuery, document, window);
