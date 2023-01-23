
const { response } = require('express');
const { validarGoogleIdToken } = require('../helpers/google-verify-token');

const googleAuth = async ( req, res = response ) => {

    const token = req.body.token;
    if(!token) {
        return res.json({
            ok: false,
            msg: 'No hay un token en la petición'
        });
    }

    const googleUSer = await validarGoogleIdToken( token );

    if( !googleUSer ) {
        return res.json(400).json({
            ok: false,
        })
    }

    //todo: guardar en la base de datos

    res.json({
        ok:true,
        googleUSer
    });


}


module.exports = {
    googleAuth
}