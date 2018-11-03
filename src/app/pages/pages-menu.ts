import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
 /*  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  }, */
  {
    title: 'REPORTES',
    group: true,
  },
  {
    title: 'Colombia Saludable',
    children: [
      {
        title: 'Tiempos de espera',
        link: '/pages/times'
      },
      {
        title: "Costo fórmulas",
        link: '/pages/prices'
      },
      {
        title: "Medicinas recetadas",
        link: '/pages/recipes'
      },
      {
        title: "Grafo",
        link: '/pages/graph'
      }

    
      
    ]
  }
  /* {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  }, */
];
