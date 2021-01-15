'use strict'
const Diccionary = (lng) => {
  const pvr = {}
  const books = {
    es: {
      name: 'nombre',
      classification: 'clasificación',
      designation: 'designación',
      average_height: 'altura_media',
      skin_colors: 'colores_de_piel',
      hair_colors: 'color_de_cabello',
      eye_colors: 'color_de_ojo',
      average_lifespan: 'promedio_de_vida',
      homeworld: 'mundo_natal',
      language: 'lenguaje',
      people: 'personas',
      films: 'películas',
      created: 'creado',
      edited: 'editado',
      url: 'url',
      rotation_period: 'periodo_rotación',
      orbital_period: 'periodo_orbital',
      diameter: 'diámetro',
      climate: 'clima',
      gravity: 'gravedad',
      terrain: 'terreno',
      surface_water: 'superficie_de_agua',
      population: 'población',
      residents: 'residentes',
      age: 'edad',
      last_name: 'apellidos'
    }
  }

  pvr.parseKeys = (obj) => {
    const book = books[lng]

    Object.keys(obj).forEach((key) => {
      obj[book[key] || key] = obj[key]
      if (book[key]) delete obj[key]
    })
    return obj
  }

  return pvr
}

module.exports = Diccionary
