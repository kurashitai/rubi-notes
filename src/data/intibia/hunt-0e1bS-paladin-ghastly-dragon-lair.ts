// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "0e1bS",
  "type": "Hunt",
  "title": null,
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvNjcvUVowRWxpNHgtMGUxYlMtbWluLnBuZyJ9",
  "minLevel": 140,
  "maxLevel": 300,
  "minProfitH": 250000,
  "maxProfitH": 400000,
  "minXpH": 470000,
  "maxXpH": 700000,
  "upvoteCount": 12,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 16,
    "type": "User",
    "username": "sykhez",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "A2Nux6zZzdc",
  "videoStartAt": 6,
  "centerCoordinates": "33176,31015,7",
  "instructions": "<p>Great place to make profit for paladins level 140+ 💰. The experience/h is not good though.</p>\n<p></p>\n<p>⚡️ Throw an energy wall in the ground and walk up and down while you attack the Ghastly Dragon with Crystalline Arrows.</p>\n<p></p>\n<p>Lure one dragon at a time.</p>",
  "createdAt": "2021-11-22T22:19:06.800Z",
  "updatedAt": "2024-03-17T21:17:24.677Z",
  "dungeon": {
    "id": 207,
    "type": "Dungeon",
    "title": "Ghastly Dragon Lair",
    "accountStatus": "premium",
    "entranceCoordinates": "33176,31015,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"59g9i\",\"text\":\"Ghastly Dragon Lair is located north-west of Zao. The access is gained through the Wrath of the Emperor Quest. After getting the access:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":19,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":83,\"length\":26,\"key\":0}],\"data\":{}},{\"key\":\"573ij\",\"text\":\"Fly from Edron ([map c=\\\"33191,31783,3\\\" map]here[/map]) or Darashia ([map c=\\\"33269,32441,6\\\" map]here[/map]) to Farmine, through the magic carpet.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"cmbqf\",\"text\":\"Go down the ladder, then up the hill to the east and enter in the teleport on the last floor.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"3kpu1\",\"text\":\"Enter in the new teleport that appeared.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"10k8l\",\"text\":\"Go down the ladder and up to the hill in the west, [map c=\\\"33139,31249,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"f157n\",\"text\":\"Pass through the bottom teleport, [map c=\\\"33136,31249,6\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"2rtp1\",\"text\":\"Go up the ladders [map c=\\\"33202,31059,9\\\" map]here[/map] and [map c=\\\"33173,31074,8\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"19cu9\",\"text\":\"Walk to the hunting place, [map c=\\\"33176,31015,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"href\":\"https://tibia.fandom.com/wiki/Wrath_of_the_Emperor_Quest\",\"rel\":\"noopener noreferrer\",\"title\":\"https://tibia.fandom.com/wiki/Wrath_of_the_Emperor_Quest\",\"url\":\"https://tibia.fandom.com/wiki/Wrath_of_the_Emperor_Quest\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 10,
      "type": "City",
      "name": "Farmine"
    }
  },
  "requirements": [
    {
      "id": 142,
      "type": "DungeonRequirement",
      "dungeonId": 207,
      "description": "Mission \"Mortal Combat\" done of The New Frontier Quest",
      "link": "https://tibia.fandom.com/wiki/The_New_Frontier_Quest/Spoiler#Mission_09:_Mortal_Combat"
    }
  ],
  "sections": [
    {
      "id": 207,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 511,
          "type": "Creature",
          "title": "Ghastly Dragon",
          "formerNames": null,
          "healthPoints": 7800,
          "xpPoints": 4600,
          "charmPoints": 50,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HaGFzdGx5X0RyYWdvbi5naWYifQ=="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 4513,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 45000,
      "percentage": 0.18,
      "isInestimable": false,
      "item": {
        "id": 1685,
        "type": "Item",
        "title": "Zaoan Helmet",
        "pluralizedTitle": "Zaoan Helmets",
        "formerNames": null,
        "minValue": 45000,
        "maxValue": 60000,
        "npcBuyValue": 45000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1phb2FuX0hlbG1ldC5naWYifQ=="
      }
    },
    {
      "id": 4512,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 35000,
      "percentage": 0.22,
      "isInestimable": false,
      "item": {
        "id": 1690,
        "type": "Item",
        "title": "Guardian Boots",
        "pluralizedTitle": "Guardian Boots",
        "formerNames": null,
        "minValue": 35000,
        "maxValue": 150000,
        "npcBuyValue": 35000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0d1YXJkaWFuX0Jvb3RzLmdpZiJ9"
      }
    },
    {
      "id": 4514,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.09,
      "isInestimable": false,
      "item": {
        "id": 1688,
        "type": "Item",
        "title": "Zaoan Sword",
        "pluralizedTitle": "Zaoan Swords",
        "formerNames": null,
        "minValue": 30000,
        "maxValue": 50000,
        "npcBuyValue": 30000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1phb2FuX1N3b3JkLmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [
    {
      "id": 82,
      "type": "HuntRequirement",
      "huntId": 67,
      "dungeonRequirement": {
        "id": 142,
        "type": "DungeonRequirement",
        "dungeonId": 207,
        "description": "Mission \"Mortal Combat\" done of The New Frontier Quest",
        "link": "https://tibia.fandom.com/wiki/The_New_Frontier_Quest/Spoiler#Mission_09:_Mortal_Combat"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 249,
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
    },
    {
      "id": 250,
      "type": "HuntSupply",
      "quantity": 100,
      "vocation": "paladin",
      "supply": {
        "id": 41,
        "type": "Supply",
        "item": {
          "id": 1058,
          "type": "Item",
          "title": "Fire Wall Rune",
          "pluralizedTitle": "Fire Wall Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0ZpcmVfV2FsbF9SdW5lLmdpZiJ9"
        }
      }
    },
    {
      "id": 251,
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
    }
  ],
  "lootUpdatedAt": "2021-11-22T22:40:57.667Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-22T22:40:57.625Z",
  "youtubeChannel": {
    "id": 31,
    "type": "YoutubeChannel",
    "name": "BruPlayz",
    "youtubeId": "UCCUyusRtiyBv_LcvSMKqSvw",
    "verifiedAt": "Mon Nov 22 2021 19:42:13 GMT-0300 (Horário Padrão de Brasília)",
    "user": {
      "id": 16,
      "type": "User",
      "username": "sykhez",
      "avatar": "skeleton",
      "role": "user",
      "membershipLevel": null
    }
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
