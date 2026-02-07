// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "JI1YJ",
  "type": "Hunt",
  "title": null,
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvODQvTVRoeTlhSTAtSkkxWUotbWluLnBuZyJ9",
  "minLevel": 70,
  "maxLevel": 100,
  "minProfitH": 10000,
  "maxProfitH": 30000,
  "minXpH": 200000,
  "maxXpH": 250000,
  "upvoteCount": 3,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "en-us",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 1,
    "type": "User",
    "username": "warturtle",
    "avatar": "gamemaster",
    "role": "admin",
    "membershipLevel": "counselor"
  },
  "videoId": "fShCPbCOhzw",
  "videoStartAt": null,
  "centerCoordinates": "33033,32395,11",
  "instructions": "<p>Great spawn for paladins level 70+. It gives a nice experience and loot.</p>\n<p></p>\n<p>🏹 You can use Power Bolts to save some money or Drill Bolts to have a nice boost in experience. At level 90+ use Crystalline Arrows to make more damage.</p>\n<p></p>\n<p>⚗️ Use 2x Mana Leech imbuements, so you can bring just 20 strong mana potions.</p>\n<p></p>\n<p>🐉 Try to lure at most 2 wyrms and kill them from distance.</p>",
  "createdAt": "2021-11-27T20:58:14.102Z",
  "updatedAt": "2024-03-17T23:12:33.864Z",
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
      "id": 644,
      "type": "DungeonSection",
      "name": "Main floor",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
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
      "id": 3407,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 6000,
      "percentage": 1.22,
      "isInestimable": false,
      "item": {
        "id": 1142,
        "type": "Item",
        "title": "Focus Cape",
        "pluralizedTitle": "Focus Capes",
        "formerNames": null,
        "minValue": 6000,
        "maxValue": 8000,
        "npcBuyValue": 6000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0ZvY3VzX0NhcGUuZ2lmIn0="
      }
    },
    {
      "id": 3411,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 3600,
      "percentage": 0.47,
      "isInestimable": false,
      "item": {
        "id": 1079,
        "type": "Item",
        "title": "Wand of Starstorm",
        "pluralizedTitle": "Wand of Starstorms",
        "formerNames": null,
        "minValue": 3600,
        "maxValue": 9000,
        "npcBuyValue": 3600,
        "npcSellValue": 18000,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1dhbmRfb2ZfU3RhcnN0b3JtLmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [
    {
      "id": 58,
      "type": "HuntRequirement",
      "huntId": 84,
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
      "id": 338,
      "type": "HuntSupply",
      "quantity": 500,
      "vocation": "paladin",
      "supply": {
        "id": 135,
        "type": "Supply",
        "item": {
          "id": 2313,
          "type": "Item",
          "title": "Drill Bolt",
          "pluralizedTitle": "Drill Bolts",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0RyaWxsX0JvbHQuZ2lmIn0="
        }
      }
    },
    {
      "id": 339,
      "type": "HuntSupply",
      "quantity": 5,
      "vocation": "paladin",
      "supply": {
        "id": 37,
        "type": "Supply",
        "item": {
          "id": 1057,
          "type": "Item",
          "title": "Energy Wall Rune",
          "pluralizedTitle": "Energy Wall Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0VuZXJneV9XYWxsX1J1bmUuZ2lmIn0="
        }
      }
    },
    {
      "id": 340,
      "type": "HuntSupply",
      "quantity": 5,
      "vocation": "paladin",
      "supply": {
        "id": 3,
        "type": "Supply",
        "item": {
          "id": 972,
          "type": "Item",
          "title": "Strong Health Potion",
          "pluralizedTitle": "Strong Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0cm9uZ19IZWFsdGhfUG90aW9uLmdpZiJ9"
        }
      }
    },
    {
      "id": 341,
      "type": "HuntSupply",
      "quantity": 20,
      "vocation": "paladin",
      "supply": {
        "id": 8,
        "type": "Supply",
        "item": {
          "id": 970,
          "type": "Item",
          "title": "Strong Mana Potion",
          "pluralizedTitle": "Strong Mana Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0cm9uZ19NYW5hX1BvdGlvbi5naWYifQ=="
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-29T19:30:51.113Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-29T19:30:51.095Z",
  "youtubeChannel": {
    "id": 8,
    "type": "YoutubeChannel",
    "name": "Gudii",
    "youtubeId": "UCzpQDQs7IfFElqGNluk08iw",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
