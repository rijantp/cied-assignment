const input='Welcome to this Javascript Guide!'

const out=input.split(" ").reduce((acc, word) => `${acc} ${reverseString(word)}` , "")

function reverseString(value){
    return [...value].reverse().reduce((acc,curr)=>acc+curr,'')
}

class ReverseString{
_result='';

constructor(input){
this._result=input.split(" ").reduce((acc, word) => `${acc} ${this.reverseString(word)}` , "")
}

     reverseString(value){
        return [...value].reverse().reduce((acc,curr)=>acc+curr,'')
    }

      get result(){
        return this._result
    }
}

console.log(new ReverseString(input).result);
