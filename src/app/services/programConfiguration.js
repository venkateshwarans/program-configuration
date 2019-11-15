{
  "programId": "217bddc0-df59-11e9-8d82-2b7f2cdfa2fd",
  "description": "Test Prep program",
  "name": "Test Prep",
  "slug": "sunbird",
  "startDate": "2019-09-25T12:50:30.000Z",
  "endDate": null,
  "status": null,
  "type": "private",
  "roles": {
    "value": [
      "CONTRIBUTOR",
      "REVIEWER",
      "PUBLISHER"
    ]
  },
  "defaultRoles": [
    "CONTRIBUTOR"
  ],
  "onBoardingForm": {
    "templateName": "onBoardingForm",
    "action": "onboard",
    "fields": [
      {
        "code": "school",
        "dataType": "text",
        "name": "School",
        "label": "School",
        "description": "School",
        "inputType": "select",
        "required": false,
        "displayProperty": "Editable",
        "visible": true,
        "range": [
          {
            "identifier": "my_school",
            "code": "my_school",
            "name": "My School",
            "description": "My School",
            "index": 1,
            "category": "school",
            "status": "Live"
          }
        ],
        "index": 1
      }
    ]
  },
  "header": {
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
  "actions": {
    "showFilters": {
      "roles": [
        "Contributor",
        "Reviewer",
        "Admin"
      ]
    },
    "addresource": {
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
    },
    "savePracticeSet": {
      "roles": [
        "Contributor"
      ]
    },
    "previewPracticeSet": {
      "roles": [
        "Contributor",
        "Reviewer"
      ]
    },
    "submitPracticeSet": {
      "roles": [
        "Contributor"
      ]
    },
    "deletePracticeSet": {
      "roles": [
        "Contributor"
      ]
    },
    "acceptPracticeSet": {
      "roles": [
        "Reviewer"
      ]
    },
    "rejectPracticeSet": {
      "roles": [
        "Reviewer"
      ]
    },
    "addQuestionPracticeSet": {
      "roles": [
        "Contributor"
      ]
    },
    "addSolutionPracticeSet": {
      "roles": [
        "Contributor"
      ]
    },
    "changeUploadFile": {
      "roles": [
        "Contributor"
      ]
    },
    "submitUpload": {
      "roles": [
        "Contributor"
      ]
    },
    "acceptUpload": {
      "roles": [
        "Reviewer"
      ]
    },
    "rejectUpload": {
      "roles": [
        "Reviewer"
      ]
    },
    "showPreview": {
      "roles": [
        "Contributor",
        "Reviewer"
      ]
    },
    "showDashboard": {
      "roles": [
        "Admin"
      ]
    },
    "reportSelection": {
      "label": "Select Report"
    },
    "reportContentTypeSelection": {
      "label": "Select Content-Type"
    },
    "reportDownload": {
      "label": "Download"
    },
    "reportRefresh": {
      "label": "Refresh"
    }
  },
  "config": {
    "filters": {
      "implicit": [
        {
          "code": "framework",
          "defaultValue": "NCF",
          "label": "Framework",
          "visibility": false
        },
        {
          "code": "board",
          "defaultValue": "AP",
          "label": "Board",
          "visibility": false
        },
        {
          "code": "medium",
          "defaultValue": "English",
          "label": "Medium",
          "visibility": false
        }
      ],
      "explicit": [
        {
          "code": "class",
          "range": [
            "Class 6",
            "Class 7",
            "Class 8"
          ],
          "label": "Class",
          "multiselect": false,
          "defaultValue": [
            "Class 6"
          ],
          "visibility": true
        },
        {
          "code": "subject",
          "range": [
            "English",
            "Maths"
          ],
          "label": "Subject",
          "multiselect": false,
          "defaultValue": [
            "English"
          ],
          "visibility": true
        }
      ]
    },
    "groupBy": {
      "value": "Subject",
      "defaultValue": "Class"
    },
    "contentTypes": {
      "value": [
        {
          "name": "Explanation",
          "contentType": "ExplanationResource",
          "mimeType": [
            "application/pdf"
          ],
          "thumbnail": "",
          "description": "description",
          "marks": 5,
          "resourceType": "",
          "Audience": "",
          "formConfiguration": [
            {
              "code": "LearningOutcome",
              "range": [],
              "label": "Learning Outcome",
              "multiselect": true
            },
            {
              "code": "bloomslevel",
              "range": [],
              "label": "Learning Level",
              "multiselect": true
            }
          ],
          "filesConfig": {
            "accepted": "pdf",
            "size": "50"
          }
        },
        {
          "name": "Experimental",
          "contentType": "ExperientialResource",
          "mimeType": [
            "video/mp4",
            "video/webm",
            "video/x-youtube"
          ],
          "thumbnail": "",
          "description": "description",
          "marks": 5,
          "resourceType": "",
          "Audience": "",
          "formConfiguration": [
            {
              "code": "LearningOutcome",
              "range": [],
              "label": "Learning Outcome",
              "multiselect": true
            },
            {
              "code": "bloomslevel",
              "range": [],
              "label": "Learning Level",
              "multiselect": true
            }
          ],
          "filesConfig": {
            "accepted": "mp4, webm, youtube",
            "size": "50"
          }
        },
        {
          "name": "Practice Sets",
          "contentType": "PracticeQuestionSet",
          "mimeType": [
            "application/vnd.ekstep.ecml-archive"
          ],
          "questionCategories": [
            "vsa",
            "sa",
            "la",
            "mcq"
          ],
          "thumbnail": "",
          "description": "description",
          "marks": 5,
          "resourceType": "",
          "Audience": "",
          "formConfiguration": [
            {
              "code": "LearningOutcome",
              "range": [],
              "label": "Learning Outcome",
              "multiselect": true
            },
            {
              "code": "bloomslevel",
              "range": [],
              "label": "Learning Level",
              "multiselect": true
            }
          ]
        },
        {
          "name": "Curiosity",
          "contentType": "CuriosityQuestionSet",
          "mimeType": [
            "application/vnd.ekstep.ecml-archive"
          ],
          "questionCategories": [
            "curiosity"
          ],
          "thumbnail": "",
          "description": "description",
          "marks": 5,
          "resourceType": "",
          "Audience": "",
          "formConfiguration": [
            {
              "code": "LearningOutcome",
              "range": [],
              "label": "Learning Outcome",
              "multiselect": true
            },
            {
              "code": "bloomslevel",
              "range": [],
              "label": "Learning Level",
              "multiselect": true
            }
          ]
        }
      ],
      "defaultValue": [
        {
          "name": "Practice Sets",
          "contentType": "PracticeQuestionSet",
          "mimeType": [
            "application/vnd.ekstep.ecml-archive"
          ],
          "questionCategories": [
            "vsa",
            "sa",
            "la",
            "mcq"
          ],
          "thumbnail": "",
          "description": "description",
          "marks": 2,
          "resourceType": "",
          "Audience": "",
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
          ]
        }
      ]
    },
    "textbookList": [],
    "filesConfig": {
      "accepted": "pdf, mp4, webm, youtube",
      "size": "50"
    },
    "practiceSetConfig": {
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
      ]
    },
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
    ]
  }
}
