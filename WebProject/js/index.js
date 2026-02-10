"use strict";


function run() {
    var $body = $("body");
    var $img = $newImage();
    $img.css("left", "50vw");
    $img.css("top", "45vw");
    $body.append($img);

    var boxes = [];
    boxes.push(box(1, 50, 45, 10, 10));

    while (drawRelated(boxes)) { }

}

function drawRelated(boxes) {
    var $body = $("body");

    for (var i = 0; i < relatedData.length; i++) {
        var relatedPair = relatedData[i];
        var boxA = getBox(relatedPair.a, boxes);
        var boxB = getBox(relatedPair.b, boxes);

        // Check if only 1 box present
        if (boxA == null && boxB == null) continue;
        if (boxA != null && boxB != null) continue;

        var startBox = null;
        var relatedId = 0;
        if (boxA) {
            startBox = boxA;
            relatedId = relatedPair.b;
        } else {
            startBox = boxB;
            relatedId = relatedPair.a;
        }

        var angle = Math.random() * 360;
        var anglePlus = 0;
        var distanceStep = (startBox.w + startBox.h) / 1.5;
        var distance = distanceStep;
        while (true) {
            var radAngle = (angle + anglePlus) * deg2rad;
            var candidateX = startBox.x + Math.sin(radAngle) * distance;
            var candidateY = startBox.y + Math.cos(radAngle) * distance;
            var overlapping = checkOverlappingBox(candidateX, candidateY, boxes);
            if (overlapping) {
                anglePlus += 10;
                if (anglePlus > 350) {
                    anglePlus = 0;
                    distance += distanceStep / 2;
                }
                continue;
            }
            var $img = $newImage();
            $img.css("left", candidateX + "vw");
            $img.css("top", candidateY + "vw");
            $body.append($img);

            var line = getDistanceAndRotation(startBox.x, startBox.y, candidateX, candidateY);
            var $line = $("<div class='line'></div>");
            $line.css("left", line.midpointX + "vw");
            $line.css("top", line.midpointY + "vw");
            $line.css("width", (line.distance) + "vw");
            $line.css("margin-left", (line.distance / -2) + "vw");
            $line.css("transform", "rotate(" + (line.rotationDegrees) + "deg)")
            $body.append($line);

            boxes.push(box(relatedId, candidateX, candidateY, 10, 10));
            return true;
        }
    }
    return false;


    var startBox = getBox(id, boxes);
    var related = findRelated(id);

    if (!related) return;

    for (var i = 0; i < related.length; i++) {
        var relatedId = related[i];
        if (getBox(relatedId, boxes)) continue; // Box already drawn

        var angle = Math.random() * 360;
        var anglePlus = 0;
        var distanceStep = (startBox.w + startBox.h) / 1.5;
        var distance = distanceStep;
        var found = false;
        while (!found) {
            var radAngle = (angle + anglePlus) * deg2rad;
            var candidateX = startBox.x + Math.sin(radAngle) * distance;
            var candidateY = startBox.y + Math.cos(radAngle) * distance;
            var overlapping = checkOverlappingBox(candidateX, candidateY, boxes);
            if (overlapping) {
                anglePlus += 10;
                if (anglePlus > 350) {
                    anglePlus = 0;
                    distance += distanceStep / 2;
                }
                continue;
            }
            found = true;
            var $img = $newImage();
            $img.css("left", candidateX + "vw");
            $img.css("top", candidateY + "vw");
            $body.append($img);

            var line = getDistanceAndRotation(startBox.x, startBox.y, candidateX, candidateY);
            var $line = $("<div class='line'></div>");
            $line.css("left", line.midpointX + "vw");
            $line.css("top", line.midpointY + "vw");
            $line.css("width", (line.distance) + "vw");
            $line.css("margin-left", (line.distance / -2) + "vw");
            $line.css("transform", "rotate(" + (line.rotationDegrees) + "deg)")
            $body.append($line);

            boxes.push(box(relatedId, candidateX, candidateY, 10, 10));
        }
    }

}

