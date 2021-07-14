// STRETCH
const cars = [
    {
        vin: '4Y1SL65848Z411439',
        make: 'Chevy',
        model: 'Silverado',
        mileage: 36000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '5GAEV23718J129013',
        make: 'Honda',
        model: 'IDK',
        mileage: 31000,
        title: 'ditry',
    },
    {
        vin: 'ZDM1UB5W86B016210',
        make: 'Ford',
        model: 'Ranger',
        mileage: 15000,
    },
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
