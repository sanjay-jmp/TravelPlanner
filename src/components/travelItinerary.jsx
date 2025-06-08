import ReactMarkdown from 'react-markdown'

export default function TravelItinerary(props){
    return(
        <>
        <h1>Travel Master Recommands:</h1>
        <section className="suggested-recipe-container" aria-live="polite">
            <ReactMarkdown children={props.itinerary}></ReactMarkdown>
        </section>
        
        </>
    )
}