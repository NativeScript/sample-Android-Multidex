(function() { 
    var result = "";
    var methods = 20 * 1000;
    
    var package = "package com.tns;\n";
    var classHeader = "public class RedundantClassNameWithTooManyMethods {\n";
    var classFooter = "\n}"
        
    result += package;    
    result += classHeader;    
        
    var method = " public static void Method0() { }\n";
    result += method;    
        
    for (var index = 1; index < methods; index++) {
        method = " public static void Method" + index + "() {";
        method += " Method" + (index-1) + "(); }\n";
        
        result += method;     
    }
    
    result += classFooter;    
    
    console.log(result);
    
    return result;
})();

