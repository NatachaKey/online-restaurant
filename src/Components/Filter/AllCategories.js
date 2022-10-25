import Filter from "./Filter";

const AllCategories = () =>{
    return( <div class="column">
        
        <h1>What kind of food do you like?</h1>
        
        {['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALADS', 'ALL'].map(category =>
              <Filter category={category} />  )}
    
        </div>

    );
}

export default AllCategories;

