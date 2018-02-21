class Person {
  private static nextId: number = 100;
  public readonly id:number;
  private _name:string;
  constructor(name:string,private _email:string){
    this.id = Person.nextId++;
    this._name = name;
  }
  get getName():string{
    return this._name;
  }
  set setName(n:string){
    this._name = n;
  }
}
let p1: Person = new Person("Kurt Wonnegut","kw@s.dk");
let p2: Person = new Person("Kurt Wonnegut","kw@s.dk");
let p3: Person = new Person("Kurt Wonnegut","kw@s.dk");
console.log(p1.id,p1.getName);
console.log(p3.id,p3.getName);
