exports.homePage = (req, res) => {
    res.render('index');
    return;
};

exports.sendPost = (req, res) => {
    res.send('POST route add...')
    return;
}