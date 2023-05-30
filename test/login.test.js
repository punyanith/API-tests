const fetch = require('node-fetch2');

it ("Should test validity of token", async ()=> {
    let token = "";

    const options = {
        method: 'POST',
        headers: {
            "content-type":"application/json"
        },
        body:JSON.stringify({
            userName: "pun@byui.edu",
            password: "Asdfghjk555!"
        })
    };
    const response = await fetch('https://dev.stedi.me/login',options)
    token = await response.text()
    const status = response.status;
    expect(status).toBe(200);
    expect(token.length).toBe(60);
});

it ("Should detect bad password ", async ()=> {
    let token = "";

    const options = {
        method: 'POST',
        headers: {
            "content-type":"application/json"
        },
        body:JSON.stringify({
            userName: "pun@byui.edu",
            password: "badpass00!"
        })
    };
    const response = await fetch('https://dev.stedi.me/login',options)
    token = await response.text()
    const status = response.status;
    expect(status).toBe(401);
    expect(token.length).toBe(0);
});

it ("Should detect bad username ", async ()=> {
    let token = "";

    const options = {
        method: 'POST',
        headers: {
            "content-type":"application/json"
        },
        body:JSON.stringify({
            userName: "baduser@byui.edu",
            password: "Asdfghjk555!"
        })
    };
    const response = await fetch('https://dev.stedi.me/login',options)
    token = await response.text()
    const status = response.status;
    expect(status).toBe(500);
    expect(token.length).toBe(60);
});