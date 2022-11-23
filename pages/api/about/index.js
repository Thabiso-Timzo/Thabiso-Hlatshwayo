const { about } = require('../../../data/about-data/about')

export default function aboutData(req, res) {
    try {
        return res.status(200).json(about)   
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}