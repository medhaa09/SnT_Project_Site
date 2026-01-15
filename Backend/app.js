const express = require("express");
const app = express();
const projectRoutes = require("./routes/project.routes");
const tagRoutes = require("./routes/tag.routes");
const clubRoutes = require("./routes/club.routes");
const weekRoutes = require("./routes/week.routes");
const { error } = require("./utils/responseHandler");

app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/tags", tagRoutes);
app.use("/api/clubs", clubRoutes);
app.use("/api/weeks", weekRoutes);

app.get("*", (_, res) => error(res, { message: "Invalid API Endpoint" }, 404));

module.exports = app;
