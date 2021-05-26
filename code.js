function SumOfRange()
{    
    let a = document.getElementsByClassName('sum_of_range_input_a')[0].value;
    let b = document.getElementsByClassName('sum_of_range_input_b')[0].value;
    let sum = 0;
    for (let i = parseInt(a); i <= parseInt(b); i++) {
        sum += i;
    }
    alert("Sum: " + sum);
}

function BiggestDivisor()
{
    let a = parseInt(document.getElementsByClassName('biggest_divisor_input_a')[0].value);
    let b =  parseInt(document.getElementsByClassName('biggest_divisor_input_b')[0].value);
    
    let min = a > b? a: b;

    for (let i = min; i > 0; i--) {
        if(a % i === 0 && b % i === 0) {
            alert("Biggest divisor: " + i);
            return
        }
    }
}

function Divisors(){
    let a = parseInt(document.getElementsByClassName('divisors_input')[0].value);
    
    let str = '';
    
    for (let i = a; i > 0; i--) {
        if(a % i === 0) {
            str += i + ", ";
        }
    }
    
    alert("Divisors: " + str);
}

function Length(){
    let a = parseInt(document.getElementsByClassName('length_input')[0].value);
    
    if(isNaN(a))
    {
        alert("Length: 0");
        return;
    }
    
    alert("Length: " + (Math.floor(Math.log10(Math.abs(a))) + 1));
}

function Count(){
    let a = ((document.getElementsByClassName('count_input')[0].value).split(' '));
    let negative = 0;
    let positive = 0;
    let zero = 0;
    let even = 0;
    let odd = 0;
    for (const aKey of a) {
        if(aKey > 0)
            positive++;
        else if(aKey < 0) negative++;
        else zero++;
        if(aKey % 2 === 0)
            even++;
        else 
            odd++;
    }
    alert("Positive: " + positive + ", Negative: " + negative + ", Zero: " + zero + ", Even: " + even + ", Odd: " + odd);
}

function StartCalculator()
{
    do
    {
        let a = parseInt(prompt("First number", '0'));
        if(isNaN(a)) return;
        let action = prompt("Action ( +, -, *, /, %, ^ )", '');
        if(action == null) return;
        let b = parseInt(prompt("Second number", '0'));
        if(isNaN(a)) return;
        switch (action)
        {
            case '+': alert(a + b);
                break;
            case '-': alert(a - b);
                break;
            case '*': alert(a * b);
                break;
            case '/': alert(a / b);
                break;
            case '%': alert(a % b);
                break;
            case '^': alert(Math.pow(a, b));
                break;
        }
    } while(confirm("Again?"));
}

function Shift()
{
    let str = document.getElementsByClassName('shift_input_a')[0].value;
    let power =  parseInt(document.getElementsByClassName('shift_input_b')[0].value);
    
    let new_str = str.slice(power, str.length) + str.slice(0,power);
    
    alert(new_str);
}