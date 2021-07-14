const SpeechRecognition = webkitSpeechRecognition;
const SpeechGrammarList = webkitSpeechGrammarList;
const SpeechRecognitionEvent = webkitSpeechRecognitionEvent;

class SpeechListener extends SpeechRecognition{
    static inputs = ['left', 'right'];
    static grammar = '#JSGF V1.0; grammar input; public <input> = ' + SpeechListener.inputs.join(' | ') + ' ;'
    static resultCounter = 0;
    constructor(){
        super();
        this.speechRecognitionList = new SpeechGrammarList();
        this.speechRecognitionList.addFromString(SpeechListener.grammar, 1);
        this.grammars = this.speechRecognitionList;
        this.continuous = true;
        this.lang = 'en-US';
        this.interimResults = true;
        this.maxAlternatives = 1;
    }

    processInput(transcript){
        let left = ['left','love','laugh'];
        //let right = ['right', 'alright','what'];
        if(transcript.includes('r') || transcript.includes('w')){
            return 'd';
        }else if(transcript.includes('l') || left.includes(transcript)){
            return 'a';
        }else if(transcript.includes('d')){
            return 's';
        }
    }

}

export default SpeechListener;