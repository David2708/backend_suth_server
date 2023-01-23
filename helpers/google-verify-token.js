const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = '906997718122-qcg42r8voeqqoig20o5tuqpt1aendv42.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async  ( token ) => {

    try {

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID,
                '906997718122-2i1bdhaubevu42lj5bkhmcrqm8stjqkk.apps.googleusercontent.com'
            ],
        });
      
        const payload = ticket.getPayload();
        console.log(payload);
        return {
            name: payload['name'],
            pricture: payload['picture'],
            email: payload['email']
        }
        
    } catch (error) {
        return null;
    }

   

}

// validarGoogleIdToken().catch(console.error);


module.exports = {

    validarGoogleIdToken

}