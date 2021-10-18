const router = require("express").Router();
const { restricted } = require("../auth/auth-middleware");

//All Potlucks
router.get('/', restricted, (req, res, next) => {
    return('build me');
});
//Potlucks by id
router.get('/:id', restricted, (req, res, next) => {
    return('build me');
});
//Potluck Users
router.get('/:id/users', restricted, (req, res, next) => {
    return('build me');
});
//Potluck foods
router.get('/:id/foods', restricted, (req, res, next) => {
    return('build me');
});
//Add User to Potluck
router.post('/:id/users', restricted, (req, res, next) => {
    return('build me');
});
//add Food to Potluck
router.post('/:id/foods', restricted, (req, res, next) => {
    return('build me');
});
//Delete food from Potlluck
router.delete('/:id/foods', restricted, (req, res, next) => {
    return('build me');
});

//create Potluck
router.post('/', restricted, (req, res, next) => {
    return('build me');
});
//edit potluck
router.put('/', restricted, (req, res, next) => {
    return('build me');
});
//delete Potluck
router.delete('/', restricted, (req, res, next) => {
    return('build me');
});

module.exports = router;