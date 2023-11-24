import React, { useState } from 'react';
import Form from '../module/Form';
import { useRouter } from 'next/router';

const AddCustomer = () => {
    const [isSaving, setIsSaving] = useState(false);

    const [form, setForm] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        postalCode: '',
        date: '',
        products: [],
    })

    const router = useRouter();

    const saveHandler = async () => {
        if (!isSaving) {
            setIsSaving(true);
            const res = await fetch("/api/customer", {
                method: 'POST',
                body: JSON.stringify({ data: form }),
                headers: { 'Content-Type': 'application/json' }
            })
            const data = await res.json();
            console.log(data);
            if (data.status === 'Success') {
                router.push("/")
            } else if (data.status === 'Failed') {
                setIsSaving(false);
            }
        }
    }

    const cancelHandler = () => {
        setForm({
            name: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            postalCode: '',
            date: '',
            products: [],
        })
        router.push("/");
    }
    return (
        <div className='customer-page'>
            <h4>Add New Customer</h4>
            <Form form={form} setForm={setForm} />
            <div className='customer-page__buttons'>
                <button className='first' onClick={cancelHandler}>Cancel</button>
                <button className='second' onClick={saveHandler} >
                    {isSaving ? 'Saving...' : 'Save'}
                </button>            </div>
        </div>
    );
};

export default AddCustomer;