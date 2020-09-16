import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient({log: ["query"]});

    try {
        const newsId = parseInt(req.query.id as string);
        
        if(req.method === 'GET'){
            const news = await prisma.news.findOne({ where: { id: newsId }});  
            res.status(200).json({news});  
        }
        else if (req.method === 'PATCH') {
            const { news: data } = req.body;
            const result = await prisma.news.update({ 
                where: { id: newsId },
                data: {
                    title: data.title,
                    summary: data.summary,
                    url: data.url
                }
            }); 
            res.status(200).json({result});
        }
        else if (req.method === 'DELETE') {
            const result = await prisma.news.delete({ where: { id: newsId }}); 
            res.status(200).json({result});
        }
        else 
            throw "Invalid Request Method";

    } catch (e) {
        res.status(500).json({ error: `Request Failed`});
    } finally {
      await prisma.$disconnect();
    }
}