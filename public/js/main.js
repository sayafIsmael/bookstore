/**
 * Quick'n'Dirty autoscroller...
 */
function scrollLeft() {
	
	var $itemxs = $(".itemx");					// ALL itemxs
	
	// No scroll if wrapper is hovered.
	if ( $('.itemx-wrapper').data('hover') )
		return;
	
	// Check so we have itemxs, and more itemxs than currently on screen... else return!
	if ( $itemxs.length <= 0 || $itemxs.first().offset().top == $itemxs.last().offset().top )
		return;
	
	// Get itemxs on screen... (based on top)
	var itemxsOnScreen = 1;
	for ( x=1; x < $itemxs.length; x++ ){
		if ( $itemxs.first().offset().top == $itemxs.eq(x).offset().top )
			itemxsOnScreen++;
	}
	
	var $first = $itemxs.slice(0,1),		// first itemx
	$rest  = $itemxs.slice(1),			// All BUT the first itemxs
	$off   = $itemxs.slice(itemxsOnScreen);		// All off screen itemxs

	// Offset to scroll the rest of the elements when itemxs adjust left.
	var offset = $rest.first().offset().left - $first.offset().left;

	// Animate the first itemx fast..
	$first.animate({left: -$first.outerWidth(true)-50 }, 400);

	// Set all off screen itemxs to hidden, so we can fade in later..
	$off.hide();
	
	// Animate the rest of the itemxs a little slower.
	$rest.animate({left: '-'+offset+'px'}, 800, ).promise().done( function() {
		// Reset the itemxs CRAZY THINGS GOING ON HERE?!?!
		var newHtml = '<div class="itemx">' + $first.html().trim() + "</div>\n\r";
		$(".itemx-wrapper").append( newHtml );
		$itemxs.first().remove();
		$itemxs.css({left: ''});

		// Fade in all off screen (+ the last) itemxs, cheat don't really matter.
		$off.fadeIn(400);
	});
	
}

/**
 * Set hover state, :hover fake.
 */
$('.itemx-wrapper').hover(
	function() { $(this).data('hover', true); },
	function() { $(this).data('hover', false); }
).data('hover', false);

/**
 * Set up interval
 */
$(document).ready( function() {
	var interval = setInterval( function(){
			scrollLeft();
	}, 3000 );
});