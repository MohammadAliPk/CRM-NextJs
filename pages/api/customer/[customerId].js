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
    if (req.method === "GET") {
        const id = req.query.customerId;
        try {
            const customer = await Customer.findOne({ _id: id });
            res.status(200).json({
                status: "Success",
                data: customer
            })
        } catch (err) {
            res.status(500).json({ status: "Failed", message: err.message });
        }
    }

}