function result(score)
{
    if(score>=50 && score<=100) 
    {
        console.log("You passed!");
    }
    else if(score<50)
    {
        console.log("You failed!");
    }
    else
    {
        console.log("You have entered an invalid score!");
    }
}

result(50);
result(49.9);
result(51);
result(100.0);
result(101);
