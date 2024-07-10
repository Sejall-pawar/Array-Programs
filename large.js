const age = [20,17,32,12,27]

let largest = age[0]

for (let i=1; i<age.length; i++)
{
    if(age[i] > largest){
        largest = age[i]
    }
}

console.log(`The maximumg age is ${largest}`)