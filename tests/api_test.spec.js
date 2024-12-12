import {test,expect} from '@playwright/test';
import exp from 'constants';


//Get request for all user of Todos list

test('API GET Request',async({request}) => {
    const getResponse = await request.get('/todos')
    expect(getResponse.status()).toBe(200)
    const responseBody = await getResponse.json()
    expect(responseBody.length).toBeGreaterThan(0)
    const singleResponse = responseBody[0]
    expect(singleResponse).toHaveProperty('userId')
    expect(singleResponse).toHaveProperty('id')
    expect(singleResponse).toHaveProperty('title')
    expect(singleResponse).toHaveProperty('completed')
})

//POST request to create a new to do item with title and completed status

test('API POST Request' ,async({request}) => {
    const payload = {
        "userId" : 10,
        "title": "Insert New User Item",
        "completed": true 
    }
    const postResponse = await request.post('/todos', {
        data: payload
    })
    expect(postResponse.status()).toBe(201)
    const postResponseBody = await postResponse.json();
    console.log(postResponseBody)
    delete postResponseBody.id;
    expect(postResponseBody).toEqual(payload)
})


//POST Error Handling request to validate 500 status

test('API Error Handling POST Request' ,async({request}) => {
    const payload = null
    const postResponse = await request.post('/todos', {
        data: payload
    })
    expect(postResponse.status()).toBe(500)
})

//Put request to Update item for title or completed status

test('API Put Request' ,async({request}) => {
    const putPayLoad = {
            "userId": 1,
            "title": "Update Item Data",
            "completed": false
    }
    const putResponse = await request.put('/todos/1', {
        data: putPayLoad
    })  
    expect(putResponse.status()).toBe(200)
    const putResponseBody = await putResponse.json();
    console.log(putResponseBody)
    delete putResponseBody.id;
    expect(putResponseBody).toEqual(putPayLoad)

})

//Put Error Handling request to Validate 500 status

test('API Put Error Handling Request' ,async({request}) => {
    const putPayLoad = {
            "userId": 1,
            "title": "Update Item Data with Invalid Id",
            "completed": false
    }
    const putResponse = await request.put('/todos/20000', {
        data: putPayLoad
    })  
    expect(putResponse.status()).toBe(500)

})

//Delete request for all user of Todos list

test('API Delete Request',async({request}) => {
    const deleteResponse = await request.delete('/todos/1')
    expect(deleteResponse.status()).toBe(200)
})

//Error Handling for invalid request

test('API Error Handling Request',async({request}) => {
    const errorResponse = await request.get('https://jsonplaceholder.typicode.com/todo')
    expect(errorResponse.status()).toBe(404)
})
