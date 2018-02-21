interface IPerson {
  readonly id: number;
  firstName: string;
  lastName: string;
  email : string;
  landLine? : string ;
}

function personLogger(person:IPerson){
  const str = `
  *****************************
  ID: ${person.id}
  Name: ${person.firstName} ${person.lastName}
  Phone: ${person.landLine}
  *****************************
  `;
  console.log(str);
}
let p:IPerson = {id:1,firstName:"Kurt",lastName:"Won",email:"@",landLine:"123"}
personLogger(p);