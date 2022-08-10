const Menu = [
  {header: 'App'},
  {
    title: 'Dashboard',
    group: 'apps',
    icon: 'dashboard',
    name: 'Dashboard',
    href: '/dashboard'
  },
  {header: 'Geral'},
  {
    title: 'Vagas',
    group: 'forms',
    component: 'forms',
    icon: 'edit',
    items: [
      {name: 'basic', title: 'Gerenciar Vagas', href: '/forms/basic-forms'},
      {name: 'jobs', title: 'Visualizar/Aplicar Vagas', href: '/forms/view-jobs'},
      {name: 'jobs', title: 'Dashboard Vagas', href: '/widgets/dashboard'},
      {name: 'jobs', title: 'Visualizar Candidatos', href: '/general/tables'},
    ]
  },
  {divider: true},
  {header: 'Extra'},
  {
    title: 'Login',
    group: 'extra',
    icon: 'list',
    href: '/login'
  }
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
