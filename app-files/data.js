var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.6747011995700696,
        "pitch": -0.015427350822617925,
        "fov": 1.3479171620301593
      },
      "linkHotspots": [
        {
          "yaw": 1.3846620941987204,
          "pitch": 0.1123148303264383,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": 0.011625375305959196,
          "pitch": 0.21996401057671022,
          "rotation": 0,
          "target": "5-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6428856199492152,
          "pitch": 0.014331489458211166,
          "title": "FREE DIGITAL LOCK",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8995071602805851,
          "pitch": 0.017323677089709832,
          "rotation": 4.71238898038469,
          "target": "0-entrance"
        },
        {
          "yaw": 1.1899760702790054,
          "pitch": 0.0194191711717977,
          "rotation": 1.5707963267948966,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1337273257213454,
          "pitch": 0.01010886141614975,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 2.1599625966346894,
          "pitch": 0.005824386857641528,
          "rotation": 5.497787143782138,
          "target": "1-kitchen"
        },
        {
          "yaw": 0.5894779879120122,
          "pitch": 0.030078853848483078,
          "rotation": 1.5707963267948966,
          "target": "5-hallway"
        },
        {
          "yaw": 0.09038697416296415,
          "pitch": 0.11615022669339226,
          "rotation": 0,
          "target": "3-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0066201721776844,
          "pitch": 0.1474493579275329,
          "rotation": 0,
          "target": "5-hallway"
        },
        {
          "yaw": 0.6254504004441497,
          "pitch": 0.03450193226919218,
          "rotation": 0,
          "target": "4-living"
        },
        {
          "yaw": -2.7430985940219674,
          "pitch": 0.14228973891122898,
          "rotation": 17.27875959474387,
          "target": "2-dining"
        },
        {
          "yaw": -3.098685168627153,
          "pitch": -0.05344328351794836,
          "rotation": 4.71238898038469,
          "target": "1-kitchen"
        },
        {
          "yaw": -2.5394465977965694,
          "pitch": 0.12235032248629096,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.35720346131204295,
          "pitch": 0.2815122468098945,
          "rotation": 0,
          "target": "3-living"
        },
        {
          "yaw": -0.30377659955859215,
          "pitch": 0.13017916069543922,
          "rotation": 4.71238898038469,
          "target": "5-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.024267988755793723,
          "pitch": 0.04982349525359986,
          "rotation": 0,
          "target": "7-bathroom"
        },
        {
          "yaw": 0.6149725945757556,
          "pitch": 0.06788339557185452,
          "rotation": 1.5707963267948966,
          "target": "6-bedroom1"
        },
        {
          "yaw": -0.6262357667927105,
          "pitch": 0.04129532721183793,
          "rotation": 4.71238898038469,
          "target": "8-master-bedroom"
        },
        {
          "yaw": -2.0165497657418907,
          "pitch": 0.0021412345728588633,
          "rotation": 0,
          "target": "4-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom1",
      "name": "Bedroom1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.14303680996645518,
          "pitch": 0.02202334509500581,
          "rotation": 1.5707963267948966,
          "target": "5-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0913777525796533,
          "pitch": 0.13637978292279485,
          "rotation": 0,
          "target": "5-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-master-bedroom",
      "name": "Master bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.354015660059982,
          "pitch": 0.18173213843344804,
          "rotation": 14.137166941154074,
          "target": "5-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-master-bedroom",
      "name": "Master bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10765290343791278,
          "pitch": -1.7940013918860132e-9,
          "rotation": 1.5707963267948966,
          "target": "5-hallway"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Adison Type B",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
