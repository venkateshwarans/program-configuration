{
  'headerComponent': {
    'tabs': [{
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
  'uploadComponent': {
    'actionRoleMap': {
      'show': {
        'action': 'show',
        'roles': [
          'Contributor'
        ]
      },
      'selectFiles': {
        'action': 'Select Files',
        'roles': [
          'Contributor'
        ]
      },
      'upload': {
        'action': 'upload',
        'roles': [
          'Contributor'
        ]
      },
      'reject': {
        'action': 'reject',
        'roles': [
          'Reviewer'
        ]
      },
      'accept': {
        'action': 'accept',
        'roles': [
          'Reviewer'
        ]
      },
      'submit': {
        'action': 'submit',
        'roles': [
          'Contributor'
        ]
      },
      'changeFile': {
        'action': 'changeFile',
        'roles': [
          'Contributor'
        ]
      }
    }
  },
  'previewComponent': {
    'actionRoleMap': {
      'show': {
        'action': 'show',
        'roles': [
          'Contributor', 'Reviewer'
        ]
      }
    }
  },
  'collectionComponent': {
    'actionRoleMap': {
      'show': {
        'roles': [
          'Admin', 'Reviewer', 'Contributor'
        ]
      },
      'filters': {
        'type': ['class', 'subject'],
        'roles': [
          'Admin', 'Reviewer', 'Contributor'
        ]
      }
    }
  },
  'chapterlistComponent': {
    'actionRoleMap': {
      'addresource: {
      'roles': [
        'Contributor'
      ]
    },
    'preview': {
      'roles': [
        'Contributor', 'Reviewer'
      ]
    },
    'move': {
      'roles': [
        'Contributor'
      ]
    },
    'delete': {
      'roles': [
        'Contributor'
      ]
    },
    'selectChapter': {
      'roles': [
        'Contributor', 'Reviewer'
      ]
    },
    'showTotalContribution': {
      'lable': 'Total Contributoion',
      'roles': [
        'Contributor', 'Reviewer'
      ]
    },
    'showMyContribution': {
      'lable': 'My Contribution',
      'roles': [
        'Contributor'
      ]
    },
    'showRejected': {
      'lable': 'Rejected',
      'roles': [
        'Contributor'
      ]
    },
    'showUnderReview': {
      'lable': 'Under Review',
      'roles': [
        'Contributor'
      ]
    },
    'showtotalUnderReview': {
      'lable': 'Total under review',
      'roles': [
        'Reviewer'
      ]
    },
    'showAcceptedByMe': {
      'lable': 'Rejected by me',
      'roles': [
        'Reviewer'
      ]
    },
    'showRejectedByMe': {
      'lable': 'Accepted by me',
      'roles': [
        'Reviewer'
      ]
    }
  }
}
