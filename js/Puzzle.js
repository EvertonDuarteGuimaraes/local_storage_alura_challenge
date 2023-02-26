import { ColorHighlight } from "./ColorHighlight.js";
import { NeighborTracker } from "./NeighborTracker.js";
import { ScoreBar } from "./ScoreBar.js";
import { Menu } from "./Menu.js";

export class Puzzle {
    constructor () {
        this._nodeListBlocks = document.querySelectorAll('.block');
        this._blocks = Array.from(this._nodeListBlocks);
        this._colorHighlight = new ColorHighlight();
        this._neighborTracker = new NeighborTracker();
        this._scoreBar = new ScoreBar();
        
        this._blocksStorage = JSON.parse(localStorage.getItem('puzzle')) || [1, 3, 6, 8];
        this._reload();

        this._menu = new Menu(this._colorHighlight, this._storage);
        this._puzzleBlocksEventListener();
    }

    _puzzleBlocksEventListener () {
        this._blocks.forEach(block => {
            block.addEventListener('click', (event) => {
                this._shuffle(event.target);
                this._storagePuzzle();
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

    _storagePuzzle() {
        this._blocksStorage = [];
        this._blocks.forEach(block => {
            if (this._colorHighlight.isToggled(block)) {
                this._blocksStorage.push(this._blocks.indexOf(block));
            }
        });
        localStorage.setItem('puzzle', JSON.stringify(this._blocksStorage));
    }

    _reload() {
        this._blocksStorage.forEach(block => {
            this._colorHighlight.toggle(this._blocks[block]);
        })
    }   
}
