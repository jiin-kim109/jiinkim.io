import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient({log: ["query"]});

    try {
        if(req.method === 'GET'){
            const news = await prisma.news.findMany();
            res.status(200).json({news});  
        }
        else if (req.method === 'POST') {
            const { news: data } = req.body;
            const result = await prisma.news.create({
                data: {
                    title: data.title,
                    summary: data.summary,
                    url: data.url
                }
            });
            res.status(201).json({ result });
        }
        else 
            throw "Invalid Request Method";

    } catch (e) {
        res.status(500).json({ error: `Request Failed`});
    } finally {
      await prisma.$disconnect();
    }
}