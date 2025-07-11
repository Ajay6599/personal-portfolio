const { contactUserModel } = require('./contactUsers.model');

const contactUserController = {
    contact: async (req, res) => {
        const { name, email, phoneNumber,emailSub, message } = req.body;

        try {
            let newContact = new contactUserModel({
                name,
                email,
                phoneNumber,
                emailSub,
                message
            });

            await newContact.save();
            console.log(newContact);
            return res.status(200).send({ msg: "Your message has been sent successfully!" });
        } catch (error) {
            console.log("Error:", error.message);
            return res.status(500).send({ Error: error.message });
        }
    }
};

module.exports = { contactUserController };