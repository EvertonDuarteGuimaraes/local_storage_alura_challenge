import { ColorHighlight } from "./ColorHighlight.js";
import { NeighborTracker } from "./NeighborTracker.js";
import { ScoreBar } from "./ScoreBar.js";

export class Puzzle {
    constructor () {
        this._nodeListBlocks = document.querySelectorAll('.block');
        this._blocks = Array.from(this._nodeListBlocks);
        this._colorHighlight = new ColorHighlight();
        this._neighborTracker = new NeighborTracker();
        this._scoreBar = new ScoreBar();

        this._puzzleBlocksEventListener();
    }

    _puzzleBlocksEventListener () {
        this._blocks.forEach(block => {
            block.addEventListener('click', (event) => {
                this._shuffle(event.target);
                this._scoreBar.update(this._blocks);
            });
        });
    }

    _shuffle (block) {
        this._colorHighlight.toggle(block);

        let neighbors = this._neighborTracker.find(this._blocks.indexOf(block));
        neighbors.forEach(neighbor => {
            if (this._neighborTracker.isValid(this._blocks.indexOf(block), neighbor)) {
                this._colorHighlight.toggle(this._blocks[neighbor]);
            }
        });
    }
}
