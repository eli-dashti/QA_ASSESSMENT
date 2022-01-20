const { post, get } = require('../helper/rest')
const { petsBody } = require('../pets/body');
const { baseURL, pet } = require('../endpoints');
const { expect } = require('chai');
const petURL = baseURL + pet;

describe('Test cases for /GET and /POST', async() => {
    it('Create a New pet', async() => {
        let response = await post(petURL, petsBody)
        console.log("create pet", response)
        expect(response.status).to.be.equal("available");
        expect(response).to.have.all.keys(
            'id',
            'category',
            'name',
            'photoUrls',
            'tags',
            'status',
        );
    });

    it('Get a pet by valid ID', async() => {
        const getPetURL = petURL + "/" + petsBody.id
        let getInfo = await get(getPetURL)
        console.log("pet info: ", getInfo)
        expect(getInfo).to.have.all.keys(
            'id',
            'category',
            'name',
            'photoUrls',
            'tags',
            'status',
        );
    });

    it('Get a pet by invalid ID', async() => {
        const getPetURL = petURL + "/" + "922337924141"
        let getInfo = await get(getPetURL)
        console.log("pet info: ", getInfo)
        expect(getInfo).to.have.all.keys(
            'code',
            'type',
            'message'
        );
        expect(getInfo.code).to.be.equal(1);
    });
});

