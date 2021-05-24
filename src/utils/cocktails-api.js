import request from 'superagent';

export async function signUp(credentials) {
  const response = await request
    .post('/api/auth/signUp')
    .ok(res => res.status < 500)
    .send(credentials);


  if (response.status === 400) {
    throw response.body;
  }
  return response.body;
}

export async function signIn(credentials) {
  const response = await request
    .post('/api/auth/signIn')
    .ok(res => res.status < 500)
    .send(credentials);

  if (response.status === 400) {
    throw response.body;
  }
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

  return response.body;
}

export async function deleteFavorite(id) {
  const response = await request
    .delete(`/api/favorites/${id}`)
    .set('Authorization', window.localStorage.getItem('TOKEN'));

  return response.body;
}