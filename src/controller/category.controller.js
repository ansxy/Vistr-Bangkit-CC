const prisma = require('../database/prisma.database')


const getAllCategories = async (req, res) => {
}

const getCategoriesById = async (req,res) => {

}

const getByMultipleCategories = async (req,res) => {
    const {categories} = req.query
    const categoriesList = categories.split(",")
    if(!categories) {
        return res.status(400).json({error : 'Parameter Kategori Wajib'})
    }
    try {
        const data = await prisma.place.findMany({
            where : {
                categories: {
                    some : {
                        category : {
                                name : {
                                    in : categoriesList
                                }
                        }
                    }
                }
            },
        })
        if(data.length === 0) {
            return res.status(400).json({status : 'fail', message : 'Tidak menemukan tempat sesuai kategori'})
        }
        return res.status(200).json({status : 'success', data : data})
    } catch (error) {
        console.log(error)
        return res.status(500).json({status: "fail", data : error})  
    }
}

module.exports = {getAllCategories,getCategoriesById,getByMultipleCategories}