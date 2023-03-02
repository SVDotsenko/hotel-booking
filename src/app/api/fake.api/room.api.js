const rooms = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "Джон Дориан",
        roomNumber: 1,
        rate: 2.5,
        booked: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Кокс",
        roomNumber: 2,
        rate: 2.5,
        booked: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Боб Келсо",
        roomNumber: 3,
        rate: 3.5,
        booked: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Рэйчел Грин",
        roomNumber: 4,
        rate: 3.5,
        booked: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "Шелдон Купер",
        roomNumber: 5,
        rate: 4.6,
        booked: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Леонард Хофстедтер",
        roomNumber: 6,
        rate: 3.5,
        booked: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "Говард Воловиц",
        roomNumber: 7,
        rate: 3.5,
        booked: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Никола Тесла",
        roomNumber: 8,
        rate: 5,
        booked: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        name: "Моника Геллер",
        roomNumber: 9,
        rate: 4.5,
        booked: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Рататуй",
        roomNumber: 10,
        rate: 4.5,
        booked: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181f",
        name: "Джоуи Триббиани",
        roomNumber: 11,
        rate: 3.5,
        booked: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181r",
        name: "Брэд Питт",
        roomNumber: 12,
        rate: 5,
        booked: false
    }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(rooms);
        }, 400);
    });

const getById = id =>
    new Promise(resolve => {
        window.setTimeout(function () {
            resolve(rooms.find(room => room.roomNumber == id));
        }, 500);
    });

export default {
    fetchAll,
    getById
};
