//@desc     Logs request to console
const logger = (req, res, next) => {
    console.log(
        `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
    );
    // console.log(
    //     `METHOD: ${req.method}`
    // );
    // console.log(
    //     `PROTOCOL: ${req.protocol}`
    // );
    // console.log(
    //     `HOST: ${req.get('host')}`
    // );
    // console.log(
    //     `URL: ${req.originalUrl}`
    // );
    next();
}


module.exports = logger;