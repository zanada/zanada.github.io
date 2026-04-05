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
import dejavu from '../../public/art/deja_vu.gif';
import fox from '../../public/art/fox.gif';
import last_tour from '../../public/art/last_tour.png';
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
import { GalleryImage } from '../ui/components/imageGallery';


export const artData : GalleryImage[] = [
	{ created: new Date(2022,  5, 26), data: alley, alt: 'alley',},
	{ created: new Date(2022,  5, 22), data: bottle, alt: 'bottle'},
	{ created: new Date(2021, 12, 13), data: building, alt: 'building'},
	{ created: new Date(2022,  1, 12), data: flower, alt: 'flower'},
	{ created: new Date(2022,  4,  3), data: planet, alt: 'planet'},
	{ created: new Date(2022,  1, 23), data: shack, alt: 'shack'},
	{ created: new Date(2022,  1, 23), data: dog, alt: 'dog'},
	{ created: new Date(2022,  6,  4), data: boat_jellyfish, alt: 'boat jellyfish'},
	{ created: new Date(2022,  6, 10), data: dragapult, alt: 'dragapult'},
	{ created: new Date(2022,  6, 20), data: capybara, alt: 'capybara'},
	{ created: new Date(2022,  6, 30), data: hole, alt: 'hole'},
	{ created: new Date(2022,  2,  7), data: dejavu, alt: 'deja vu drifting'},
	{ created: new Date(2022,  7,  7), data: fox, alt: 'fox jumping'},
	{ created: new Date(2022,  7, 21), data: last_tour, alt: 'last tour'},
	{ created: new Date(2022,  9, 18), data: back, alt: 'bushes scene'},
	{ created: new Date(2022, 12, 21), data: yuru, alt: 'driving'},
	{ created: new Date(2023,  1,  9), data: wooper, alt: 'wooper'},
	{ created: new Date(2023,  3, 15), data: snowman, alt: 'snowman'},
	{ created: new Date(2023,  5, 11), data: forest, alt: 'forest'},
	{ created: new Date(2023,  8, 21), data: mew, alt: 'mew'},
	{ created: new Date(2023, 11,  4), data: walking_miku, alt: 'walking miku'},
	{ created: new Date(2023,  9, 24), data: rowlet, alt: 'rowlet'},
	{ created: new Date(2024,  3, 31), data: knight, alt: 'knight in doorway'},
	{ created: new Date(2024,  5, 10), data: gdc_poster_s24, alt: 'game jam summer poster'},
	{ created: new Date(2024, 10,  2), data: gdc_poster_f24, alt: 'game jam fall poster'},
	{ created: new Date(2024, 12,  6), data: donut_hole, alt: 'donut hole'},
	{ created: new Date(2024, 12,  6), data: eve, alt: 'eve fanart'},
	{ created: new Date(2024, 12, 29), data: uw_map, alt: 'uwaterloo map'},
	{ created: new Date(2025,  2, 22), data: want, alt: 'winter spring'},
	{ created: new Date(2025,  8,  6), data: owls, alt: 'owls'},
	{ created: new Date(2026,  2,  6), data: gdc_sticker_w26, alt: 'game jam winter sticker'},
	{ created: new Date(2024,  9, 13), data: slime, alt: 'slime'},
	{ created: new Date(2024, 10, 29), data: spooky_card, alt: 'spooky card art'},
	{ created: new Date(2025,  3, 12), data: state_machine, alt: 'gears'},
	{ created: new Date(2025,  4, 22), data: minecraft_fishing, alt: 'minecraft fishing'},
	{ created: new Date(2025,  4, 15), data: snom, alt: 'snom'},
	{ created: new Date(2025,  4,  8), data: komala, alt: 'komala'},
	{ created: new Date(2025, 12, 21), data: casette, alt: 'casette'}
]