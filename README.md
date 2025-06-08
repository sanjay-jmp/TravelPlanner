# TravelPlanner

TravelPlanner is a web app that helps users create personalized travel itineraries based on their preferred locations and attractions. It uses AI-powered suggestions from the Hugging Face API to generate day-wise travel plans tailored to user preferences.

## Features

- Input preferred locations and attractions  
- Specify number of travel days  
- Receive AI-generated itineraries formatted in markdown  
- Powered by the Mistral AI model from Hugging Face  

## Tech Stack

- **Frontend:** JavaScript (React + Vite)  
- **Backend:** None — calls Hugging Face API directly from frontend  
- **AI Model:** `mistralai/Mixtral-8x7B-Instruct-v0.1`  
- **Config:** Environment variables managed via `.env`  

## Getting Started

### Prerequisites

- Node.js and npm installed  
- Hugging Face account with API token  

### Installation

Clone the repo:

```bash
git clone https://github.com/sanjay-jmp/TravelPlanner.git
cd TravelPlanner
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file with your API token:

ini
Copy
Edit
VITE_HF_ACCESS_TOKEN=your_hugging_face_api_token_here
Start the dev server:

bash
Copy
Edit
npm run dev
Open your browser to http://localhost:3000

Usage
Enter number of days for your trip

Add lists of locations and attractions

Submit to get a day-wise travel itinerary

Security
Do NOT commit .env to GitHub

.gitignore excludes .env to keep your API token safe

Use .env.example to document required environment variables

Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

License
This project is licensed under the MIT License.
