import { model, models, Schema } from "mongoose";

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 1,
    },
    lastName: {
        type: String,
        required: true,
        minLength: 1,
    },
    email: {
        type: String,
        required: true,
        minLength: 1,
    },
    phoneNumber: String,
    address: String,
    postalCode: Number,
    data: Date,
    products: {
        type: Array,
        default: [],
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    }
});

const Customer = models.Customer || model("Customer", customerSchema);

export default Customer;