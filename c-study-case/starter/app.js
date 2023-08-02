const fs = require("fs")
const express = require("express");

const app = express();

// middleware
app.use(express.json());

/*
app.get('/', (req, res) => {
    console.log('Hallo dari server');
    // res.status(200).send('Hallo dari server');
    res.status(200).json({message: 'Halo dari server', app: 'natours'});
});

app.post('/', (req,res) => {
    res.send("post di endpoint ini");
});
*/

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req,res) => {
    res.status(200).json({
        status: 'success',
        count_results : tours.length,
        data: {
            tours: tours
        }
    });
});

app.get('/api/v1/tours/:id', (req,res) => {
    console.log(req.params);

    const id = req.params.id * 1; // string dikali number jadi number.
    const tour = tours.find(el => el.id === id)
    // if (id > tours.length) {
    if (!tour) {
        return res.status(404).json({
            status: 'not found',
            message: 'invalid id',
        });
    };

    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    });
});

app.post('/api/v1/tours', (req,res) => {
    console.log(req.body);
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour,
            }
        });
    });
});

app.patch('/api/v1/tours/:id', (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'not found',
            message: 'invalid id',
        });
    };
    
    res.status(200).json({
        status: 'success updating tour',
        data: {
            tour: '<updated tour data disini ... belom inplementasi>'
        }
    });
});

app.delete('/api/v1/tours/:id', (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'not found',
            message: 'invalid id',
        });
    };
    
    res.status(204).json({
        status: 'success deleting tour',
        data: null // null artinya sudah gaada datanya lagi
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`app running on ${port}...`);
});
