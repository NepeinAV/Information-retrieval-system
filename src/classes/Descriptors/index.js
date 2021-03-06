import stopWords from './data/stopwords';
import stopWordsEn from './data/stopwords_en';

class Descriptor {
    static countDescriptors(words) {
        let descriptors = {};
        for (let i = 0; i < words.length; i++)
            descriptors[words[i]] = (descriptors.hasOwnProperty(words[i])) ? descriptors[words[i]] + 1 : 1;
        return descriptors;
    }

    static cleanDescriptors(descriptors) {
        for (let descriptor in descriptors)
            if (this.chooseLanguage(descriptor).includes(descriptor)) delete descriptors[descriptor];
    }

    static chooseLanguage(word) {
        return (word[0] >= 'a' && word[0] <= 'z') ? stopWordsEn : stopWords;
    }

    static compressDescriptors(descriptors) {
        let d = [];
        let keys = Object.keys(descriptors);
        let values = Object.values(descriptors);
        for (let i = 0; i < Object.keys(descriptors).length; i++)
            d.push([keys[i], values[i]]);

        d = d.qsort((a, b) => {
            if (a[1] > b[1]) return 1;
            if (a[1] === b[1])
                if (a[0] > b[0]) return 1;
        });

        descriptors = {};

        for (let i = 0; i < d.length && i < 20; i++) {
            descriptors[d[i][0]] = d[i][1];
        }

        return descriptors;
    }

    static concatDescriptors(descriptors) {
        let allD = JSON.parse(localStorage.getItem('allDescriptors'));
        let keys = Object.keys(descriptors);
        let values = Object.values(descriptors);
        if (allD) {
            for (let i = 0; i < keys.length; i++)
                allD[keys[i]] = (allD.hasOwnProperty(keys[i])) ? allD[keys[i]] + values[i] : values[i];
        }
        localStorage.setItem('docCount', (allD) ? +localStorage.getItem('docCount') + 1 : 1);
        localStorage.setItem('allDescriptors', JSON.stringify((allD) ? allD : descriptors));
    }

    static getDescriptors(words) {
        let descriptors = this.countDescriptors(words);
        this.cleanDescriptors(descriptors);
        return this.compressDescriptors(descriptors);
    }
}

export default Descriptor;