module( "jquery.hoverselector" );

test( "Not hovered", function() {
    expect(1);
    
    strictEqual( $( "<div>" ).is( ":hover" ), false, "Hover returns false on an unhovered element" );
});

asyncTest( "Hover", function() {
    expect(2);
    
    var hoverTarget = $( "<div>Hover over me</div>" ).css({
        position: "absolute",
        border: "4px solid red",
        fontWeight: "bold",
        top: "50%",
        left: "50%"
    }).appendTo( "body" );
    
    hoverTarget.bind( "mouseenter", function() {
        strictEqual( hoverTarget.is(":hover"), true, "Our hover target correctly reports it's state as hovered" );
        ok( $( ":hover" ).length > 1, "A general selector with :hover returns matched elements" );
        hoverTarget.remove();
        start();
    });
});