let employee: { readonly id: number, name: string } = {id: 22, name: 'Aniket'};
console.log(employee.id);
//read only property for not changing a property value
type Employee = { readonly id: number, name: string };