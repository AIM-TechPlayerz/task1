import { connectDatabase } from "@/database";
import { Feedback } from "@/models/feedback";



export default async function handler(req,res)
{
    await connectDatabase();
    if(req.method === "POST") {
        const {email, feedback} = req.body;
        const Feedback = await Feedback.create({
            email,
            feedback,
        }
        );
        res.status(201).json({ success: true, feedback});

    }
    else{
        res.status(405).json({success: false, message: "Method Not Allowed"})
    };
}
