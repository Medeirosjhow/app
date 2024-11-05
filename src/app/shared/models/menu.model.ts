export interface MenuItem {
  id: number;
  label: string;
  icon?: string;
  link?: string;
  ariaLabel?: string;
  expanded?: boolean;
  children?: MenuItem[];
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    label: 'Dashboard',
    icon: 'home_outline',
    link: '/dashboard',
    ariaLabel: 'Dashboard',
  },
  {
    id: 2,
    label: 'Gestão de Regras',
    icon: 'doc_folder_base',
    ariaLabel: 'Gestão de Regras',
    expanded: false,
    children: [
      {
        id: 3,
        label: 'Regras',
        link: '/rule',
        ariaLabel: 'Regras',
      },
      {
        id: 4,
        label: 'Nova',
        link: '/rule/new',
        ariaLabel: 'Nova Regra',
      },
    ],
  },
  {
    id: 5,
    label: 'Auditoria',
    icon: 'seguranca_redes_sociais_outline',
    ariaLabel: 'Auditoria',
    link: '/audit',
  },
  {
    id: 6,
    label: 'Usuários e Permissões',
    icon: 'lideranca_outline',
    ariaLabel: 'Usuários e Permissões',
    expanded: false,
    children: [
      {
        id: 7,
        label: 'Usuários',
        link: '/user',
        ariaLabel: 'Usuários',
      },
      {
        id: 8,
        label: 'Permissões',
        link: '/permission',
        ariaLabel: 'Permissões',
      },
    ],
  },
  {
    id: 9,
    label: 'Configurações',
    icon: 'configuracao_sistema_outline',
    ariaLabel: 'Configurações',
    expanded: false,
    children: [
      {
        id: 10,
        label: 'Canais',
        link: '/channel',
        ariaLabel: 'Canais',
        expanded: false,
        children: [
          {
            id: 11,
            label: 'Listar Canais',
            link: '/channel',
            ariaLabel: 'Listar Canais',
          },
          {
            id: 12,
            label: 'Novo Canal',
            link: '/channel/new',
            ariaLabel: 'Novo Canal',
          },
        ],
      },
      {
        id: 13,
        label: 'Operadores',
        link: '/operator',
        ariaLabel: 'Operadores',
        expanded: false,
        children: [
          {
            id: 14,
            label: 'Listar Operadores',
            link: '/operator',
            ariaLabel: 'Listar Operadores',
          },
          {
            id: 15,
            label: 'Novo Operador',
            link: '/operator/new',
            ariaLabel: 'Novo Operador',
          },
        ],
      },
      {
        id: 16,
        label: 'Variáveis',
        link: '/variable',
        ariaLabel: 'Variáveis',
        expanded: false,
        children: [
          {
            id: 17,
            label: 'Listar Variáveis',
            link: '/variable',
            ariaLabel: 'Listar Variáveis',
          },
          {
            id: 18,
            label: 'Nova Variável',
            link: '/variable/new',
            ariaLabel: 'Nova Variável',
          },
        ],
      },
      {
        id: 19,
        label: 'Comandos',
        link: '/command',
        ariaLabel: 'Comandos',
        expanded: false,
        children: [
          {
            id: 20,
            label: 'Listar Comandos',
            link: '/command',
            ariaLabel: 'Listar Comandos',
          },
          {
            id: 21,
            label: 'Novo Comando',
            link: '/command/new',
            ariaLabel: 'Novo Comando',
          },
        ],
      },
      {
        id: 22,
        label: 'Domínios',
        link: '/domain',
        ariaLabel: 'Domínios',
        expanded: false,
        children: [
          {
            id: 23,
            label: 'Listar Domínios',
            link: '/domain',
            ariaLabel: 'Listar Domínios',
          },
          {
            id: 24,
            label: 'Novo Domínio',
            link: '/domain/new',
            ariaLabel: 'Novo Domínio',
          },
        ],
      },
      {
        id: 25,
        label: 'Notificações',
        link: '/notification',
        ariaLabel: 'Notificações',
        icon: 'notificacao_outline',
      },
      {
        id: 26,
        label: 'Sair',
        link: '/logout',
        ariaLabel: 'Sair',
        icon: 'sair',
      },
    ],
  },
];