function $newImage() {
    return $("<img src='test.jpg' style='width:10vw;height:10vw;margin:-5vw 0 0 -5vw; position:absolute' />");
}

function getBox(id, boxes) {
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].id == id) return boxes[i];
    }
    return null;
}

function checkOverlappingBox(x, y, boxes) {
    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        var size = box.w * 1.1;
        if (x > (box.x - size) && x < (box.x + size) && y > (box.y - size) && y < (box.y + size)) {
            return true;
        }
    }
    return false;
}

function getDistanceAndRotation(x1, y1, x2, y2) {
    // Calculate the differences in x and y coordinates
    const dx = x2 - x1;
    const dy = y2 - y1;

    // Calculate the Euclidean distance using the Pythagorean theorem
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Calculate the angle (rotation) using Math.atan2()
    // Math.atan2(dy, dx) returns the angle in radians between the positive x-axis
    // and the point (dx, dy).
    const rotationRadians = Math.atan2(dy, dx);

    // Convert radians to degrees if desired
    const rotationDegrees = rotationRadians * (180 / Math.PI);

    return {
        distance: distance,
        midpointX: (x1 + x2) / 2,
        midpointY: (y1 + y2) / 2,
        rotationRadians: rotationRadians,
        rotationDegrees: rotationDegrees
    };
}

/**
 * 
 * @param {string} head 
 * @param {string} body 
 * @returns {string[]}
 */
function parseTable(head, body) {
    var output = [];
    var heads = head.split("\t");

    var lines = body.replaceAll("\r", "").split("\n");

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.trim() == "") continue;

        var outputLine = [];

        var cols = line.split("\t");
        for (var j = 0; j < cols.length; j++) {
            var header = heads[j];
            if (!header) continue;

            outputLine[header] = cols[j].trim();
        }

        output.push(outputLine);
    }

    return output;
}

/**
 * 
 * @param {number} id 
 * @param {number} x 
 * @param {number} y 
 * @param {number} w 
 * @param {number} h 
 */
function box(id, x, y, w, h) {
    return { id: id, x: x, y: y, w: w, h: h };
}

/**
 * 
 * @param {number} id 
 */
function buildRelated() {
    var output = [];
    var found = 0;
    for (var i = 0; i < data.length; i++) {
        var line = data[i];
        if (line["ID"] != "") {
            found = parseInt(line["ID"]);
        }
        if (!found) continue;

        var found2 = parseInt(line["Related ID"]);
        if (!found2 || found == found2) continue;

        output.push({ a: found, b: found2, distance: parseFloat(line["Related Distance"]) })
    }
    output.sort(function (a, b) { return b.distance - a.distance });
    return output;
}

function findRelated(id) {
    var output = [];

    for (var i = 0; i < relatedData.length; i++) {
        var related = relatedData[i];
        if (related.a == id) {
            output.push({ id: related.b, distance: related.distance });
        } else if (related.b == id) {
            output.push({ id: related.a, distance: related.distance });
        }
    }

    return output;
}



var deg2rad = (Math.PI / 180);
var data = parseTable("ID	Primary Image	File Name	Title	Author	Year	Repository	Credit Line	Description	Related ID	Related Distance	Link Thumbnail Image	Link Description", `
1	1	Example 1.jpg	Some Example	Person	1799	Made up	-	-	2	0.95		Appology to Some Example parodies the original																	
									3	0.6		Other Example was a follow-up to Some Example																	
									4	0.5																			
2		Example 2.jpg	Appology to Some Example	Name	1899	Made up	-	-	3	0.5																			
									4	0.6																			
3		Example 3.jpg	Other Example	Here	1801	Made up	-	-	4	0.8																			
4		Example 4.jpg	More example	-	1802	Made up	-	-																					
5									4	0.7																			
6									5	0.1																			
7									5	0.1																			
8									5	0.1																			
9									1	0.1																			
10									1	0.1																			
`);
var relatedData = buildRelated();