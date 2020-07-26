import React from 'react';

import GrammarStructure from '../../components/Grammar/GrammarStructure';

const SimplePastGrammar = () => {
  const sentences = [
    {
      sentence: 'Affirmative',
      subjectEj: 'You',
      verb: 'Verb in past',
      verbEj: 'worked',
      complementEj: 'at home last month'
    },
    {
      sentence: "Negative",
      subjectEj: "You",
      negative: "DID NOT",
      negativeEj: "did not",
      verb: "Verb infinitive",
      verbEj: "work",
      complementEj: "at home last month",
    },
    {
      sentence: "Interrogative",
      interrogative: "DID",
      interrogativeEj: "Did",
      subjectEj: "you",
      verb: "Verb infinitive",
      verbEj: "work",
      complementEj: "at home last month",
    }
  ];
  return (
    <>
      <GrammarStructure
        title="Simple Past"
        description="It is used to describe past habits or facts."
        keywords="yesterday, last week, last month, last year, this morning (when meaning is past), 2 hours/days ago, in 1995/2009, that year/day/week/month."
        sentences={sentences}
      />
    </>
  );
};

export default SimplePastGrammar;
