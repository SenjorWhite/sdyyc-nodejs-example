const members = [
    { id: "001", name: "Senjor" },
    { id: "002", name: "Alex" },
    { id: "003", name: "Tony" },
    { id: "004", name: "John" },
    { id: "005", name: "Twilight" }
];

const events = [
    { id: "00", title: "1st Meetup" },
    { id: "01", title: "2nd Meetup" },
    { id: "02", title: "3rd Meetup" },
    { id: "03", title: "4th Meetup" },
    { id: "04", title: "5th Meetup" }
];

module.exports = (app) => {
    app.get("/api/members", (req, res) => {
        res.send(members);
    });

    app.get("/api/events", (req, res) => {
        res.send(events);
    })

    app.get("/", (req, res) => {
        res.send({ Error: "Api not found." });
    });
};