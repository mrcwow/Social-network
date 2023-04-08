import {Router} from "express";
var router = Router();
import fs from "fs";
import users_data from "./public/json/datausersserv.json" assert {type: "json"};

router.get("/",(req, res, next) => {
    res.render("start_page",{users_data: users_data});
    next();
});

router.post("/changedate",(req, res, next) => {
    const id = parseInt(req.body.id_us);
    let u_date = req.body.new_data;
    for (let us of users_data) if (us.id === id) us.birthday = u_date;
    fs.writeFileSync("./public/json/datausersserv.json", JSON.stringify(users_data))
    res.redirect("/");
    next();
});

router.post("/changeemail",(req, res, next) => {
    const id = parseInt(req.body.id_us);
    let u_email = req.body.new_data;
    for (let us of users_data) {
        if (us.id === id) {
            if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(u_email)) us.email = u_email;
        }
    }
    fs.writeFileSync("./public/json/datausersserv.json", JSON.stringify(users_data))
    res.redirect("/");
    next();
});

router.post("/changerole",(req, res, next) => {
    const id = parseInt(req.body.id_us);
    let u_role = req.body.new_data;
    for (let us of users_data) if (us.id === id) us.role = u_role;
    fs.writeFileSync("./public/json/datausersserv.json", JSON.stringify(users_data));
    res.redirect("/");
    next();
});

router.post("/changestatus",(req, res, next) => {
    const id = parseInt(req.body.id_us);
    let u_status = req.body.new_data;
    for (let us of users_data) if (us.id === id) us.status = u_status;
    fs.writeFileSync("./public/json/datausersserv.json", JSON.stringify(users_data));
    res.redirect("/");
    next();
});

router.post("/user/:num/newnews",(req, res, next) => {
    const id = parseInt(req.params.num);
    let u_news = req.body.d;
    let today = new Date();
    for (let us of users_data) {
        if (us.id === id) {
            if (u_news) us.news.push({"onenews": u_news, "date": today.toLocaleDateString()});
        }
    }
    fs.writeFileSync("./public/json/datausersserv.json", JSON.stringify(users_data))
    res.redirect("/user/" + id);
    next();
});

router.get("/user/:num",(req, res, next) => {
    const id = parseInt(req.params.num);
    let newss = "";
    for (let us of users_data[id].news) newss += us.onenews + " от " + us.date + "\n"
    res.render("user",{us: users_data[id], list_news: newss});
    next();
});

router.get("/user/:num/friends",(req, res, next) => {
    const id = parseInt(req.params.num);
    res.render("list_friends",{users_data: users_data, list_friends: users_data[id].friends});
    next();
});

router.get("/user/:num/news",(req, res, next) => {
    const id = parseInt(req.params.num);
    res.render("list_news",{users_data: users_data, list_friends: users_data[id].friends});
    next();
});

export default router