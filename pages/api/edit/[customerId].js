import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
    try {
        connectDB();
    } catch (err) {
        console.error("Error connecting to database");
        res.status(500).json({
            status: "Failed",
            message: "Error connecting to database"
        })
        return;
    }

    if (req.method === "PATCH") {
        const id = req.query.customerId;
        const data = req.body.data;

        try {
            const customer = await Customer.findOne({ _id: id })
            customer.name = data.name;
            customer.lastName = data.lastName;
            customer.email = data.email;
            customer.phone = data.phone;
            customer.address = data.address;
            customer.postalCode = data.postalCode;
            customer.date = data.date;
            customer.products = data.products;
            customer.updatedAt = data.updatedAt;

            customer.save();

            res.status(200).json({
                status: "Success",
                data: customer,
            })

        } catch (err) {
            res.status(500).json({
                status: "Failed",
                message: "Error saving customer edit request"
            })
        }
    }
}