const db = require('../../data/db-config')
const getAll = () => {
  // DO YOUR MAGIC
  return db('Cars')
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db('Cars').where('id', id).first()
}

const getByVin = (vin) => {
  return db('Cars').where('vin', vin).first()
}

const create = async (car) => {
  // DO YOUR MAGIC
  //return db('Cars').insert(car).then(([id]) => getById(id))
  const [id] = await db('Cars').insert(car)
  return getById(id)
}

module.exports = {
  getAll,
  getById,
  getByVin,
  create
}
