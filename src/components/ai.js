import { InferenceClient } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are a travel assistant that receives a list of locations, attractions, and number of days the user has for the trip. Based on this information, suggest a day-by-day travel itinerary that incorporates some or all of the locations and attractions. You may include nearby places or popular combinations, but avoid overwhelming the user with too many extras. Format your response in markdown to make it visually clear and web-friendly.
`

const hf = new InferenceClient(import.meta.env.VITE_HF_ACCESS_TOKEN)

console.log("Hugging Face Token:", import.meta.env.VITE_HF_ACCESS_TOKEN)

export async function getTravelPlan(days = 3, locationsArr = [], attractionsArr = []) {
    const locationsString = locationsArr.join(", ")
    const attractionsString = attractionsArr.join(", ")

    const userMessage = `
I have ${days} day(s) for my trip.

Here are the places I'm interested in visiting: ${locationsString}.

And these are the types of attractions or specific spots I want to see: ${attractionsString}.

Can you suggest a travel itinerary or plan that makes sense?
`

    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: userMessage },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error("Error generating travel plan:", err.message)
    }
}
