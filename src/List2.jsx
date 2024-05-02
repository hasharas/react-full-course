function List2(props){

 const category = props.category;     
 const itemList = props.items;

            
      const ListItem = itemList.map(items => <li key={items.id}>
            {items.name} : &nbsp;
            <b>{items.calories}</b>
            </li>);


      return(<>
            <h2>{category}</h2>
            <ol>{ListItem}</ol>

            </>
      )
}

export default List2