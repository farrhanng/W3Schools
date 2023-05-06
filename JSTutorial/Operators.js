// addition assignment operator
{
    let x = 10;
    x += 5;
    console.log(typeof x)
}

// string comparison
{
    let text1 = "A";
    let text2 = "B";
    let result = text1 < text2;
    console.log(result);
}

// string addition
{
    let text1 = "What a "
    text1 += "fine day."
    console.log(text1)
}

// comparison operators
{
    let x = 5;
    console.log (x==8)
}

{
    let x = 8;
    let y = 3;
    console.log(x < 9 || y > 4)
    console.log(!(x=3))
}

{
    let wallet = 50000
    let affordability = (wallet > 4000) ? "True got enough":"False no enough"
    console.log(affordability)
}

{
    let name = 1;
    let text = "missing";
    console.log(name ?? text)
}
