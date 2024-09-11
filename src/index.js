import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'; 

function App() {
  
  return ( 
   <div className="container">
     <Header/>
     <Menu/>
     <Footer/>
   </div>
 );
}


function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}> Fast React Pizza </h1> 
    </header>
  );
}





function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Nos Menus</h2> 

      {numPizzas > 0 ? (
        <React.Fragment>
          <p>Authentique cuisine Italienne. 6 créations, à vous de choisir.</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} /> 
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>Désolé, aucun menu disponible pour le moment.</p>
      )}
    </main>
  );
}



/* Composant PIZZA */
function Pizza(props) {
  console.log(props);
  return (
    //TERNAIRE si pizza Epuisé alors grisé
  <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : "" }`}>
    <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
    <div>
      <h3> {props.pizzaObj.name}</h3> 
      <p> {props.pizzaObj.ingredients} </p>
      <span> {props.pizzaObj.soldOut ? "STOCK ÉPUISÉ" : props.pizzaObj.price}</span>
    </div>
  </li>
 );
}







function Footer() {
  const heure = new Date().getHours();
  const OuvertureHeure = 11;
  const FermetureHeure = 23;
  const Ouvert = heure >= OuvertureHeure && heure <= FermetureHeure;

  return ( 
    <footer className="footer"> 
      {OuvertureHeure && (
        <div className="order"> 
        <Horaire OuvertureHeure={OuvertureHeure} FermetureHeure={FermetureHeure} />
            <button className="btn"> Commander</button>
        </div>
            )}  
    </footer>
)

function Horaire({OuvertureHeure, FermetureHeure }) {
  return (
    <div>
      <h2>Ouvert de {OuvertureHeure}:00 jusqu'à {FermetureHeure}:00 heures. </h2>
    </div>
  )
}

}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< App />);













const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];



