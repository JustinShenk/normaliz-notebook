// Load Hilbert Basis lookup dictionary.
console.log("src loaded");

var hilbertBases = {}
$(document).ready(function() { 
	console.log("script loaded");

	$.getJSON('bases.json',function(data) {
	  hilbertBases = data;
	});
});

function calculate() {
    var sourceEnc = escape($("#sourceVector").val());
    var compareEnc = escape($("#compareVector").val());
    var [sx, sy] = sourceEnc.split('%2C');
    var [cx, cy] = compareEnc.split('%2C');
    var vectorCombination = '[' + String(sx) + ', ' + String(sy) + '],[' + String(cx) + ', ' + String(cy) + ']';
    var output = JSON.stringify(hilbertBases[vectorCombination]);
    // console.log(String(output));
    $("#output").html(output);
    drawHilbertBasis(hilbertBases[vectorCombination]);                
};

function drawHilbertBasis(basis) {
	basis.forEach(function(element) {		
		basisCircles.append("circle")
		.attr("r", 4)
		.attr("fill", "yellow")
		.attr("fill-opacity", 0.8)
		.attr("cx", element[0] * scaleFactor)
		.attr("cy", element[1] * -scaleFactor);
	});
	console.log(JSON.stringify(basis));
	
}