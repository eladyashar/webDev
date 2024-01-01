import express, {Request, Response} from 'express';
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

app.get('/users/:userId', (req: Request, res: Response) => {
  // Access userId from the URL params
  const userId = req.params.userId;

  // For demonstration, just send back the userId
  res.send(`User ID is: ${userId}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
