import db from "../models/index.js"
import jwt from "jsonwebtoken";
import cars from "../models/cars.js";
 
const Cars = db.Cars
export const getCars = async(req, res) => {
    if (req.user.role == "member") {
        const cars = await Cars.findAll({
            where :{
                available : true
            },
            attributes:['id','name','price','size','available']
        });

        res.json(cars);
        return;
      }
        const cars = await Cars.findAll({
            attributes:['id','name','price','size','available','createdBy','updatedBy','deletedBy']
        });
        res.json(cars);
        return;
//         const cars = await Cars.findAll({
//             where :{
//                 available : true
//             },
//             attributes:['id','name','price','size','available','createdBy','updatedBy','deletedBy']
//         });
//         res.json(cars);
}

export const getCarsById = async(req, res) => {
    if (req.user.role == "member") {
        res.status(401).json({
          message: "You are not authorized to register an SuperAdmin / Admin",
        });
        return;
      }
      try {
        const cars = await Cars.findOne({
          where: { id: req.params.id },
        });
        res.status(200).json(cars);
      } catch (error) {
        console.log(error);
      }
    }

export const createCars = async(req, res) => {
    if (req.user.role == "member") {
        res.status(401).json({
          message: "You are not authorized to register an SuperAdmin / Admin",
        });
        return;
      }
    const { name,price,size,available,createdBy} = req.body;
    try {
        await Cars.create({
            name,
            price,
            size,
            available,
            createdBy : req.user.role
        });
        return res.status(200).json({
            success: true,
            message: "Cars Success Created",
        });
    } catch (error) {
        console.log(error);
    }
}

export const updateCars = async(req, res) => {
    if (req.user.role == "member") {
        res.status(401).json({
          message: "You are not authorized to register an SuperAdmin / Admin",
        });
        return;
      }
      const { id } = req.params;
    const dataBeforeDelete = await Cars.findOne({
    where: { id: id },
    });
// if(tokenUser.role !="superadmin"){res.json()}
    const parsedDataProfile = JSON.parse(JSON.stringify(dataBeforeDelete));

    if (!parsedDataProfile) {
        return res.status(400).json({
            success: false,
            message: "Cars doesn't exist or has been deleted!",
        });
    }
    const {name,price,size,available,updatedBy} = req.body;
        try {
            await Cars.update(
                { 
                    name,
                    price,
                    size,
                    available,
                    updatedBy : req.user.role
                },
                {
                where: { id: id},
                }
            );
            return res.status(200).json({
                success: true,
                message: "Cars Success Updated",
            });
        } catch (error) {
            console.log(error);
        }
}

export const softDeleteCars = async(req, res) => {
    if (req.user.role == "member") {
        res.status(401).json({
          message: "You are not authorized to register an SuperAdmin / Admin",
        });
        return;
      }
      const { id } = req.params;
    const dataBeforeDelete = await Cars.findOne({
    where: { id: id },
    });
// if(tokenUser.role !="superadmin"){res.json()}
    const parsedDataProfile = JSON.parse(JSON.stringify(dataBeforeDelete));

    if (!parsedDataProfile) {
        return res.status(400).json({
            success: false,
            message: "Cars doesn't exist or has been deleted!",
        });
    }
    const {available,deletedBy} = req.body;
        try {
            await Cars.update(
                { 
                    available : false,
                    deletedBy : req.user.role
                },
                {
                where: { id: id},
                }
            );
            return res.status(200).json({
                success: true,
                message: "Cars Deleted",
            });
        } catch (error) {
            console.log(error);
        }
}


export const deleteCars = async(req, res) => {
    if (req.user.role == "member") {
        res.status(401).json({
          message: "You are not authorized to register an SuperAdmin / Admin",
        });
        return;
    }
    const { id } = req.params;
    const dataBeforeDelete = await Cars.findOne({
    where: { id: id, available:false },
    });
// if(tokenUser.role !="superadmin"){res.json()}
    const parsedDataProfile = JSON.parse(JSON.stringify(dataBeforeDelete));
    const cars = await Cars.findAll({
                    where:{
                        available: false
                    }
                });
    const statusCars = cars[0].available

    if (!parsedDataProfile) {
        return res.status(400).json({
            success: false,
            message: "Cars doesn't exist or has been deleted!",
        });
    }
    

    if (statusCars == false){
        await Cars.destroy({
            where: { id }
        });
    
        return res.status(200).json({
            success: true,
            message: "Delete Data Successfully"
        });
        
    }else{

        

        return res.status(401).json({
            message: "File Can't to Deleted"
        })

    }

    
}