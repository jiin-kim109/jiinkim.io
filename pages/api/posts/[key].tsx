import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient({log: ["query"]});

    try {
        var key = req.query.key as string;

        if(req.method === 'GET'){
            var posts;
            if(parseInt(key))
                posts = await prisma.post.findOne({ where: { id: key }}); 
            const posts = await prisma.post.findMany({ where: { category: category }}); 
            res.status(200).json({posts});  
        }
        else if (req.method === 'POST') {
            const { post: data } = req.body;
            const post = await prisma.post.create({
                data: {
                    category: category,
                    summary: data.summary,
                    title: data.title,
                    content: data.content
                }
            });
            res.status(201).json({ post });
        }
        else 
            throw "Invalid Request Method";

    } catch (e) {
        console.log(e);
        res.status(500).json({ error: `Request Failed`});
    } finally {
      await prisma.$disconnect();
    }
}