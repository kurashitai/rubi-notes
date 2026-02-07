// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "v4nQX",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvOC9KeXhDemVtMS0wMDMta25pZ2h0LWtyaW1ob3JuLWJhcmJhcmlhbi1jYW1wLnBuZyJ9",
  "minLevel": 20,
  "maxLevel": 50,
  "minProfitH": 0,
  "maxProfitH": 6000,
  "minXpH": 85000,
  "maxXpH": 115000,
  "upvoteCount": 8,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
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
  "videoId": "slzUMyN5huE",
  "videoStartAt": null,
  "centerCoordinates": "32019,31408,7",
  "instructions": "<p>A balanced place for knights of at least level 20 (28+ recommended, to use <em>exori ico</em>). Both experience and loot are fair for this range of level.</p>\n<p></p>\n<p>If you don't mind spending a bit more, bring some stealth rings and use them when there's a lot of creatures (4+). Remember to remove them when the danger goes away. You can intercalate it with your weapon ring (axe/sword/club ring).</p>\n<p></p>\n<p>💰<strong> Loot</strong></p>\n<p>The profit is small due to the high price of stealth rings but you won't have loss. If you don't use stealths, you can make 3~4k/h.</p>\n<p></p>\n<p>You can make much more if you do bagloots (and there is a 📫 mailbox [map c=\"32099,31263,7\" map]here[/map], Postman Quest required), but that will hit hard in your xp.</p>\n<p></p>\n<p>💯<strong> Experience</strong></p>\n<p>Usually 80k~110k per hour, but it can be up to 180k/h with green stamina and low level xp bonuses.</p>\n<p></p>\n<p>⚔️<strong> Skills</strong></p>\n<p>Don't need high skills. 60/60+ is enough to start.</p>",
  "createdAt": "2021-10-27T02:29:01.251Z",
  "updatedAt": "2024-03-17T21:18:55.815Z",
  "dungeon": {
    "id": 388,
    "type": "Dungeon",
    "title": "Krimhorn Barbarian Camp",
    "accountStatus": "premium",
    "entranceCoordinates": "32023,31403,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"3k1rd\",\"text\":\"The Barbarian Settlements are located south-west of Svargrond. Krimhorn is located on a peninsula [map c=\\\"32019,31408,7\\\" map]here[/map].\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":63,\"length\":8,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"99q2e\",\"text\":\"From Svargrond depot, head to the south-west and go up the ladder, [map c=\\\"32179,31231,7\\\" map]here[/map]\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"dj4ic\",\"text\":\"Walk to [map c=\\\"32107,31241,6\\\" map]this point[/map] and go down\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"9dabq\",\"text\":\"Get to the Krimhorn Barbarian Camp, [map c=\\\"32019,31408,7\\\" map]here[/map]\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":11,\"length\":25,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 16,
      "type": "City",
      "name": "Svargrond"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 481,
      "type": "DungeonSection",
      "name": "Surface",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 250,
          "type": "Creature",
          "title": "Barbarian Bloodwalker",
          "formerNames": null,
          "healthPoints": 305,
          "xpPoints": 195,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CYXJiYXJpYW5fQmxvb2R3YWxrZXIuZ2lmIn0="
        },
        {
          "id": 259,
          "type": "Creature",
          "title": "Barbarian Brutetamer",
          "formerNames": null,
          "healthPoints": 145,
          "xpPoints": 90,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CYXJiYXJpYW5fQnJ1dGV0YW1lci5naWYifQ=="
        },
        {
          "id": 248,
          "type": "Creature",
          "title": "Barbarian Skullhunter",
          "formerNames": null,
          "healthPoints": 135,
          "xpPoints": 85,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CYXJiYXJpYW5fU2t1bGxodW50ZXIuZ2lmIn0="
        },
        {
          "id": 249,
          "type": "Creature",
          "title": "Barbarian Headsplitter",
          "formerNames": null,
          "healthPoints": 100,
          "xpPoints": 85,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CYXJiYXJpYW5fSGVhZHNwbGl0dGVyLmdpZiJ9"
        },
        {
          "id": 139,
          "type": "Creature",
          "title": "Chicken",
          "formerNames": null,
          "healthPoints": 15,
          "xpPoints": 0,
          "charmPoints": 5,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DaGlja2VuLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 2831,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 6000,
      "percentage": 0.13,
      "isInestimable": false,
      "item": {
        "id": 893,
        "type": "Item",
        "title": "Mammoth Fur Cape",
        "pluralizedTitle": "Mammoth Fur Capes",
        "formerNames": null,
        "minValue": 6000,
        "maxValue": 9000,
        "npcBuyValue": 6000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01hbW1vdGhfRnVyX0NhcGUuZ2lmIn0="
      }
    },
    {
      "id": 2720,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 2000,
      "percentage": 0.09,
      "isInestimable": false,
      "item": {
        "id": 883,
        "type": "Item",
        "title": "Fur Boots",
        "pluralizedTitle": "Fur Boots",
        "formerNames": null,
        "minValue": 2000,
        "maxValue": 3000,
        "npcBuyValue": 2000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Z1cl9Cb290cy5naWYifQ=="
      }
    },
    {
      "id": 2719,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 2000,
      "percentage": 0.32,
      "isInestimable": false,
      "item": {
        "id": 896,
        "type": "Item",
        "title": "Shard",
        "pluralizedTitle": "Shards",
        "formerNames": null,
        "minValue": 2000,
        "maxValue": 4000,
        "npcBuyValue": 2000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NoYXJkLmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 14,
      "type": "HuntSupply",
      "quantity": 8,
      "vocation": "knight",
      "supply": {
        "id": 117,
        "type": "Supply",
        "item": {
          "id": 107,
          "type": "Item",
          "title": "Stealth Ring",
          "pluralizedTitle": "Stealth Rings",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0ZWFsdGhfUmluZy5naWYifQ=="
        }
      }
    },
    {
      "id": 15,
      "type": "HuntSupply",
      "quantity": 120,
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
      "id": 16,
      "type": "HuntSupply",
      "quantity": 3,
      "vocation": "knight",
      "supply": {
        "id": 2,
        "type": "Supply",
        "item": {
          "id": 988,
          "type": "Item",
          "title": "Health Potion",
          "pluralizedTitle": "Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0hlYWx0aF9Qb3Rpb24uZ2lmIn0="
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-15T00:45:47.703Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-10-27T02:29:01.251Z",
  "youtubeChannel": {
    "id": 6,
    "type": "YoutubeChannel",
    "name": "Carlos Baptista",
    "youtubeId": "UCSZyqhw8h99vcBVDxAOH3eQ",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
