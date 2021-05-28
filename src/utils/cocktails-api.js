import request from 'superagent';

export async function signUp(credentials) {
  const response = await request
    .post('/api/auth/signup')
    .ok(res => res.status < 500)
    .send(credentials);


  if (response.status === 400) {
    throw response.body;
  }
  return response.body;
}

export async function signIn(credentials) {
  const response = await request
    .post('/api/auth/signin')
    .ok(res => res.status < 500)
    .send(credentials);

  if (response.status === 400) {
    throw response.body;
  }
  return response.body;
}

export async function getCocktails(search) {
  const response = await request
    .get('/api/cocktails')
    .query({ search: search })
    .set('Authorization', window.localStorage.getItem('TOKEN'));
  
  return response.body;
}

export async function getCocktail(id) {
  const response = await request
    .get(`/api/cocktails/${id}`)
    .set('Authorization', window.localStorage.getItem('TOKEN'));
  console.log(response.body, 'response');
  return response.body;
}

export async function getMyFavorites() {
  const response = await request 
    .get('/api/me/favorites')
    .set('Authorization', window.localStorage.getItem('TOKEN'));

  return response.body;
}

export async function addFavorite(favorite) {
  const response = await request
    .post('/api/favorites')
    .send(favorite)
    .set('Authorization', window.localStorage.getItem('TOKEN'));

  if (response.status === 400) {
    throw response.body;
  }
  return response.body;
};

export async function deleteFavorite(id) {
  const response = await request
    .delete(`/api/favorites/${id}`)
    .set('Authorization', window.localStorage.getItem('TOKEN'));

  return response.body;
}
