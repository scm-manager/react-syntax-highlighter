import highlight from './highlight';
import defaultStyle from './styles/hljs/default-style';
import lowlight from 'lowlight';
import supportedLanguages from './languages/hljs/supported-languages';

// we have to use an adapter, because since lowligth 1.14
// the parameters are switched (language, code instead code, language).
const lowlightAdapter = {
  highlight(code, language) {
    return lowlight.highlight(language, code).value;
  },
  highlightAuto(code) {
    return lowlight.highlightAuto(code).value;
  }
};

const highlighter = highlight(lowlightAdapter, defaultStyle);
highlighter.supportedLanguages = supportedLanguages;

export default highlighter;
