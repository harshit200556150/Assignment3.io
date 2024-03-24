// Create a Pizza class
class Pizza {
    constructor(size, crust, toppings, specialInstructions) {
      this.size = size;
      this.crust = crust;
      this.toppings = toppings;
      this.specialInstructions = specialInstructions;
    }
  
    // Create a method to display the pizza description
    displayPizzaDescription() {
      const pizzaDescription = document.getElementById("pizza-description");
      pizzaDescription.innerHTML = `
        <h2>Your Pizza:</h2>
        <p>Size: ${ this.size }</p>
        <p>Crust: ${ this.crust }</p>
        <p>Toppings: ${ this.toppings.join(", ") }</p>
        <p>Special Instructions: ${ this.specialInstructions }</p>
      `;
    }
  }
  
  // Add an event listener to the order button
  const orderButton = document.getElementById("order-button");
  orderButton.addEventListener("click", () => {
    // Get the form values
    const size = document.getElementById("size").value;
    const crust = document.getElementById("crust").value;
    const toppings = Array.from(document.getElementById("toppings").selectedOptions).map(option => option.value);
    const specialInstructions = document.getElementById("special-instructions").value;
  
    // Create a new Pizza object with the form values
    const pizza = new Pizza(size, crust, toppings, specialInstructions);
  
   // Display the pizza description
    pizza.displayPizzaDescription();
  });
  
  // Add student ID and name to the page
  const studentInfo = document.getElementById("student-info");
  studentInfo.innerHTML = `Student ID: YOUR_STUDENT_ID Name: YOUR_NAME`;