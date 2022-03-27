import express from "express";
import knex from "knex";
import cors from "cors";

const PORT = 3333;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("ola junior!");
});

app.get("/dados", async (req, res) => {
  let dados;
  try {
    const banco = knex({
      client: "pg",
      connection: {
        host: "pg",
        port: 5432,
        user: "postgres",
        password: "1234",
        database: "sistem",
      },
    });

    dados = await banco.raw(`select now()`);
    await banco.destroy();
  } catch (error) {
    console.log(error);
  }

  if (dados.rows) {
    return res.json(dados.rows);
  } else {
    return res.json("nada para retornar..");
  }
});

app.listen(PORT, () => {
  console.log(`server on.. port: ${PORT}`);
});
