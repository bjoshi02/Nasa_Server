const { getAllPlanets } = require('../../models/planets.model.js');

async function httpGetAllPlanets(req,res) {
    // sending our planets object in JSON format
    return res.status(200).json(await getAllPlanets());
}

module.exports = {
    httpGetAllPlanets,
};