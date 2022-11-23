import { post } from '@/utils/request';

async function login(username, password) {
  return post('/login', {
    username,
    password,
  });
}

export { login };
