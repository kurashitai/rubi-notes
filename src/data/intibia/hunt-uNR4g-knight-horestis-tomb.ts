// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "uNR4g",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvNDEvQU81SjBKd1MtdU5SNGctbWluLnBuZyJ9",
  "minLevel": 100,
  "maxLevel": 300,
  "minProfitH": 0,
  "maxProfitH": 100000,
  "minXpH": 200000,
  "maxXpH": 350000,
  "upvoteCount": 2,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 10,
    "type": "User",
    "username": "HenryKnight",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "1ZxgNO0Pb1A",
  "videoStartAt": null,
  "centerCoordinates": "33026,32710,6",
  "instructions": "<p>Here's a place worth hunting for if you're not just focused on XP. It's usually empty.</p>\n<ul>\n  <li>From level 30 it is possible to hunt on the first two floors.</li>\n  <li>Floor -2, depending on World Change, may have Tomb Servants that drop Fist on a Stick (to tame DROMEDARY) and can be worth more than 300k 💰.</li>\n  <li>From level 40, you can hunt on floor -3 and have the chance to drop REINS from DARK APPRENTICE (to tame the BLACK SHEEP), which can be worth more than 1kk 🤑.</li>\n  <li>From level 50 you can hunt on floor -4 and have a chance to drop Mini Mummy from ELDER MUMMY.</li>\n  <li>From level 70+ you can try the last floors (-5 and -6). Be more careful here.</li>\n  <li>From level 120+ you can kill Horestis.</li>\n</ul>\n<p>🛡️<strong> Imbuements</strong></p>\n<p>It's not a heavy hunt, so 1 powerful mana and weapon life should be enough. If not, add 2 imbuements of each.</p>\n<p></p>\n<p>🌏<strong> World Change</strong></p>\n<p>The number and types of monsters vary according to The Mummys Curse World Change.</p>\n<p>When the spawn is weak, it's because the vases scattered on each floor have already been broken, that happens after the server save. And when the spawn is strong, the vases will be there until they break.</p>\n<p></p>\n<p>🦄<strong> Boss</strong></p>\n<p>Horestis is a pharaoh who lives in the depths of this tomb, in order to face him we need to break each of the vases that are scattered on all floors of the tomb (see the video at 1:48).</p>\n<p></p>\n<p>To break the vase just go with the character to it and click on the vase. If it doesn't break, after 1h you can try again. If it breaks, you gain access to face the boss once, and you can try to break another vase.</p>\n<p></p>\n<p>If you manage to break more than one, you can face him more than once too, as well as TASKs that accumulate points to face bosses.</p>",
  "createdAt": "2021-11-13T19:45:31.318Z",
  "updatedAt": "2025-05-23T15:46:49.388Z",
  "dungeon": {
    "id": 180,
    "type": "Dungeon",
    "title": "Horestis Tomb",
    "accountStatus": "premium",
    "entranceCoordinates": "33026,32710,6",
    "entranceDirections": "{\"blocks\":[{\"key\":\"8g99k\",\"text\":\"Horestis Tomb is located in the mountains north-west of Ankrahmun, [map c=\\\"33026,32710,6\\\" map]here[/map].\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":13,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": false,
      "raid": false,
      "worldChange": true
    },
    "city": {
      "id": 7,
      "type": "City",
      "name": "Ankrahmun"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 941,
      "type": "DungeonSection",
      "name": "Floor +1",
      "position": 1,
      "groupName": "World Change (active)",
      "groupPosition": 1,
      "creatures": [
        {
          "id": 608,
          "type": "Creature",
          "title": "Ghoulish Hyaena",
          "formerNames": null,
          "healthPoints": 400,
          "xpPoints": 195,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HaG91bGlzaF9IeWFlbmEuZ2lmIn0="
        },
        {
          "id": 222,
          "type": "Creature",
          "title": "Nomad (Basic)",
          "formerNames": "nomad",
          "healthPoints": 160,
          "xpPoints": 60,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ob21hZF9fMjhCYXNpY18yOS5naWYifQ=="
        },
        {
          "id": 72,
          "type": "Creature",
          "title": "Hyaena",
          "formerNames": null,
          "healthPoints": 60,
          "xpPoints": 20,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9IeWFlbmEuZ2lmIn0="
        }
      ]
    },
    {
      "id": 944,
      "type": "DungeonSection",
      "name": "Floor +4",
      "position": 4,
      "groupName": "World Change (active)",
      "groupPosition": 1,
      "creatures": [
        {
          "id": 603,
          "type": "Creature",
          "title": "Elder Mummy",
          "formerNames": null,
          "healthPoints": 850,
          "xpPoints": 560,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FbGRlcl9NdW1teS5naWYifQ=="
        },
        {
          "id": 598,
          "type": "Creature",
          "title": "Clay Guardian",
          "formerNames": null,
          "healthPoints": 625,
          "xpPoints": 400,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DbGF5X0d1YXJkaWFuLmdpZiJ9"
        },
        {
          "id": 617,
          "type": "Creature",
          "title": "Sacred Spider",
          "formerNames": null,
          "healthPoints": 550,
          "xpPoints": 330,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TYWNyZWRfU3BpZGVyLmdpZiJ9"
        },
        {
          "id": 624,
          "type": "Creature",
          "title": "Tomb Servant",
          "formerNames": null,
          "healthPoints": 475,
          "xpPoints": 215,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ub21iX1NlcnZhbnQuZ2lmIn0="
        },
        {
          "id": 608,
          "type": "Creature",
          "title": "Ghoulish Hyaena",
          "formerNames": null,
          "healthPoints": 400,
          "xpPoints": 195,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HaG91bGlzaF9IeWFlbmEuZ2lmIn0="
        }
      ]
    },
    {
      "id": 942,
      "type": "DungeonSection",
      "name": "Floor +2",
      "position": 2,
      "groupName": "World Change (active)",
      "groupPosition": 1,
      "creatures": [
        {
          "id": 624,
          "type": "Creature",
          "title": "Tomb Servant",
          "formerNames": null,
          "healthPoints": 475,
          "xpPoints": 215,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ub21iX1NlcnZhbnQuZ2lmIn0="
        },
        {
          "id": 608,
          "type": "Creature",
          "title": "Ghoulish Hyaena",
          "formerNames": null,
          "healthPoints": 400,
          "xpPoints": 195,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HaG91bGlzaF9IeWFlbmEuZ2lmIn0="
        }
      ]
    },
    {
      "id": 945,
      "type": "DungeonSection",
      "name": "Floor +5",
      "position": 5,
      "groupName": "World Change (active)",
      "groupPosition": 1,
      "creatures": [
        {
          "id": 591,
          "type": "Creature",
          "title": "Sandstone Scorpion",
          "formerNames": null,
          "healthPoints": 900,
          "xpPoints": 680,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TYW5kc3RvbmVfU2NvcnBpb24uZ2lmIn0="
        },
        {
          "id": 603,
          "type": "Creature",
          "title": "Elder Mummy",
          "formerNames": null,
          "healthPoints": 850,
          "xpPoints": 560,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FbGRlcl9NdW1teS5naWYifQ=="
        },
        {
          "id": 610,
          "type": "Creature",
          "title": "Grave Guard",
          "formerNames": null,
          "healthPoints": 720,
          "xpPoints": 485,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HcmF2ZV9HdWFyZC5naWYifQ=="
        },
        {
          "id": 598,
          "type": "Creature",
          "title": "Clay Guardian",
          "formerNames": null,
          "healthPoints": 625,
          "xpPoints": 400,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DbGF5X0d1YXJkaWFuLmdpZiJ9"
        },
        {
          "id": 617,
          "type": "Creature",
          "title": "Sacred Spider",
          "formerNames": null,
          "healthPoints": 550,
          "xpPoints": 330,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TYWNyZWRfU3BpZGVyLmdpZiJ9"
        }
      ]
    },
    {
      "id": 943,
      "type": "DungeonSection",
      "name": "Floor +3",
      "position": 3,
      "groupName": "World Change (active)",
      "groupPosition": 1,
      "creatures": [
        {
          "id": 617,
          "type": "Creature",
          "title": "Sacred Spider",
          "formerNames": null,
          "healthPoints": 550,
          "xpPoints": 330,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TYWNyZWRfU3BpZGVyLmdpZiJ9"
        },
        {
          "id": 624,
          "type": "Creature",
          "title": "Tomb Servant",
          "formerNames": null,
          "healthPoints": 475,
          "xpPoints": 215,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ub21iX1NlcnZhbnQuZ2lmIn0="
        },
        {
          "id": 608,
          "type": "Creature",
          "title": "Ghoulish Hyaena",
          "formerNames": null,
          "healthPoints": 400,
          "xpPoints": 195,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HaG91bGlzaF9IeWFlbmEuZ2lmIn0="
        }
      ]
    },
    {
      "id": 946,
      "type": "DungeonSection",
      "name": "Floor +6",
      "position": 6,
      "groupName": "World Change (active)",
      "groupPosition": 1,
      "creatures": [
        {
          "id": 599,
          "type": "Creature",
          "title": "Death Priest",
          "formerNames": null,
          "healthPoints": 800,
          "xpPoints": 750,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EZWF0aF9Qcmllc3QuZ2lmIn0="
        },
        {
          "id": 591,
          "type": "Creature",
          "title": "Sandstone Scorpion",
          "formerNames": null,
          "healthPoints": 900,
          "xpPoints": 680,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TYW5kc3RvbmVfU2NvcnBpb24uZ2lmIn0="
        },
        {
          "id": 603,
          "type": "Creature",
          "title": "Elder Mummy",
          "formerNames": null,
          "healthPoints": 850,
          "xpPoints": 560,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FbGRlcl9NdW1teS5naWYifQ=="
        },
        {
          "id": 610,
          "type": "Creature",
          "title": "Grave Guard",
          "formerNames": null,
          "healthPoints": 720,
          "xpPoints": 485,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HcmF2ZV9HdWFyZC5naWYifQ=="
        },
        {
          "id": 617,
          "type": "Creature",
          "title": "Sacred Spider",
          "formerNames": null,
          "healthPoints": 550,
          "xpPoints": 330,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TYWNyZWRfU3BpZGVyLmdpZiJ9"
        }
      ]
    },
    {
      "id": 947,
      "type": "DungeonSection",
      "name": "Floor +1",
      "position": 1,
      "groupName": "World Change (inactive)",
      "groupPosition": 2,
      "creatures": [
        {
          "id": 222,
          "type": "Creature",
          "title": "Nomad (Basic)",
          "formerNames": "nomad",
          "healthPoints": 160,
          "xpPoints": 60,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ob21hZF9fMjhCYXNpY18yOS5naWYifQ=="
        },
        {
          "id": 72,
          "type": "Creature",
          "title": "Hyaena",
          "formerNames": null,
          "healthPoints": 60,
          "xpPoints": 20,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9IeWFlbmEuZ2lmIn0="
        }
      ]
    },
    {
      "id": 950,
      "type": "DungeonSection",
      "name": "Floor +4",
      "position": 4,
      "groupName": "World Change (inactive)",
      "groupPosition": 2,
      "creatures": [
        {
          "id": 306,
          "type": "Creature",
          "title": "Dark Apprentice",
          "formerNames": null,
          "healthPoints": 225,
          "xpPoints": 100,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EYXJrX0FwcHJlbnRpY2UuZ2lmIn0="
        },
        {
          "id": 738,
          "type": "Creature",
          "title": "Crypt Defiler",
          "formerNames": null,
          "healthPoints": 185,
          "xpPoints": 70,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DcnlwdF9EZWZpbGVyLmdpZiJ9"
        },
        {
          "id": 737,
          "type": "Creature",
          "title": "Grave Robber",
          "formerNames": null,
          "healthPoints": 165,
          "xpPoints": 65,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HcmF2ZV9Sb2JiZXIuZ2lmIn0="
        },
        {
          "id": 611,
          "type": "Creature",
          "title": "Honour Guard",
          "formerNames": null,
          "healthPoints": 85,
          "xpPoints": 55,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ib25vdXJfR3VhcmQuZ2lmIn0="
        },
        {
          "id": 1061,
          "type": "Creature",
          "title": "Squidgy Slime",
          "formerNames": null,
          "healthPoints": 150,
          "xpPoints": 55,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TcXVpZGd5X1NsaW1lLmdpZiJ9"
        },
        {
          "id": 52,
          "type": "Creature",
          "title": "Larva",
          "formerNames": null,
          "healthPoints": 70,
          "xpPoints": 44,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MYXJ2YS5naWYifQ=="
        },
        {
          "id": 508,
          "type": "Creature",
          "title": "Insect Swarm",
          "formerNames": null,
          "healthPoints": 50,
          "xpPoints": 40,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9JbnNlY3RfU3dhcm0uZ2lmIn0="
        }
      ]
    },
    {
      "id": 948,
      "type": "DungeonSection",
      "name": "Floor +2",
      "position": 2,
      "groupName": "World Change (inactive)",
      "groupPosition": 2,
      "creatures": [
        {
          "id": 737,
          "type": "Creature",
          "title": "Grave Robber",
          "formerNames": null,
          "healthPoints": 165,
          "xpPoints": 65,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HcmF2ZV9Sb2JiZXIuZ2lmIn0="
        },
        {
          "id": 222,
          "type": "Creature",
          "title": "Nomad (Basic)",
          "formerNames": "nomad",
          "healthPoints": 160,
          "xpPoints": 60,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ob21hZF9fMjhCYXNpY18yOS5naWYifQ=="
        },
        {
          "id": 55,
          "type": "Creature",
          "title": "Scorpion",
          "formerNames": null,
          "healthPoints": 45,
          "xpPoints": 45,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TY29ycGlvbi5naWYifQ=="
        },
        {
          "id": 52,
          "type": "Creature",
          "title": "Larva",
          "formerNames": null,
          "healthPoints": 70,
          "xpPoints": 44,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MYXJ2YS5naWYifQ=="
        },
        {
          "id": 508,
          "type": "Creature",
          "title": "Insect Swarm",
          "formerNames": null,
          "healthPoints": 50,
          "xpPoints": 40,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9JbnNlY3RfU3dhcm0uZ2lmIn0="
        },
        {
          "id": 66,
          "type": "Creature",
          "title": "Skeleton",
          "formerNames": null,
          "healthPoints": 50,
          "xpPoints": 35,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ta2VsZXRvbi5naWYifQ=="
        }
      ]
    },
    {
      "id": 951,
      "type": "DungeonSection",
      "name": "Floor +5",
      "position": 5,
      "groupName": "World Change (inactive)",
      "groupPosition": 2,
      "creatures": [
        {
          "id": 306,
          "type": "Creature",
          "title": "Dark Apprentice",
          "formerNames": null,
          "healthPoints": 225,
          "xpPoints": 100,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EYXJrX0FwcHJlbnRpY2UuZ2lmIn0="
        },
        {
          "id": 738,
          "type": "Creature",
          "title": "Crypt Defiler",
          "formerNames": null,
          "healthPoints": 185,
          "xpPoints": 70,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DcnlwdF9EZWZpbGVyLmdpZiJ9"
        },
        {
          "id": 737,
          "type": "Creature",
          "title": "Grave Robber",
          "formerNames": null,
          "healthPoints": 165,
          "xpPoints": 65,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HcmF2ZV9Sb2JiZXIuZ2lmIn0="
        },
        {
          "id": 611,
          "type": "Creature",
          "title": "Honour Guard",
          "formerNames": null,
          "healthPoints": 85,
          "xpPoints": 55,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ib25vdXJfR3VhcmQuZ2lmIn0="
        },
        {
          "id": 1061,
          "type": "Creature",
          "title": "Squidgy Slime",
          "formerNames": null,
          "healthPoints": 150,
          "xpPoints": 55,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TcXVpZGd5X1NsaW1lLmdpZiJ9"
        },
        {
          "id": 52,
          "type": "Creature",
          "title": "Larva",
          "formerNames": null,
          "healthPoints": 70,
          "xpPoints": 44,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MYXJ2YS5naWYifQ=="
        }
      ]
    },
    {
      "id": 949,
      "type": "DungeonSection",
      "name": "Floor +3",
      "position": 3,
      "groupName": "World Change (inactive)",
      "groupPosition": 2,
      "creatures": [
        {
          "id": 306,
          "type": "Creature",
          "title": "Dark Apprentice",
          "formerNames": null,
          "healthPoints": 225,
          "xpPoints": 100,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EYXJrX0FwcHJlbnRpY2UuZ2lmIn0="
        },
        {
          "id": 738,
          "type": "Creature",
          "title": "Crypt Defiler",
          "formerNames": null,
          "healthPoints": 185,
          "xpPoints": 70,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DcnlwdF9EZWZpbGVyLmdpZiJ9"
        },
        {
          "id": 737,
          "type": "Creature",
          "title": "Grave Robber",
          "formerNames": null,
          "healthPoints": 165,
          "xpPoints": 65,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HcmF2ZV9Sb2JiZXIuZ2lmIn0="
        },
        {
          "id": 222,
          "type": "Creature",
          "title": "Nomad (Basic)",
          "formerNames": "nomad",
          "healthPoints": 160,
          "xpPoints": 60,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ob21hZF9fMjhCYXNpY18yOS5naWYifQ=="
        },
        {
          "id": 611,
          "type": "Creature",
          "title": "Honour Guard",
          "formerNames": null,
          "healthPoints": 85,
          "xpPoints": 55,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ib25vdXJfR3VhcmQuZ2lmIn0="
        },
        {
          "id": 55,
          "type": "Creature",
          "title": "Scorpion",
          "formerNames": null,
          "healthPoints": 45,
          "xpPoints": 45,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TY29ycGlvbi5naWYifQ=="
        },
        {
          "id": 52,
          "type": "Creature",
          "title": "Larva",
          "formerNames": null,
          "healthPoints": 70,
          "xpPoints": 44,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MYXJ2YS5naWYifQ=="
        },
        {
          "id": 508,
          "type": "Creature",
          "title": "Insect Swarm",
          "formerNames": null,
          "healthPoints": 50,
          "xpPoints": 40,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9JbnNlY3RfU3dhcm0uZ2lmIn0="
        },
        {
          "id": 66,
          "type": "Creature",
          "title": "Skeleton",
          "formerNames": null,
          "healthPoints": 50,
          "xpPoints": 35,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ta2VsZXRvbi5naWYifQ=="
        }
      ]
    },
    {
      "id": 952,
      "type": "DungeonSection",
      "name": "Floor +6",
      "position": 6,
      "groupName": "World Change (inactive)",
      "groupPosition": 2,
      "creatures": [
        {
          "id": 306,
          "type": "Creature",
          "title": "Dark Apprentice",
          "formerNames": null,
          "healthPoints": 225,
          "xpPoints": 100,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EYXJrX0FwcHJlbnRpY2UuZ2lmIn0="
        },
        {
          "id": 26,
          "type": "Creature",
          "title": "Stalker",
          "formerNames": null,
          "healthPoints": 120,
          "xpPoints": 90,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TdGFsa2VyLmdpZiJ9"
        },
        {
          "id": 738,
          "type": "Creature",
          "title": "Crypt Defiler",
          "formerNames": null,
          "healthPoints": 185,
          "xpPoints": 70,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DcnlwdF9EZWZpbGVyLmdpZiJ9"
        },
        {
          "id": 737,
          "type": "Creature",
          "title": "Grave Robber",
          "formerNames": null,
          "healthPoints": 165,
          "xpPoints": 65,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HcmF2ZV9Sb2JiZXIuZ2lmIn0="
        },
        {
          "id": 611,
          "type": "Creature",
          "title": "Honour Guard",
          "formerNames": null,
          "healthPoints": 85,
          "xpPoints": 55,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ib25vdXJfR3VhcmQuZ2lmIn0="
        },
        {
          "id": 1061,
          "type": "Creature",
          "title": "Squidgy Slime",
          "formerNames": null,
          "healthPoints": 150,
          "xpPoints": 55,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9TcXVpZGd5X1NsaW1lLmdpZiJ9"
        }
      ]
    },
    {
      "id": 953,
      "type": "DungeonSection",
      "name": "Bosses",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 628,
          "type": "Creature",
          "title": "Horestis",
          "formerNames": null,
          "healthPoints": 6000,
          "xpPoints": 3500,
          "charmPoints": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Ib3Jlc3Rpcy5naWYifQ=="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 5179,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 18000000,
      "percentage": 4.35,
      "isInestimable": false,
      "item": {
        "id": 165,
        "type": "Item",
        "title": "Pharaoh Sword",
        "pluralizedTitle": "Pharaoh Swords",
        "formerNames": null,
        "minValue": 18000000,
        "maxValue": 20000000,
        "npcBuyValue": 23000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1BoYXJhb2hfU3dvcmQuZ2lmIn0="
      }
    },
    {
      "id": 5182,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 3200000,
      "percentage": 2.17,
      "isInestimable": false,
      "item": {
        "id": 239,
        "type": "Item",
        "title": "Twin Axe",
        "pluralizedTitle": "Twin Axes",
        "formerNames": null,
        "minValue": 3200000,
        "maxValue": 5000000,
        "npcBuyValue": null,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1R3aW5fQXhlLmdpZiJ9"
      }
    },
    {
      "id": 2962,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 2000000,
      "percentage": 0.01,
      "isInestimable": false,
      "item": {
        "id": 1927,
        "type": "Item",
        "title": "Reins",
        "pluralizedTitle": "Reins",
        "formerNames": null,
        "minValue": 2000000,
        "maxValue": 3500000,
        "npcBuyValue": null,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1JlaW5zLmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 25,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 19,
        "type": "DungeonRequiredItem",
        "dungeonId": 180,
        "requiredItem": {
          "id": 11,
          "type": "RequiredItem",
          "item": {
            "id": 116,
            "type": "Item",
            "title": "Rope",
            "pluralizedTitle": "Ropes",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1JvcGUuZ2lmIn0="
          }
        }
      },
      "huntId": 41
    },
    {
      "id": 26,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 20,
        "type": "DungeonRequiredItem",
        "dungeonId": 180,
        "requiredItem": {
          "id": 117,
          "type": "RequiredItem",
          "item": {
            "id": 293,
            "type": "Item",
            "title": "Scarab Coin",
            "pluralizedTitle": "Scarab Coins",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NjYXJhYl9Db2luLmdpZiJ9"
          }
        }
      },
      "huntId": 41
    },
    {
      "id": 27,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 21,
        "type": "DungeonRequiredItem",
        "dungeonId": 180,
        "requiredItem": {
          "id": 13,
          "type": "RequiredItem",
          "item": {
            "id": 45,
            "type": "Item",
            "title": "Shovel",
            "pluralizedTitle": "Shovels",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1Nob3ZlbC5naWYifQ=="
          }
        }
      },
      "huntId": 41
    }
  ],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 121,
      "type": "HuntSupply",
      "quantity": 200,
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
    },
    {
      "id": 122,
      "type": "HuntSupply",
      "quantity": 1000,
      "vocation": "knight",
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
  "lootUpdatedAt": "2021-11-17T00:57:58.344Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-13T19:45:31.318Z",
  "youtubeChannel": {
    "id": 1,
    "type": "YoutubeChannel",
    "name": "Henry Knight",
    "youtubeId": "UCgONX028fTKQNrdIWjLN8jg",
    "verifiedAt": "Sat Nov 13 2021 02:10:04 GMT-0300 (Brasilia Standard Time)",
    "user": {
      "id": 10,
      "type": "User",
      "username": "HenryKnight",
      "avatar": "skeleton",
      "role": "user",
      "membershipLevel": null
    }
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
