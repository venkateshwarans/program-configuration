{
  "programId": "217bddc0-df59-11e9-8d82-2b7f2cdfa2fd",
  "description": "Test Prep program",
  "name": "Test Prep",
  "creator": "Rayulu",
  "startDate": "2019-09-25T12:50:30.000Z",
  "endDate": null,
  "status": null,
  "roles": [
    {
      "id": 1,
      "name": "CONTRIBUTOR",
      "default": true,
      "defaultTab": 1
    },
    {
      "id": 2,
      "name": "REVIEWER",
      "defaultTab": 1
    },
    {
      "id": 3,
      "name": "PUBLISHER",
      "defaultTab": 3
    },
    {
      "id": 4,
      "name": "CERT_ISSUER",
      "defaultTab": 1
    }
  ],
  "data": {},
  "config": {
    "_comments": "These fields are common for any program. Based on program these fields can be removed. Has to define list of mandatory fields & options fields",
    "slug": "https://api.sunbird.org/",
    "loginReqired": true
  },
  "header": {
    "id": "ng.sunbird.header",
    "ver": "1.0",
    "compId": "headerComp",
    "author": "Venkat",
    "description": "",
    "publishedDate": "",
    "data": "{ }",
    "config": {
      "tabs": [
        {
          "index": 1,
          "label": "Contribute Questions",
          "onClick": "collectionComp"
        },
        {
          "index": 2,
          "label": "Issue Certificate",
          "onClick": "issueCertComp"
        },
        {
          "index": 3,
          "label": "Dashboard",
          "onClick": "dashboardComp"
        }
      ]
    }
  },
  "components": [
    {
      "id": "ng.sunbird.collection",
      "ver": "1.0",
      "compId": "collectionComp",
      "author": "Venkat",
      "description": "",
      "publishedDate": "",
      "data": {},
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
        "textbookList": []
      }
    },
    {
      "id": "ng.sunbird.chapterList",
      "ver": "1.0",
      "compId": "chapterListComponent",
      "author": "Kartheek",
      "description": "",
      "publishedDate": "",
      "data": {},
      "config": {
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
        }
      }
    },
    {
      "id": "ng.sunbird.uploadComponent",
      "ver": "1.0",
      "compId": "uploadContentComponent",
      "author": "Kartheek",
      "description": "",
      "publishedDate": "",
      "data": {},
      "config": {
        "filesConfig": {
          "accepted": "pdf, mp4, webm, youtube",
          "size": "50"
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
    },
    {
      "id": "ng.sunbird.practiceSetComponent",
      "ver": "1.0",
      "compId": "practiceSetComponent",
      "author": "Kartheek",
      "description": "",
      "publishedDate": "",
      "data": {},
      "config": {
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
        ]
      }
    },
    {
      "id": "ng.sunbird.dashboard",
      "ver": "1.0",
      "compId": "dashboardComp",
      "author": "Venkanna Gouda",
      "description": "",
      "publishedDate": "",
      "data": {},
      "config": {}
    }
  ],
  "actions": [
    {
      "showFilters": {
        "roles": [
          1,
          2,
          3
        ]
      }
    },
    {
      "addresource": {
        "roles": [
          1
        ]
      }
    },
    {
      "showRejected": {
        "roles": [
          2,
          3
        ]
      }
    },
    {
      "showDashboard": {
        "roles": [
          3
        ]
      }
    },
    {
      "showCert": {
        "roles": [
          4
        ]
      }
    }
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
  }
}
