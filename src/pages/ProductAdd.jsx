import React from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { Button } from 'semantic-ui-react'
import TextInput from '../utilities/customFromControl/TextInput'
import ProductService from '../services/productService'


export default function ProductAdd() {


    let productService = new ProductService()


    const initialValues = { productName: "", unitPrice: 0 }

    const schema = Yup.object({

        productName: Yup.string().required("ürün adı zorunlu"),
        unitPrice: Yup.number().required("ürün fiyatı zorunlu")

    })

    return (
        <div>

            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    productService.add(values)

                    // console.log(values)
                }}

            >
                <Form className='ui form'>
                    <TextInput name="productName" placeholder="ürün adı" />
                    <br />
                    <TextInput name="unitPrice" placeholder="ürün fiyatı" />
                    <br />
                    <Button color='green' type='submit'>Ekle</Button>
                </Form>
            </Formik>

        </div>
    )
}
