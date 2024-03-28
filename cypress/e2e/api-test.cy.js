describe('API Testing', () => {

    // POSTS

    it('get posts', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                expect(response.status).to.equal(200)
            })
    })

    it('post posts', () => {
        cy.request({
            method: 'POST', url: 'https://jsonplaceholder.typicode.com/posts', body: {
                "userId": 1,
                "title": "testing title",
                "body": "testing body. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        })
            .then((response) => {
                expect(response.status).to.equal(201)
            })
    })

    it('put posts', () => {
        cy.request({
            method: 'PUT', url: 'https://jsonplaceholder.typicode.com/posts/1', body: {
                "id": 1,
                "title": "testing title",
                "body": "changing body",
                "userId": 1
            }
        })
            .then((response) => {
                expect(response.status).to.equal(200)
            })
    })

    it('patch posts', () => {
        cy.request({
            method: 'PATCH', url: 'https://jsonplaceholder.typicode.com/posts/1', body: {
                "id": 1,
                "title": "testing title",
                "userId": 1
            }
        })
            .then((response) => {
                expect(response.status).to.equal(200)
            })
    })

    it('delete posts', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                expect(response.status).to.equal(200)
            })
    })


    //COMMENTS

    it('get comments', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                expect(response.status).to.equal(200)
            })
    })

    it('post comments', () => {
        cy.request({
            method: 'POST', url: 'https://jsonplaceholder.typicode.com/posts/1/comments', body: {
                "postId": 1,
                "name": "testing name",
                "body": "testing body. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        })
            .then((response) => {
                expect(response.status).to.equal(201)
            })
    })

    it('put comments', () => {
        cy.request({
            method: 'PUT', url: 'https://jsonplaceholder.typicode.com/comments/1', body: {
                "postId": 1,
                "name": "testing name",
                "email": "testing@test.io",
                "body": "changing body",
                "userId": 1
            }
        })
            .then((response) => {
                expect(response.status).to.equal(200)
            })
    })

    it('patch comments', () => {
        cy.request({
            method: 'PATCH', url: 'https://jsonplaceholder.typicode.com/comments/1', body: {
                "postId": 1,
                "name": "testing name",
                "userId": 1
            }
        })
            .then((response) => {
                expect(response.status).to.equal(200)
            })
    })

    it('delete comments', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/comments/1')
            .then((response) => {
                expect(response.status).to.equal(200)
            })
    })

    //ALBUMS

    it('get albums', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/albums')
            .then((response) => {
                expect(response.status).to.equal(200)
            })
    })

    it('post albums', () => {
        cy.request({
            method: 'POST', url: 'https://jsonplaceholder.typicode.com/posts/1/albums', body: {
                "postId": 1,
                "title": "testing title"
            }
        })
            .then((response) => {
                expect(response.status).to.equal(201)
            })
    })

    it('put albums', () => {
        cy.request({
            method: 'PUT', url: 'https://jsonplaceholder.typicode.com/albums/1', body: {
                "postId": 1,
                "title": "testing title"
            }
        })
            .then((response) => {
                expect(response.status).to.equal(200)
            })
    })

    it('patch albums', () => {
        cy.request({
            method: 'PATCH', url: 'https://jsonplaceholder.typicode.com/albums/1', body: {
                "title": "testing title"
            }
        })
            .then((response) => {
                expect(response.status).to.equal(200)
            })
    })

    it('delete albums', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/albums/1')
            .then((response) => {
                expect(response.status).to.equal(200)
            })
    })

})