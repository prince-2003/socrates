import google.generativeai as genai
from dotenv import load_dotenv
import os

# Load environment variables from the .env file
load_dotenv()

# Load the Gemini API key from environment variables
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Configure the API key for the Gemini AI model
genai.configure(api_key=GEMINI_API_KEY)

async def process_chat(chat_request):
    """
    This function processes the user's chat request and fetches AI-generated content
    from the Google Gemini model based on the coding-related question provided by the user.
    """
    question = chat_request.question  # Extract the question from the request model

    
    prompt = f"Answer this question about coding: {question}"

    try:
        
        model = genai.GenerativeModel(model_name="gemini-1.5-flash")
        
        
        response = model.generate_content([prompt])
        
        
        return response.text

    except Exception as e:
        
        print(f"Error in processing chat request: {e}")
        
        
        return "Failed to generate a response. Please try again."
