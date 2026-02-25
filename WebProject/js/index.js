"use strict";


function run() {
    var $body = $("body");

    var boxes = [];
    boxes.push(drawBox($body, 101, 45, 25, 12));
    boxes.push(drawBox($body, 501, 70, 70, 12));
    boxes.push(drawBox($body, 301, 25, 110, 12));
    boxes.push(drawBox($body, 401, 20, 70, 12));

    while (drawRelated(boxes, 7)) { }

}

function drawRelated(boxes, seed) {
    var rnd = SeedRandom(seed);
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

        var angle = rnd.next() * 360;
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

            var line = getDistanceAndRotation(startBox.x, startBox.y, candidateX, candidateY);
            var $line = $("<div class='line'></div>");
            $line.css("left", line.midpointX + "vw");
            $line.css("top", line.midpointY + "vw");
            $line.css("width", (line.distance) + "vw");
            $line.css("margin-left", (line.distance / -2) + "vw");
            $line.css("transform", "rotate(" + (line.rotationDegrees) + "deg)")
            $body.append($line);

            boxes.push(drawBox($body, relatedId, candidateX, candidateY, 8));
            return true;
        }
    }
    return false;
}

function $newImage(url, w, h) {
    return $("<img src='img/500/"+url+"' style='width:"+w+"vw;height:"+h+"vw;margin:-"+(h/2)+"vw 0 0 -"+(w/2)+"vw; position:absolute' />");
}

function getBox(id, boxes) {
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].id == id) return boxes[i];
    }
    return null;
}

function drawBox($body, id, x, y, size){
    var w = 10;
    var h = 10;
    var d = getData(id);

    if (!d) return;

    var filename = d["File Name"].toLowerCase();
    filename = filename.replace(/\.[^.]{1,4}$/, "");
    filename = filename.replace(/[^a-zA-Z0-9]+/g, "-");
    filename = filename + ".jpg";

    var i = getImageData(filename);
    if (i){
        var newSize = boxResize(i[1], i[2], size); 
        w = newSize.width;
        h = newSize.height;
    }

    var $img = $newImage(filename, w, h);
    $img.css("left", x + "vw");
    $img.css("top", y + "vw");
    $body.append($img);

    return box(id, x, y, w, h);
}

function getData(id) {
    id = id.toString();
    for (var i = 0; i < data.length; i++) {
        var d = data[i];
        if (d.ID == id){
            return d;
        }
    }
    return null;
}
function getImageData(filename) {
    for (var i = 0; i < imageSizes.length; i++) {
        var d = imageSizes[i];
        if (d[0] == filename){
            return d;
        }
    }
    return null;
}

