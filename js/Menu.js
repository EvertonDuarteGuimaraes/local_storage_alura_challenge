export class Menu {
    constructor () {
        this._menuButton = document.querySelector('.menu__button');
        this._colorButton = document.querySelectorAll('.menu__button--color');
        this._menu = document.querySelector('.menu__list');

        this._menuEventListener();
    }

    _menuEventListener () {
        this._menuButton.addEventListener('click', (event) => {
            this._toggle(event.target);
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
