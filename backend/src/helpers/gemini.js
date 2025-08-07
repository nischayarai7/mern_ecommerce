import axios from "axios";

const gemini = async (product) => {
    const data = {
        contents: [
            {
                parts: [
                    {
                        text: `Give a short description of a product ${product.productName} with category ${product.category}`
                    }
                ]
            }
        ]
    };

    try {
        const result = await axios.post(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyCY6PXcQT2e2RQTxfQQvpTsPiPlI9UPZOk',
            data,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        if (result.data && result.data.candidates?.[0]?.content?.parts?.[0]?.text) {
            return result.data.candidates[0].content.parts[0].text;
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (error) {
        console.error("Gemini API Error:", error?.response?.data || error.message);
        throw new Error("Failed to fetch description from Gemini");
    }
};

export { gemini };
