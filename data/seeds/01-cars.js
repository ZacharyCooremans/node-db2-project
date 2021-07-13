// STRETCH
const cars = [
    {
        vin: '111111111111',
        make: 'Chevy',
        model: 'Silverado',
        mileage: 36000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '23111111111',
        make: 'Honda',
        model: 'IDK',
        mileage: 31000,
        title: 'ditry',
    },
    {
        vin: '411813113195',
        make: 'Ford',
        model: 'Ranger',
        mileage: 15000,
    },
]

exports.seed = async function (knex) {
    await knex('Cars').truncate()
    await knex('Cars').insert(cars)
}
