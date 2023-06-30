const fs = require("fs")
const Picture = require("../models/Picture")

exports.create = async (req, res) => {
  try {
    const { name } = req.body
    const file = req.file

    const picture = new Picture({
      name,
      src: file.path,
    })

    await picture.save()

    res.json(picture)
  } catch (error) {
    res.status(500).json({ message: "Erro ao salvar a imagem!" })
    console.error(error)
  }
}

exports.remove = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id)

    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada!" })
    }

    fs.unlinkSync(picture.src)

    await picture.deleteOne() // await picture.remove()

    res.json({ message: "Imagem removida com sucesso!" })
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir a imagem!" })
    console.error(error)
  }
}

exports.findAll = async (req, res) => {
  try {
    const pictures = await Picture.find()

    res.json(pictures)
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar as imagens!" })
    console.error(error)
  }
}
