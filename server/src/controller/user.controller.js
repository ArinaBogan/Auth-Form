router.post("/auth", async (req, res) => {
    try {
      const { email, password } = req.body;
      const data = await authUser(email, password);
      res.status(200).send(data);
    } catch (error) {
      res.status(404).send(error.message);
    }
  });