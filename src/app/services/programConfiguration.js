{
  "headerComponent": {
    "tabs": [
      {
        "index": 0,
        "label": "Contribute Questions",
        "onClick": {
          "component": "collectionComponent"
        },
        "actionRoleMap": {
          "show": {
            "roles": [
              "Contributor",
              "Reviewer"
            ]
          },
          "drag": {
            "roles": [
              "Contributor",
              "Reviewer"
            ]
          }
        }
      },
      {
        "index": 1,
        "label": "Issue Certificate",
        "onClick": {
          "component": "issueCertificateComponent"
        },
        "actionRoleMap": {
          "show": {
            "roles": [
              "Reviewer"
            ]
          }
        }
      },
      {
        "index": 2,
        "label": "Dashboard",
        "onClick": {
          "component": "dashboardComponent"
        },
        "actionRoleMap": {
          "show": {
            "roles": [
              "Admin"
            ]
          }
        }
      }
    ]
  },
  "collectionComponent": {
    "actionRoleMap": {
      "show": {
        "roles": [
          "Admin",
          "Reviewer",
          "Contributor"
        ]
      },
      "filters": {
        "type": [
          "class",
          "subject"
        ],
        "roles": [
          "Admin",
          "Reviewer",
          "Contributor"
        ]
      }
    }
  },
  "chapterlistComponent": {
    "actionRoleMap": {
      "addresource": {
        "roles": [
          "Contributor"
        ]
      }
    },
    "preview": {
      "roles": [
        "Contributor",
        "Reviewer"
      ]
    },
    "move": {
      "roles": [
        "Contributor"
      ]
    },
    "delete": {
      "roles": [
        "Contributor"
      ]
    },
    "selectChapter": {
      "roles": [
        "Contributor",
        "Reviewer"
      ]
    },
    "showTotalContribution": {
      "lable": "Total Contributoion",
      "roles": [
        "Contributor",
        "Reviewer"
      ]
    },
    "showMyContribution": {
      "lable": "My Contribution",
      "roles": [
        "Contributor"
      ]
    },
    "showRejected": {
      "lable": "Rejected",
      "roles": [
        "Contributor"
      ]
    },
    "showUnderReview": {
      "lable": "Under Review",
      "roles": [
        "Contributor"
      ]
    },
    "showtotalUnderReview": {
      "lable": "Total under review",
      "roles": [
        "Reviewer"
      ]
    },
    "showAcceptedByMe": {
      "lable": "Rejected by me",
      "roles": [
        "Reviewer"
      ]
    },
    "showRejectedByMe": {
      "lable": "Accepted by me",
      "roles": [
        "Reviewer"
      ]
    }
  },
  "PracticeQuestionSetComponent": {
    "No of options": 4,
    "solutionType": [
      "Video",
      "Text & image"
    ],
    "questionCategory": [
      "vsa",
      "sa",
      "ls",
      "mcq",
      "curiosity"
    ],
    "formConfiguration": [
      {
        "code": "LearningOutcome",
        "range": [],
        "label": "Learning Outcome",
        "multiselect": false
      },
      {
        "code": "bloomslevel",
        "range": [],
        "label": "Learning Level",
        "multiselect": true
      }
    ],
    "actionRoleMap": {
      "save": {
        "roles": [
          "Contributor"
        ]
      },
      "preview": {
        "roles": [
          "Contributor",
          "Reviewer"
        ]
      },
      "submit": {
        "roles": [
          "Contributor"
        ]
      },
      "delete": {
        "roles": [
          "Contributor"
        ]
      },
      "accept": {
        "roles": [
          "Reviewer"
        ]
      },
      "reject": {
        "roles": [
          "Reviewer"
        ]
      },
      "addQuestion": {
        "roles": [
          "Contributor"
        ]
      },
      "addSolution": {
        "roles": [
          "Contributor"
        ]
      }
    }
  },
  "uploadComponent": {
    "actionRoleMap": {
      "show": {
        "roles": [
          "Contributor"
        ]
      },
      "selectFiles": {
        "roles": [
          "Contributor"
        ]
      },
      "upload": {
        "roles": [
          "Contributor"
        ]
      },
      "reject": {
        "roles": [
          "Reviewer"
        ]
      },
      "accept": {
        "roles": [
          "Reviewer"
        ]
      },
      "submit": {
        "roles": [
          "Contributor"
        ]
      },
      "changeFile": {
        "roles": [
          "Contributor"
        ]
      }
    }
  },
  "previewComponent": {
    "actionRoleMap": {
      "show": {
        "roles": [
          "Contributor",
          "Reviewer"
        ]
      }
    }
  },
  "dashboardComponent": {
    "actionRoleMap": {
      "show": {
        "roles": [
          "Admin"
        ]
      },
      "reportSelection": {
        "label": "Select Report"
      },
      "contentTypeSelection": {
        "label": "Select Content-Type"
      },
      "download": {
        "label": "Download"
      },
      "refresh": {
        "label": "Refresh"
      }
    }
  }
}
