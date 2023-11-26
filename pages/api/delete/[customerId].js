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
        });
        return;
    }
    if (req.method === "DELETE") {
        const id = req.query.customerId;

        try {
            await Customer.deleteOne({ _id: id });
            res.status(200).json({
                status: "Success",
                message: "Customer deleted successfully"
            })
        } catch (err) {
            console.log(err.message);
            res.status(500).json({
                status: "Failed",
                message: "Error deleting customer"
            })
        }
    }
}