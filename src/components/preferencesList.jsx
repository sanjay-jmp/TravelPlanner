export default function preferencesList({locations, attractions, setLocations, setAttractions}){

  function addLocations(formData){
    const loction = formData.get("location")
    setLocations(prev => [...prev, loction])
  }
  function addAttractions(formData){
    const attraction = formData.get("attraction")
    setAttractions(prev => [...prev, attraction])
  }
  return(
     <div className="preferences-wrapper">
      {/* Forms side-by-side */}
      <div className="form-container">
        <div className="form-group">
          <form className="add-form" action={addLocations}>
            <input
              type="text"
              className="input-box"
              placeholder="eg. Spain, Barcelona..."
              aria-label="Add locations"
              name="location"
            />
            <button>Add Location</button>
          </form>
        </div>

        <div className="form-group">
          <form className="add-form" action={addAttractions}>
            <input
              type="text"
              className="input-box"
              placeholder="eg. Times Square..."
              aria-label="Add attractions"
              name="attraction"
            />
            <button>Add Attraction</button>
          </form>
        </div>
      </div>

      {/* Heading below forms */}
      {(locations.length > 0 || attractions.length>0) &&
      <>
        <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Your Travel Preferences</h2>
        <div className="form-container">
          <div className="form-group">
            <h3>Locations</h3>
            <ul className="form-items">
              {locations.map((loc, index) => (
                <li key={index}>{loc}</li>
              ))}
            </ul>
          </div>

          <div className="form-group">
            <h3>Attractions</h3>
            <ul className="form-items">
              {attractions.map((attr, index) => (
                <li key={index}>{attr}</li>
              ))}
            </ul>
          </div>
        </div>
      </>}
    </div>
  );
}