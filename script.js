// Load Hilbert Basis lookup dictionary.
console.log("src loaded");

var hilbertBases = {}
    // $(document).ready(function() { 
console.log("script loaded");

$.getJSON('bases.json', function(data) {
    hilbertBases = data;
});
// });

function calculate() {
    var sourceEnc = escape($("#sourceInput").val());
    var compareEnc = escape($("#compareInput").val());
    var [sx, sy] = sourceEnc.split('%2C');
    var [cx, cy] = compareEnc.split('%2C');
    var vectorCombination = '[' + String(sx) + ', ' + String(sy) + '],[' + String(cx) + ', ' + String(cy) + ']';
    console.log(vectorCombination)
    var output = JSON.stringify(hilbertBases[vectorCombination]);
    $("#output").html(output);
    sourceVector.datum().x = sx * scaleFactor;
    sourceVector.datum().y = -sy * scaleFactor;
    compareVector.datum().x = cx * scaleFactor;
    compareVector.datum().y = -cy * scaleFactor;
    drawHilbertBasis(hilbertBases[vectorCombination]);
};

function drawHilbertBasis(basis) {
    console.log(basis);
    update();
    svg.selectAll("circle.basisCircles").remove();
    if (basis != undefined) {
        basis.forEach(function(element) {
            basisCircles.append("circle")
                .attr("class", "basisCircles")
                .attr("r", 4)
                .attr("fill", "yellow")
                .attr("fill-opacity", 1.0)
                .attr("cx", element[0] * scaleFactor)
                .attr("cy", element[1] * -scaleFactor);
        });
    } else {
        console.log("Error: Basis not loaded")
    }

}
