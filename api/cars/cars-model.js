const db = require('../../data/db-config')
const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
}

const getById = async id => {
  // DO YOUR MAGIC
  const [car] = await db('cars').where('id', id)
  return car
}

const getByVin = (vin) => {
  return db('cars').where('vin', vin).first()
}

const create = async (car) => {
  // DO YOUR MAGIC
  //return db('cars').insert(car).then(([id]) => getById(id))
  const [id] = await db('cars').insert(car)
  return getById(id)
}

module.exports = {
  getAll,
  getById,
  getByVin,
  create
}
