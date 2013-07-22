Template.roster.rendered = function(){
	$('.roster').hide();
	season = "#" + $('#rosterSelect').val();
	$(season).toggle();
}

Template.roster.events({
	'change #rosterSelect': function(){
		$('.roster').hide();
		season = "#" + $('#rosterSelect').val();
		$(season).toggle();
	}
})