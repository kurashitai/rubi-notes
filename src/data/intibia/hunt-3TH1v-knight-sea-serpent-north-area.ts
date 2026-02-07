// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "3TH1v",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTkvcmhKS3dndjYtMDE0LWtuaWdodC1zZWEtc2VycGVudC1ub3J0aC1hcmVhLnBuZyJ9",
  "minLevel": 90,
  "maxLevel": 160,
  "minProfitH": 5000,
  "maxProfitH": 25000,
  "minXpH": 250000,
  "maxXpH": 400000,
  "upvoteCount": 8,
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
  "videoId": "jaHvM4ZMTIo",
  "videoStartAt": null,
  "centerCoordinates": "31923,31066,10",
  "instructions": "<p>Great place for premium account knights for both experience and loot. Sea Serpents are weak to physical damage, what makes this spot highly recommended.</p>\n<p></p>\n<p>The place has many levitate spots, so you can bring parcels or trophy stands to save time and mana when you walk between the floors.</p>\n<p></p>\n<p>Killing the Young Sea Serpents between Sea Serpents spawns will make you do the best experience possible. Since they run away very fast on low life, cast <em>exori/exori mas </em>until they are deep yellow, then <em>exori gran</em> to make sure they won't run.</p>\n<p></p>\n<p>💯 <strong>Experience</strong></p>\n<p>In average you can make from 250k/h to 400k/h (up to 600k/h in green stamina).</p>\n<p></p>\n<p>💰 <strong>Loot</strong></p>\n<p>The profit here is good and ranges between 5k and 25k per hour.</p>\n<p></p>\n<p>🛡️ <strong>Equipments</strong></p>\n<p>Wear your usual equipment but if you have ice/earth equips you should use it. It's worth using a melee ring (axe/club/sword).</p>\n<p></p>\n<p>Altought you need a Helmet of the Deep to enter the dungeon, you can change to your regular helmet once you've entered. You'll take a little damage from drowning but it's worth if you have a good helmet like Zaoan.</p>\n<p></p>\n<p>🐻 <strong>Task</strong></p>\n<p>If you are level 130+ you can make <a href=\"https://tibia.fandom.com/wiki/Killing_in_the_Name_of..._Quest/Spoiler#Sea_Serpents\">Sea Serpent task</a>, to kill 900 Sea Serpents or Young Sea Serpents. After you do that, you are able to fight the boss Leviathan, [map c=\"31926,31071,10\" map]here[/map], who drops nice loots.</p>",
  "createdAt": "2021-11-02T04:47:19.267Z",
  "updatedAt": "2024-03-17T21:40:57.266Z",
  "dungeon": {
    "id": 104,
    "type": "Dungeon",
    "title": "Sea Serpent North Area",
    "accountStatus": "premium",
    "entranceCoordinates": "31926,31070,8",
    "entranceDirections": "{\"blocks\":[{\"key\":\"eqhgm\",\"text\":\"Sea Serpent North Area is located to the north-west of Svargrond. After completing The Hunt for the Sea Serpent Quest you will be able to teleport to this area in Captain Haba's boat, [map c=\\\"32348,31124,7\\\" map]here[/map].\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":22,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":83,\"length\":34,\"key\":0}],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"href\":\"https://tibia.fandom.com/wiki/The_Hunt_for_the_Sea_Serpent_Quest\",\"title\":\"The Hunt for the Sea Serpent Quest\",\"url\":\"https://tibia.fandom.com/wiki/The_Hunt_for_the_Sea_Serpent_Quest\"}}}}",
    "extra": {
      "hotd": true,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 16,
      "type": "City",
      "name": "Svargrond"
    }
  },
  "requirements": [
    {
      "id": 215,
      "type": "DungeonRequirement",
      "dungeonId": 104,
      "description": "Must have completed The Hunt for the Sea Serpent Quest",
      "link": "https://tibia.fandom.com/wiki/The_Hunt_for_the_Sea_Serpent_Quest"
    }
  ],
  "sections": [
    {
      "id": 1272,
      "type": "DungeonSection",
      "name": "Floor -1",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 348,
          "type": "Creature",
          "title": "Young Sea Serpent",
          "formerNames": null,
          "healthPoints": 1050,
          "xpPoints": 1000,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Zb3VuZ19TZWFfU2VycGVudC5naWYifQ=="
        },
        {
          "id": 390,
          "type": "Creature",
          "title": "Deepsea Blood Crab",
          "formerNames": null,
          "healthPoints": 320,
          "xpPoints": 180,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EZWVwc2VhX0Jsb29kX0NyYWIuZ2lmIn0="
        }
      ]
    },
    {
      "id": 1273,
      "type": "DungeonSection",
      "name": "Floor -2",
      "position": 2,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 321,
          "type": "Creature",
          "title": "Sea Serpent",
          "formerNames": null,
          "healthPoints": 1950,
          "xpPoints": 2300,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TZWFfU2VycGVudC5naWYifQ=="
        },
        {
          "id": 348,
          "type": "Creature",
          "title": "Young Sea Serpent",
          "formerNames": null,
          "healthPoints": 1050,
          "xpPoints": 1000,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Zb3VuZ19TZWFfU2VycGVudC5naWYifQ=="
        }
      ]
    },
    {
      "id": 1274,
      "type": "DungeonSection",
      "name": "Floor -3",
      "position": 3,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 321,
          "type": "Creature",
          "title": "Sea Serpent",
          "formerNames": null,
          "healthPoints": 1950,
          "xpPoints": 2300,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TZWFfU2VycGVudC5naWYifQ=="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 3058,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 16000,
      "percentage": 0.09,
      "isInestimable": false,
      "item": {
        "id": 1122,
        "type": "Item",
        "title": "Crystalline Armor",
        "pluralizedTitle": "Crystalline Armors",
        "formerNames": null,
        "minValue": 16000,
        "maxValue": 20000,
        "npcBuyValue": 16000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0NyeXN0YWxsaW5lX0FybW9yLmdpZiJ9"
      }
    },
    {
      "id": 3054,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 11000,
      "percentage": 0.44,
      "isInestimable": false,
      "item": {
        "id": 965,
        "type": "Item",
        "title": "Glacier Kilt",
        "pluralizedTitle": "Glacier Kilts",
        "formerNames": null,
        "minValue": 11000,
        "maxValue": 20000,
        "npcBuyValue": 11000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dsYWNpZXJfS2lsdC5naWYifQ=="
      }
    },
    {
      "id": 3055,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 6000,
      "percentage": 0.41,
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
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [
    {
      "id": 159,
      "type": "HuntRequirement",
      "huntId": 19,
      "dungeonRequirement": {
        "id": 215,
        "type": "DungeonRequirement",
        "dungeonId": 104,
        "description": "Must have completed The Hunt for the Sea Serpent Quest",
        "link": "https://tibia.fandom.com/wiki/The_Hunt_for_the_Sea_Serpent_Quest"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 47,
      "type": "HuntSupply",
      "quantity": 650,
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
      "id": 48,
      "type": "HuntSupply",
      "quantity": 50,
      "vocation": "knight",
      "supply": {
        "id": 4,
        "type": "Supply",
        "item": {
          "id": 973,
          "type": "Item",
          "title": "Great Health Potion",
          "pluralizedTitle": "Great Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dyZWF0X0hlYWx0aF9Qb3Rpb24uZ2lmIn0="
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-15T00:45:48.708Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-02T04:47:19.267Z",
  "youtubeChannel": {
    "id": 2,
    "type": "YoutubeChannel",
    "name": "Eric / Psykik",
    "youtubeId": "UCl3CvJSRKWrZ-Nvj6tBqz-g",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
