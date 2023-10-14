import { DB }from './db.js'

export class Methods {
    static cadUser = (req, res) => {
        DB.cadUser(req.body).then((result) => {
            res.status(200).send({msg: result})
        }).catch((err) => {
            res.status(500).send({msg: "Erro ao cadastrar usuário."})
        })
    }

    static login = (req, res) => {
        DB.login(req.query).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(500).send(err)
        })
    }


    
}