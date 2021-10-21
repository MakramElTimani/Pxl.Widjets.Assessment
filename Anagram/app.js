const fs = require('fs');

function listAnagrams(input){
    var anagrams = [];
    if(!input || input.length == 0)
        return anagrams;

    for(var i = 0; i < input.length; i++){
        let item = input[i].trim()
        if(!item) continue;

        var list = [item];

        for(var j = i + 1; j < input.length; j++){
            var item2 = input[j].trim()
            if(!item2) continue;

            var str1 = item.toLowerCase().split('').filter(x => x !== ' ').sort().join();
            var str2 = item2.toLowerCase().split('').filter(x => x !== ' ').sort().join();
            if(str1 === str2) {
                list.push(item2); //add to list of anagrams of word in current iteration
                input.splice(j, 1); // remove second iteration word from the list of words input so we don't need to iterate on it again
                j--; //go back 1 to cover for the lost index
            }
        }

        anagrams.push(list);
    }

    return anagrams;
}


fs.readdir('tests', (err, files) => {
    if(err)
     return;
    
     files.forEach(file => {
        let rawdata = fs.readFileSync(`tests/${file}`);
        let input = JSON.parse(rawdata)
        console.log(listAnagrams(input))
     })
})

// console.log(listAnagrams(input));