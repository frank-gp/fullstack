// ========== src\server.js ==========

// const express = require("express");
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express();
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

// module.exports = { app };
export { app };
