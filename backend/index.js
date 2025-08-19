import express from 'express'
import userRoute from './Routes/userRoute'
const app = express();
const port = 3000;

app.use('/api', userRoute)

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
})