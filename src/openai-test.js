import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config();
//console.log(process.env.OPENAI_API_KEY);

const testGuy = {
    name: 'John Doe',
    skills: "woodworking and leadership",
    phone: "555-555-555",
    email: "test@test.com",
    city: "Brooklyn",
    degreeLv: 'High School'
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, project: process.env.OPENAI_PROJECT });

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: `I want you to act as a career counselor. I will provide you with an individual named ${testGuy.name} looking for guidance in their professional life, and your task is to help them determine what careers they are most suited for based on their skills that are ${testGuy.skills}, education level that is ${testGuy.degreeLv} and location that is ${testGuy.city}. You should also conduct research into the various options available, explain the job market trends in different industries and advice on which qualifications would be beneficial for pursuing particular fields. My first request is "I want 5 concrete steps toward getting employed using my skills and experience"` }],
        model: "gpt-3.5-turbo-16k",
    });

    console.log(completion.choices[0]);
}

main();