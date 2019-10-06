const Project   = require('../models/Project');
const db        = require('../db');

exports.getProject = ((req, res) => {
    // let project = new Project(1, 'First project', 'project description');
    db.connect((err) => {
        if(err) { throw err };
        console.log('connection to db opened');
    });
    let sql = `SELECT * FROM projects`;
    db.query(sql, (err, results) => {
        console.log('making query');
        console.log(results.length);
        res.send(results);
        db.end((error) => {
            if(error) { throw error };
            console.log('connection to db closed');
        });
    });
});