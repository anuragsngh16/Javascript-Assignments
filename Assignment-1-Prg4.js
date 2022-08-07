let result = (score) =>
{
    if(score > 90)
    {
        console.log("Congratulations your scored A");
    }
    else if(score > 70 && score <=90)
    {
        console.log("Congratulations your scored B");
    }
    else if(score>50 && score<=70)
    {
        console.log("Congratulations your scored C");
    }
    else
    {
        console.log("You have failed!");
    }
}

result(20);
result(100);
result(89);
result(70);
result(71);
result(50);
result(51);
result(0);
