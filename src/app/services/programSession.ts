export let programSession = {
  'headerComponent': {
    'tabs': [
      {
        'name': 'tab1',
        'lable': 'Contributor',
        'onClick': {
          'component': 'c1Component'
        },
        'actionRoleMap': [
          {
            'action': 'show',
            'roles': [
              'Contributor',
              'Reviewer'
            ]
          }
        ]
      },
      {
        'name': 'tab2',
        'lable': 'Reviewer',
        'onClick': {
          'component': 'c2Component'
        },
        'actionRoleMap': [
          {
            'action': 'show',
            'roles': [
              'Reviewer'
            ]
          }
        ]
      },
      {
        'name': 'tab3',
        'lable': 'Dashboard',
        'onClick': {
          'component': 'c3Component'
        },
        'actionRoleMap': [
          {
            'action': 'show',
            'roles': [
              'Admin'
            ]
          }
        ]
      }
    ]
  },
  'c1Component': {
    'actionRoleMap': [
      {
        'action': 'create',
        'roles': [
          'Contributor'
        ]
      },
      {
        'action': 'review',
        'roles': [
          'Reviewer'
        ]
      }
    ]
  },
  'c2Component': {
    'actionRoleMap': [
      {
        'action': 'sendForreviwe',
        'roles': [
          'Reviewer'
        ]
      }
    ]
  },
  'c3Component': {
    'actionRoleMap': [
      {
        'action': 'showDashboards',
        'roles': [
          'Admin'
        ]
      }
    ]
  }
};
