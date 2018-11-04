class App {
    printWords(words, output, before = []) {
        output.value = '';
        if (before.length === 0) {
            words.map(val => output.value += val.trim() + '\n');
            this.createLineNumbers(words);
        } else {
            console.log('ok')
        }
    }

    createListeners() {
        this.breakWordButton.addEventListener('click', e => {
            this.loader(true);

            console.log('------------------- Breaking text');
            e.preventDefault();

            this.renderSteps([this.breakWordButton, this.clearTextButton, this.sortButton], [true]);

            console.time('Time of text breaking');
            this.wordList = this.breakText(this.text.value
                .multipleSpaces()
                .hyphenSpaces()
                .lineWrapping()
                .multipleSpaces()
                .trim()
            );
            console.timeEnd('Time of text breaking');

            this.printWords(this.wordList, this.output);
            e.target.classList.add('active');

            this.renderSteps([this.breakWordButton, this.clearTextButton], [true, true], [true]);
            this.loader(false);

        });

        this.clearTextButton.addEventListener('click', e => {
            this.loader(true);

            console.log('------------------- Cleaning words');
            e.preventDefault();


            console.time('Time of word cleaning');
            this.cleanWordList = this.clearWords(this.wordList);
            console.timeEnd('Time of word cleaning');

            this.printWords(this.cleanWordList, this.output);
            this.renderSteps([this.clearTextButton, this.sortButton], [true, true], [true]);

            e.target.classList.add('active');
            this.loader(false);

        });

        this.sortButton.addEventListener('click', e => {
            this.loader(true);

            console.log('------------------- Sorting words');
            e.preventDefault();

            let words = this.cleanWordList.slice();

            console.time('Time of word sorting');
            this.quickSort(words, 0, words.length - 1)
            console.timeEnd('Time of word sorting');

            this.sortedList = words;
            this.printWords(this.sortedList, this.output);
            e.target.classList.add('active');
            this.loader(false);
        });

        this.output.addEventListener('scroll', e => {
            this.lineNumberBox.attributeStyleMap.set('margin-top', CSS.px(-e.target.scrollTop));
        });
    }

    createLineNumbers(lines) {
        this.lineNumberBox.innerHTML = '';
        let line;
        for (let key in lines) {
            line = document.createElement('div');
            line.innerText = ++key;
            this.lineNumberBox.appendChild(line);
        }
        this.output.attributeStyleMap.set('margin-left', CSS.px(this.lineNumberBox.offsetWidth));
    }

    renderSteps(steps, visible = [], active = []) {
        steps.map((val, i) => {
            if (visible[i]) val.classList.add('animate');
            else val.classList.remove('animate');
            if (active[i]) val.classList.add('active');
            else val.classList.remove('active');
        });
    }

    loader(state) {
        document.querySelector('.lds-ellipsis').attributeStyleMap.set('opacity', (state) ? '1' : '0');
    }
}

export default App;