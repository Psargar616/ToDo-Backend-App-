
// import modal
const Todo = require("../modals/ToDo")

// route handler

exports.createToDo = async(req,res) => {
    try {

        const {title, description} = req.body;
        // create new entry on db
        const responce = await Todo.create({title, description});
        res.status(200).json(
            {
                success:true,
                data:responce,
                messgae: "Entry created successfully"
            }
        )
    } catch (error) {
        console.log(error)
        console.error(error)
        res.status(200).json(
            {
                success:false,
                data: "internal server error",
                messgae: error,
            }
        )
    }
}

