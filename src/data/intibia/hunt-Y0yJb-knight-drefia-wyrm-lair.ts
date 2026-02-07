// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "Y0yJb",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvNDcvZ2RPaExBVXYtMDI4LWtuaWdodC1kcmVmaWEtd3lybS1sYWlyLnBuZyJ9",
  "minLevel": 180,
  "maxLevel": 300,
  "minProfitH": 150000,
  "maxProfitH": 250000,
  "minXpH": 1000000,
  "maxXpH": 1600000,
  "upvoteCount": 9,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 11,
    "type": "User",
    "username": "guimaplayer",
    "avatar": "sheep",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "_zEvzvq0NmI",
  "videoStartAt": null,
  "centerCoordinates": "33078,32390,14",
  "instructions": "<p>Great place to go test your knight's attack and defense.</p>\n<p>It is recommended to always go full imbuement and decrease as you advance level, depending on the expenses.</p>\n<p></p>\n<p>Walk with caution luring a few wyrms in the beggining and lure more as you feel more confident.&nbsp;</p>\n<p></p>\n<p>🛡️<strong> Equipment</strong></p>\n<ul>\n  <li>Terra helmet (Mana Leech Powerful)</li>\n  <li>Prismatic Armor (Life Leech Powerful)</li>\n  <li>Slayer of Destruction (Critical Powerful, Mana Leech Powerful, Life Leech Powerful)</li>\n</ul>\n<p>Light Pendant drops from the creatures of the hunt and gives 20% of protection against energy, so you can use it.</p>",
  "createdAt": "2021-11-14T17:01:28.609Z",
  "updatedAt": "2025-09-03T22:04:51.601Z",
  "dungeon": {
    "id": 193,
    "type": "Dungeon",
    "title": "Drefia Wyrm Lair",
    "accountStatus": "premium",
    "entranceCoordinates": "33033,32395,11",
    "entranceDirections": "{\"blocks\":[{\"key\":\"1plmi\",\"text\":\"Defria Wyrm Lair is located west of Darashia.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":16,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"24umr\",\"text\":\"From Darashia, walk and go up [map c=\\\"33090,32450,7\\\" map]here[/map] and [map c=\\\"33062,32440,6\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"9g7mi\",\"text\":\"Cross the bridge and go down 3 holes, [map c=\\\"33027,32417,5\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"75oc\",\"text\":\"Go up the ladder to the surface, [map c=\\\"33018,32429,8\\\" map]here[/map]\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"6ea9p\",\"text\":\"Go down, [map c=\\\"32996,32412,7\\\" map]here[/map], [map c=\\\"33001,32417,8\\\" map]here[/map] and [map c=\\\"33003,32412,9\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"c770p\",\"text\":\"Open the hole with a shovel and go down, [map c=\\\"32997,32397,10\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"62kce\",\"text\":\"Go to the east, pass the gate of expertise and go up, [map c=\\\"33033,32395,11\\\" map]here[/map]\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"m507\",\"text\":\"Head to the east to the Wyrm floors.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": true,
      "worldChange": false
    },
    "city": {
      "id": 8,
      "type": "City",
      "name": "Darashia"
    }
  },
  "requirements": [
    {
      "id": 116,
      "type": "DungeonRequirement",
      "dungeonId": 193,
      "description": "Level 60",
      "link": null
    }
  ],
  "sections": [
    {
      "id": 645,
      "type": "DungeonSection",
      "name": "Floor -1",
      "position": 2,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 795,
          "type": "Creature",
          "title": "Elder Wyrm",
          "formerNames": null,
          "healthPoints": 2700,
          "xpPoints": 2500,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FbGRlcl9XeXJtLmdpZiJ9"
        },
        {
          "id": 341,
          "type": "Creature",
          "title": "Wyrm",
          "formerNames": null,
          "healthPoints": 1825,
          "xpPoints": 1550,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XeXJtLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 3413,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 25000,
      "percentage": 0.1,
      "isInestimable": false,
      "item": {
        "id": 1094,
        "type": "Item",
        "title": "Composite Hornbow",
        "pluralizedTitle": "Composite Hornbows",
        "formerNames": null,
        "minValue": 25000,
        "maxValue": null,
        "npcBuyValue": 25000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0NvbXBvc2l0ZV9Ib3JuYm93LmdpZiJ9"
      }
    },
    {
      "id": 6428,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 11000,
      "percentage": 0.68,
      "isInestimable": false,
      "item": {
        "id": 959,
        "type": "Item",
        "title": "Lightning Legs",
        "pluralizedTitle": "Lightning Legs",
        "formerNames": null,
        "minValue": 11000,
        "maxValue": 40000,
        "npcBuyValue": 11000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0xpZ2h0bmluZ19MZWdzLmdpZiJ9"
      }
    },
    {
      "id": 6434,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 11000,
      "percentage": 0.15,
      "isInestimable": false,
      "item": {
        "id": 961,
        "type": "Item",
        "title": "Lightning Robe",
        "pluralizedTitle": "Lightning Robes",
        "formerNames": null,
        "minValue": 11000,
        "maxValue": 25000,
        "npcBuyValue": 11000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0xpZ2h0bmluZ19Sb2JlLmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [
    {
      "id": 60,
      "type": "HuntRequirement",
      "huntId": 47,
      "dungeonRequirement": {
        "id": 116,
        "type": "DungeonRequirement",
        "dungeonId": 193,
        "description": "Level 60",
        "link": null
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 138,
      "type": "HuntSupply",
      "quantity": 800,
      "vocation": "knight",
      "supply": {
        "id": 7,
        "type": "Supply",
        "item": {
          "id": 977,
          "type": "Item",
          "title": "Mana Potion",
          "pluralizedTitle": "Mana Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01hbmFfUG90aW9uLmdpZiJ9"
        }
      }
    },
    {
      "id": 139,
      "type": "HuntSupply",
      "quantity": 30,
      "vocation": "knight",
      "supply": {
        "id": 5,
        "type": "Supply",
        "item": {
          "id": 1062,
          "type": "Item",
          "title": "Ultimate Health Potion",
          "pluralizedTitle": "Ultimate Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1VsdGltYXRlX0hlYWx0aF9Qb3Rpb24uZ2lmIn0="
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-16T00:15:29.279Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-14T17:01:28.609Z",
  "youtubeChannel": {
    "id": 3,
    "type": "YoutubeChannel",
    "name": "Guima Player",
    "youtubeId": "UC1EGV6XwsRdDHgcG3XEMPXw",
    "verifiedAt": "Mon Nov 15 2021 20:53:10 GMT-0300 (Brasilia Standard Time)",
    "user": {
      "id": 11,
      "type": "User",
      "username": "guimaplayer",
      "avatar": "sheep",
      "role": "user",
      "membershipLevel": null
    }
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
