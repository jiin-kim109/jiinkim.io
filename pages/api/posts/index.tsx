import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient({log: ["query"]});

    try {
        if(req.method === 'GET'){
            const posts = await prisma.post.findMany();
            res.status(200).json({posts});  
        }
        else 
            throw "Invalid Request Method";

    } catch (e) {
        res.status(500).json({ error: `Request Failed`});
    } finally {
      await prisma.$disconnect();
    }
}