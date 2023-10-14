import mysql from 'mysql2';

export class DB {
    static getConn = () => {
        return new Promise((resolve, reject) => {
            let db = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'banco123',
                database: 'hakaton'
            })
    
            db.connect((err) => {
                if(err){
                    reject(false)
                }else{
                    resolve(db)
                }
            })
        })
    }

    static cadUser = (values) => {
        console.log(values)


        return new Promise((resolve, reject) => {
            this.getConn().then((db) => {
                let sql = "insert into users(user, email, password) values (?, ?, ?)"
                let params = [values.user, values.email, values.password]
                db.query(sql, params, (err, result) => {
                    if(err){
                        console.log(err)
                        reject(err)
                    }else{
                        resolve("Usuário cadastrado com sucesso!")
                    }
                })
            })
        })     
    }

    static login = (values) => {

        console.log(values  )

        return new Promise((resolve, reject) => {
            let sql = "select * from users where user = ? and password = ?"
            let params = [values.user, values.password];
            this.getConn().then((db) => {
                db.query(sql, params ,(err, result) => {
                    if(err){
                        console.log(err)
                        reject({ status: false, msg: "Verifique sua conexão com a internet e tente novamente!"})
                    }else{
                        if(result.length > 0){
                            resolve({status: true, user: values.user})
                        }
                        else{
                            reject({ status: false, msg: "Usuário não cadastrado"})
                        }
                    }
                })
            })
        })
    }

}

