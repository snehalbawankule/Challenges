  function Code(){
  var str ='abc12 #$', i,sum = 0, character='';
  if(str.length === 0){
    console.log('string is empty');
  }else{
  for (i=0; i < str.length; i++){
       character = str.charAt(i);
       if((str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= 'a' && str[i] <= 'z')){
                if(character === character.toUpperCase()) {
                sum = sum + str.charCodeAt(i) - 64;
         }else{
            sum = sum + str.charCodeAt(i) - 96;
        } }
     else if(str[i].match(/\s/)) {
        console.log('contain space');
      }
      else if (str[i] >=0 && str[i] <= 9){
        console.log(`${(str[i])} is a number`);
     }
     else if ((str[i] ).match(/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/)){
      console.log(`${(str[i])} special character `);
  }}} 
 console.log(`sum of ${str}: ${(sum)}`);
  }
Code();