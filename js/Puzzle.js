import { Highlight } from "./Highlight.js";
import { NeighborTracker } from "./NeighborTracker.js";

export class Puzzle {
    constructor () {
        this._nodeListBlocks = document.querySelectorAll('.block');
        this._blocks = Array.from(this._nodeListBlocks);
        this._highlight = new Highlight();
        this._neighborTracker = new NeighborTracker();

        this._puzzleBlocksEventListener();
    }

    _puzzleBlocksEventListener () {
        this._blocks.forEach(block => {
            block.addEventListener('click', (event) => {
                this._shuffle(event.target);
            })
        })
    }

    _shuffle (block) {
        this._highlight.toggle(block);
        let neighbors = this._neighborTracker.find(this._blocks.indexOf(block));
    
        neighbors.forEach(neighbor => {
            if (this._neighborTracker.isValid(this._blocks.indexOf(block), neighbor)) {
                this._highlight.toggle(this._blocks[neighbor]);
            }
        })
    }
}
