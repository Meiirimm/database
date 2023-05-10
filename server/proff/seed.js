const proff = require('./proff')

const data = [
    '6В01501 — Математика',
    '6В01502 — Математика — Физика',
    '6В01504 — Физика',
    '6В01506 — Информатика',
    '6В01505 — Физика — Информатика',
    '6В01513 — Физика — Электроника',
    '6В01514 — Информатика и робототехника',
    '6В06102 — Информационные системы',
]

async function writeDataProff() {
    const length = await proff.count();
    if(length == 0) {
        data.map((item, index) => {
            new proff({
                name: item,
                key: index
            }).save()
        })
    }
}

module.exports = writeDataProff