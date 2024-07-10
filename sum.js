const numbers = [23,67,88,44,56,76,43]

let sum = 0;

for(let i=0; i<numbers.length; i++)
{
    if(numbers[i]%2==1)
    {
        sum+= numbers[i]
    }
}

console.log(`Sum of Odd numbers are ${sum}`)