function warmup(str, caesar){
        let result="", ch;
        if(str.length === 0){
            console.log('string is empty');
        }else{
             for (let i = 0; i < str.length; i++)
            {
               let character = str.charAt(i);
                if (character === character.toUpperCase(str[i]))
                 {
                   ch =  String.fromCharCode((character.charCodeAt(0) + caesar-65) % 26 + 65);
                   result += ch;
                 }
                else if(character.toLowerCase(str[i]))
                 {
                    ch = String.fromCharCode((character.charCodeAt(0) + caesar-97)%26 + 97);
                    result += ch;
                 }
            }
          console.log(result);
        }
}
     
    let str = 'Welcome';
    let caesar = 4;
    console.log(str);
    console.log(caesar);
    warmup(str, caesar);