import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient({log: ["query"]});

    try {
        const projectId = parseInt(req.query.id as string);

        if(req.method === 'GET'){
            const project = await prisma.project.findOne({ where: { id: projectId }});
            res.status(200).json({project});  
        }
        else if (req.method === 'PATCH') {
            const { project: data } = req.body;
            const result = await prisma.project.update({ 
                where: { id: projectId },
                data: {
                    closedAt: data.closedAt,
                    post: {
                        update: {
                            summary: data.summary,
                            keywords: data.keywords,
                            title: data.title,
                            content: data.content
                        }
                    }
                },
            }); 
            res.status(200).json({result});
        }
        else if (req.method === 'DELETE') {
            const result = await prisma.project.delete({ where: { id: projectId }}); 
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