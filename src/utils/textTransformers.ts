export type TextStyle = {
  name: string;
  transform: (text: string) => string;
};

const textToWideText = (text: string): string => {
  const wideChars: { [key: string]: string } = {
    'a': 'ａ', 'b': 'ｂ', 'c': 'ｃ', 'd': 'ｄ', 'e': 'ｅ', 'f': 'ｆ', 'g': 'ｇ', 'h': 'ｈ',
    'i': 'ｉ', 'j': 'ｊ', 'k': 'ｋ', 'l': 'ｌ', 'm': 'ｍ', 'n': 'ｎ', 'o': 'ｏ', 'p': 'ｐ',
    'q': 'ｑ', 'r': 'ｒ', 's': 'ｓ', 't': 'ｔ', 'u': 'ｕ', 'v': 'ｖ', 'w': 'ｗ', 'x': 'ｘ',
    'y': 'ｙ', 'z': 'ｚ', 'A': 'Ａ', 'B': 'Ｂ', 'C': 'Ｃ', 'D': 'Ｄ', 'E': 'Ｅ', 'F': 'Ｆ',
    'G': 'Ｇ', 'H': 'Ｈ', 'I': 'Ｉ', 'J': 'Ｊ', 'K': 'Ｋ', 'L': 'Ｌ', 'M': 'Ｍ', 'N': 'Ｎ',
    'O': 'Ｏ', 'P': 'Ｐ', 'Q': 'Ｑ', 'R': 'Ｒ', 'S': 'Ｓ', 'T': 'Ｔ', 'U': 'Ｕ', 'V': 'Ｖ',
    'W': 'Ｗ', 'X': 'Ｘ', 'Y': 'Ｙ', 'Z': 'Ｚ', ' ': '　'
  };
  return text.split('').map(char => wideChars[char] || char).join('');
};

const textToBold = (text: string): string => {
  const boldChars: { [key: string]: string } = {
    'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵',
    'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽',
    'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅',
    'y': '𝘆', 'z': '𝘇', 'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙',
    'G': '𝗚', 'H': '𝗛', 'I': '𝗜', 'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡',
    'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧', 'U': '𝗨', 'V': '𝗩',
    'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭'
  };
  return text.split('').map(char => boldChars[char] || char).join('');
};

const textToItalic = (text: string): string => {
  const italicChars: { [key: string]: string } = {
    'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩',
    'i': '𝘪', 'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱',
    'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵', 'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹',
    'y': '𝘺', 'z': '𝘻', 'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍',
    'G': '𝘎', 'H': '𝘏', 'I': '𝘐', 'J': '𝘑', 'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕',
    'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛', 'U': '𝘜', 'V': '𝘝',
    'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡'
  };
  return text.split('').map(char => italicChars[char] || char).join('');
};

const textToScript = (text: string): string => {
  const scriptChars: { [key: string]: string } = {
    'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔', 'h': '𝒽',
    'i': '𝒾', 'j': '𝒿', 'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': '𝑜', 'p': '𝓅',
    'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉', 'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍',
    'y': '𝓎', 'z': '𝓏', 'A': '𝒜', 'B': '𝐵', 'C': '𝒞', 'D': '𝒟', 'E': '𝐸', 'F': '𝐹',
    'G': '𝒢', 'H': '𝐻', 'I': '𝐼', 'J': '𝒥', 'K': '𝒦', 'L': '𝐿', 'M': '𝑀', 'N': '𝒩',
    'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': '𝑅', 'S': '𝒮', 'T': '𝒯', 'U': '𝒰', 'V': '𝒱',
    'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵'
  };
  return text.split('').map(char => scriptChars[char] || char).join('');
};

const textToFraktur = (text: string): string => {
  const frakturChars: { [key: string]: string } = {
    'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥',
    'i': '𝔦', 'j': '𝔧', 'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫', 'o': '𝔬', 'p': '𝔭',
    'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱', 'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵',
    'y': '𝔶', 'z': '𝔷', 'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉',
    'G': '𝔊', 'H': 'ℌ', 'I': 'ℑ', 'J': '𝔍', 'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑',
    'O': '𝔒', 'P': '𝔓', 'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗', 'U': '𝔘', 'V': '𝔙',
    'W': '𝔚', 'X': '𝔛', 'Y': '𝔜', 'Z': 'ℨ'
  };
  return text.split('').map(char => frakturChars[char] || char).join('');
};

