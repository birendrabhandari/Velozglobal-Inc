import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const getProductRecommendation = async (userQuery: string, products: any[]) => {
  try {
    const model = ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an AI Personal Shopper for Velozglobal. 
      A customer is asking: "${userQuery}"
      
      Here are our products: ${JSON.stringify(products.map(p => ({ id: p.id, name: p.name, description: p.description, price: p.price })))}
      
      Recommend the best 1-2 products based on their query. 
      Format your response as a friendly message. 
      If no products match, suggest something similar or ask for more details.`,
    });

    const result = await model;
    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my AI brain right now, but I'd recommend checking out our featured collection!";
  }
};
