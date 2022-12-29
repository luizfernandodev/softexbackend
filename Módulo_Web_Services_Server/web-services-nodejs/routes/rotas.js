let appRouter = (app) => {
    app.get("/",(req, res) => {
        res.status(200).json({ message: "Bem vindo ao nosso web service!" });
    });

    app.post("/",(req, res) => {
        res.status(200).json({ message: "Respondendo ao metodo POST: Bem vindo ao nosso web service!" });
    });
}
module.exports = appRouter;