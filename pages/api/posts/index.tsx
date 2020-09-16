import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient({log: ["query"]});

    try {
        if(req.method === 'GET'){
            const posts = await prisma.post.findMany();
            res.status(200).json({posts});  
        }
        else if (req.method === 'POST') {
            const { post: data } = req.body;
            const post = await prisma.post.create({
                data: {
                    summary: data.summary,
                    keywords: data.keywords,
                    title: data.title,
                    content: data.content
                }
            });
            res.status(201).json({ post });
        }
        else 
            throw "Invalid Request Method";

    } catch (e) {
        res.status(500).json({ error: `Request Failed`});
    } finally {
      await prisma.$disconnect();
    }
}