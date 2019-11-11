const Project = require('../models/Project');
const jwt = require('jsonwebtoken');
const db = require('../db');

exports.getProject = ((req, res) => {
    // let project = new Project(1, 'First project', 'project description');
    if(req.token) {
		jwt.verify(req.token, process.env.SECRET, function(err, decoded) {
            if(err) {
				res.sendStatus(403);
			} else {
                // console.log(decoded);
				 var sql = "SELECT projects.pro_id AS id, projects.pro_name AS title, " + 
                "projects.pro_description, concat(usr.usr_name,' ',usr.usr_surname) AS pro_leader, "+
                "projects.pro_deadline AS deadline, projects.pro_timecreated AS timecreated, "+
                "CASE WHEN isadmin = 1 THEN 'true' ELSE 'false' END AS can_edit, NULL AS completed_tasks, NULL AS inprogress_tasks, NULL AS failed_tasks, "+
                "NULL AS cancelled_tasks, NULL AS total_tasks, NULL AS users_count, NULL AS admins_count "+
                "FROM projects INNER JOIN pro_usr ON pro_usr.pro_id = projects.pro_id INNER JOIN users usr "+
                "ON usr.usr_id = projects.pro_leader WHERE pro_usr.usr_id = ?  AND pro_usr.isactive = 1 ";
                try {
                    db.query(sql, decoded.id, (err, results) => {
                    // console.log(results.length);
                    res.send(results);
                    });
                }catch(e) {
                    console.log(e);
                    res.send("err");
                }
			}
        });
    } else {
        res.sendStatus(403);
    }
}); 








    // [{
    //     "id": 234,
    //     "title": "aaa",
    //     "pro_description": "aaa",
    //     "pro_leader": "Miloš Paunović",
    //     "deadline": "2018-07-24 12:00:00",
    //     "timecreated": "2018-07-23 12:07:05",
    //     "can_edit": "false",
    //     "unseen_feed": 0,
    //     "completed_tasks": 1,
    //     "inprogress_tasks": 1,
    //     "failed_tasks": 0,
    //     "cancelled_tasks": 2,
    //     "total_tasks": 2,
    //     "users_count": 2,
    //     "admins_count": 1
    // }, {
    //     "id": 257,
    //     "title": "Debagovanje OmniTaskera 0",
    //     "pro_description": "Ovaj projekat ce nam sluziti da se organizujemo oko debagovanja ove aplikacije.\nI ponekad cemo testirati stvari na njemu.",
    //     "pro_leader": "Nikola Zelic",
    //     "deadline": null,
    //     "timecreated": "2018-07-27 07:41:58",
    //     "can_edit": "false",
    //     "unseen_feed": 0,
    //     "completed_tasks": 100,
    //     "inprogress_tasks": 8,
    //     "failed_tasks": 5,
    //     "cancelled_tasks": 43,
    //     "total_tasks": 113,
    //     "users_count": 4,
    //     "admins_count": 2
    // }];

