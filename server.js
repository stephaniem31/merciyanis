const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

app.get('/', (req, res) => {
    const albums = [
        {
            id: 1,
            cover: "https://cdn.pixabay.com/photo/2020/02/11/22/26/piano-4841121_1280.jpg",
            title: "All the piano you need",
            artist: "Mireille Dumas",
            rating: 4.1,
            price: 12
        },

        {
            id: 2,
            cover: "https://cdn.pixabay.com/photo/2016/08/15/16/48/vinyl-1595847_1280.jpg",
            title: "Songs to test by",
            artist: "Francis Quokka",
            rating: 4.9,
            price: 14
        },

        {
            id: 3,
            cover: "https://cdn.pixabay.com/photo/2016/01/19/17/29/earth-1149733_1280.jpg",
            title: "The Greatest Show on Earth",
            artist: "Jean-Luc Kekes",
            rating: 4.3,
            price: 16.50
        },

        {
            id: 4,
            cover: "https://cdn.pixabay.com/photo/2017/10/17/16/10/fantasy-2861107_1280.jpg",
            title: "Dream is collapsing",
            artist: "Emy Le Iench",
            rating: 4.6,
            price: 14.50
        },

        {
            id: 5,
            cover: "https://cdn.pixabay.com/photo/2018/05/20/22/55/thunderstorm-3417042_1280.jpg",
            title: "Furious Ferrieu",
            artist: "Yanis Bensetti",
            rating: 4.2,
            price: 12.50
        },

        {
            id: 6,
            cover: "https://images.pexels.com/photos/7008911/pexels-photo-7008911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            title: "Mr. Roquefort",
            artist: "Océane and the Queens",
            rating: 4.8,
            price: 14
        }
    ]
    res.json(albums

    )
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})