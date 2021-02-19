const app = require('../app.js')
const supertest = require('supertest')
const mongoose = require('mongoose')
require('dotenv').config()


beforeAll(async () => {
    const URL_DATA = process.env.DATABASE
    await mongoose.connect(URL_DATA)
})

// CRUD Owner ( vérifier l'insertion / modification / suppression )
//  +++++++++++++++++++ 1- l'insertion +++++++++++++++
it("l'insertion owner a documment owners", async done => {
    const owner = {
        fullname : "Hello World",
        phone: "+212609983934",
        cin : "HH123297"
      }
    const res = await supertest(app).post('/api/owner/create')
      .send(owner)
    done()
  })


// ++++++++++++++++ 2- modification +++++++++++++++++  
it("modification owner a documment owners", async done => {
    const ownerUpdate = {
        fullname : "Hello World",
        phone: "+212609983934",
        cin : "HH123297"
      }
    const res = await supertest(app).put('/api/owner/ownerId')
      .send(ownerUpdate)
    done()
  })

// +++++++++++++++++++ 3- Suppression +++++++++++++++++
it("Suppression one owner a documment owners", async done => {
    const res = await supertest(app).delete('/api/owner/602d24dfa35e3233209dd563')   
    done()
  })


// Vérfier que les CIN de les utlisateurs commence par (H) ou bien (HH)
it("Vérfier que les CIN de les utlisateurs commence par (H) ou bien (HH)", async done => {
    const response = await supertest(app).get("/api/owner")
       .then(res => {
        const owner = res.body;
        console.log(res.body);
        for(let i = 0; i < owner.owners.length; i++){
            
           expect(owner.owners[i].cin).toMatch('/^(H|HH)/') 
        }
       })
       done()
})

//  Vérifier que le téléphone de les utlisateurs commence par (+212)
it(" Vérifier que le téléphone de les utlisateurs commence par (+212)", async done => {
    const response = await supertest(app).get("/api/owner")
       .then(res => {
        const owner = res.body
        for(let i = 0; i < owner.owners.length; i++){
           expect(owner.owners[i].phone).toMatch('/^(\+212)/') 
        }
       })
       done()
})


// Vérifier le PIN de la carte de crédit (est ce que correct et est ce que c'est quatre chiffres)

// it("Vérifier le PIN de la carte de crédit (est ce que correct et est ce que c'est quatre chiffres)", async done => {
//     const responce = await supertest(app).get('/api/credit_card/602ec9c773202cae8c3ea36f')
//       .then(res => {
//         const credit_card = res.body
        
//           expect(JSON.stringify(credit_card.pin).toString().length).toBe(4)
          
        
//       })
//     done()
//   })



