from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from langchain_groq import ChatGroq
from all_keys import groq_api_key
from langchain.prompts import PromptTemplate

app = FastAPI()

# Enable CORS to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Groq LLM Configuration
llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key=groq_api_key,
    temperature=0.6
)

prompt_laptop = PromptTemplate(
    input_variables = ['Processor','budget',"storage"],
    template = ''' 
    - suggest me Laptop having {Processor} processor and {storage} of storage within {budget}.
    ### INSTRUCTIONS
    - no preamble
    - list should show all the features of that laptop
    - price on 2 diff e-commerce platforms
'''
)

@app.get("/")
def home():
    return {"message": "Hello, brother!"}

@app.get("/search")
async def search(Processor: str, budget: str,storage : str):
    try:
        query = prompt_laptop.format(Processor=Processor, budget=budget,storage=storage)
        result = llm.invoke(query)
        return {"results": result}
    except Exception as e:
        return {"error": f"Failed to fetch results: {str(e)}"}
