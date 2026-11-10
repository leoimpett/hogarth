import type { Data } from "./data";
import { SeedRandom } from "./seedRandom";

class Box {
    public ID: number;
    public X: number;
    public Y: number;
    public Width: number;
    public Height: number;
    public ImageFilename: string;
    public $Image: JQuery<HTMLElement>;

    public constructor(id: number, x: number, y: number, width: number, height: number, imageFilename: string, $image: JQuery<HTMLElement>) {
        this.ID = id;
        this.X = x;
        this.Y = y;
        this.Width = width;
        this.Height = height;
        this.ImageFilename = imageFilename;
        this.$Image = $image;
    }
}

export class Drawing {

    private readonly unit = "em";
    private data: Data;
    private $body: JQuery<HTMLElement>;
    private boxes: Box[];

    public constructor(data: Data) {
        this.data = data;
        this.$body = $("#imagemap");
        this.boxes = [];
    }

    public Run() {
        let size = 6;
        for (let i = 0; i < this.data.Records.length; i++) {
            let record = this.data.Records[i];
            if (record?.IsPrimaryImage) {
                if(record.Drawn) {
                    console.log(`${record.ID} (${record.ImageFileName}) already drawn`)
                    continue;
                }
                this.drawBox(record.ID, record.StartX, record.StartY, size);
                while (this.drawRelated(record.Seed)) { }
            }
        }

        for (let i = 0; i < this.data.Records.length; i++) {
            let record = this.data.Records[i];
            if (record && !record.Drawn) {
                console.log(`${record.ID} (${record.ImageFileName}) not linked`);
            }
        }
    }

    private drawBox(id: number, x: number, y: number, size: number) {
        let w = size;
        let h = size;
        let d = this.data.GetDataRecord(id);

        if (!d) return;

        let originalFilename = d.ImageFileName;
        let filename = originalFilename.toLowerCase()
            .replace(/\.[^.]{1,4}$/, "")
            .replace(/[^a-zA-Z0-9]+/g, "-")
            + ".jpg";

        let i = this.data.GetDataImage(filename);
        if (i) {
            let newSize = this.boxResize(i.Width, i.Height, size);
            w = newSize.Width;
            h = newSize.Height;
        } else {
            console.log(originalFilename + " not found (" + filename + ")");
            filename = "../error.png";
        }

        let $img = this.$newImage(d.Title, filename, w, h);
        $img.css("left", x + this.unit);
        $img.css("top", y + this.unit);
        this.$body.append($img);
        this.boxes.push(new Box(id, x, y, w, h, filename, $img))
        d.Drawn = true;
    }

    private drawRelated(seed: number) {
        let rnd = new SeedRandom(seed);
        let deg2rad = Math.PI / 180;
        let rad2deg = 180 / Math.PI;

        for (let i = 0; i < this.data.Related.length; i++) {
            let relatedPair = this.data.Related[i];
            if (!relatedPair) continue;

            let boxA = this.getBox(relatedPair.A);
            let boxB = this.getBox(relatedPair.B);

            // Check if only 1 box present
            if ((boxA ? 1 : 0) + (boxB ? 1 : 0) != 1) continue;

            let startBox = null;
            let relatedId = 0;
            if (boxA) {
                startBox = boxA;
                relatedId = relatedPair.B;
            } else {
                startBox = boxB;
                relatedId = relatedPair.A;
            }

            if (!startBox) continue;

            let angle = rnd.Next() * 360;
            let anglePlus = 0;
            let distanceStep = (startBox.Width + startBox.Height) / 1.5;
            let distance = distanceStep;
            while (true) {
                let radAngle = (angle + anglePlus) * deg2rad;
                let candidateX = startBox.X + Math.sin(radAngle) * distance;
                let candidateY = startBox.Y + Math.cos(radAngle) * distance;
                let overlapping = this.checkOverlappingBox(candidateX, candidateY, startBox.Width, startBox.Height);
                if (overlapping) {
                    anglePlus += 10;
                    if (anglePlus > 350) {
                        anglePlus = 0;
                        distance += distanceStep / 2;
                    }
                    continue;
                }

                let line = this.getDistanceAndRotation(startBox.X, startBox.Y, candidateX, candidateY);
                let $line = $("<div class='line'></div>");
                $line.css("left", line.MidpointX + this.unit);
                $line.css("top", line.MidpointY + this.unit);
                $line.css("width", (line.Distance) + this.unit);
                $line.css("margin-left", (line.Distance / -2) + this.unit);
                $line.css("transform", "rotate(" + (line.RotationRadians * rad2deg) + "deg)")
                this.$body.append($line);

                this.drawBox(relatedId, candidateX, candidateY, 6);
                return true;
            }
        }
        return false;
    }


    private getBox(id: number) {
        for (let i = 0; i < this.boxes.length; i++) {
            if (this.boxes[i]?.ID == id) return this.boxes[i];
        }
        return null;
    }

    private checkOverlappingBox(x: number, y: number, width: number, height: number) {

        if (x - width / 2 < 0 || y - height / 2 < 0) return true;

        for (let i = 0; i < this.boxes.length; i++) {
            let box = this.boxes[i];
            if (!box) continue;
            let w = (box.Width + width) * 0.55;
            let h = (box.Height + height) * 0.55;
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

    private $newImage(title: string, url: string, w: number, h: number) {
        var $div = $("<div />");
        $div.addClass("im");
        $div.css({
            width: w + this.unit,
            height: h + this.unit,
            marginLeft: (-w / 2) + this.unit,
            marginTop: (-h / 2) + this.unit,
        });
        var $img = $("<img />");
        $img.attr({
            src: "img/500/" + url,
            draggable: "false",
            alt: title
        });
        $div.append($img);
        $div.append("<div class='c'>" + title + "</div>");

        return $div;
    }
}