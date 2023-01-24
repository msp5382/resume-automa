import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
type Data = {
  completion: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { text, context } = JSON.parse(req.body);
  const prompt = `When the context is ${context} complete follow text | ${text}`;
  const { data } = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      model: "text-davinci-003",
      prompt,
      temperature: 0,
      max_tokens: 20,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    }
  );
  console.log(data);
  data.choices[0].text = data.choices[0].text.replace(prompt, "");
  res.status(200).json({
    completion: data.choices[0].text,
    usage: data.usage,
  });
}
