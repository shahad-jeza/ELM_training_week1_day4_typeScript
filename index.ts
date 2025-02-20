//task1 
// a function that takes a string and returns it capitalized
function capitalizeWords(word: string){
  if (word.length == 0){
    return "you must enter a word!";
  }else{
    return word.toUpperCase();
  }
}

console.log(capitalizeWords("hello"))

// ----------------------
//task2
// is a valid number function 
function isValidNumber(number: unknown){
  if (typeof(number) == 'number'){
    return true; 
  }else{
    return false;
  }
}

console.log(isValidNumber(3))
console.log(isValidNumber("hi"))

//--------------------------------
// task3: create a user system 
interface User{
id : number
name: string
email: string
isAdmin: boolean
}

function createUser(user: User){
  return `User ${user.name} created successfully`
}

const shahad: User={
  id:123,
  name: "shahad",
  email:"email@d.vom",
  isAdmin: true
  }

console.log(createUser(shahad))


// -----------------------
// task 4 
class Product {
  private name: string;
  private price: number;
  private category: string;

  public constructor(name: string, price: number, category: string) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

    public getProduct(): string {
      return `Product: ${this.name}, Price: ${this.price}, categoery: ${this.category}`;
    }

    public getDiscountedPrice(discount: number){
      return this.price - (this.price * (discount/100)); 
    }

}

const product1 = new Product("cat", 900, "pet");

console.log(product1.getProduct()); 

console.log(`Discounted Price of cat: $${product1.getDiscountedPrice(25)}`); 


// --------------------
//task 5

function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}

const words = ["cats", "coffee", "laptop", "date"];

// Filter words with less than 5 letters
const shortWords = filterArray(words, (word) => word.length < 5);
console.log(shortWords);


//--------------------
// task 6

// Define the User_fetch interface
interface User_fetch {
  id: number;
  name: string;
  email: string;
}

// Function to fetch users with error handling
async function fetchUsers(): Promise<User_fetch[]> {  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User_fetch[] = await response.json();
    return users;
  } catch {
    throw new Error(`HTTP error!`);
  }
}

// Example usage with error handling
async function displayUsers() {
  try {
    const users: User_fetch[] = await fetchUsers();
    users.forEach((user: User_fetch) => {
      console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
      console.log('-------------------');
    });
  } catch (error) {
    console.error('Failed to display users:', error);
  }
}

displayUsers();

