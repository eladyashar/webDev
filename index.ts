import express from 'express';
import path from 'path';
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  })
 
app.post('/', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })