const express = require('express');
const app = express();

// broken
// https://maxcdn.bootstrapcdn.com/bootswatch/3.3.5/darkly/bootstrap.min.css
// http://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css

// fixed
// https://bootswatch.com/3/darkly/bootstrap.min.css
// https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css

app.get('/bootswatch/:version/:theme/:file', (req, res) => {
    res.redirect(`https://bootswatch.com/3/${req.params.theme}/${req.params.file}`);
});

app.get('/bootstrap/:version/css/:file', (req, res) => {
    res.redirect(`https://cdn.jsdelivr.net/npm/bootstrap@${req.params.version}/dist/css/${req.params.file}`);
});

app.listen(443, () => {
    console.log(`what the fuck`);
});