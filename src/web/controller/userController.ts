class userController {

    async index(req: any, res: any) {

        let response = {
            erro: 'nao',
            text: 'ola'
        }

        res.json(response);
    }

    async show(req: any, res: any) {
        

    }

    async store(req: any, res: any) {
     
    }

    async update(req: any, res: any) {
       
    }

    async delete(req: any, res: any) {
  
    }
}

export default new userController();