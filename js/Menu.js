import { ColorHighlight } from "./ColorHighlight.js";

export class Menu {
    constructor () {
        this._menuButton = document.querySelector('.menu__button');
        this._colorButtons = document.querySelectorAll('.menu__button--color');
        this._menu = document.querySelector('.menu__list');
        this._colorHighlight = new ColorHighlight();

        this._menuEventListener();
        this._colorButtonEventListener();   
    }

    _menuEventListener () {
        this._menuButton.addEventListener('click', (event) => {
            this._toggle(event.target);
        });
    }

    _colorButtonEventListener () {
        this._colorButtons.forEach(colorButton => {
            colorButton.addEventListener('click', (event) => {
                this._menuButton.innerHTML = event.target.textContent;
                this._colorHighlight.setAllColors(this._menuButton.textContent);
                this._toggle(event.target);
                console.log(this._colorHighlight._currentColor);
                console.log(this._colorHighlight._currentBorder);
            });
        });
    }

    _toggle (click) {
        if(this._menu.style.display === 'none') {
            this._menu.style.display = "flex";
    
            return;
        }
    
        this._menu.style.display = "none";
    }  
}