function checkOverlappingBox(x, y, boxes) {
    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        var w = box.w * 1.1;
        var h = box.h * 1.1;
        if (x > (box.x - w) && x < (box.x + w) && y > (box.y - h) && y < (box.y + h)) {
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

function parseImageSizes(d){
    var out = [];
    var d = d.split(" ");
    for(var i=0; i<d.length; i++){
        out.push(d[i].split(","));
    }
    return out;
}

function boxResize(currentWidth, currentHeight, maxDimension) {
    currentWidth = parseFloat(currentWidth);
    currentHeight = parseFloat(currentHeight);
    let newWidth = currentWidth;
    let newHeight = currentHeight;

    // Determine the scaling factor
    const aspectRatio = currentWidth / currentHeight;

    if (currentWidth > currentHeight) {
        // Landscape or square image: set width to maxDimension and calculate height
        newWidth = maxDimension;
        newHeight = maxDimension / aspectRatio;
    } else {
        // Portrait image: set height to maxDimension and calculate width
        newHeight = maxDimension;
        newWidth = maxDimension * aspectRatio;
    }

    // Return the new dimensions, rounded to avoid fractional pixels if preferred
    return {
        width: newWidth,
        height: newHeight
    };
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

function SeedRandom(seed) {

    var i32 = 2 ** 32;

    var next = function () {
        var n = (seed = (seed + 0x6d2b79f5) % i32);
        n = Math.imul(n ^ (n >>> 15), n | 1);
        n ^= n + Math.imul(n ^ (n >>> 7), n | 61);
        return ((n ^ (n >>> 14)) >>> 0) / i32;
    }
    var range = function (a, b) {
        return a + (b - a) * next();
    };
    var int = function (a, b) {
        return Math.floor(range(a, b + 0.999));
    };

    return {
        next: next,
        range: range,
        int: int,
    }
}

var imageSizesString = "2014-lwl-lecture-poster.jpg,2600,2600 a-country-inn-hogarth-between-1747-1800.jpg,6877,4452 a-fashionable-marriage-castrato-krytyk-1-hi.jpg,2500,1859 a-fashionable-marriage-castrato-krytyk-2-hi.jpg,2500,1868 a-fashionable-marriage-castrato-krytyk-3-hi.jpg,2500,1868 a-fashionable-marriage-castrato-krytyk-4-hi.jpg,2500,1868 a-fashionable-marriage-lot-100-1-hi.jpg,1856,2500 a-fashionable-marriage-lot-100-2-hi.jpg,1859,2500 a-fashionable-marriage-lot-100-3-hi.jpg,1865,2500 a-fashionable-marriage-lot-100-4-hi.jpg,1850,2500 a-harlot-s-progress-loose-grip-1-hi.jpg,1872,2500 a-harlot-s-progress-loose-grip-2-hi.jpg,1858,2500 a-harlot-s-progress-loose-grip-3-hi.jpg,1856,2500 a-harlot-s-progress-loose-grip-4-hi.jpg,1860,2500 a-harlot-s-progress-tight-grip-1-hi.jpg,1863,2500 a-harlot-s-progress-tight-grip-2-hi.jpg,1862,2500 a-harlot-s-progress-tight-grip-3-hi.jpg,1859,2500 a-harlot-s-progress-tight-grip-4-hi.jpg,1856,2500 a-midnight-modern-conversation-reipenhausen-not-before-1786.jpg,3251,4568 a-midnight-modern-conversation-state-3-hogarth-hogarth-march-1732.jpg,6302,4956 a-new-book-of-small-figures-from-hogarth-hogarth-laurie-whittle-12-may-1794.jpg,2063,1814 a-rake-s-progress-bottoms-up-1-hi.jpg,1868,2500 a-rake-s-progress-bottoms-up-2-hi.jpg,1862,2500 a-rake-s-progress-bottoms-up-3-hi.jpg,1860,2500 a-rake-s-progress-bottoms-up-4-hi.jpg,1873,2500 a-rake-s-progress-hole-in-her-stocking-1-hi.jpg,2000,1494 a-rake-s-progress-hole-in-her-stocking-2-hi.jpg,2500,1872 a-rake-s-progress-hole-in-her-stocking-3-hi.jpg,2500,1867 a-rake-s-progress-hole-in-her-stocking-4-hi.jpg,2500,1852 a-rakes-progress-plate-3-hogarth-hogarth-24-june-1735.jpg,5605,4989 a-rakes-progress-plate-6-hogarth-hogarth-june-25-1735.jpg,6745,5140 a-satire-on-hogarth-and-the-rev-c-churchill-1763.jpg,1561,1296 alamy-umm-al-quwain-stamp-of-hogarth.jpg,3175,3950 an-answer-john-wilkes-1763.jpg,2097,3224 apologies-to-hogarth-detail-rockman-2022.jpg,4919,6846 battle-of-the-pictures-barlow-boydell-1791.jpg,6080,5182 battle-of-the-pictures-cook-stockdale-1806.jpg,4159,3633 battle-of-the-pictures-unknown-simpkin-1880.jpg,6192,5088 bell-the-death-of-boris-yeltsin.jpg,6574,4835 bold-and-enterprising-lads-hogarth-not-before-1749.jpg,1565,2253 bold-and-enterprising-lads-hogarth-r-shaw-not-before-1749.jpg,1480,2143 boris-johnson-williams-2021.jpg,5099,6598 bruiser-clerk-scholey-1810.jpg,4946,6846 bruiser-cook-longman-1807.jpg,5163,6341 bruiser-dent-boydell-1791.jpg,5126,6774 bruiser-heath-restored-by-baldwin-and-cradock-1835.jpg,4683,6060 bruiser-mills-jones-co-1833.jpg,5140,6874 bruiser-mills-london-printing-and-publishing-1860s.jpg,5102,6651 bruiser-unknown-oliphant-anderson-ferrier-1883.jpg,4847,6280 bruiser-unknown-simpkin-1880.jpg,4970,6230 comic-muse-clerk-scholey-1810.jpg,5089,6776 comic-muse-copper-plate-detail-both-lights-1-0.jpg,7216,5412 comic-muse-copper-plate-detail-corner-light-0-0.jpg,7216,5412 comic-muse-copper-plate-detail-corner-light-0-5.jpg,7216,5412 comic-muse-copper-plate-detail-corner-light-1-0.jpg,7216,5412 comic-muse-copper-plate-detail-door-light-0-0.jpg,7216,5412 comic-muse-copper-plate-detail-door-light-0-5.jpg,7216,5412 comic-muse-copper-plate-detail-door-light-1-0.jpg,7216,5412 comic-muse-dent-boydell-1791.jpg,4996,6534 comic-muse-dent-hogarth-not-after-1793.jpg,3577,4708 comic-muse-heath-restored-by-baldwin-and-cradock-1835.jpg,4996,5300 comic-muse-moore-london-printing-and-publishing-1860s.jpg,5169,5791 comic-muse-state-4-hogarth-1758.jpg,5289,6733 comic-muse-state-5-hogarth-1758.jpg,5095,6784 comic-muse-state-6-hogarth-1758.jpg,5204,6699 comic-muse-state-7-hogarth-1764.jpg,5086,6759 comic-muse-unknown-oliphant-anderson-ferrier-1883.jpg,5083,5400 comic-muse-unknown-simpkin-1880.jpg,5007,6134 cook-gin-lane.jpg,4099,5705 copper-plate-comic-muse-hogarth-1764.jpg,3564,4128 copper-plate-smith-gulielmus-hogarth.jpg,5278,6885 cruelty-in-perfection-cook-longman-1807.jpg,5052,6261 cruelty-in-perfection-dent-boydell-1791.jpg,4980,5874 cruelty-in-perfection-dent-boydell-1793.jpg,4879,5801 cruelty-in-perfection-heath-restored-by-baldwin-and-cradock-1835.jpg,4760,5600 cruelty-in-perfection-pyet-scholey-1810.jpg,4907,6558 cruelty-in-perfection-romney-john-tallis-1853.jpg,5042,6029 cruelty-in-perfection-romney-london-printing-and-publishing-1860s.jpg,5082,5929 cruelty-in-perfection-unknown-oliphant-anderson-ferrier-1883.jpg,5023,5918 cruelty-in-perfection-unknown-simpkin-1880.jpg,4855,5871 davidsganes-deleted.jpg,828,512 de-lafond-william-hogarth.jpg,939,1500 detail-for-hogarth-gin-lane.jpg,2589,2062 gate-of-calais-clerk-scholey-1810.jpg,6455,4606 gate-of-calais-cook-longman-1807.jpg,6375,5117 gate-of-calais-cook-stockdale-1806.jpg,6352,5008 gate-of-calais-june-sayer-1768.jpg,7021,5004 gate-of-calais-radclyffe-london-printing-and-publishing-1860s.jpg,6119,4962 gate-of-calais-unknown-sayer-1768.jpg,4447,7140 gate-of-calais-unknown-simpkin-1880.jpg,6655,4218 gin-lane-clerk-scholey-1810.jpg,4946,6806 gin-lane-dent-boydell-1791.jpg,5117,5872 gin-lane-dent-boydell-1793.jpg,4854,5623 gin-lane-heath-restored-by-baldwin-and-cradock-1835.jpg,4877,5670 gin-lane-t-cook.jpg,600,764 gin-lane-unknown-london-printing-and-publishing-1860s.jpg,5251,6017 gin-lane-unknown-oliphant-anderson-ferrier-1883.jpg,4890,5734 gin-lane-unknown-simpkin-1880.jpg,5167,6239 groups-from-marriage-a-la-mode-plate-iv-riepenhausen-not-before-1786.jpg,1119,1781 gulielmus-hogarth-barlow-boydell-1791.jpg,4821,6086 gulielmus-hogarth-c-spooner-after-hogarth-1749.jpg,2654,3535 gulielmus-hogarth-clerk-scholey-1810.jpg,4853,6051 gulielmus-hogarth-cook-longman-1809.jpg,5118,6655 gulielmus-hogarth-rockman-2022.jpg,4919,6846 gulielmus-hogarth-smith-after-hogarth-1795.jpg,2762,3624 gulielmus-hogarth-smith-baldwin-and-cradock-1835.jpg,4752,6086 gulielmus-hogarth-state-4-hogarth-1749.jpg,5711,7130 gulielmus-hogarth-unknown-jones-co-1833-full-cover.jpg,5142,6530 gulielmus-hogarth-unknown-jones-co-1833.jpg,5142,5922 gulielmus-hogarth-unknown-london-printing-and-publishing-1860s.jpg,4984,6674 gulielmus-hogarth-unknown-oliphant-anderson-ferrier-1883.jpg,4675,6148 gulielmus-hogarth-unknown-simpkin-1880.jpg,4741,6048 harlot-s-progres-plate-2-unknown-simpkin-1880.jpg,6600,4306 harlot-s-progress-plate-2-clerk-scholey-1810.jpg,6356,4753 harlot-s-progress-plate-2-cook-longman-1807.jpg,6481,5115 harlot-s-progress-plate-2-cook-stockdale-1806.jpg,6262,5030 harlot-s-progress-plate-2-corbould-dent-boydell-1791.jpg,4829,3833 harlot-s-progress-plate-2-corbould-dent-boydell-1793.jpg,6171,4931 harlot-s-progress-plate-2-davenport-jones-co-1833.jpg,6280,4962 harlot-s-progress-plate-2-davenport-london-printing-and-publishing-1860s.jpg,6196,4978 harlot-s-progress-plate-2-heath-restored-by-baldwin-and-cradock-1835.jpg,6234,5087 harlot-s-progress-plate-2-hogarth-hogarth-april-1732.jpg,5198,6389 harlot-s-progress-plate-2-unknown-sayer-1768.jpg,6352,5143 harlots-progress-plate-2-state-1-hogarth-apr-1732.jpg,3416,2848 hogarth-battle-of-pictures-feb-1745.jpg,4157,4467 hogarth-gin-lane-state-3.jpg,2929,3522 hogarth-sarah-malcom-natl-galleries-of-scotland.jpg,600,765 huntington-hogarth-gin-lane.jpg,8736,11648 job-1447.jpg,5412,7216 job-1448.jpg,5412,7216 job-1449.jpg,7216,5412 job-1450.jpg,5412,7216 job-1451.jpg,1979,1933 job-1452.jpg,7216,5412 job-1453.jpg,7216,5412 job-1458.jpg,7216,5412 job-1461.jpg,5412,7216 job-1462.jpg,5412,7216 job-1463-copy.jpg,5142,6813 job-1463.jpg,5142,6813 john-wilkes-cook-g-g-j-robinson-april-1-1800.jpg,4169,5966 john-wilkes-cook-longmam-hurst-rees-orme-july-1-1807.jpg,4692,6092 john-wilkes-esq-cook-stockdale-1806.jpg,3539,4984 john-wilkes-state-1-hogarth-hogarth-may-16-1763.jpg,2180,3398 john-wilkes-state-2-hogarth-hogarth-may-16-1763.jpg,2212,3261 julian-assange-bluelou-2010.jpg,4887,6401 les-satyres-cruelty-in-perfection.jpg,5092,6826 les-satyres-gin-lane.jpg,5031,6750 march-of-finchley-cook-longman-1809.jpg,6526,5058 march-of-the-guards-towards-scotland-state-4-sullivan-hogarth-30-dec-1750.jpg,5198,6389 march-of-the-guards-towards-scotland-state-8-sullivan-hogarth-31-dec-1750.jpg,6262,4963 march-of-the-guards-towards-scotland-sullivan-hogarth-12-june-1761.jpg,6012,4846 march-to-finchley-clerk-scholey-1810.jpg,6396,4826 march-to-finchley-cook-stockdale-1806.jpg,6310,4787 march-to-finchley-dent-boydell-1793.jpg,6250,4693 march-to-finchley-heath-restored-by-baldwin-and-cradock-1835.jpg,6451,4973 march-to-finchley-moore-london-printing-and-publishing-1860s.jpg,5270,5307 march-to-finchley-nicholson-brain-1849.jpg,6675,5081 march-to-finchley-nicholson-london-printing-and-publishing-1860s.jpg,6304,4853 march-to-finchley-unknown-sayer-1768.jpg,6752,4540 marks-to-gin-drinkers.jpg,4412,6563 marriage-a-la-merde-plate-2-rockman-2022.jpg,6766,4823 marriage-a-la-mode-plate-2-clerk-scholey-1810.jpg,6364,4570 marriage-a-la-mode-plate-2-cook-longman-1808.jpg,6396,5097 marriage-a-la-mode-plate-2-cook-stockdale-1806.jpg,6427,5153 marriage-a-la-mode-plate-2-dent-boydell-1791.jpg,4982,4101 marriage-a-la-mode-plate-2-dent-boydell-1793.jpg,6095,5052 marriage-a-la-mode-plate-2-heath-restored-by-baldwin-and-cradock-1835.jpg,6044,4838 marriage-a-la-mode-plate-2-nicholson-jones-co-1833.jpg,6348,5008 marriage-a-la-mode-plate-2-nicholson-london-printing-and-publishing-1860s.jpg,5711,4657 marriage-a-la-mode-plate-2-unknown-sayer-1768.jpg,6722,4394 marriage-a-la-mode-plate-2-unknown-simpkin-1880.jpg,6861,4429 marriage-a-la-mode-plate-2-unknown-young-1823.jpg,6622,5041 marriage-a-la-mode-plate-4-earlom-boydell-1-jan-1798.jpg,6129,4937 marriage-a-la-mode-plate-4-ravenet-hogarth-1-april-1745.jpg,5442,7166 marshallcartoon.jpg,1226,1702 martin-and-the-pug-hogarth-cm-oct-2014-hi-res.jpg,2134,3183 martin-rowson.jpg,1000,737 midnight-modern-conversation-cook-stockdale-1806.jpg,6953,5005 midnight-modern-conversation-dent-boydell-1791.jpg,4766,3757 midnight-modern-conversation-heath-restored-by-baldwin-and-cradock-1835.jpg,6679,4857 midnight-modern-conversation-phillibrown-london-printing-and-publishing-1860s.jpg,6630,4863 midnight-modern-conversation-unknown-jones-co-1833.jpg,5254,6902 midnight-modern-conversation-unknown-simpkin-1880.jpg,6693,4280 morgan-lib-hogarth-gin-lane.jpg,1991,2500 morning-clerk-scholey-1810.jpg,4680,6250 morning-cook-longman-1807.jpg,5183,6064 morning-dent-boydell-1791.jpg,5011,5887 morning-heath-restored-by-baldwin-and-cradock-1835.jpg,4912,5844 morning-hogarth-etchmaster-1940s.jpg,5131,6611 morning-mollison-jones-co-1833.jpg,5043,6151 morning-mollison-london-printing-and-publishing-1860s.jpg,4991,6009 morning-unknown-oliphant-anderson-ferrier-1883.jpg,5128,6226 morning-unknown-sayer-1768.jpg,5012,6860 morning-unknown-simpkin-1880.jpg,4858,6118 mr-hogarth-hogarth-sayer-set-29-1749.jpg,732,630 npg-william-hogarth-hogarth-1757-58.jpg,1452,1500 o-the-roast-beef-bell-brighton-1996.jpg,7071,4896 o-the-roast-horse-bell-brighton-2013.jpg,6636,4835 pass-the-sun-cream-williams.jpg,3509,4746 rake-s-progress-plate-3-cook-longman-1809.jpg,6297,5115 rake-s-progress-plate-3-cook-stockdale-1806.jpg,6189,5069 rake-s-progress-plate-3-corbould-dent-boydell-1793.jpg,5908,4867 rake-s-progress-plate-3-heath-restored-by-baldwin-and-cradock-1835.jpg,5694,4683 rake-s-progress-plate-3-unknown-sayer-1768.jpg,6572,5122 rake-s-progress-plate-3-worthington-jones-co-1833.jpg,6069,4881 rake-s-progress-plate-3-worthington-london-printing-and-publishing-1860s.jpg,6169,5087 rake-s-progress-plate-6-cook-longman-1808.jpg,6154,5048 rake-s-progress-plate-6-cook-stockdale-1806.jpg,6152,5017 rake-s-progress-plate-6-corbould-dent-boydell-1791.jpg,4735,3794 rake-s-progress-plate-6-corbould-dent-boydell-1793.jpg,6018,4871 rake-s-progress-plate-6-heath-restored-by-baldwin-and-cradock-1835.jpg,5634,4638 rake-s-progress-plate-6-pyett-scholey-1810.jpg,6372,4917 rake-s-progress-plate-6-radclyffe-jones-co-1833.jpg,6323,5122 rake-s-progress-plate-6-radclyffe-london-printing-and-publishing-1860s.jpg,6056,5005 rake-s-progress-plate-6-unknown-sayer-1768.jpg,6905,5170 rake-s-progress-plate-6-unknown-simpkin-1880.jpg,6647,4264 richard-lee-golden-tobacco-roll-ireland-1794.jpg,3537,5169 riepenhausen-group-gin-lane.jpg,3288,4648 roast-beef-hogarth-hogarth-march-6-1749.jpg,3985,3391 roast-beef-hogarth-sayer-not-befpre-1766.jpg,4441,6857 rockman-apologies-to-hogarth-battle-of-pictures-detail.jpg,3238,2340 rockman-apologies-to-hogarth-marriage-a-la-mode-detail.jpg,3208,2361 rockman-apologies-to-hogarth.jpg,6734,4852 rowson-gin-lane-palimpsest.jpg,4843,6833 sarah-malcolm-barlow-boydell-1791.jpg,4888,5721 sarah-malcolm-clerk-scholey-1810.jpg,4925,6834 sarah-malcolm-cook-stockdale-1806.jpg,3743,3727 sarah-malcolm-heath-restored-by-baldwin-and-cradock-1835.jpg,3698,3624 sarah-malcolm-unknown-london-printing-and-publishing-1860s.jpg,5092,5805 sleaze-lane-williams.jpg,3531,4519 stage-coach-clerk-scholey-1810.jpg,6767,4825 stage-coach-cook-son-longman-1808.jpg,6780,4505 stage-coach-cook-stockdale-1806.jpg,4590,3226 stage-coach-dent-boydell-1793.jpg,6959,4884 stage-coach-engleheart-jones-co-1833.jpg,6921,4926 stage-coach-heath-restored-by-baldwin-and-cradock-1835.jpg,4066,2778 stage-coach-state-2-hogarth-hogarth-1747.jpg,2842,2058 stage-coach-state-3-hogarth-hogarth-1747.jpg,2837,2062 strolling-actresses-cook-longman-1806.jpg,6582,5102 strolling-actresses-cook-stockdale-1806.jpg,6271,4723 strolling-actresses-dent-boydell-1791.jpg,6148,4827 strolling-actresses-dent-boydell-1793.jpg,6468,5094 strolling-actresses-heath-restored-by-baldwin-and-cradock-1835.jpg,5986,4755 strolling-actresses-presbury-london-printing-and-publishing-1856.jpg,6710,5119 strolling-actresses-presbury-london-printing-and-publishing-1860s.jpg,5974,4657 strolling-actresses-state-4-hogarth-hogarth-march-25-1738.jpg,6285,4921 strolling-actresses-unknown-sayer-1768.jpg,6745,4523 t-colgate-2-deleted.jpg,781,512 t-colgate.jpg,818,512 tate-the-painter-and-his-pug-hogarth-1745.jpg,2926,3753 the-bruiser-bell-after-hogarth-1763.jpg,2169,3526 the-bruiser-state-2-hogarth-1763.jpg,2570,3409 the-bruiser-state-4-hogarth-1763.jpg,2548,3395 the-bruiser-state-5-hogarth-1763.jpg,4304,6027 the-bruiser-state-6-hogarth-1763.jpg,5140,6745 the-bruiser-state-7-hogarth-1763.jpg,2580,3459 the-march-to-finchley-state-1-sullivan-hogarth-dec-1750.jpg,5222,6741 the-march-to-finchley-state-2-sullivan-hogarth-dec-1750.jpg,5239,6869 the-painters-march-from-finchly-sandby-1754.jpg,4635,5257 the-poet-and-the-painter-ca-1763.jpg,2608,2013 williams-blinding-leading-the-blind.jpg,5099,6666 ";
var imageSizes = parseImageSizes(imageSizesString);
var deg2rad = (Math.PI / 180);
var data = parseTable("ID	Primary Image	File Name	Title	Author	Year	Repository	Credit Line	Description	Related ID	Related Distance	Link Thumbnail Image	Link Description", `
101	1	Hogarth_Gin Lane_State 3.tif								
102		Rowson_Gin Lane Palimpsest.tif							101	0.5
103		Bell_The death of Boris Yeltsin.tif							101	0.5
104		Les Satyres ... Gin Lane							101	0.5
105		Riepenhausen Group_Gin Lane.tif							101	0.5
106		Marks_To gin drinkers.tif							101	0.5
107		Morgan Lib_Hogarth_Gin Lane.jpg							101	0.5
108		Cook_Gin Lane.tif							101	0.5
109		Huntington Hogarth_Gin Lane.jpeg							101	0.5
110		Gin Lane_Unknown_Simpkin_1880.tif							101	0.5
111		Gin Lane_Unknown_London Printing and Publishing_1860s.tif							101	0.5
112		Gin Lane_Clerk_Scholey_1810.tif							101	0.5
113		Gin Lane_Dent_Boydell_1791.tif							101	0.5
114		Gin Lane_Unknown_Oliphant Anderson & Ferrier_1883.tif							101	0.5
115		Gin Lane_Heath (restored by)_Baldwin and Cradock_1835.tif							101	0.5
116		Gin Lane_Dent_Boydell_1793.tif							101	0.5
										
301	1	John Wilkes State 1_Hogarth_Hogarth_May 16 1763.tif								
302		John Wilkes State 2_Hogarth_Hogarth_May 16 1763.tif							301	0.5
303		Julian Assange_Bluelou_2010.tif							301	0.5
304		John Wilkes_Cook_Longmam,Hurst, Rees & Orme_July 1, 1807.tif							301	0.5
305		John Wilkes_Cook_G.G. & J. Robinson_April 1, 1800.tif							301	0.5
306		John Wilkes Esq_Cook_Stockdale_1806.tif							301	0.5
										
401	1	NPG_William Hogarth_Hogarth_1757-58.jpg								
402		Comic Muse State 4_Hogarth_1758.tif							401	0.5
403		Comic Muse State 5_Hogarth_1758.tif							401	0.5
404		Comic Muse State 6_Hogarth_1758.tif							401	0.5
405		Comic Muse State 7_Hogarth_1764.tif							401	0.5
										
501	1	Comic Muse State 4_Hogarth_1758.tif								
502		Comic Muse State 5_Hogarth_1758.tif							501	0.5
503		Comic Muse State 6_Hogarth_1758.tif							502	0.5
504		Comic Muse State 7_Hogarth_1764.tif							503	0.5
505		Comic muse_Dent_Hogarth_not after 1793.tif							501	0.5
506		Comic Muse_Unknown_Simpkin_1880.tif							501	0.5
507		Comic Muse_Moore_London Printing and Publishing_1860s.tif							501	0.5
508		Comic Muse_Unknown_Oliphant Anderson & Ferrier_1883.tif							501	0.5
509		Copper Plate_Comic Muse_Hogarth_1764.tif							504	0.5
510		Comic Muse_Heath (restored by)_Baldwin and Cradock_1835.tif							504	0.5
511		Comic Muse_Clerk_Scholey_1810.tif							504	0.5
512		Tit for Tat_Sandby_1763.tif							501	0.5
513		An Answer John Wilkes_1763.tif							504	0.5
`);
var relatedData = buildRelated();