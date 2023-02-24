export class Highlight {
    constructor () {
        this._grey = 'grey';
        this._highlight = 'highlight--main';
    }

    toggle (block) {   
        if(!block.classList.contains(this._grey)) {
            block.classList.remove(this._highlight);
            block.classList.add(this._grey);
    
            return;
        } 
    
        block.classList.remove(this._grey);
        block.classList.add(this._highlight);
    }
}
