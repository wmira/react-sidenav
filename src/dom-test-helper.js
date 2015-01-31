'use strict';


//expects a jasmine expect by default.

module.exports = {
    
    
    expectStyles  : function(domOrStyle,expected) {
        
        var style = domOrStyle.style || domOrStyle;

        Object.keys(expected).forEach(function (key) {
            expect(style[key]).toEqual(expected[key]);
        });
    }
    
};