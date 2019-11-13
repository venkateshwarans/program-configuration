export let programSession = {
  'defaultActiveTab': [{
    'roles': ['Contributor', 'Reviewer'],
    'activeTab': 'tab1'
  },
  {
    'roles': ['Admin'],
    'activeTab': 'tab3'
  }],
  'headerComponent': {
    'tabs': [
      {
        'name': 'tab1',
        'label': 'Contribute',
        'onClick': {
          'component': 'collectionComponent'
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
        'label': 'Review',
        'onClick': {
          'component': 'issueCertificateComponent'
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
          'component': 'dashboardComponent'
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
  'collectionComponent': {
    'actionRoleMap': {
      'create': {
        'action': 'create',
        'roles': [
          'Contributor', 'Reviewer'
        ]
      },
      'review': {
        'action': 'review',
        'roles': [
          'Reviewer'
        ]
      },
      'edit': {
        'action': 'edit',
        'roles': [
          'Contributor', 'Reviewer'
        ]
      },
      'publish': {
        'action': 'publish',
        'roles': [
          'Reviewer'
        ]
      },
  }
  },
  'issueCertificateComponent': {
    'actionRoleMap': {
      'sendForReview': {
        'action': 'sendForReview',
        'roles': [
          'Reviewer'
        ]
      }
    }
  },
  'dashboardComponent': {
    'actionRoleMap': {
      'showDashboards': {
        'action': 'showDashboards',
        'roles': [
          'Admin'
        ]
      }
    }
  }
};
