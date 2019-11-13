const programOneSession = {
  'defaultActiveTab': [
    {
      'roles': ['Contributor', 'Reviewer', 'Admin'],
      'activeTab': 1,
    },
    {
      'roles': ['Admin'],
      'activeTab': 2
    }
  ],
  'headerComponent': {
    'tabs': [
      {
        'index': 0,
        'label': 'Contribute Questions',
        'onClick': {
          'component': 'collectionComponent'
        },
        'actionRoleMap': {
          'show': {
            'roles': [
              'Contributor',
              'Reviewer'
            ]
          },
          'drag': {
            'roles': [
              'Contributor',
              'Reviewer'
            ]
          }
        }
      },
      {
        'index': 1,
        'label': 'Issue Certificate',
        'onClick': {
          'component': 'issueCertificateComponent'
        },
        'actionRoleMap': {
          'show': {
            'roles': [
              'Reviewer'
            ]
          }
        }
      },
      {
        'index': 2,
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
        'roles': [
          'Contributor', 'Reviewer'
        ]
      },
      'review': {
        'roles': [
          'Reviewer'
        ]
      },
      'edit': {
        'roles': [
          'Contributor', 'Reviewer'
        ]
      },
      'publish': {
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

const programTwoSession = {
  'defaultActiveTab': [
    {
      'roles': ['Contributor'],
      'activeTab': 0,
    },
    {
      'roles': ['Reviewer'],
      'activeTab': 1
    },
    {
      'roles': ['Admin'],
      'activeTab': 1
    }
  ],
  'headerComponent': {
    'tabs': [
      {
        'index': 0,
        'label': 'Contribute',
        'onClick': {
          'component': 'uploadComponent'
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
        'index': 1,
        'label': 'Review',
        'onClick': {
          'component': 'playerComponent'
        },
        'actionRoleMap': {
          'show': {
            'action': 'show',
            'roles': [
              'Reviewer',
              'Admin'
            ]
          }
        }
      }
    ]
  },
  'uploadComponent': {
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
  'playerComponent': {
    'actionRoleMap': {
      'sendForReview': {
        'action': 'sendForReview',
        'roles': [
          'Reviewer'
        ]
      }
    }
  }
};


export let programSession = programOneSession;
