export class TranslationObject{
    sourceLang: String;
    destinationLang: String;
    inputText: String;
    translatedText: String;

    constructor(sourceLang, destinationLang, inputText, translatedText){
        this.sourceLang = sourceLang;
        this.destinationLang = destinationLang;
        this.inputText = inputText;
        this.translatedText = translatedText;
    }
}