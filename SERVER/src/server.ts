//criando uma backend API restfull com fastify
import Fastify from "fastify";
import cors from "@fastify/cors";
import {PrismaClient} from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get('/hello',async () => {
    const habits = await prisma.habit.findMany({
        where: {
                    title: {startsWith: 'Beber'}
                }
    });
    return habits;
}
)

//ESCUTANDO A PORTA INICIAL DO PROJETO
app.listen({
    port: 8080
}).then(() => {
    console.log('Server running at http://localhost:8080');
    }
)