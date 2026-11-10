import { DataTables } from "./datatables";

class DataRecord {
    public Data: Record<string, string>;
    public ID: number;
    public IsPrimaryImage: boolean;
    public ImageFileName: string;

    public Title: string;
    public Author: string;
    public Year: string;
    public Repository: string;
    public CreditLine: string;

    public RelatedID: number;
    public RelatedDistance: number;

    public StartX: number;
    public StartY: number;
    public Seed: number;

    public Drawn: boolean;

    public constructor(data: Record<string, string>, sectionHeader: Record<string, string>) {
        this.Data = data;
        this.ID = parseInt(data["ID"] ?? "0");
        this.IsPrimaryImage = !!data["Primary Image"];
        this.ImageFileName = data["File Name"] ?? "";

        this.Title = data["Title"] ?? "";
        this.Author = data["Author"] ?? "";
        this.Year = data["Year"] ?? "";
        this.Repository = data["Repository"] ?? "";
        this.CreditLine = data["Credit Line"] ?? "";

        this.RelatedID = parseInt(data["Related ID"] ?? "0");
        this.RelatedDistance = parseFloat(data["Related Distance"] ?? "0");

        this.StartX = parseFloat(sectionHeader["Start X"] ?? "0");
        this.StartY = parseFloat(sectionHeader["Start Y"] ?? "0");
        this.Seed = parseFloat(sectionHeader["Layout Random Seed"] ?? "0");
        this.Drawn = false;
    }
}

class DataImage {
    public Filename: string;
    public Width: number;
    public Height: number;

    public constructor(filename: string, width: number, height: number) {
        this.Filename = filename;
        this.Width = width;
        this.Height = height;
    }
}

class RelatedRecord {
    public A: number;
    public B: number;
    public Distance: number;

    public constructor(a: number, b: number, distance: number) {
        this.A = a;
        this.B = b;
        this.Distance = distance;
    }
}

export class Data {
    public Images: DataImage[];
    public Records: DataRecord[];
    public Related: RelatedRecord[];

    public constructor() {
        this.Images = this.GetImageSizes();
        this.Records = this.GetMainTable();
        this.Related = this.GenerateRelated();
    }

    public GetDataRecord(id: number) {
        for (var i = 0; i < this.Records.length; i++) {
            var d = this.Records[i];
            if (d && d.ID == id) {
                return d;
            }
        }
        return null;
    }

    public GetDataImage(filename: string) {
        for (var i = 0; i < this.Images.length; i++) {
            var d = this.Images[i];
            if (d && d.Filename == filename) {
                return d;
            }
        }
        return null;
    }


    private GetImageSizes(): DataImage[] {
        let data = DataTables.parseTable(DataTables.imageDataHeader, DataTables.imageData);
        let out: DataImage[] = [];
        data.forEach(line => {
            if (!line.Filename || !line.Width || !line.Height) return;
            out.push(new DataImage(line.Filename, parseInt(line.Width), parseInt(line.Height)))
        });
        return out;
    }

    private GetMainTable(): DataRecord[] {
        let data = DataTables.parseTable(DataTables.mainDataHeader, DataTables.mainData);
        let layouts = DataTables.parseTable(DataTables.imageLayoutHeader, DataTables.imageLayouts);
        let output: DataRecord[] = [];

        let sectionHeader: Record<string, string> = {};
        for (let i = 0; i < data.length; i++) {
            let row = data[i];
            if (!row || !row.ID || row.ID[0] == "x") continue;

            if (row.ID[0] == "[") {
                let found = false;
                for (let j = 0; j < layouts.length; j++) {
                    let layout = layouts[j];
                    if (!layout) continue;
                    if (row.ID == layout.ID) {
                        found = true;
                        sectionHeader = layout;
                        break;
                    }
                }
                if (!found) {
                    console.log("Layout not found " + row.ID);
                }
            }
            else {
                output.push(new DataRecord(row, sectionHeader));
            }
        }

        return output;
    }

    private GenerateRelated() {
        let output: RelatedRecord[] = [];

        /*
        Old version with inline image links
        for (var i = 0; i < this.Records.length; i++) {
            var r = this.Records[i];
            if (!r?.ID || !r?.RelatedID || r.ID == r.RelatedID) continue;
            output.push(new RelatedRecord(r.ID, r.RelatedID, r.RelatedDistance))
        }
        output.sort(function (a, b) { return b.Distance - a.Distance });
        */

        // New related, uses image filename pairs
        var lines = DataTables.parseRows(DataTables.imagePairs);
        lines.forEach(line => {
            if (line.length < 2 || !line[0] || !line[1]) return;
            var a = this.FindRecordByImageFile(line[0]);
            var b = this.FindRecordByImageFile(line[1]);
            if (!a) {
                console.log("Image not found " + line[0] + " (a)");
                return;
            }
            if (!b) {
                console.log("Image not found " + line[1] + " (b)");
                return;
            }
            output.push(new RelatedRecord(a.ID, b.ID, 0.5));
        });

        return output;
    }

    private FindRecordByImageFile(image: string | undefined) {
        for (var i = 0; i < this.Records.length; i++) {
            var r = this.Records[i];
            if (r?.ImageFileName == image) return r;
        }
        return null;
    }
}