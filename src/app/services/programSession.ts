export let programSession = {
  'headerComponent': {
    'tabs': [
      {
        'name': 'tab1',
        'label': 'Contributor',
        'onClick': {
          'component': 'c1Component'
        },
        'actionRoleMap': {
          'show': {
            'action': 'show',
            'roles': [
              'Contributor',
              'Reviewer'
            ]
          }
        }
      },
      {
        'name': 'tab2',
        'label': 'Reviewer',
        'onClick': {
          'component': 'c2Component'
        },
        'actionRoleMap': {
          'show': {
            'action': 'show',
            'roles': [
              'Reviewer'
            ]
          }
        }
      },
      {
        'name': 'tab3',
        'label': 'Dashboard',
        'onClick': {
          'component': 'c3Component'
        },
        'actionRoleMap': {
          'show': {
            'action': 'show',
            'roles': [
              'Admin'
            ]
          }
        }
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
