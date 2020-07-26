import React from 'react';

import GrammarStructure from '../../components/Grammar/GrammarStructure';

const PastContinuousGrammar = () => {
  const sentences = [
    {
      sentence: 'Affirmative',
      subjectEj: 'She',
      verb: 'Verb ToBe in Past Was/Were',
      verbEj: 'was',
      secondVerb: 'Verb -ing',
      secondVerbEj: 'washing',
      complementEj: 'the dishes'
    },
    {
      sentence: "Negative",
      subjectEj: "She",
      negative: "Verb ToBe in negative form  Was not / Were not",
      negativeEj: "was not",
      verb: "Verb -ing",
      verbEj: "washing",
      complementEj: "the dishes",
    },
    {
      sentence: "Interrogative",
      interrogative: "Verb ToBe in Past Was/Were",
      interrogativeEj: "Was",
      subjectEj: "she",
      verb: "Verb -ing",
      verbEj: "washing",
      complementEj: "the dishes",
    }
  ];
  return (
    <>
      <GrammarStructure
        title="Past Continuous"
        description="It is used to describe an action that was interrupted by another one in the past."
        keywords="while, when."
        sentences={sentences}
      />
    </>
  );
};

export default PastContinuousGrammar;
