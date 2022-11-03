import { Router } from 'express'

import { CloudantV1 } from '@ibm-cloud/cloudant';
import { IamAuthenticator } from 'ibm-cloud-sdk-core';

const router = Router();

const authenticator = new IamAuthenticator({
    apikey: 'YLbWD-MP8CCigQesIQbH-jQDrFxCgUxHiw68bxW6e3se'
});

const service = new CloudantV1({
    authenticator: authenticator
});

service.setServiceUrl('https://3b495aba-e6d6-407f-8c67-d50f5da6d667-bluemix.cloudantnosqldb.appdomain.cloud');

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
        res.redirect('back');
    });
})

export default router