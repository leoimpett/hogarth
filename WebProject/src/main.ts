import {Data} from "./data";
import { Drawing } from "./drawing";
import { Interaction } from "./interaction";

let data = new Data();
let drawing = new Drawing(data);
let interaction = new Interaction();

drawing.Run();
interaction.Run();