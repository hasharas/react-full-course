function List2(props){

 const category = props.category;     
 const itemList = props.items;

            
      const ListItem = itemList.map(items => <li key={items.id}>
            {items.name} : &nbsp;
            <b>{items.calories}</b>
            </li>);


      return(<>
            <h2 className="c-item">{category}</h2>
            <ol className="l-item">{ListItem}</ol>

            </>
      )
}

export default List2