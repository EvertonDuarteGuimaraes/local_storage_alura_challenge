export class ScoreBar {
    constructor () {
        this._scoreBar = document.querySelector('.score');
        this._scoreRemaining = '10';
        this._victoryMessage = 'You win!';
        this._defeatMessage = 'You lose!';
    }

    _loseScore () {
        this._scoreRemaining = JSON.stringify(parseInt(this._scoreRemaining - 1));
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