const textToCircled = (text: string): string => {
  const circledChars: { [key: string]: string } = {
    'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ',
    'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ',
    'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ',
    'y': 'ⓨ', 'z': 'ⓩ', 'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ',
    'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ',
    'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ', 'V': 'Ⓥ',
    'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ', '0': '⓪', '1': '①', '2': '②', '3': '③',
    '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
  };
  return text.split('').map(char => circledChars[char] || char).join('');
};

const textToSquared = (text: string): string => {
  const squaredChars: { [key: string]: string } = {
    'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄵', 'g': '🄶', 'h': '🄷',
    'i': '🄸', 'j': '🄹', 'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽', 'o': '🄾', 'p': '🄿',
    'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃', 'u': '🅄', 'v': '🅅', 'w': '🅆', 'x': '🅇',
    'y': '🅈', 'z': '🅉', 'A': '🄰', 'B': '🄱', 'C': '🄲', 'D': '🄳', 'E': '🄴', 'F': '🄵',
    'G': '🄶', 'H': '🄷', 'I': '🄸', 'J': '🄹', 'K': '🄺', 'L': '🄻', 'M': '🄼', 'N': '🄽',
    'O': '🄾', 'P': '🄿', 'Q': '🅀', 'R': '🅁', 'S': '🅂', 'T': '🅃', 'U': '🅄', 'V': '🅅',
    'W': '🅆', 'X': '🅇', 'Y': '🅈', 'Z': '🅉'
  };
  return text.split('').map(char => squaredChars[char] || char).join('');
};

const textToGlitch = (text: string): string => {
  const glitchChars = ['̷', '̸', '̶', '̵', '̴', '̳', '̲', '̱', '̰', '̯'];
  return text.split('').map(char => {
    if (char === ' ') return char;
    return char + glitchChars[Math.floor(Math.random() * glitchChars.length)];
  }).join('');
};

const textToUpsideDown = (text: string): string => {
  const upsideDownChars: { [key: string]: string } = {
    'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ',
    'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd',
    'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
    'y': 'ʎ', 'z': 'z', 'A': '∀', 'B': 'q', 'C': 'Ɔ', 'D': 'p', 'E': 'Ǝ', 'F': 'Ⅎ',
    'G': '⅁', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'K', 'L': '˥', 'M': 'W', 'N': 'N',
    'O': 'O', 'P': 'Ԁ', 'Q': 'Ό', 'R': 'ɹ', 'S': 'S', 'T': '⊥', 'U': '∩', 'V': 'Λ',
    'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z'
  };
  return text.split('').reverse().map(char => upsideDownChars[char] || char).join('');
};

const textToWavyUnderline = (text: string): string => {
  return text.split('').map(char => char === ' ' ? char : char + '\u0330').join('');
};

const textToStrikethrough = (text: string): string => {
  return text.split('').map(char => char === ' ' ? char : char + '\u0336').join('');
};

const textToZalgo = (text: string): string => {
  const zalgoUp = [
    '\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311', '\u0306', '\u0310',
    '\u0352', '\u0357', '\u0351', '\u0307', '\u0308', '\u030a', '\u0342', '\u0343',
    '\u0344', '\u034a', '\u034b', '\u034c', '\u0303', '\u0302', '\u030c', '\u0350'
  ];
  const zalgoDown = [
    '\u0316', '\u0317', '\u0318', '\u0319', '\u031c', '\u031d', '\u031e', '\u031f',
    '\u0320', '\u0324', '\u0325', '\u0326', '\u0329', '\u032a', '\u032b', '\u032c',
    '\u032d', '\u032e', '\u032f', '\u0330', '\u0331', '\u0332', '\u0333', '\u0339',
    '\u033a', '\u033b', '\u033c', '\u0345', '\u0347', '\u0348', '\u0349', '\u034d'
  ];
  
  return text.split('').map(char => {
    if (char === ' ' || char === '\n') return char;
    let result = char;
    const numMarks = Math.floor(Math.random() * 4) + 2;
    for (let i = 0; i < numMarks; i++) {
      if (Math.random() > 0.5) {
        result += zalgoUp[Math.floor(Math.random() * zalgoUp.length)];
      } else {
        result += zalgoDown[Math.floor(Math.random() * zalgoDown.length)];
      }
    }
    return result;
  }).join('');
};

