let isDone : boolean = true;
isDone = false;
let count: number = 1;
count = 6;
let user: string = "Kurt Wonnegut";
let msg = `
***************************
Hi ${user} welcome today
***************************
`
console.log(msg);
let numbers: number[] = [1,2,3,4,5,6,7];
let numbers2 : Array<number> = [];
numbers2.push(2);

let numberString: any = 1;
numberString = "5"

function logInfo(info : any): void{
   console.log(info);
}
console.log(logInfo(5));
//Enums
let skill = 0;
enum skills {Low, Medium, High, Expert}
if(skill === skills.Medium){
  //do something
}



