export class Menu {
    constructor (objHighlight) {
        this._menuButton = document.querySelector('.menu__button');
        this._colorButtons = document.querySelectorAll('.menu__button--color');
        this._menu = document.querySelector('.menu__list');
        this._colorHighlight = objHighlight;
        
        this._menuButton.innerHTML = localStorage.getItem('colorSelected') || 'Purple';
        this._colorHighlight.setAllColors(this.getMenuButton());

        this._menuEventListener();
        this._colorButtonEventListener();   
    }

    getMenuButton () {
        return this._menuButton.textContent;
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
                this._colorHighlight.setAllColors(this.getMenuButton());
                localStorage.setItem('colorSelected', this.getMenuButton());
                this._toggle(event.target);
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
