// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "RV5ps",
  "type": "Hunt",
  "title": null,
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMzQvNFlwQVZRVFEtMDI2LXBhbGFkaW4tZWRyb24tdmFtcGlyZS1jcnlwdC5wbmcifQ==",
  "minLevel": 50,
  "maxLevel": 80,
  "minProfitH": 0,
  "maxProfitH": 10000,
  "minXpH": 100000,
  "maxXpH": 140000,
  "upvoteCount": 4,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "en-us",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 6,
    "type": "User",
    "username": "V4SK",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "6hhMCA04JVw",
  "videoStartAt": null,
  "centerCoordinates": "33109,31721,7",
  "instructions": "<p>This hunt is a good alternative to level up and get imbuement loot.</p>\n<p></p>\n<p>⚔️ <strong>Strategy</strong></p>\n<p>In this hunt it is important to keep the focus on killing monsters and using <strong>Obsidian Knife</strong> on Bonebeast and <strong>Blessed Wooden Stake</strong> on Vampires. Be careful with the Necromancer as he will summon many monsters and always keep a good distance from monsters to avoid damage.</p>\n<p></p>\n<p>Use the spells:</p>\n<ul>\n  <li>\"exura infir\" to heal and remove the paralyze.</li>\n  <li>\"utura\" to progressively heal for 60s.</li>\n  <li>\"exori san\" to attack bonebeasts when there is more than 1 monster.</li>\n</ul>\n<p></p>\n<p>🛡️ <strong>Equipments</strong></p>\n<p>For this hunt it is very important that you choose Enchanted Spears or, if you are level 55+, power bolts. The Enchanted Spear is very important to kill the Necromancer for its attack range.</p>\n<p></p>\n<p>🏃 To make kiting easier on this hunt it is interesting to have a boots of haste to gain movement speed.</p>\n<p></p>\n<p>💰 <strong>Loot</strong></p>\n<p>To ensure a good loot it is interesting to collect <strong>Vampire Dust</strong> (Blessed Wooden Stake) and <strong>Hardened Bones</strong> (Obsidian Knife). Also collect the Vampire Teeth (Imbuement). With luck it is possible to drop good items and sell them.</p>",
  "createdAt": "2021-11-12T04:08:22.363Z",
  "updatedAt": "2024-03-18T00:01:16.223Z",
  "dungeon": {
    "id": 280,
    "type": "Dungeon",
    "title": "Edron Vampire Crypt",
    "accountStatus": "premium",
    "entranceCoordinates": "33109,31721,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"90ilg\",\"text\":\"The Edron Vampire Crypt is a vampire crypt located north of Edron, [map c=\\\"33109,31721,7\\\" map]here[/map].\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":4,\"length\":19,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 9,
      "type": "City",
      "name": "Edron"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 743,
      "type": "DungeonSection",
      "name": "Floor -3",
      "position": 3,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 79,
          "type": "Creature",
          "title": "Bonebeast",
          "formerNames": null,
          "healthPoints": 515,
          "xpPoints": 580,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Cb25lYmVhc3QuZ2lmIn0="
        },
        {
          "id": 24,
          "type": "Creature",
          "title": "Necromancer",
          "formerNames": null,
          "healthPoints": 580,
          "xpPoints": 580,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9OZWNyb21hbmNlci5naWYifQ=="
        },
        {
          "id": 8,
          "type": "Creature",
          "title": "Vampire",
          "formerNames": null,
          "healthPoints": 475,
          "xpPoints": 305,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9WYW1waXJlLmdpZiJ9"
        },
        {
          "id": 65,
          "type": "Creature",
          "title": "Demon Skeleton",
          "formerNames": null,
          "healthPoints": 400,
          "xpPoints": 240,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EZW1vbl9Ta2VsZXRvbi5naWYifQ=="
        },
        {
          "id": 84,
          "type": "Creature",
          "title": "Mummy",
          "formerNames": null,
          "healthPoints": 240,
          "xpPoints": 150,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NdW1teS5naWYifQ=="
        },
        {
          "id": 47,
          "type": "Creature",
          "title": "Ghoul",
          "formerNames": null,
          "healthPoints": 100,
          "xpPoints": 85,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HaG91bC5naWYifQ=="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 273,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.2,
      "isInestimable": false,
      "item": {
        "id": 1,
        "type": "Item",
        "title": "Boots of Haste",
        "pluralizedTitle": "Boots of Hastes",
        "formerNames": null,
        "minValue": 30000,
        "maxValue": null,
        "npcBuyValue": 30000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Jvb3RzX29mX0hhc3RlLmdpZiJ9"
      }
    },
    {
      "id": 87,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 15000,
      "percentage": 0.1,
      "isInestimable": false,
      "item": {
        "id": 202,
        "type": "Item",
        "title": "Vampire Shield",
        "pluralizedTitle": "Vampire Shields",
        "formerNames": null,
        "minValue": 15000,
        "maxValue": 20000,
        "npcBuyValue": 15000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1ZhbXBpcmVfU2hpZWxkLmdpZiJ9"
      }
    },
    {
      "id": 276,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 10000,
      "percentage": 0.01,
      "isInestimable": false,
      "item": {
        "id": 989,
        "type": "Item",
        "title": "Noble Axe",
        "pluralizedTitle": "Noble Axes",
        "formerNames": null,
        "minValue": 10000,
        "maxValue": 20000,
        "npcBuyValue": 10000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL05vYmxlX0F4ZS5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 22,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 16,
        "type": "DungeonRequiredItem",
        "dungeonId": 280,
        "requiredItem": {
          "id": 115,
          "type": "RequiredItem",
          "item": {
            "id": 711,
            "type": "Item",
            "title": "Blessed Wooden Stake",
            "pluralizedTitle": "Blessed Wooden Stakes",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0JsZXNzZWRfV29vZGVuX1N0YWtlLmdpZiJ9"
          }
        }
      },
      "huntId": 34
    },
    {
      "id": 23,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 17,
        "type": "DungeonRequiredItem",
        "dungeonId": 280,
        "requiredItem": {
          "id": 8,
          "type": "RequiredItem",
          "item": {
            "id": 696,
            "type": "Item",
            "title": "Obsidian Knife",
            "pluralizedTitle": "Obsidian Knives",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL09ic2lkaWFuX0tuaWZlLmdpZiJ9"
          }
        }
      },
      "huntId": 34
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 135,
      "type": "HuntSupply",
      "quantity": 25,
      "vocation": "paladin",
      "supply": {
        "id": 145,
        "type": "Supply",
        "item": {
          "id": 874,
          "type": "Item",
          "title": "Enchanted Spear",
          "pluralizedTitle": "Enchanted Spears",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0VuY2hhbnRlZF9TcGVhci5naWYifQ=="
        }
      }
    },
    {
      "id": 136,
      "type": "HuntSupply",
      "quantity": 20,
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
      "id": 137,
      "type": "HuntSupply",
      "quantity": 60,
      "vocation": "paladin",
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
    }
  ],
  "lootUpdatedAt": "2021-11-15T19:55:54.439Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-12T04:08:22.363Z",
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
