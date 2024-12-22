import { errorHandler } from "../utils/error.js";

export const summery=async(req,res)=>{
    
      try {
        // Extract the post data from the request (e.g., fetched response of a particular post)
        const postData = req.body.postData;
    
        if (!postData) {
          return res.status(400).json({ error: 'Post data is required' });
        }
    
            
        const response = await openai.createCompletion({
          model: 'text-davinci-003',
          prompt: `Summarize the following content:\n\n${postData}`,
          max_tokens: 100,
          temperature: 0.7,
        });
    
        // Extract and send the summary
        const summary = response.data.choices[0].text.trim();
        res.status(200).json({ summary });
      } 
      catch (error) {
        console.error('Error generating summary:', error.message);
        res.status(500).json({ error: 'Failed to generate summary' });
      }
    };
