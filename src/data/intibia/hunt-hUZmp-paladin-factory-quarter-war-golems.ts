// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "hUZmp",
  "type": "Hunt",
  "title": "War Golems",
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvOTYvcU5zUEEwRjYtOC5wbmcifQ==",
  "minLevel": 150,
  "maxLevel": 250,
  "minProfitH": 70000,
  "maxProfitH": 150000,
  "minXpH": 250000,
  "maxXpH": 300000,
  "upvoteCount": 2,
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
  "videoId": "wI0LQ3h--38",
  "videoStartAt": null,
  "centerCoordinates": "32872,31295,7",
  "instructions": "<p>Great profit but bad xp for paladins level 150+ at war golems 💰.</p>\n<p></p>\n<p>⚙️ You don't need to do any quests to hunt here, just 4 gear wheels to access this place.</p>\n<p></p>\n<p>🏹 Walk in circles, killing the War Golems with Crystalline Arrows.</p>\n<p></p>",
  "createdAt": "2021-11-29T04:52:19.719Z",
  "updatedAt": "2024-03-17T21:34:35.351Z",
  "dungeon": {
    "id": 122,
    "type": "Dungeon",
    "title": "Factory Quarter",
    "accountStatus": "premium",
    "entranceCoordinates": "32894,31284,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"4fguo\",\"text\":\"Factory Quarter is located south-east of Yalahar.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":16,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"40qt3\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"d6bco\",\"text\":\"If you've started Mission 8 of In Service of Yalahar Quest go to the Factory Quarter's Gate, [map c=\\\"32849,31248,7\\\" map]here[/map].\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":18,\"length\":40,\"key\":0}],\"data\":{}},{\"key\":\"akkgd\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"dfv7c\",\"text\":\"Otherwise:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"5qq9t\",\"text\":\"Go to the magician quarter, [map c=\\\"32835,31155,7\\\" map]here[/map]\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"cg5ub\",\"text\":\"Pass through the sunken quarter, [map c=\\\"32884,31159,7\\\" map]here[/map], (hi - pass - sunken)\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"5k29j\",\"text\":\"Pass to the factory quarter, [map c=\\\"32895,31229,7\\\" map]here[/map], (hi - pass - factory)\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"href\":\"https://tibia.fandom.com/wiki/In_Service_of_Yalahar_Quest/Spoiler#Mission_03:_Death_to_the_Deathbringer\",\"rel\":\"noopener noreferrer\",\"title\":\"https://tibia.fandom.com/wiki/In_Service_of_Yalahar_Quest/Spoiler#Mission_03:_Death_to_the_Deathbringer\",\"url\":\"https://tibia.fandom.com/wiki/In_Service_of_Yalahar_Quest/Spoiler#Mission_03:_Death_to_the_Deathbringer\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 17,
      "type": "City",
      "name": "Yalahar"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 757,
      "type": "DungeonSection",
      "name": "Underground",
      "position": 2,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 410,
          "type": "Creature",
          "title": "War Golem",
          "formerNames": null,
          "healthPoints": 4300,
          "xpPoints": 2310,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XYXJfR29sZW0uZ2lmIn0="
        },
        {
          "id": 412,
          "type": "Creature",
          "title": "Worker Golem",
          "formerNames": null,
          "healthPoints": 1470,
          "xpPoints": 1250,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Xb3JrZXJfR29sZW0uZ2lmIn0="
        },
        {
          "id": 311,
          "type": "Creature",
          "title": "Frost Dragon Hatchling",
          "formerNames": null,
          "healthPoints": 800,
          "xpPoints": 745,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Gcm9zdF9EcmFnb25fSGF0Y2hsaW5nLmdpZiJ9"
        },
        {
          "id": 91,
          "type": "Creature",
          "title": "Fire Elemental",
          "formerNames": null,
          "healthPoints": 280,
          "xpPoints": 220,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9GaXJlX0VsZW1lbnRhbC5naWYifQ=="
        },
        {
          "id": 395,
          "type": "Creature",
          "title": "Mad Scientist",
          "formerNames": null,
          "healthPoints": 325,
          "xpPoints": 205,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NYWRfU2NpZW50aXN0LmdpZiJ9"
        },
        {
          "id": 403,
          "type": "Creature",
          "title": "Damaged Worker Golem",
          "formerNames": null,
          "healthPoints": 260,
          "xpPoints": 95,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EYW1hZ2VkX1dvcmtlcl9Hb2xlbS5naWYifQ=="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 4039,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 1700000,
      "percentage": 0.01,
      "isInestimable": false,
      "item": {
        "id": 1932,
        "type": "Item",
        "title": "Tin Key",
        "pluralizedTitle": "Tin Keys",
        "formerNames": null,
        "minValue": 1700000,
        "maxValue": 3500000,
        "npcBuyValue": null,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1Rpbl9LZXkuZ2lmIn0="
      }
    },
    {
      "id": 4038,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 40000,
      "percentage": 0.04,
      "isInestimable": false,
      "item": {
        "id": 1358,
        "type": "Item",
        "title": "Berserker",
        "pluralizedTitle": "Berserkers",
        "formerNames": null,
        "minValue": 40000,
        "maxValue": 80000,
        "npcBuyValue": 40000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0JlcnNlcmtlci5naWYifQ=="
      }
    },
    {
      "id": 4034,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.55,
      "isInestimable": false,
      "item": {
        "id": 91,
        "type": "Item",
        "title": "Steel Boots",
        "pluralizedTitle": "Steel Boots",
        "formerNames": null,
        "minValue": 30000,
        "maxValue": 40000,
        "npcBuyValue": 30000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0ZWVsX0Jvb3RzLmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 73,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 22,
        "type": "DungeonRequiredItem",
        "dungeonId": 122,
        "requiredItem": {
          "id": 118,
          "type": "RequiredItem",
          "item": {
            "id": 1321,
            "type": "Item",
            "title": "Gear Wheel",
            "pluralizedTitle": "Gear Wheels",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dlYXJfV2hlZWwuZ2lmIn0="
          }
        }
      },
      "huntId": 96
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 379,
      "type": "HuntSupply",
      "quantity": 1500,
      "vocation": "paladin",
      "supply": {
        "id": 122,
        "type": "Supply",
        "item": {
          "id": 2328,
          "type": "Item",
          "title": "Crystalline Arrow",
          "pluralizedTitle": "Crystalline Arrows",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0NyeXN0YWxsaW5lX0Fycm93LmdpZiJ9"
        }
      }
    },
    {
      "id": 380,
      "type": "HuntSupply",
      "quantity": 200,
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
  "lootUpdatedAt": "2021-11-29T19:41:58.873Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-29T19:41:58.855Z",
  "youtubeChannel": {
    "id": 38,
    "type": "YoutubeChannel",
    "name": "Solklar",
    "youtubeId": "UCHSbaXmr6ubebcRqa7AOklg",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
