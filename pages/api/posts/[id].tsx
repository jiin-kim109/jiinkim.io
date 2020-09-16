import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient({log: ["query"]});

    try {
        const pid = parseInt(req.query.id as string);

        if(req.method === 'GET'){
            const posts = await prisma.post.findOne({ where: { id: pid }}); 
            res.status(200).json({posts});  
        }
        else if (req.method === 'PATCH') {
            const { post: data } = req.body;
            const result = await prisma.post.update({ 
                where: { id: pid },
                data: {
                    summary: data.summary,
                    keywords: data.keywords,
                    title: data.title,
                    content: data.content
                }
            }); 
            res.status(200).json({result});
        }
        else if (req.method === 'DELETE') {
            const result = await prisma.post.delete({ where: { id: pid }}); 
            res.status(200).json({result});
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