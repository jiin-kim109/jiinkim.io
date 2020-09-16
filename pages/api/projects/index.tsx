import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient({log: ["query"]});

    try {
        if(req.method === 'GET'){
            const projects = await prisma.project.findMany(); 
            res.status(200).json({projects});  
        }
        else if (req.method === 'POST') {
            const { result: data } = req.body;
            const result = await prisma.project.create({
                data: {
                    closedAt: data.closedAt,
                    post: {
                        create: {
                            summary: data.summary,
                            keywords: data.keywords,
                            title: data.title,
                            content: data.content
                        }
                    }
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