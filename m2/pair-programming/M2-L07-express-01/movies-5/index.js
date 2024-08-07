// app.js

const express = require('express');
const app = express();
// const moviesRoutes = require('./routes/moviesRoutes');

// app.use('/api/example', moviesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
