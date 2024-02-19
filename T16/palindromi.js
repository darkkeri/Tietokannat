const prompt = require('prompt-sync')();

const sana = prompt('Syota sana');
let sanatoisinpain ='';

for (let i = sana.length -1; i>=0; i--) {
    sanatoisinpain += sana[i];
}

if (sana === sanatoisinpain) {
    console.log(`${sana} on palindromi`);
} else {
    console.log(`${sana} ei ole palindromi`);
}


