import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss'
const Directory =({categories})=>{
    return(
        <div className='categories-container'>
      {categories.map((category) => (
       <CategoryItem key={category} category={category}/>
      ))}
    </div>
    );
}

export default Directory