const textToBubble = (text: string): string => {
  const bubbleChars: { [key: string]: string } = {
    'a': '🅐', 'b': '🅑', 'c': '🅒', 'd': '🅓', 'e': '🅔', 'f': '🅕', 'g': '🅖', 'h': '🅗',
    'i': '🅘', 'j': '🅙', 'k': '🅚', 'l': '🅛', 'm': '🅜', 'n': '🅝', 'o': '🅞', 'p': '🅟',
    'q': '🅠', 'r': '🅡', 's': '🅢', 't': '🅣', 'u': '🅤', 'v': '🅥', 'w': '🅦', 'x': '🅧',
    'y': '🅨', 'z': '🅩', 'A': '🅐', 'B': '🅑', 'C': '🅒', 'D': '🅓', 'E': '🅔', 'F': '🅕',
    'G': '🅖', 'H': '🅗', 'I': '🅘', 'J': '🅙', 'K': '🅚', 'L': '🅛', 'M': '🅜', 'N': '🅝',
    'O': '🅞', 'P': '🅟', 'Q': '🅠', 'R': '🅡', 'S': '🅢', 'T': '🅣', 'U': '🅤', 'V': '🅥',
    'W': '🅦', 'X': '🅧', 'Y': '🅨', 'Z': '🅩'
  };
  return text.split('').map(char => bubbleChars[char] || char).join('');
};

const textToRegionalIndicators = (text: string): string => {
  const regionalIndicators: { [key: string]: string } = {
    'a': '🇦', 'b': '🇧', 'c': '🇨', 'd': '🇩', 'e': '🇪', 'f': '🇫', 'g': '🇬', 'h': '🇭',
    'i': '🇮', 'j': '🇯', 'k': '🇰', 'l': '🇱', 'm': '🇲', 'n': '🇳', 'o': '🇴', 'p': '🇵',
    'q': '🇶', 'r': '🇷', 's': '🇸', 't': '🇹', 'u': '🇺', 'v': '🇻', 'w': '🇼', 'x': '🇽',
    'y': '🇾', 'z': '🇿', 'A': '🇦', 'B': '🇧', 'C': '🇨', 'D': '🇩', 'E': '🇪', 'F': '🇫',
    'G': '🇬', 'H': '🇭', 'I': '🇮', 'J': '🇯', 'K': '🇰', 'L': '🇱', 'M': '🇲', 'N': '🇳',
    'O': '🇴', 'P': '🇵', 'Q': '🇶', 'R': '🇷', 'S': '🇸', 'T': '🇹', 'U': '🇺', 'V': '🇻',
    'W': '🇼', 'X': '🇽', 'Y': '🇾', 'Z': '🇿'
  };
  return text.split('').map(char => regionalIndicators[char] || char).join(' ');
};

const textToSparkles = (text: string): string => {
  return `✨ ${text} ✨`;
};

const textToFire = (text: string): string => {
  return `🔥 ${text} 🔥`;
};

const textToStars = (text: string): string => {
  return `⭐ ${text} ⭐`;
};

const textToFlowers = (text: string): string => {
  return `🌸 ${text} 🌸`;
};

export const textStyles: TextStyle[] = [
  { name: "Bold", transform: textToBold },
  { name: "Italic", transform: textToItalic },
  { name: "Script", transform: textToScript },
  { name: "Fraktur", transform: textToFraktur },
  { name: "Wide Text", transform: textToWideText },
  { name: "Circled", transform: textToCircled },
  { name: "Squared", transform: textToSquared },
  { name: "Bubble", transform: textToBubble },
  { name: "Regional Flags", transform: textToRegionalIndicators },
  { name: "Zalgo", transform: textToZalgo },
  { name: "Glitch", transform: textToGlitch },
  { name: "Upside Down", transform: textToUpsideDown },
  { name: "Wavy Underline", transform: textToWavyUnderline },
  { name: "Strikethrough", transform: textToStrikethrough },
  { name: "✨ Sparkles", transform: textToSparkles },
  { name: "🔥 Fire", transform: textToFire },
  { name: "⭐ Stars", transform: textToStars },
  { name: "🌸 Flowers", transform: textToFlowers },
];
