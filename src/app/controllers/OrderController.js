import * as Yup from 'yup'

class OrderController {
    async store(request, response) {

        const schema = Yup.object().shape({
            products: Yup.array().requerid().of(
                Yup.object().shape({
                    id: Yup.number().requerid(),
                    quantity: Yup.number().requerid(),

                })
            ),
        })

        try {
            await schema.validateSync(request.body, { abortEarly: false })
        } catch (err) {
            return response.status(400).json({ error: err.errors })
        }


        return response.status(201).json(request.body)
    }
}

export default new OrderController()