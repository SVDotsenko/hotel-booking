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

if (!localStorage.getItem("rooms")) {
    localStorage.setItem("rooms", JSON.stringify(rooms));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("rooms")));
        }, 1000);
    });

const getById = id =>
    new Promise(resolve => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("rooms")).find(room => room.roomNumber == id));
        }, 500);
    });

const update = (id, data) => new Promise(resolve => {
    const rooms = JSON.parse(localStorage.getItem("rooms"));
    const roomIndex = rooms.findIndex(r => r.roomNumber === id);
    rooms[roomIndex] = {...rooms[roomIndex], ...data};
    localStorage.setItem("users", JSON.stringify(rooms));
    resolve(rooms[roomIndex]);
});

const bookRoom = roomID => new Promise(resolve => {
    const rooms = JSON.parse(localStorage.getItem("rooms"));
    const roomIndex = rooms.findIndex(room => room.roomNumber == roomID);
    rooms[roomIndex].booked = !rooms[roomIndex].booked;
    localStorage.setItem("rooms", JSON.stringify(rooms));
    resolve(rooms[roomIndex]);
});

export default {
    fetchAll,
    getById,
    update,
    bookRoom
};
