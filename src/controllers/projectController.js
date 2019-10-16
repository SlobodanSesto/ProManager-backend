const Project = require('../models/Project');
const db = require('../db');

exports.getProject = ((req, res) => {
    // let project = new Project(1, 'First project', 'project description');
    // db.connect((err) => {
    //     if(err) { throw err };
    //     console.log('connection to db opened');
    // });
    // let sql = `SELECT * FROM projects`;
    // db.query(sql, (err, results) => {
    //     console.log('making query');
    //     console.log(results.length);
    //     res.send(results);
    //     db.end((error) => {
    //         if(error) { throw error };
    //         console.log('connection to db closed');
    //     });
    // });
    let data = [{
        "id": 234,
        "title": "aaa",
        "pro_description": "aaa",
        "pro_leader": "Miloš Paunović",
        "deadline": "2018-07-24 12:00:00",
        "timecreated": "2018-07-23 12:07:05",
        "can_edit": "false",
        "unseen_feed": 0,
        "completed_tasks": 1,
        "inprogress_tasks": 1,
        "failed_tasks": 0,
        "cancelled_tasks": 2,
        "total_tasks": 2,
        "users_count": 2,
        "admins_count": 1
    }, {
        "id": 257,
        "title": "Debagovanje OmniTaskera 0",
        "pro_description": "Ovaj projekat ce nam sluziti da se organizujemo oko debagovanja ove aplikacije.\nI ponekad cemo testirati stvari na njemu.",
        "pro_leader": "Nikola Zelic",
        "deadline": null,
        "timecreated": "2018-07-27 07:41:58",
        "can_edit": "false",
        "unseen_feed": 0,
        "completed_tasks": 100,
        "inprogress_tasks": 8,
        "failed_tasks": 5,
        "cancelled_tasks": 43,
        "total_tasks": 113,
        "users_count": 4,
        "admins_count": 2
    }, {
        "id": 230,
        "title": "ghjghjghj",
        "pro_description": null,
        "pro_leader": "Danilo Pusic",
        "deadline": null,
        "timecreated": "2018-07-23 10:41:50",
        "can_edit": "true",
        "unseen_feed": 0,
        "completed_tasks": 0,
        "inprogress_tasks": 1,
        "failed_tasks": 0,
        "cancelled_tasks": 0,
        "total_tasks": 1,
        "users_count": 1,
        "admins_count": 1
    }, {
        "id": 219,
        "title": "grupa",
        "pro_description": null,
        "pro_leader": "Nikola Zelic",
        "deadline": null,
        "timecreated": "2018-07-23 10:32:19",
        "can_edit": "false",
        "unseen_feed": 0,
        "completed_tasks": 18,
        "inprogress_tasks": 3,
        "failed_tasks": 0,
        "cancelled_tasks": 1,
        "total_tasks": 21,
        "users_count": 2,
        "admins_count": 1
    }, {
        "id": 295,
        "title": "Lepo da znam o cemu se radi",
        "pro_description": "sdfsfdssdf",
        "pro_leader": "Miloš Paunović",
        "deadline": "2018-08-15 10:00:00",
        "timecreated": "2018-08-03 12:37:11",
        "can_edit": "false",
        "unseen_feed": 0,
        "completed_tasks": 0,
        "inprogress_tasks": 4,
        "failed_tasks": 0,
        "cancelled_tasks": 0,
        "total_tasks": 4,
        "users_count": 2,
        "admins_count": 1
    }, {
        "id": 215,
        "title": "Lord of the Rings",
        "pro_description": "Destroy the ring of power in the fires of mount Doom!",
        "pro_leader": "Miloš Paunović",
        "deadline": null,
        "timecreated": "2018-07-23 08:52:23",
        "can_edit": "true",
        "unseen_feed": 0,
        "completed_tasks": 8,
        "inprogress_tasks": 29,
        "failed_tasks": 0,
        "cancelled_tasks": 4,
        "total_tasks": 37,
        "users_count": 2,
        "admins_count": 2
    }, {
        "id": 253,
        "title": "Novi projekat od Danila test 2",
        "pro_description": null,
        "pro_leader": "Danilo Pusic",
        "deadline": "2018-09-21 10:00:00",
        "timecreated": "2018-07-26 07:43:08",
        "can_edit": "true",
        "unseen_feed": 0,
        "completed_tasks": 0,
        "inprogress_tasks": 2,
        "failed_tasks": 0,
        "cancelled_tasks": 0,
        "total_tasks": 2,
        "users_count": 2,
        "admins_count": 2
    }, {
        "id": 252,
        "title": "Novi projekat test statusa users add 2",
        "pro_description": null,
        "pro_leader": "Danilo Pusic",
        "deadline": null,
        "timecreated": "2018-07-25 21:38:27",
        "can_edit": "true",
        "unseen_feed": 0,
        "completed_tasks": 0,
        "inprogress_tasks": 0,
        "failed_tasks": 0,
        "cancelled_tasks": 0,
        "total_tasks": 0,
        "users_count": 2,
        "admins_count": 2
    }, {
        "id": 318,
        "title": "Projekat sa novim fidovima",
        "pro_description": "Ovde se koriste samo novi mehanizam za fidove. Tj. samo order\n",
        "pro_leader": "Nikola Zelic",
        "deadline": null,
        "timecreated": "2018-08-10 07:21:05",
        "can_edit": "false",
        "unseen_feed": 0,
        "completed_tasks": 0,
        "inprogress_tasks": 2,
        "failed_tasks": 0,
        "cancelled_tasks": 0,
        "total_tasks": 2,
        "users_count": 2,
        "admins_count": 1
    }, {
        "id": 352,
        "title": "Projekat za Aleksu",
        "pro_description": null,
        "pro_leader": "Danilo Pusic",
        "deadline": null,
        "timecreated": "2018-10-18 12:37:50",
        "can_edit": "true",
        "unseen_feed": 0,
        "completed_tasks": 0,
        "inprogress_tasks": 1,
        "failed_tasks": 0,
        "cancelled_tasks": 0,
        "total_tasks": 1,
        "users_count": 1,
        "admins_count": 1
    }, {
        "id": 314,
        "title": "Projekat za test",
        "pro_description": "Ovo je neki opis projekta",
        "pro_leader": "Miloš Paunović",
        "deadline": "2018-08-22 10:00:00",
        "timecreated": "2018-08-08 10:52:12",
        "can_edit": "false",
        "unseen_feed": 0,
        "completed_tasks": 0,
        "inprogress_tasks": 5,
        "failed_tasks": 0,
        "cancelled_tasks": 0,
        "total_tasks": 5,
        "users_count": 4,
        "admins_count": 1
    }, {
        "id": 294,
        "title": "Testiranje alerta za nepostojece korisnike",
        "pro_description": null,
        "pro_leader": "Miloš Paunović",
        "deadline": null,
        "timecreated": "2018-08-03 09:14:13",
        "can_edit": "false",
        "unseen_feed": 0,
        "completed_tasks": 0,
        "inprogress_tasks": 0,
        "failed_tasks": 0,
        "cancelled_tasks": 0,
        "total_tasks": 0,
        "users_count": 2,
        "admins_count": 1
    }, {
        "id": 214,
        "title": "Testiranje aplikacije",
        "pro_description": "Ovde cemo testirati nas rad na ovaj aplikaciji",
        "pro_leader": "Nikola Zelic",
        "deadline": null,
        "timecreated": "2018-07-23 08:47:26",
        "can_edit": "true",
        "unseen_feed": 0,
        "completed_tasks": 4,
        "inprogress_tasks": 7,
        "failed_tasks": 1,
        "cancelled_tasks": 5,
        "total_tasks": 12,
        "users_count": 3,
        "admins_count": 3
    }, {
        "id": 350,
        "title": "Testiranje mejla",
        "pro_description": null,
        "pro_leader": "Danilo Pusic",
        "deadline": null,
        "timecreated": "2018-10-02 08:48:04",
        "can_edit": "true",
        "unseen_feed": 0,
        "completed_tasks": 0,
        "inprogress_tasks": 1,
        "failed_tasks": 0,
        "cancelled_tasks": 0,
        "total_tasks": 1,
        "users_count": 1,
        "admins_count": 1
    }, {
        "id": 351,
        "title": "Testiranje mejla drugi projekat",
        "pro_description": null,
        "pro_leader": "Danilo Pusic",
        "deadline": null,
        "timecreated": "2018-10-02 08:52:05",
        "can_edit": "true",
        "unseen_feed": 0,
        "completed_tasks": 0,
        "inprogress_tasks": 1,
        "failed_tasks": 0,
        "cancelled_tasks": 0,
        "total_tasks": 1,
        "users_count": 1,
        "admins_count": 1
    }, {
        "id": 316,
        "title": "TESTIRANJE MNOGO FIDOVA",
        "pro_description": null,
        "pro_leader": "Danilo Pusic",
        "deadline": null,
        "timecreated": "2018-08-08 12:59:38",
        "can_edit": "true",
        "unseen_feed": 0,
        "completed_tasks": 0,
        "inprogress_tasks": 3,
        "failed_tasks": 0,
        "cancelled_tasks": 0,
        "total_tasks": 3,
        "users_count": 2,
        "admins_count": 2
    }, {
        "id": 313,
        "title": "VESTI",
        "pro_description": null,
        "pro_leader": "Danilo Pusic",
        "deadline": null,
        "timecreated": "2018-08-08 10:47:52",
        "can_edit": "true",
        "unseen_feed": 0,
        "completed_tasks": 0,
        "inprogress_tasks": 3,
        "failed_tasks": 0,
        "cancelled_tasks": 0,
        "total_tasks": 3,
        "users_count": 2,
        "admins_count": 2
    }];
    res.send(data)
});