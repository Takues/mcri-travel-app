import { useEffect, useState } from "react";
import Header from "../../reusables/Header/Header";

const PackingPage = () => {

    const [allPackingItems, setAllPackingItems] = useState([])
   useEffect(() => {
    //fetches data from the API database using the method GET.
    fetch('http://localhost:3000/packing', {
        method: "GET"
    }).then(response => {
        return response.json();
    }).then(data => {
        // return console.log("data",data)
        return setAllPackingItems(data)
    })
   },[])

   console.log("allPackingItems", allPackingItems)
  
   if (allPackingItems.length > 0) {
    return (
        <>
          <Header />
    
          <div className="page-content">
            <h1>Packing Page.</h1>
    
            <div>
                <p>{allPackingItems[0].title}</p>
            </div>
          </div>
        </>
      )

   }
  
}

export default PackingPage;