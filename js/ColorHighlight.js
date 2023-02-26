export class ColorHighlight {
    constructor () {
        this._grey = 'grey';
        this._currentColor = 'highlight--Purple';
        this._currentBorder = 'item__border--Purple';
        this._menuButton = document.querySelector('.menu__button');
    }

    toggle (block) {
        if(block.classList.contains(this._grey)) {
            block.classList.remove(this._grey);
            block.classList.add(this._currentColor);
    
            return;
        } 
    
        block.classList.remove(this._currentColor);
        block.classList.add(this._grey);
    }

    isToggled(block) {
        if(block.classList.contains(this._currentColor)) return true; 
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

        this._update();
    }

    _update () {
        this._currentColor = `highlight--${this._menuButton.textContent}`;
        this._currentBorder = `item__border--${this._menuButton.textContent}`;
    }
}
