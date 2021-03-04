from functools import reduce

def sumSalary(a,b):
    return a+b;

salarys = [1,2,3,4,5];
totalSalary = reduce(sumSalary,salarys);
print(totalSalary);



names = [
    {id:1,names:"jinson",isCompleted:True},
    {id:2,names:"jinson",isCompleted:False},
    {id:3,names:"jinson",isCompleted:True},
    {id:4,names:"jinson",isCompleted:True},
]



names.reduce((pre,name,index)=>)