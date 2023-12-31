const fs = require("fs")
const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log('halo dari middleware');
    next();
});

app.use((req, res, next) => {
    console.log('Halo dari middleware');
    req.requestTime = new Date().toISOString();
    next();
});

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const getAllTours = (req,res) => {
    console.log(req.requestTime);
    res.status(200).json({
        status: 'success',
        requested_at: req.requestTime, 
        count_results: tours.length,
        data: {
            tours: tours
        }
    });
};

const getTour = (req,res) => {
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
};

const createTour = (req,res) => {
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
};

const updateTour = (req, res) => {
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
};

const deleteTour = (req, res) => {
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
};
/*
app.get('/api/v1/tours', getAllTours);
app.get('/api/v1/tours/:id', getTour);
app.post('/api/v1/tours', createTour);
app.patch('/api/v1/tours/:id', updateTour);
app.delete('/api/v1/tours/:id', deleteTour);
*/

app
    .route('/api/v1/tours')
    .get(getAllTours)
    .post(createTour);

app
    .route('/api/v1/tours/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);
    
const port = 3000;
app.listen(port, () => {
    console.log(`app running on ${port}...`);
});
