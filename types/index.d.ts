/*!
 * MIT License
 *
 * Copyright (c) 2024 Florian Körner
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

export type AdventurerOptions = {
  base?: ('default')[];
  earrings?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06')[];
  earringsProbability?: number;
  eyebrows?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15')[];
  eyes?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16' | 'variant17' | 'variant18' | 'variant19' | 'variant20' | 'variant21' | 'variant22' | 'variant23' | 'variant24' | 'variant25' | 'variant26')[];
  features?: ('birthmark' | 'blush' | 'freckles' | 'mustache')[];
  featuresProbability?: number;
  glasses?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05')[];
  glassesProbability?: number;
  hair?: ('long01' | 'long02' | 'long03' | 'long04' | 'long05' | 'long06' | 'long07' | 'long08' | 'long09' | 'long10' | 'long11' | 'long12' | 'long13' | 'long14' | 'long15' | 'long16' | 'long17' | 'long18' | 'long19' | 'long20' | 'long21' | 'long22' | 'long23' | 'long24' | 'long25' | 'long26' | 'short01' | 'short02' | 'short03' | 'short04' | 'short05' | 'short06' | 'short07' | 'short08' | 'short09' | 'short10' | 'short11' | 'short12' | 'short13' | 'short14' | 'short15' | 'short16' | 'short17' | 'short18' | 'short19')[];
  hairProbability?: number;
  mouth?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16' | 'variant17' | 'variant18' | 'variant19' | 'variant20' | 'variant21' | 'variant22' | 'variant23' | 'variant24' | 'variant25' | 'variant26' | 'variant27' | 'variant28' | 'variant29' | 'variant30')[];
  hairColor?: string[];
  skinColor?: string[];
};

export type AdventurerNeutralOptions = {
  eyebrows?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15')[];
  eyes?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16' | 'variant17' | 'variant18' | 'variant19' | 'variant20' | 'variant21' | 'variant22' | 'variant23' | 'variant24' | 'variant25' | 'variant26')[];
  glasses?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05')[];
  glassesProbability?: number;
  mouth?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16' | 'variant17' | 'variant18' | 'variant19' | 'variant20' | 'variant21' | 'variant22' | 'variant23' | 'variant24' | 'variant25' | 'variant26' | 'variant27' | 'variant28' | 'variant29' | 'variant30')[];
};

export type AvataaarsOptions = {
  accessories?: ('eyepatch' | 'kurt' | 'prescription01' | 'prescription02' | 'round' | 'sunglasses' | 'wayfarers')[];
  accessoriesProbability?: number;
  base?: ('default')[];
  clothing?: ('blazerAndShirt' | 'blazerAndSweater' | 'collarAndSweater' | 'graphicShirt' | 'hoodie' | 'overall' | 'shirtCrewNeck' | 'shirtScoopNeck' | 'shirtVNeck')[];
  clothingGraphic?: ('bat' | 'bear' | 'cumbia' | 'deer' | 'diamond' | 'hola' | 'pizza' | 'resist' | 'skull' | 'skullOutline')[];
  eyebrows?: ('angry' | 'angryNatural' | 'default' | 'defaultNatural' | 'flatNatural' | 'frownNatural' | 'raisedExcited' | 'raisedExcitedNatural' | 'sadConcerned' | 'sadConcernedNatural' | 'unibrowNatural' | 'upDown' | 'upDownNatural')[];
  eyes?: ('closed' | 'cry' | 'default' | 'eyeRoll' | 'happy' | 'hearts' | 'side' | 'squint' | 'surprised' | 'wink' | 'winkWacky' | 'xDizzy')[];
  facialHair?: ('beardLight' | 'beardMajestic' | 'beardMedium' | 'moustacheFancy' | 'moustacheMagnum')[];
  facialHairProbability?: number;
  mouth?: ('concerned' | 'default' | 'disbelief' | 'eating' | 'grimace' | 'sad' | 'screamOpen' | 'serious' | 'smile' | 'tongue' | 'twinkle' | 'vomit')[];
  nose?: ('default')[];
  style?: ('circle' | 'default')[];
  top?: ('bigHair' | 'bob' | 'bun' | 'curly' | 'curvy' | 'dreads' | 'dreads01' | 'dreads02' | 'frida' | 'frizzle' | 'fro' | 'froBand' | 'hat' | 'hijab' | 'longButNotTooLong' | 'miaWallace' | 'shaggy' | 'shaggyMullet' | 'shavedSides' | 'shortCurly' | 'shortFlat' | 'shortRound' | 'shortWaved' | 'sides' | 'straight01' | 'straight02' | 'straightAndStrand' | 'theCaesar' | 'theCaesarAndSidePart' | 'turban' | 'winterHat02' | 'winterHat03' | 'winterHat04' | 'winterHat1')[];
  topProbability?: number;
  circleColor?: string[];
  accessoriesColor?: string[];
  skinColor?: string[];
  clothesColor?: string[];
  facialHairColor?: string[];
  hairColor?: string[];
  hatColor?: string[];
};

export type AvataaarsNeutralOptions = {
  eyebrows?: ('angry' | 'angryNatural' | 'default' | 'defaultNatural' | 'flatNatural' | 'frownNatural' | 'raisedExcited' | 'raisedExcitedNatural' | 'sadConcerned' | 'sadConcernedNatural' | 'unibrowNatural' | 'upDown' | 'upDownNatural')[];
  eyes?: ('closed' | 'cry' | 'default' | 'eyeRoll' | 'happy' | 'hearts' | 'side' | 'squint' | 'surprised' | 'wink' | 'winkWacky' | 'xDizzy')[];
  mouth?: ('concerned' | 'default' | 'disbelief' | 'eating' | 'grimace' | 'sad' | 'screamOpen' | 'serious' | 'smile' | 'tongue' | 'twinkle' | 'vomit')[];
  nose?: ('default')[];
};

export type BigEarsOptions = {
  cheek?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06')[];
  cheekProbability?: number;
  ear?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08')[];
  eyes?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16' | 'variant17' | 'variant18' | 'variant19' | 'variant20' | 'variant21' | 'variant22' | 'variant23' | 'variant24' | 'variant25' | 'variant26' | 'variant27' | 'variant28' | 'variant29' | 'variant30' | 'variant31' | 'variant32')[];
  face?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10')[];
  frontHair?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12')[];
  hair?: ('long01' | 'long02' | 'long03' | 'long04' | 'long05' | 'long06' | 'long07' | 'long08' | 'long09' | 'long10' | 'long11' | 'long12' | 'long13' | 'long14' | 'long15' | 'long16' | 'long17' | 'long18' | 'long19' | 'long20' | 'short01' | 'short02' | 'short03' | 'short04' | 'short05' | 'short06' | 'short07' | 'short08' | 'short09' | 'short10' | 'short11' | 'short12' | 'short13' | 'short14' | 'short15' | 'short16' | 'short17' | 'short18' | 'short19' | 'short20')[];
  mouth?: ('variant0101' | 'variant0102' | 'variant0103' | 'variant0104' | 'variant0105' | 'variant0201' | 'variant0202' | 'variant0203' | 'variant0204' | 'variant0205' | 'variant0301' | 'variant0302' | 'variant0303' | 'variant0304' | 'variant0305' | 'variant0401' | 'variant0402' | 'variant0403' | 'variant0404' | 'variant0405' | 'variant0501' | 'variant0502' | 'variant0503' | 'variant0504' | 'variant0505' | 'variant0601' | 'variant0602' | 'variant0603' | 'variant0604' | 'variant0605' | 'variant0701' | 'variant0702' | 'variant0703' | 'variant0704' | 'variant0705' | 'variant0706' | 'variant0707' | 'variant0708')[];
  nose?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12')[];
  sideburn?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07')[];
  hairColor?: string[];
  skinColor?: string[];
};

export type BigEarsNeutralOptions = {
  cheek?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06')[];
  cheekProbability?: number;
  eyes?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16' | 'variant17' | 'variant18' | 'variant19' | 'variant20' | 'variant21' | 'variant22' | 'variant23' | 'variant24' | 'variant25' | 'variant26' | 'variant27' | 'variant28' | 'variant29' | 'variant30' | 'variant31' | 'variant32')[];
  mouth?: ('variant0101' | 'variant0102' | 'variant0103' | 'variant0104' | 'variant0105' | 'variant0201' | 'variant0202' | 'variant0203' | 'variant0204' | 'variant0205' | 'variant0301' | 'variant0302' | 'variant0303' | 'variant0304' | 'variant0305' | 'variant0401' | 'variant0402' | 'variant0403' | 'variant0404' | 'variant0405' | 'variant0501' | 'variant0502' | 'variant0503' | 'variant0504' | 'variant0505' | 'variant0601' | 'variant0602' | 'variant0603' | 'variant0604' | 'variant0605' | 'variant0701' | 'variant0702' | 'variant0703' | 'variant0704' | 'variant0705' | 'variant0706' | 'variant0707' | 'variant0708')[];
  nose?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12')[];
};

export type BigSmileOptions = {
  accessories?: ('catEars' | 'clownNose' | 'faceMask' | 'glasses' | 'mustache' | 'sailormoonCrown' | 'sleepMask' | 'sunglasses')[];
  accessoriesProbability?: number;
  eyes?: ('angry' | 'cheery' | 'confused' | 'normal' | 'sad' | 'sleepy' | 'starstruck' | 'winking')[];
  face?: ('base')[];
  hair?: ('bangs' | 'bowlCutHair' | 'braids' | 'bunHair' | 'curlyBob' | 'curlyShortHair' | 'froBun' | 'halfShavedHead' | 'mohawk' | 'shavedHead' | 'shortHair' | 'straightHair' | 'wavyBob')[];
  mouth?: ('awkwardSmile' | 'braces' | 'gapSmile' | 'kawaii' | 'openedSmile' | 'openSad' | 'teethSmile' | 'unimpressed')[];
  hairColor?: string[];
  skinColor?: string[];
};

export type BotttsOptions = {
  eyes?: ('bulging' | 'dizzy' | 'eva' | 'frame1' | 'frame2' | 'glow' | 'happy' | 'hearts' | 'robocop' | 'round' | 'roundFrame01' | 'roundFrame02' | 'sensor' | 'shade01')[];
  face?: ('round01' | 'round02' | 'square01' | 'square02' | 'square03' | 'square04')[];
  mouth?: ('bite' | 'diagram' | 'grill01' | 'grill02' | 'grill03' | 'smile01' | 'smile02' | 'square01' | 'square02')[];
  mouthProbability?: number;
  sides?: ('antenna01' | 'antenna02' | 'cables01' | 'cables02' | 'round' | 'square' | 'squareAssymetric')[];
  sidesProbability?: number;
  texture?: ('camo01' | 'camo02' | 'circuits' | 'dirty01' | 'dirty02' | 'dots' | 'grunge01' | 'grunge02')[];
  textureProbability?: number;
  top?: ('antenna' | 'antennaCrooked' | 'bulb01' | 'glowingBulb01' | 'glowingBulb02' | 'horns' | 'lights' | 'pyramid' | 'radar')[];
  topProbability?: number;
  baseColor?: string[];
};

export type BotttsNeutralOptions = {
  eyes?: ('bulging' | 'dizzy' | 'eva' | 'frame1' | 'frame2' | 'glow' | 'happy' | 'hearts' | 'robocop' | 'round' | 'roundFrame01' | 'roundFrame02' | 'sensor' | 'shade01')[];
  mouth?: ('bite' | 'diagram' | 'grill01' | 'grill02' | 'grill03' | 'smile01' | 'smile02' | 'square01' | 'square02')[];
};

export type CroodlesOptions = {
  beard?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05')[];
  beardProbability?: number;
  eyes?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16')[];
  face?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08')[];
  mouth?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16' | 'variant17' | 'variant18')[];
  mustache?: ('variant01' | 'variant02' | 'variant03' | 'variant04')[];
  mustacheProbability?: number;
  nose?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09')[];
  top?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16' | 'variant17' | 'variant18' | 'variant19' | 'variant20' | 'variant21' | 'variant22' | 'variant23' | 'variant24' | 'variant25' | 'variant26' | 'variant27' | 'variant28' | 'variant29')[];
  baseColor?: string[];
  eyepatchColor?: string[];
  glassesColor?: string[];
  topColor?: string[];
};

export type CroodlesNeutralOptions = {
  eyes?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16')[];
  mouth?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16' | 'variant17' | 'variant18')[];
  nose?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09')[];
  eyepatchColor?: string[];
  glassesColor?: string[];
};

export type DylanOptions = {
  facialHair?: ('default')[];
  facialHairProbability?: number;
  hair?: ('bangs' | 'buns' | 'flatTop' | 'fluffy' | 'longCurls' | 'parting' | 'plain' | 'roundBob' | 'shaggy' | 'shortCurls' | 'spiky' | 'wavy')[];
  mood?: ('angry' | 'confused' | 'happy' | 'hopeful' | 'neutral' | 'sad' | 'superHappy')[];
  hairColor?: string[];
  skinColor?: string[];
};

export type FunEmojiOptions = {
  eyes?: ('closed' | 'closed2' | 'crying' | 'cute' | 'glasses' | 'love' | 'pissed' | 'plain' | 'sad' | 'shades' | 'sleepClose' | 'stars' | 'tearDrop' | 'wink' | 'wink2')[];
  mouth?: ('cute' | 'drip' | 'faceMask' | 'kissHeart' | 'lilSmile' | 'pissed' | 'plain' | 'sad' | 'shout' | 'shy' | 'sick' | 'smileLol' | 'smileTeeth' | 'tongueOut' | 'wideSmile')[];
};

export type GlassOptions = {
  shape1?: ('a' | 'd' | 'e' | 'g' | 'i' | 'n' | 'r' | 't')[];
  shape1OffsetX?: number[];
  shape1OffsetY?: number[];
  shape1Rotation?: number[];
  shape2?: ('a' | 'd' | 'e' | 'g' | 'i' | 'n' | 'r' | 't')[];
  shape2OffsetX?: number[];
  shape2OffsetY?: number[];
  shape2Rotation?: number[];
};

export type IconsOptions = {
  icon?: ('alarm' | 'archive' | 'award' | 'bag' | 'bandaid' | 'bank' | 'basket' | 'basket2' | 'basket3' | 'bell' | 'bicycle' | 'binoculars' | 'book' | 'bookshelf' | 'boombox' | 'box' | 'boxes' | 'boxSeam' | 'bricks' | 'briefcase' | 'brightnessHigh' | 'brush' | 'bucket' | 'bug' | 'building' | 'calculator' | 'camera' | 'cameraReels' | 'cart2' | 'cashCoin' | 'clock' | 'cloud' | 'cloudDrizzle' | 'cloudMoon' | 'clouds' | 'cloudSnow' | 'coin' | 'compass' | 'controller' | 'cup' | 'cupStraw' | 'dice5' | 'disc' | 'display' | 'doorClosed' | 'doorOpen' | 'dpad' | 'droplet' | 'easel' | 'egg' | 'eggFried' | 'emojiHeartEyes' | 'emojiLaughing' | 'emojiSmile' | 'emojiSmileUpsideDown' | 'emojiSunglasses' | 'emojiWink' | 'envelope' | 'eyeglasses' | 'flag' | 'flower1' | 'flower2' | 'flower3' | 'gem' | 'gift' | 'globe' | 'globe2' | 'handbag' | 'handThumbsUp' | 'hdd' | 'heart' | 'hourglass' | 'hourglassSplit' | 'house' | 'houseDoor' | 'inbox' | 'inboxes' | 'key' | 'keyboard' | 'ladder' | 'lamp' | 'laptop' | 'lightbulb' | 'lightning' | 'lightningCharge' | 'lock' | 'magic' | 'mailbox' | 'map' | 'megaphone' | 'minecart' | 'minecartLoaded' | 'moon' | 'moonStars' | 'mortarboard' | 'mouse' | 'mouse2' | 'newspaper' | 'paintBucket' | 'palette' | 'palette2' | 'paperclip' | 'pen' | 'pencil' | 'phone' | 'piggyBank' | 'pinAngle' | 'plug' | 'printer' | 'projector' | 'puzzle' | 'router' | 'scissors' | 'sdCard' | 'search' | 'send' | 'shop' | 'shopWindow' | 'signpost' | 'signpost2' | 'signpostSplit' | 'smartwatch' | 'snow' | 'snow2' | 'snow3' | 'speaker' | 'star' | 'stoplights' | 'stopwatch' | 'sun' | 'tablet' | 'thermometer' | 'ticketPerforated' | 'tornado' | 'trash' | 'trash2' | 'tree' | 'trophy' | 'truck' | 'truckFlatbed' | 'tsunami' | 'umbrella' | 'wallet' | 'wallet2' | 'watch' | 'webcam')[];
};

export type IdenticonOptions = {
  row1?: ('ooxoo' | 'oxoxo' | 'oxxxo' | 'xooox' | 'xoxox' | 'xxoxx' | 'xxxxx')[];
  row2?: ('ooxoo' | 'oxoxo' | 'oxxxo' | 'xooox' | 'xoxox' | 'xxoxx' | 'xxxxx')[];
  row3?: ('ooxoo' | 'oxoxo' | 'oxxxo' | 'xooox' | 'xoxox' | 'xxoxx' | 'xxxxx')[];
  row4?: ('ooxoo' | 'oxoxo' | 'oxxxo' | 'xooox' | 'xoxox' | 'xxoxx' | 'xxxxx')[];
  row5?: ('ooxoo' | 'oxoxo' | 'oxxxo' | 'xooox' | 'xoxox' | 'xxoxx' | 'xxxxx')[];
  rowColor?: string[];
};

export type InitialsOptions = {
  textColor?: string[];
};

export type LoreleiOptions = {
  beard?: ('variant01' | 'variant02')[];
  beardProbability?: number;
  earrings?: ('variant01' | 'variant02' | 'variant03')[];
  earringsProbability?: number;
  eyebrows?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13')[];
  eyes?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16' | 'variant17' | 'variant18' | 'variant19' | 'variant20' | 'variant21' | 'variant22' | 'variant23' | 'variant24')[];
  freckles?: ('variant01')[];
  frecklesProbability?: number;
  glasses?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05')[];
  glassesProbability?: number;
  hair?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16' | 'variant17' | 'variant18' | 'variant19' | 'variant20' | 'variant21' | 'variant22' | 'variant23' | 'variant24' | 'variant25' | 'variant26' | 'variant27' | 'variant28' | 'variant29' | 'variant30' | 'variant31' | 'variant32' | 'variant33' | 'variant34' | 'variant35' | 'variant36' | 'variant37' | 'variant38' | 'variant39' | 'variant40' | 'variant41' | 'variant42' | 'variant43' | 'variant44' | 'variant45' | 'variant46' | 'variant47' | 'variant48')[];
  hairAccessories?: ('flowers')[];
  hairAccessoriesProbability?: number;
  head?: ('variant01' | 'variant02' | 'variant03' | 'variant04')[];
  mouth?: ('happy01' | 'happy02' | 'happy03' | 'happy04' | 'happy05' | 'happy06' | 'happy07' | 'happy08' | 'happy09' | 'happy10' | 'happy11' | 'happy12' | 'happy13' | 'happy14' | 'happy15' | 'happy16' | 'happy17' | 'happy18' | 'sad01' | 'sad02' | 'sad03' | 'sad04' | 'sad05' | 'sad06' | 'sad07' | 'sad08' | 'sad09')[];
  nose?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06')[];
  earringsColor?: string[];
  eyebrowsColor?: string[];
  eyesColor?: string[];
  frecklesColor?: string[];
  glassesColor?: string[];
  hairColor?: string[];
  hairAccessoriesColor?: string[];
  mouthColor?: string[];
  noseColor?: string[];
  skinColor?: string[];
};

export type LoreleiNeutralOptions = {
  eyebrows?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13')[];
  eyes?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16' | 'variant17' | 'variant18' | 'variant19' | 'variant20' | 'variant21' | 'variant22' | 'variant23' | 'variant24')[];
  freckles?: ('variant01')[];
  frecklesProbability?: number;
  glasses?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05')[];
  glassesProbability?: number;
  mouth?: ('happy01' | 'happy02' | 'happy03' | 'happy04' | 'happy05' | 'happy06' | 'happy07' | 'happy08' | 'happy09' | 'happy10' | 'happy11' | 'happy12' | 'happy13' | 'happy14' | 'happy15' | 'happy16' | 'happy17' | 'happy18' | 'sad01' | 'sad02' | 'sad03' | 'sad04' | 'sad05' | 'sad06' | 'sad07' | 'sad08' | 'sad09')[];
  nose?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06')[];
  eyebrowsColor?: string[];
  eyesColor?: string[];
  frecklesColor?: string[];
  glassesColor?: string[];
  mouthColor?: string[];
  noseColor?: string[];
};

export type MicahOptions = {
  base?: ('standard')[];
  earrings?: ('hoop' | 'stud')[];
  earringsProbability?: number;
  ears?: ('attached' | 'detached')[];
  eyebrows?: ('down' | 'eyelashesDown' | 'eyelashesUp' | 'up')[];
  eyes?: ('eyes' | 'eyesShadow' | 'round' | 'smiling' | 'smilingShadow')[];
  facialHair?: ('beard' | 'scruff')[];
  facialHairProbability?: number;
  glasses?: ('round' | 'square')[];
  glassesProbability?: number;
  hair?: ('dannyPhantom' | 'dougFunny' | 'fonze' | 'full' | 'mrClean' | 'mrT' | 'pixie' | 'turban')[];
  hairProbability?: number;
  mouth?: ('frown' | 'laughing' | 'nervous' | 'pucker' | 'sad' | 'smile' | 'smirk' | 'surprised')[];
  nose?: ('curve' | 'pointed' | 'tound')[];
  shirt?: ('collared' | 'crew' | 'open')[];
  baseColor?: string[];
  earringColor?: string[];
  eyeShadowColor?: string[];
  eyebrowsColor?: string[];
  eyesColor?: string[];
  facialHairColor?: string[];
  glassesColor?: string[];
  hairColor?: string[];
  mouthColor?: string[];
  shirtColor?: string[];
};

export type MiniavsOptions = {
  blushes?: ('default')[];
  blushesProbability?: number;
  body?: ('golf' | 'tShirt')[];
  eyes?: ('confident' | 'happy' | 'normal')[];
  glasses?: ('normal')[];
  glassesProbability?: number;
  hair?: ('balndess' | 'classic01' | 'classic02' | 'curly' | 'elvis' | 'long' | 'ponyTail' | 'slaughter' | 'stylish')[];
  head?: ('normal' | 'thin' | 'wide')[];
  mouth?: ('default' | 'missingTooth')[];
  mustache?: ('freddy' | 'horshoe' | 'pencilThin' | 'pencilThinBeard')[];
  mustacheProbability?: number;
  bodyColor?: string[];
  hairColor?: string[];
  skinColor?: string[];
};

export type NotionistsOptions = {
  base?: ('variant01')[];
  beard?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12')[];
  beardProbability?: number;
  body?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16' | 'variant17' | 'variant18' | 'variant19' | 'variant20' | 'variant21' | 'variant22' | 'variant23' | 'variant24' | 'variant25')[];
  bodyIcon?: ('electric' | 'galaxy' | 'saturn')[];
  bodyIconProbability?: number;
  brows?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13')[];
  eyes?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05')[];
  gesture?: ('hand' | 'handPhone' | 'ok' | 'okLongArm' | 'point' | 'pointLongArm' | 'waveLongArm' | 'waveLongArms' | 'waveOkLongArms' | 'wavePointLongArms')[];
  gestureProbability?: number;
  glasses?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11')[];
  glassesProbability?: number;
  hair?: ('hat' | 'variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16' | 'variant17' | 'variant18' | 'variant19' | 'variant20' | 'variant21' | 'variant22' | 'variant23' | 'variant24' | 'variant25' | 'variant26' | 'variant27' | 'variant28' | 'variant29' | 'variant30' | 'variant31' | 'variant32' | 'variant33' | 'variant34' | 'variant35' | 'variant36' | 'variant37' | 'variant38' | 'variant39' | 'variant40' | 'variant41' | 'variant42' | 'variant43' | 'variant44' | 'variant45' | 'variant46' | 'variant47' | 'variant48' | 'variant49' | 'variant50' | 'variant51' | 'variant52' | 'variant53' | 'variant54' | 'variant55' | 'variant56' | 'variant57' | 'variant58' | 'variant59' | 'variant60' | 'variant61' | 'variant62' | 'variant63')[];
  lips?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16' | 'variant17' | 'variant18' | 'variant19' | 'variant20' | 'variant21' | 'variant22' | 'variant23' | 'variant24' | 'variant25' | 'variant26' | 'variant27' | 'variant28' | 'variant29' | 'variant30')[];
  nose?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16' | 'variant17' | 'variant18' | 'variant19' | 'variant20')[];
};

export type NotionistsNeutralOptions = {
  brows?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13')[];
  eyes?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05')[];
  glasses?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11')[];
  glassesProbability?: number;
  lips?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16' | 'variant17' | 'variant18' | 'variant19' | 'variant20' | 'variant21' | 'variant22' | 'variant23' | 'variant24' | 'variant25' | 'variant26' | 'variant27' | 'variant28' | 'variant29' | 'variant30')[];
  nose?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16' | 'variant17' | 'variant18' | 'variant19' | 'variant20')[];
};

export type OpenPeepsOptions = {
  accessories?: ('eyepatch' | 'glasses' | 'glasses2' | 'glasses3' | 'glasses4' | 'glasses5' | 'sunglasses' | 'sunglasses2')[];
  accessoriesProbability?: number;
  face?: ('angryWithFang' | 'awe' | 'blank' | 'calm' | 'cheeky' | 'concerned' | 'concernedFear' | 'contempt' | 'cute' | 'cyclops' | 'driven' | 'eatingHappy' | 'explaining' | 'eyesClosed' | 'fear' | 'hectic' | 'lovingGrin1' | 'lovingGrin2' | 'monster' | 'old' | 'rage' | 'serious' | 'smile' | 'smileBig' | 'smileLOL' | 'smileTeethGap' | 'solemn' | 'suspicious' | 'tired' | 'veryAngry')[];
  facialHair?: ('chin' | 'full' | 'full2' | 'full3' | 'full4' | 'goatee1' | 'goatee2' | 'moustache1' | 'moustache2' | 'moustache3' | 'moustache4' | 'moustache5' | 'moustache6' | 'moustache7' | 'moustache8' | 'moustache9')[];
  facialHairProbability?: number;
  head?: ('afro' | 'bangs' | 'bangs2' | 'bantuKnots' | 'bear' | 'bun' | 'bun2' | 'buns' | 'cornrows' | 'cornrows2' | 'dreads1' | 'dreads2' | 'flatTop' | 'flatTopLong' | 'grayBun' | 'grayMedium' | 'grayShort' | 'hatBeanie' | 'hatHip' | 'hijab' | 'long' | 'longAfro' | 'longBangs' | 'longCurly' | 'medium1' | 'medium2' | 'medium3' | 'mediumBangs' | 'mediumBangs2' | 'mediumBangs3' | 'mediumStraight' | 'mohawk' | 'mohawk2' | 'noHair1' | 'noHair2' | 'noHair3' | 'pomp' | 'shaved1' | 'shaved2' | 'shaved3' | 'short1' | 'short2' | 'short3' | 'short4' | 'short5' | 'turban' | 'twists' | 'twists2')[];
  mask?: ('medicalMask' | 'respirator')[];
  maskProbability?: number;
  clothingColor?: string[];
  headContrastColor?: string[];
  skinColor?: string[];
};

export type PersonasOptions = {
  body?: ('checkered' | 'rounded' | 'small' | 'squared')[];
  eyes?: ('glasses' | 'happy' | 'open' | 'sleep' | 'sunglasses' | 'wink')[];
  facialHair?: ('beardMustache' | 'goatee' | 'pyramid' | 'shadow' | 'soulPatch' | 'walrus')[];
  facialHairProbability?: number;
  hair?: ('bald' | 'balding' | 'beanie' | 'bobBangs' | 'bobCut' | 'bunUndercut' | 'buzzcut' | 'cap' | 'curly' | 'curlyBun' | 'curlyHighTop' | 'extraLong' | 'fade' | 'long' | 'mohawk' | 'pigtails' | 'shortCombover' | 'shortComboverChops' | 'sideShave' | 'straightBun')[];
  mouth?: ('bigSmile' | 'frown' | 'lips' | 'pacifier' | 'smile' | 'smirk' | 'surprise')[];
  nose?: ('mediumRound' | 'smallRound' | 'wrinkles')[];
  clothingColor?: string[];
  hairColor?: string[];
  skinColor?: string[];
};

export type PixelArtOptions = {
  accessories?: ('variant01' | 'variant02' | 'variant03' | 'variant04')[];
  accessoriesProbability?: number;
  beard?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08')[];
  beardProbability?: number;
  clothing?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12' | 'variant13' | 'variant14' | 'variant15' | 'variant16' | 'variant17' | 'variant18' | 'variant19' | 'variant20' | 'variant21' | 'variant22' | 'variant23')[];
  eyes?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12')[];
  glasses?: ('dark01' | 'dark02' | 'dark03' | 'dark04' | 'dark05' | 'dark06' | 'dark07' | 'light01' | 'light02' | 'light03' | 'light04' | 'light05' | 'light06' | 'light07')[];
  glassesProbability?: number;
  hair?: ('long01' | 'long02' | 'long03' | 'long04' | 'long05' | 'long06' | 'long07' | 'long08' | 'long09' | 'long10' | 'long11' | 'long12' | 'long13' | 'long14' | 'long15' | 'long16' | 'long17' | 'long18' | 'long19' | 'long20' | 'long21' | 'short01' | 'short02' | 'short03' | 'short04' | 'short05' | 'short06' | 'short07' | 'short08' | 'short09' | 'short10' | 'short11' | 'short12' | 'short13' | 'short14' | 'short15' | 'short16' | 'short17' | 'short18' | 'short19' | 'short20' | 'short21' | 'short22' | 'short23' | 'short24')[];
  hat?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10')[];
  hatProbability?: number;
  mouth?: ('happy01' | 'happy02' | 'happy03' | 'happy04' | 'happy05' | 'happy06' | 'happy07' | 'happy08' | 'happy09' | 'happy10' | 'happy11' | 'happy12' | 'happy13' | 'sad01' | 'sad02' | 'sad03' | 'sad04' | 'sad05' | 'sad06' | 'sad07' | 'sad08' | 'sad09' | 'sad10')[];
  accessoriesColor?: string[];
  clothingColor?: string[];
  eyesColor?: string[];
  glassesColor?: string[];
  hairColor?: string[];
  hatColor?: string[];
  mouthColor?: string[];
  skinColor?: string[];
};

export type PixelArtNeutralOptions = {
  eyes?: ('variant01' | 'variant02' | 'variant03' | 'variant04' | 'variant05' | 'variant06' | 'variant07' | 'variant08' | 'variant09' | 'variant10' | 'variant11' | 'variant12')[];
  glasses?: ('dark01' | 'dark02' | 'dark03' | 'dark04' | 'dark05' | 'dark06' | 'dark07' | 'light01' | 'light02' | 'light03' | 'light04' | 'light05' | 'light06' | 'light07')[];
  glassesProbability?: number;
  mouth?: ('happy01' | 'happy02' | 'happy03' | 'happy04' | 'happy05' | 'happy06' | 'happy07' | 'happy08' | 'happy09' | 'happy10' | 'happy11' | 'happy12' | 'happy13' | 'sad01' | 'sad02' | 'sad03' | 'sad04' | 'sad05' | 'sad06' | 'sad07' | 'sad08' | 'sad09' | 'sad10')[];
  eyesColor?: string[];
  glassesColor?: string[];
  mouthColor?: string[];
};

export type RingsOptions = {
  ring?: ('container')[];
  ringRotation?: number[];
  ringFive?: ('eighth' | 'full' | 'half' | 'quarter')[];
  ringFiveRotation?: number[];
  ringFour?: ('eighth' | 'full' | 'half' | 'quarter')[];
  ringFourRotation?: number[];
  ringOne?: ('eighth' | 'full' | 'half' | 'quarter')[];
  ringOneRotation?: number[];
  ringThree?: ('eighth' | 'full' | 'half' | 'quarter')[];
  ringThreeRotation?: number[];
  ringTwo?: ('eighth' | 'full' | 'half' | 'quarter')[];
  ringTwoRotation?: number[];
  ringColor?: string[];
};

export type ShapesOptions = {
  shape1?: ('ellipse' | 'ellipseFilled' | 'line' | 'polygon' | 'polygonFilled' | 'rectangle' | 'rectangleFilled')[];
  shape1OffsetX?: number[];
  shape1OffsetY?: number[];
  shape1Rotation?: number[];
  shape2?: ('ellipse' | 'ellipseFilled' | 'line' | 'polygon' | 'polygonFilled' | 'rectangle' | 'rectangleFilled')[];
  shape2OffsetX?: number[];
  shape2OffsetY?: number[];
  shape2Rotation?: number[];
  shape3?: ('ellipse' | 'ellipseFilled' | 'line' | 'polygon' | 'polygonFilled' | 'rectangle' | 'rectangleFilled')[];
  shape3OffsetX?: number[];
  shape3OffsetY?: number[];
  shape3Rotation?: number[];
  shape1Color?: string[];
  shape2Color?: string[];
  shape3Color?: string[];
};

export type ThumbsOptions = {
  eyes?: ('variant1W10' | 'variant1W12' | 'variant1W14' | 'variant1W16' | 'variant2W10' | 'variant2W12' | 'variant2W14' | 'variant2W16' | 'variant3W10' | 'variant3W12' | 'variant3W14' | 'variant3W16' | 'variant4W10' | 'variant4W12' | 'variant4W14' | 'variant4W16' | 'variant5W10' | 'variant5W12' | 'variant5W14' | 'variant5W16' | 'variant6W10' | 'variant6W12' | 'variant6W14' | 'variant6W16' | 'variant7W10' | 'variant7W12' | 'variant7W14' | 'variant7W16' | 'variant8W10' | 'variant8W12' | 'variant8W14' | 'variant8W16' | 'variant9W10' | 'variant9W12' | 'variant9W14' | 'variant9W16')[];
  face?: ('variant1' | 'variant2' | 'variant3' | 'variant4' | 'variant5')[];
  faceOffsetX?: number[];
  faceOffsetY?: number[];
  faceRotation?: number[];
  mouth?: ('variant1' | 'variant2' | 'variant3' | 'variant4' | 'variant5')[];
  shape?: ('default')[];
  shapeOffsetX?: number[];
  shapeOffsetY?: number[];
  shapeRotation?: number[];
  shapeColor?: string[];
  eyesColor?: string[];
  mouthColor?: string[];
};
