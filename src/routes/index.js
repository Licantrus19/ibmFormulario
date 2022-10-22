import { Router } from 'express'

import { CloudantV1 } from '@ibm-cloud/cloudant';
import { IamAuthenticator } from 'ibm-cloud-sdk-core';

const router = Router();

const authenticator = new IamAuthenticator({
    apikey: 'XIvbe6_eCf925RzCMGeHMhTpgjBFZv79p87OxKYQp6Hb'
});

const service = new CloudantV1({
    authenticator: authenticator
});

service.setServiceUrl('https://338247ff-077b-452f-85cd-6648b1f3a4ea-bluemix.cloudantnosqldb.appdomain.cloud');

router.get('/', (req, res) => { res.render('index', { title: 'Formulario RPA' }) })

router.post('/', (req, res) => {

    let name = {
        ayuda: req.body.help,
        contacto: req.body.contact,
        nombre: req.body.nombre,
        email: req.body.email,
        empresa: req.body.business,
        telefono: req.body.phone,
        privacidad: [req.body.check1, req.body.check2]
    }
    console.log(req.body)
    service.postDocument({
        db: 'dbformulario',
        document: name
    }).then(response => {
        console.log(response.result);
    });
    res.redirect('back');
})

export default router