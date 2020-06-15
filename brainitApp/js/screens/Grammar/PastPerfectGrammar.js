import React from 'react';

import GrammarStructure from '../../components/Grammar/GrammarStructure';

const PastPerfectGrammar = () => {
  const sentences = [
    {
      sentence: 'Affirmative',
      subjectEj: 'We',
      verb: 'Verb have in past form',
      verbEj: 'had',
      secondVerb: 'Verb in Past Participle',
      secondVerbEj: 'woken up early',
      complementEj: 'since last year'
    },
    {
      sentence: "Negative",
      subjectEj: "We",
      negative: "Verb have in past and Negative form",
      negativeEj: "had not",
      verb: "Verb in Past Participle",
      verbEj: "woken up early",
      complementEj: "since last year",
    },
    {
      sentence: "Interrogative",
      interrogative: "Verb have in past form",
      interrogativeEj: "Had",
      subjectEj: "we",
      verb: "Verb in Past Participle",
      verbEj: "woken up early",
      complementEj: "since last year",
    }
  ];

  return (
    <>
      <GrammarStructure
        title="Past Perfect"
        description="It is used to describe an activity that was accomplished before another one."
        keywords="When, After, Before, By The Time."
        sentences={sentences}
      />
    </>
  );
};

export default PastPerfectGrammar;
