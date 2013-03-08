/*! jquery.hoverselector v0.1.0 | (c) 2013 Daniel Herman | opensource.org/licenses/MIT */
(function( $ ) {
    var prefixes = [ "moz", "webkit", "o", "ms" ],
        prefix = "",
        matches;

    do {
        matches = document.documentElement[ prefix ? prefix + "MatchesSelector" : "matchesSelector" ];
    }
    while( !matches && (prefix = prefixes.pop()) );
    
    if ( matches && !$.expr[":"].hover ) {
        $.expr[":"].hover = function( elem ) {
            return matches.call( elem, ":hover" );
        };
    }
}( jQuery ));