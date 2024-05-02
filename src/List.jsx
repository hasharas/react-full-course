

function List(){

      const fruits = [{id : 1,name : "banana", calories : 424},
                      {id : 2,name : "orenge", calories : 264},
                      {id : 3,name : "apple", calories : 624},
                      {id : 4,name : "coconut", calories : 724},
                      {id : 5,name : "mango", calories : 124} ];

           // fruits.sort((a,b) => a.name.localeCompare(b.name)); // ALL ALPHABATICAL
            // fruits.sort((a,b) => b.name.localeCompare(a.name));  //reverce ALPHABATIC
            
           //  fruits.sort((a,b) = a.calories - b.calories); numeric order 
            // fruits.sort((a,b) = b.calories - a.calories); // reverse numeric order  


          //  const lowCalfru = fruits.filter(fruit => fruit.calories < 200);
         // const higCalfru = fruits.filter(fruit => fruit.calories >= 200);

      const ListItem = fruits.map(fruit => <li key={fruit.id}>
            {fruit.name} : &nbsp;
            <b>{fruit.calories}</b>
            </li>);


      return(
            <ol>{ListItem}</ol>
      )
}

export default List