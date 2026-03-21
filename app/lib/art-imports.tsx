import { StaticImageData } from 'next/image';

import alley from '../../public/art/alley.png';
import bottle from '../../public/art/bottle4.png';
import building from '../../public/art/BuildingUpscale.png'
import flower from '../../public/art/flowerUpscale.png';
import planet from '../../public/art/planet.png';
import shack from '../../public/art/shackAnimation.gif';
import dog from '../../public/art/dog.png';
import boat_jellyfish from '../../public/art/boat_jellyfish.png';
import dragapult from '../../public/art/drag.png';
import capybara from '../../public/art/capy.png';
import hole from '../../public/art/hole.png';
import dejavu from '../../public/art/deja vu.gif';
import fox from '../../public/art/fox.gif';
import last_tour from '../../public/art/last tour.png';
import back from '../../public/art/back_final1.gif';
import yuru from '../../public/art/yuru.gif';
import wooper from '../../public/art/wooper.png';
import snowman from '../../public/art/snowman.png';
import forest from '../../public/art/forest.png';
import mew from '../../public/art/mew.gif';
import walking_miku from '../../public/art/walking_miku_full.gif';
import rowlet from '../../public/art/rowlet.png';
import knight from '../../public/art/knight_doorway.png';
import gdc_poster_s24 from '../../public/art/poster_s24_clean.png';
import gdc_poster_f24 from '../../public/art/poster_f24_clean.png';
import donut_hole from '../../public/art/donut_hole_final.png';
import eve from '../../public/art/eve.png';
import uw_map from '../../public/art/uw_map.png';
import want from '../../public/art/want.gif';
import owls from '../../public/art/owls2.png';
import gdc_sticker_w26 from '../../public/art/W26_Sticker.png';
import slime from '../../public/art/slime2.png';
import spooky_card from '../../public/art/spooky_card_game_meeting_clean.png';
import state_machine from '../../public/art/state_machines_clean.png';
import minecraft_fishing from '../../public/art/chill_3_clean.png';
import snom from '../../public/art/chill_2_clean.png';
import komala from '../../public/art/chill_1_clean.png';
import casette from '../../public/art/cassette.png';


interface MyImageData  {
	id: number
	src: StaticImageData
	alt: string
	created: Date
}

export const artData : MyImageData[] = [
	{ id: 1, created: new Date(2022,  5, 26), src: alley, alt: 'alley',},
	{ id: 2, created: new Date(2022,  5, 22), src: bottle, alt: 'bottle'},
	{ id: 3, created: new Date(2021, 12, 13), src: building, alt: 'building'},
	{ id: 4, created: new Date(2022,  1, 12), src: flower, alt: 'flower'},
	{ id: 5, created: new Date(2022,  4,  3), src: planet, alt: 'planet'},
	{ id: 6, created: new Date(2022,  1, 23), src: shack, alt: 'shack'},
	{ id: 7, created: new Date(2022,  1, 23), src: dog, alt: 'dog'},
	{ id: 8, created: new Date(2022,  6,  4), src: boat_jellyfish, alt: 'boat jellyfish'},
	{ id: 9, created: new Date(2022,  6, 10), src: dragapult, alt: 'dragapult'},
	{ id:10, created: new Date(2022,  6, 20), src: capybara, alt: 'capybara'},
	{ id:11, created: new Date(2022,  6, 30), src: hole, alt: 'hole'},
	{ id:12, created: new Date(2022,  2,  7), src: dejavu, alt: 'deja vu drifting'},
	{ id:13, created: new Date(2022,  7,  7), src: fox, alt: 'fox jumping'},
	{ id:14, created: new Date(2022,  7, 21), src: last_tour, alt: 'last tour'},
	{ id:15, created: new Date(2022,  9, 18), src: back, alt: 'bushes scene'},
	{ id:16, created: new Date(2022, 12, 21), src: yuru, alt: 'driving'},
	{ id:17, created: new Date(2023,  1,  9), src: wooper, alt: 'wooper'},
	{ id:18, created: new Date(2023,  3, 15), src: snowman, alt: 'snowman'},
	{ id:19, created: new Date(2023,  5, 11), src: forest, alt: 'forest'},
	{ id:20, created: new Date(2023,  8, 21), src: mew, alt: 'mew'},
	{ id:21, created: new Date(2023, 11,  4), src: walking_miku, alt: 'walking miku'},
	{ id:22, created: new Date(2023,  9, 24), src: rowlet, alt: 'rowlet'},
	{ id:23, created: new Date(2024,  3, 31), src: knight, alt: 'knight in doorway'},
	{ id:24, created: new Date(2024,  5, 10), src: gdc_poster_s24, alt: 'game jam summer poster'},
	{ id:25, created: new Date(2024, 10,  2), src: gdc_poster_f24, alt: 'game jam fall poster'},
	{ id:26, created: new Date(2024, 12,  6), src: donut_hole, alt: 'donut hole'},
	{ id:27, created: new Date(2024, 12,  6), src: eve, alt: 'eve fanart'},
	{ id:28, created: new Date(2024, 12, 29), src: uw_map, alt: 'uwaterloo map'},
	{ id:29, created: new Date(2025,  2, 22), src: want, alt: 'winter spring'},
	{ id:30, created: new Date(2025,  8,  6), src: owls, alt: 'owls'},
	{ id:31, created: new Date(2026,  2,  6), src: gdc_sticker_w26, alt: 'game jam winter sticker'},
	{ id:32, created: new Date(2024,  9, 13), src: slime, alt: 'slime'},
	{ id:33, created: new Date(2024, 10, 29), src: spooky_card, alt: 'spooky card art'},
	{ id:34, created: new Date(2025,  3, 12), src: state_machine, alt: 'gears'},
	{ id:35, created: new Date(2025,  4, 22), src: minecraft_fishing, alt: 'minecraft fishing'},
	{ id:36, created: new Date(2025,  4, 15), src: snom, alt: 'snom'},
	{ id:37, created: new Date(2025,  4,  8), src: komala, alt: 'komala'},
	{ id:38, created: new Date(2025, 12, 21), src: casette, alt: 'casette'}
]