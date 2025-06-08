import React, { useState } from "react"
import PreferencesList from "./preferencesList"
import  TravelItinerary from "./travelItinerary"
import { getTravelPlan } from "./ai"


export default function MainBody() {
  const [days, setDays] = useState("")
  const [locations, setLocations] = useState([])
  const [attractions, setAttractions] = useState([])
  const [itinerary, setItinerary] = useState("")

  const itinerarySection = React.useRef(null)
  

  function handleSubmit(formData) {
    const noOfDays = formData.get("no of days")
    console.log(noOfDays)
    setDays(noOfDays)
    console.log(days)
  }

  async function showItinerary(){
          const response = await getTravelPlan(days,locations, attractions);
          console.log(response)
          setItinerary(response)
      }

  React.useEffect(()=>{
          if (itinerary !== "" && itinerarySection.current !== null){
              itinerary && itinerarySection.current.scrollIntoView({behavior: "smooth"})
          }
      },[itinerary])

    return (
    <main className="main-body">
        {days === ""?<form className="add-form" 
        action={handleSubmit}>
            <input
            type="text"
            placeholder="Number of Days"
            aria-label="Add number of days"
            name = "no of days"
            />
            <button>Submit</button>
        </form>
        :
        <PreferencesList
        locations={locations}
        attractions={attractions}
        setLocations={setLocations}
        setAttractions={setAttractions}/>
        }

        {(locations.length > 0 || attractions.length>0) &&
        <div className="get-recipe-container">
              <div ref = {itinerarySection}>
                <h3>Ready for a Travel Itinerary?</h3>
                <p>Generate a Travel Itinerary from your list of locations and attractions.</p>
              </div>
              <button onClick={showItinerary}>Get a Travel Itinerary</button>
          </div>}
          {itinerary === "" ? null: <TravelItinerary itinerary = {itinerary}/>}
        
    
    </main>
)
}

/*Event listeners
onClick
onMouseEnter
onMouseOver
onMouseUp
onMouseLeave*/