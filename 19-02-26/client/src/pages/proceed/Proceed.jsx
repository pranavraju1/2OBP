import React, { useState, useRef, useMemo } from 'react'
import './Proceed.css'
import { GoogleGenerativeAI } from "@google/generative-ai";

const Proceed = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [question, setQuestion] = useState('');
    const [error, setError] = useState('');
    const lastRequestTime = useRef(0);
    
    // Move API key to environment variable
    // Create .env file with: REACT_APP_GEMINI_API_KEY=your_api_key_here
    const genAI = useMemo(() => 
        new GoogleGenerativeAI("enter your api key"),
        []
    );

    // Rate limiting: enforce minimum delay between requests
    const MIN_REQUEST_INTERVAL = 6000; // 6 seconds = ~10 RPM (safe for free tier)

    // Exponential backoff retry logic
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    async function improveTextWithRetry(text, maxRetries = 3) {
        for (let attempt = 0; attempt < maxRetries; attempt++) {
            try {
                // Use gemini-2.5-flash for better free tier limits
                const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
                
                const result = await model.generateContent(
                    `Improve the following statement. Check grammar and spelling. Reply with ONLY the improved statement, nothing else. Do not add quotes or explanations.\n\nStatement: ${text}`
                );
                
                const response = await result.response;
                return response.text();
            } catch (error) {
                const isRateLimitError = error.message?.includes('429') || 
                                        error.message?.includes('quota') ||
                                        error.message?.includes('RESOURCE_EXHAUSTED');
                
                if (isRateLimitError && attempt < maxRetries - 1) {
                    // Exponential backoff: 2s, 4s, 8s
                    const backoffDelay = Math.pow(2, attempt + 1) * 1000;
                    console.log(`Rate limit hit. Retrying in ${backoffDelay/1000}s...`);
                    await delay(backoffDelay);
                    continue;
                }
                
                throw error;
            }
        }
    }

    async function main() {
        if (!question.trim()) {
            setError('Please enter a message first');
            return;
        }

        // Check if enough time has passed since last request
        const now = Date.now();
        const timeSinceLastRequest = now - lastRequestTime.current;
        
        if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
            const waitTime = Math.ceil((MIN_REQUEST_INTERVAL - timeSinceLastRequest) / 1000);
            setError(`Please wait ${waitTime} seconds before next request to avoid rate limits`);
            return;
        }

        setIsLoading(true);
        setError('');
        
        try {
            const improvedText = await improveTextWithRetry(question);
            setQuestion(improvedText.trim());
            lastRequestTime.current = Date.now();
        } catch (error) {
            console.error("Error improving message:", error);
            
            if (error.message?.includes('429') || error.message?.includes('quota')) {
                setError("Rate limit exceeded. Free tier allows 5-15 requests per minute. Please wait a minute and try again.");
            } else if (error.message?.includes('API_KEY')) {
                setError("Invalid API key. Please check your environment variables.");
            } else {
                setError("Failed to improve message. Please try again later.");
            }
        } finally {
            setIsLoading(false);
        }
    }

    const handleQuestion = (e) => {
        e.preventDefault();
        console.log(question);
        main();
    }

    return (
        <div className="login">
            <form onSubmit={handleQuestion}>
                <h1>How would you like to start the conversation?</h1>
                
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    id="message"
                    value={question} 
                    cols="30"
                    rows="6"
                    placeholder="Enter your message"
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                    disabled={isLoading} 
                />
                
                {error && (
                    <div style={{ 
                        color: '#dc2626', 
                        fontSize: '0.875rem', 
                        marginTop: '0.5rem',
                        padding: '0.5rem',
                        backgroundColor: '#fee2e2',
                        borderRadius: '4px'
                    }}>
                        {error}
                    </div>
                )}
                
                <button type="submit" disabled={isLoading}>
                    Send Mail
                </button>
                
                <button 
                    type="button"
                    onClick={handleQuestion}
                    disabled={isLoading || !question.trim()}
                    style={{ 
                        opacity: isLoading || !question.trim() ? 0.5 : 1, 
                        cursor: isLoading || !question.trim() ? 'not-allowed' : 'pointer' 
                    }}
                >
                    {isLoading ? 'Improving...' : 'Improve Message'}
                </button>
            </form>
        </div>
    )
}

export default Proceed
