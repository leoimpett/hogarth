import type {Data} from "./data";
import { SeedRandom } from "./seedRandom";

class Box{
    public ID: number;
    public X: number;
    public Y: number;
    public Width: number;
    public Height: number;
    public ImageFilename: string;
    public $Image: JQuery<HTMLElement>;
    
    public constructor(id: number, x: number, y: number, width: number, height: number, imageFilename: string, $image: JQuery<HTMLElement>){
        this.ID = id;
        this.X =x;
        this.Y = y;
        this.Width = width;
        this.Height = height;
        this.ImageFilename = imageFilename;
        this.$Image = $image;
    }
}

export class Drawing {

    private data: Data;
    private $body: JQuery<HTMLElement>;
    private boxes: Box[]; 
    
    public constructor(data: Data){
        this.data = data;
        this.$body = $("body");
        this.boxes = [];
    }

    public Run() {
        this.drawBox(101, 45, 25, 12);
        this.drawBox(501, 70, 70, 12);
        this.drawBox(301, 25, 110, 12);
        this.drawBox(401, 20, 70, 12);
        while (this.drawRelated(7)) { }
    }

    private drawBox(id: number, x: number, y: number, size: number){
        var w = size;
        var h = size;
        var d = this.data.GetDataRecord(id);

        if (!d) return;

        var filename = d.ImageFileName.toLowerCase();
        filename = filename.replace(/\.[^.]{1,4}$/, "");
        filename = filename.replace(/[^a-zA-Z0-9]+/g, "-");
        filename = filename + ".jpg";

        var i = this.data.GetDataImage(filename);
        if (i){
            var newSize = this.boxResize(i.Width, i.Height, size); 
            w = newSize.Width;
            h = newSize.Height;
        }

        var $img = this.$newImage(filename, w, h);
        $img.css("left", x + "vw");
        $img.css("top", y + "vw");
        this.$body.append($img);

        this.boxes.push(new Box(id, x, y, w, h, filename, $img))
    }

    private drawRelated(seed: number) {
        let rnd = new SeedRandom(seed);
        let deg2rad = Math.PI / 180;
        let rad2deg = 180 / Math.PI;

        for (var i = 0; i < this.data.Related.length; i++) {
            var relatedPair = this.data.Related[i];
            if (!relatedPair) continue;

            var boxA = this.getBox(relatedPair.A);
            var boxB = this.getBox(relatedPair.B);

            // Check if only 1 box present
            if ((boxA ? 1 : 0) + (boxB ? 1 : 0) != 1) continue;

            var startBox = null;
            var relatedId = 0;
            if (boxA) {
                startBox = boxA;
                relatedId = relatedPair.B;
            } else {
                startBox = boxB;
                relatedId = relatedPair.A;
            }

            if (!startBox) continue;

            var angle = rnd.Next() * 360;
            var anglePlus = 0;
            var distanceStep = (startBox.Width + startBox.Height) / 1.5;
            var distance = distanceStep;
            while (true) {
                var radAngle = (angle + anglePlus) * deg2rad;
                var candidateX = startBox.X + Math.sin(radAngle) * distance;
                var candidateY = startBox.Y + Math.cos(radAngle) * distance;
                var overlapping = this.checkOverlappingBox(candidateX, candidateY);
                if (overlapping) {
                    anglePlus += 10;
                    if (anglePlus > 350) {
                        anglePlus = 0;
                        distance += distanceStep / 2;
                    }
                    continue;
                }

                var line = this.getDistanceAndRotation(startBox.X, startBox.Y, candidateX, candidateY);
                var $line = $("<div class='line'></div>");
                $line.css("left", line.MidpointX + "vw");
                $line.css("top", line.MidpointY + "vw");
                $line.css("width", (line.Distance) + "vw");
                $line.css("margin-left", (line.Distance / -2) + "vw");
                $line.css("transform", "rotate(" + (line.RotationRadians * rad2deg) + "deg)")
                this.$body.append($line);

                this.drawBox(relatedId, candidateX, candidateY, 8);
                return true;
            }
        }
        return false;
    }

    
    private getBox(id: number) {
        for (var i = 0; i < this.boxes.length; i++) {
            if (this.boxes[i]?.ID == id) return this.boxes[i];
        }
        return null;
    }

    private checkOverlappingBox(x: number, y: number) {
        for (var i = 0; i < this.boxes.length; i++) {
            var box = this.boxes[i];
            if (!box) continue;
            var w = box.Width * 1.1;
            var h = box.Height * 1.1;
            if (x > (box.X - w) && x < (box.X + w) && y > (box.Y - h) && y < (box.Y + h)) {
                return true;
            }
        }
        return false;
    }

    private getDistanceAndRotation(x1: number, y1: number, x2: number, y2: number) {
        // Calculate the differences in x and y coordinates
        const dx = x2 - x1;
        const dy = y2 - y1;

        // Calculate the Euclidean distance using the Pythagorean theorem
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Calculate the angle (rotation) using Math.atan2()
        // Math.atan2(dy, dx) returns the angle in radians between the positive x-axis
        // and the point (dx, dy).
        const rotationRadians = Math.atan2(dy, dx);

        return {
            Distance: distance,
            MidpointX: (x1 + x2) / 2,
            MidpointY: (y1 + y2) / 2,
            RotationRadians: rotationRadians,
        };
    }

    private boxResize(currentWidth: number, currentHeight: number, maxDimension: number) {
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
            Width: newWidth,
            Height: newHeight
        };
    }

    private $newImage(url:string, w:number, h:number) {
        return $("<img src='img/500/"+url+"' style='width:"+w+"vw;height:"+h+"vw;margin:-"+(h/2)+"vw 0 0 -"+(w/2)+"vw; position:absolute' />");
    }
}