import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log(
    !!localStorage.getItem('token')
      ? 'O usuário está logado'
      : 'O usuário está deslogado'
  );
  const hasToken: boolean = !!localStorage.getItem('token');
  return hasToken;
};
