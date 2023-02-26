export class ScoreBar {
    constructor () {
        this._scoreBar = document.querySelector('.score');
        this._victoryMessage = 'You win!';
        this._defeatMessage = 'You lose!';

        this._scoreRemaining = JSON.parse(localStorage.getItem('scoreRemaining')) || '10';
        this.setScore(this._scoreRemaining);
    }

    setScore (score) {
        this._scoreRemaining = score;
        this._scoreBar.innerHTML = this._scoreRemaining;
    }

    _loseScore () {
        this._scoreRemaining = JSON.stringify(parseInt(this._scoreRemaining - 1));
        localStorage.setItem('scoreRemaining', this._scoreRemaining);
    }

    update (arrayPuzzleBlocks) {
        if (this._scoreRemaining === this._defeatMessage || this._scoreRemaining === this._victoryMessage) {
            return;
        }

        this._windCondition(arrayPuzzleBlocks);
        this._scoreBar.innerHTML = this._scoreRemaining;
    }

    _windCondition (arrayPuzzleBlocks) {
        if (this._hasAnyGreyBlockRemaining(arrayPuzzleBlocks)) {
            this._loseScore();
            this._loseCondition();
            return;
        }

        this._scoreRemaining = this._victoryMessage;
    }

    _loseCondition () {
        if (parseInt(this._scoreRemaining) < 1) this._scoreRemaining = this._defeatMessage;
    }

    _hasAnyGreyBlockRemaining (arrayPuzzleBlocks) {
        let IsAnyBlockGrey = false;
        arrayPuzzleBlocks.forEach(block => {
            if (block.classList.contains('grey')) {
                IsAnyBlockGrey =  true;
            }
        });
        return IsAnyBlockGrey;
    }
}
