export class ColorHighlight {
    constructor () {
        this._grey = 'grey';
        this._currentColor = 'highlight--Purple';
        this._currentBorder = 'item__border--Purple';
    }

    toggle (block) {   
        if(!block.classList.contains(this._grey)) {
            block.classList.remove(this._currentColor);
            block.classList.add(this._grey);
    
            return;
        } 
    
        block.classList.remove(this._grey);
        block.classList.add(this._currentColor);
    }

    setAllColors (color) {
        let highlights = document.querySelectorAll(`.${this._currentColor}`);
        let borders = document.querySelectorAll(`.${this._currentBorder}`);

        highlights.forEach(highlight => {
            highlight.classList.remove(this._currentColor);
            highlight.classList.add(`highlight--${color}`);
        });

        borders.forEach(border => {
            border.classList.remove(this._currentBorder);
            border.classList.add(`item__border--${color}`);
        });

        this._setCurrentColors(color);
    }

    _setCurrentColors (color) {
        this._currentColor = `highlight--${color}`;
        this._currentBorder = `item__border--${color}`;
    }
}
