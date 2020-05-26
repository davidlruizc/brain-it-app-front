import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';

import Layout from '../../components/Global/Layout';
import Card from '../../components/Grammar/Card';

const tempData = [
  {
    title: 'Past Simple',
    textTitle: 'A Victorious Flight',
    image: 'https://brain-it-global.s3.amazonaws.com/grammar-one.jpg',
    text: `
    My sister started studying Medicine at UBA in Argentina, so I decided to study there too. We hadn’t visited Colombia since January, that is the reason why our grandparents invited us to spend Colombian’s Independence Day with them in Bogotá. When we arrived at the airport, we were running because we were late.
    \n
    At the airport entrancy a dog started to follow us, but it didn’t matter to us. When we arrived to immigration, we knew that this dog was following us. Security guards took us to a cold room. There, they started to check our luggage and we didn't understand why it happened. They said "Our dog sniffed a strong smell" and they asked if we had drugs. We were worried but we didn't have any drugs with us. Finally, they found a bag with some lemons that my sister bought for my grandmother and that was the smell. We could take our flight on time and we promised never to bring lemons up to an airplane again. 
    `,
    quiz: [
      {
        question: 'Why did our grandparents invite us to spend some time in Bogota?',
        options: [
          `Because of Colombia's independence day.`,
          `Because we hadn’t been in Bogotá since January`,
          `Because they wanted some lemons from Argentina`
        ],
        correctAnswer: `Because we hadn’t been in Bogotá since January`
      },
      {
        question: 'Why did the dog start to follow us at the airport?',
        options: [
          `Because of the strong smell`,
          `Because of our big luggage`,
          `Because we had drugs in our luggage`
        ],
        correctAnswer: `Because of the strong smell`
      },
      {
        question: 'What happened at the end of the story?',
        options: [
          `We couldn’t take our flight.`,
          `We took our flight on time`,
          `Security guards didn’t let us go. `
        ],
        correctAnswer: `We took our flight on time`
      },
    ]
  },
  {
    title: 'Past Progressive',
    textTitle: 'An unusual visit',
    image: 'https://brain-it-global.s3.amazonaws.com/grammar-two.jpg',
    text: `
    Last Christmas I went to Acacías with my friends to spend holidays there. When we were reaching the bus terminal station, my friend Ana was buying our tickets. We arrived in Acacías that evening. While Mike and I were getting meat for our stay, Ana and Paul were buying some beers and groceries for the party. The next day, we decided to do a BBQ in the garden. While Ana and I were swimming at the pool, Mike and Paul were grilling the meat. We were having such a great time, and out of nowhere Paul’s mother arrived. As Paul was enjoying the BBQ party, he invited her to stay, but Ana, Mike and I were not comfortable with that. So while Paul was convincing his mother to go back home, we were cleaning the mess we made.
    \n
    The next day, when we woke up, all our parents were at our place. It was so embarrassing because they all were getting drunk in the morning, and while Ana and I were getting ready to go Back to Bogotá, Mike and Paul were packing up our bags, the four of us decided not to talk about that day ever again.
    `,
    quiz: [
      {
        question: 'How did we go to Acacias?',
        options: [
          `By airplane`,
          `By bus`,
          `By train`
        ],
        correctAnswer: `By bus`
      },
      {
        question: 'Who was grilling the meat?',
        options: [
          `Ana and Paul`,
          `Mike and I`,
          `Mike and Paul`
        ],
        correctAnswer: `Mike and Paul`
      },
      {
        question: 'What did we promise not to talk about ever again?',
        options: [
          `The BBQ party`,
          `Our parents getting drunk`,
          `Paul’s mother visit.`
        ],
        correctAnswer: `Our parents getting drunk`
      },
    ]
  },
  {
    title: 'Past Perfect',
    textTitle: `“An Amazonic Decision”`,
    image: 'https://brain-it-global.s3.amazonaws.com/grammar-three.jpg',
    text: `
    When Sophy turned 30, she started to feel like everything she had done in the past was wrong. She had been calling her ex-boyfriend to tell him that she had missed him very much and she had thought to travel with him because she had been feeling they were meant to be together forever, but he was already dating another girl. It made her go on a trip to Amazonas. By the time she decided to quit her job, she had already sold her apartment. She had collected all the money she needed for her trip since she had been ready for this her entire life. 
    She had met Ethan, an Amazonas’ habitant by tinder, and he had invited her to move in together. By the time she had arrived at Amazonas they had had the idea to open a Pink Dolphin Sanctuary for tourists. She has started to fall in love with Ethan but she hasn’t told him yet.
    `,
    quiz: [
      {
        question: 'How did Sophie meet Ethan?',
        options: [
          `By WhatsApp`,
          `By Tinder`,
          `By Instagram`
        ],
        correctAnswer: `By Tinder`
      },
      {
        question: 'Who did Sophie call when she was feeling sad? ',
        options: [
          `Her ex-boyfriend`,
          `Her parents`,
          `Ethan`
        ],
        correctAnswer: `Her ex-boyfriend`
      },
      {
        question: 'How did Shopie collect the money for her trip?',
        options: [
          `She sold her apartment.`,
          `Her parents gave her the money`,
          `Ethan paid her expenses.`
        ],
        correctAnswer: `She sold her apartment.`
      },
    ]
  },
]

const Grammar = ({navigation}) => {

  const handleNavigateToText = (title, image, text, quiz) => {
    const obj = {title, image, text, quiz};
    navigation.navigate('Lecture', {item: obj});
  }

  return(
    <Layout>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
        <FlatList
          data={tempData}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={() => (
            <Text style={styles.title}>Grammar</Text>
          )}
          renderItem={({item, index}) => (
            <Card {...item} handleNavigateToText={handleNavigateToText} />
          )}
        />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginTop: 30
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default Grammar;
