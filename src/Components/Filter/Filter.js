import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../redux/dishesSlice";

const Filter =({ category})=>{
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return( <div>
       <p onClick={()=>{dispatch(filterCategory(category))}} className={selectedCategory === category ?  'categoryButtonSelected categoryButton' : 'categoryButton'}> {category}</p>
    </div>

    )
}


export default Filter;

//V ETOT KOMPONENT IMPORTIRYEM PROP CATEGORY IZ ALLCATEGORIES.. 
// POLUCHAEM DOSTUP K PERVONACHALNOMY SOSTOYANIU CHEREZ  USE SELECTOR -GET SELECTED CATEGORY-
//SOHRANYAEM EE V CONST SELECTED CATEGORY I  TAKIM OBRAZOM KAKYU BY MY KATEGORIU NI POSTAVILI V INITIAL STATE-
// K NEI BYDET PRIMENEN TERNANRNYI OPERATOR