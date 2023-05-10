const course = require('./course')

const data = [
    '1',
    '2',
    '3',
    '4'
]

async function writeDataCourse() {
    const length = await course.count();
    if(length == 0) {
        data.map((item, index) => {
            new course({
                name: item,
                key: index
            }).save()
        })
    }
}

module.exports = writeDataCourse