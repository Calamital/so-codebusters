class AnagramSolver {
    constructor() {
        this.wordList = [];
    }
    async getWords() {
        let wordListURL = "https://raw.githubusercontent.com/dwyl/english-words/refs/heads/master/words.txt";
        let words = await fetch(wordListURL);
        if (words.ok) {
            this.wordList = (await words.text()).split("\n");
        }
    }
    factorial(n) {
        let result = 1;
        let i = 1;
        while (i++ <= n) {
            result *= i;
        }
        return result / (n + 1);
    }
    getAnagrams(letters) {
        let anagrams = [];
        if (letters.length <= 1) {
            return [letters];
        }
        for (let i = 0; i < letters.length; i++) {
            let removed = letters.slice(0, i) + letters.slice(i + 1);
            let innerAnagrams = this.getAnagrams(removed);
            console.log(letters[i] + removed);
            innerAnagrams.forEach(anagram => {
                anagrams.push(letters[i] + anagram);
            })
        }
        return anagrams;
    }
    solveAnagram(letters) {
        let anagrams = this.getAnagrams(letters);
        let words = [];
        anagrams.forEach(anagram => {
            if (this.wordList.includes(anagram.toLowerCase())) {
                words.push(anagram.toLowerCase());
            }
        });
        return words;
    }
}