function getParameterByName(name) {
    const urlParams1 = new URLSearchParams(window.location.search);
    const values = urlParams1.getAll(name);
    return values.length > 0 ? values : null;
}

const quotes = getParameterByName('q');
if (quotes) {
    quotes.forEach((quote, index) => {
        const quoteElement = document.createElement('p');
        quoteElement.id = 'q' + (index + 1);
        quoteElement.innerText = quote;
        document.getElementById('quote').innerText=quote;
    });
}

const authors = getParameterByName('a');
if (authors) {
    authors.forEach((author, index) => {
        const authorElement = document.createElement('p');
        authorElement.id = 'a' + (index + 1);
        authorElement.innerText = author;
        document.getElementById('author').innerText= '~ ' + author;
    });
}

const quoteAuthors = [
    {author: "Albert Einstein", quote: "Weak people revenge. Strong people forgive. Intelligent People Ignore."},
    {author: "Albert Einstein", quote: "Insanity: doing the same thing over and over again and expecting different results."},
    {author: "Albert Einstein", quote: "The difference between stupidity and genius is that genius has its limits."},
    {author: "Albert Einstein", quote: "The leader is one who, out of the clutter, brings simplicity... out of discord, harmony... and out of difficulty, opportunity."},
    {author: "Albert Einstein", quote: "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid."},
    {author: "Albert Einstein", quote: "We cannot get to where we dream of being tomorrow unless we change our thinking today."},
    {author: "Albert Einstein", quote: "The only thing more dangerous than ignorance is arrogance."},
    {author: "Albert Einstein", quote: "Information is not knowledge. The only source of knowledge is experience. You need experience to gain wisdom."},
    {author: "Albert Einstein", quote: "Failure is success in progress."},
    {author: "Alexander Graham Bell", quote: "When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us."},
    {author: "Alexander Graham Bell", quote: "Don't keep forever on the public road, going only where others have gone and following one after the other like a flock of sheep. Leave the beaten track occasionally and dive into the woods."},
    {author: "Alexander Graham Bell", quote: "Concentrate all your thoughts upon the work at hand. The sun's rays do not burn until brought to a focus."},
    {author: "Alexander Graham Bell", quote: "Sometimes we stare so long at a door that is closing that we see too late the one that is open."},
    {author: "Alexander Graham Bell", quote: "A man, as a general rule, owes very little to what he is born with - a man is what he makes of himself."},
    {author: "Alexander Graham Bell", quote: "What this power is I cannot say; all I know is that it exists and it becomes available only when a man is in that state of mind in which he knows exactly what he wants and is fully determined not to quit until he finds it."},
    {author: "Alexander Graham Bell", quote: "We are all too much inclined, I think, to walk through life with our eyes shut. There are things all round us and right at our very feet that we have never seen, because we have never really looked."},
    {author: "Alexander Graham Bell", quote: "What this power is, I cannot say... All I know is that it exists."},
    {author: "Alexander Graham Bell", quote: "Neither the Army nor the Navy is of any protection, or very little protection, against aerial raids."},
    {author: "Barack Obama", quote: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek."},
    {author: "Barack Obama", quote: "Keep exploring. Keep dreaming. Keep asking why. Don't settle for what you already know. Never stop believing in the power of your ideas, your imagination, your hard work to change the world."},
    {author: "Barack Obama", quote: "Don't be afraid to ask questions. Don't be afraid to ask for help when you need it. I do that every day. Asking for help isn't a sign of weakness, it's a sign of strength. It shows you have the courage to admit when you don't know something, and to learn something new."},
    {author: "Barack Obama", quote: "The best way to not feel hopeless is to get up and do something. Don't wait for good things to happen to you. If you go out and make some good things happen, you will fill the world with hope, you will fill yourself with hope."},
    {author: "Barack Obama", quote: "We may have different backgrounds, but we believe in the same dream that says this is a country where anything's possible. No matter who you are. No matter where you come from."},
    {author: "Barack Obama", quote: "Every single one of you has something you're good at. Every single one of you has something to offer. And you have a responsibility to yourself to discover what that is. That's the opportunity an education can provide."},
    {author: "Barack Obama", quote: "The future belongs to young people with an education and the imagination to create."},
    {author: "Barack Obama", quote: "Your voice can change the world."},
    {author: "Barack Obama", quote: "Money is not the only answer, but it makes a difference."},
    {author: "Bill Gates", quote: "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it."},
    {author: "Bill Gates", quote: "If you are born poor its not your mistake, But if you die poor its your mistake."},
    {author: "Bill Gates", quote: "It's fine to celebrate success but it is more important to heed the lessons of failure."},
    {author: "Bill Gates", quote: "Patience is a key element of success."},
    {author: "Bill Gates", quote: "Most people overestimate what they can do in one year and underestimate what they can do in ten years."},
    {author: "Bill Gates", quote: "We all need people who will give us feedback. That's how we improve."},
    {author: "Bill Gates", quote: "If you can't make it good, at least make it look good."},
    {author: "Bill Gates", quote: "Embrace bad news to learn where you need the most improvement."},
    {author: "Bill Gates", quote: "If you mess up, it's not your parents' fault, so don't whine about your mistakes, learn from them."},
    {author: "Henry Ford", quote: "Coming together is a beginning; keeping together is progress; working together is success."},
    {author: "Henry Ford", quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it."},
    {author: "Henry Ford", quote: "Greatest thing in life is experience. Even mistakes have value."},
    {author: "Henry Ford", quote: "Nothing is particularly hard if you divide it into small jobs."},
    {author: "Henry Ford", quote: "Quality means doing it right when no one is looking."},
    {author: "Henry Ford", quote: "Failure is simply the opportunity to begin again, this time more intelligently."},
    {author: "Henry Ford", quote: "A poor man is not the one without a cent. A poor man is the one without a dream."},
    {author: "Henry Ford", quote: "The object of education is not to fill a man's mind with facts; it is to teach him how to use his mind in thinking."},
    {author: "Henry Ford", quote: "Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young."},
    {author: "Isaac Newton", quote: "Live your life as an Exclamation rather than an Explanation."},
    {author: "Isaac Newton", quote: "If I have seen further than others, it is by standing upon the shoulders of giants."},
    {author: "Isaac Newton", quote: "No great discovery was ever made without a bold guess."},
    {author: "Isaac Newton", quote: "Tact is the art of making a point without making an enemy."},
    {author: "Isaac Newton", quote: "I can calculate the motion of heavenly bodies, but not the madness of people."},
    {author: "Isaac Newton", quote: "If I have ever made any valuable discoveries, it has been due more to patient attention, than to any other talent."},
    {author: "Isaac Newton", quote: "If two angels were sent down from heaven -one to conduct an empire and the other to sweep the streets -they would feel no inclination to change employment because an angel would know that no matter what we are doing, it's an opportunity to bring joy, deepen our understanding and expand our life."},
    {author: "Isaac Newton", quote: "Nature is pleased with simplicity. And nature is no dummy."},
    {author: "Isaac Newton", quote: "And from true lordship it follows that the true God is living, intelligent, and powerful; from the other perfections, that he is supreme, or supremely perfect. He is eternal and infinite, omnipotent and omniscient; that is, he endures from eternity to eternity; and he is present from infinity to infinity; he rules all things, and he knows all things that happen or can happen."},
    {author: "Katy Perry", quote: "If you have a dream you gotta go on a journey to fulfill that dream."},
    {author: "Katy Perry", quote: "I've just always been very aware and careful of everything, so that I can be ready for the perfect opportunities as they come. I don't take anything for granted or wait for anything to come to me."},
    {author: "Katy Perry", quote: "I'm like a fatter version of Amy Winehouse and a skinnier version of Lily Allen."},
    {author: "Katy Perry", quote: "You know you're living right when you wake up, brush your hair - and confetti falls out!"},
    {author: "Katy Perry", quote: "You can get through it and you can land on your feet triumphantly and strong."},
    {author: "Katy Perry", quote: "My fans are the best. I mean if there was a war, I think they'd definitely win just because they'd kill them with kindness."},
    {author: "Katy Perry", quote: "I'm okay with having bad dance moves. I'm okay with having horrible lower teeth. That's what makes me me, and for some reason it's worked out all right."},
    {author: "Katy Perry", quote: "There are a lot of things that are personally uncomfortable to show, especially me without makeup and completely bloated or crying. But I've realized that it's time for me to show my audience that you don't have to be perfect to achieve your dreams. Because nobody relates to being perfect."},
    {author: "Katy Perry", quote: "I will love you unconditionally."},
    {author: "Kobe Bryant", quote: "I have nothing in common with lazy people who blame others for their lack of success."},
    {author: "Kobe Bryant", quote: "Everyting negative - pressure, challenges - is all an opportunity for me to rise."},
    {author: "Kobe Bryant", quote: "The most important thing is to try and inspire people so that they can be great in whatever they want to do."},
    {author: "Kobe Bryant", quote: "There is power in understanding the journey of others to help create your own."},
    {author: "Kobe Bryant", quote: "I'll do whatever it takes to win games, whether it's sitting on a bench waving a towel, handing a cup of water to a teammate, or hitting the game-winning shot."},
    {author: "Kobe Bryant", quote: "I can't relate to lazy people. We don't speak the same language. I don't understand you. I don't want to understand you."},
    {author: "Kobe Bryant", quote: "You always have to be on edge. You always have to take every practice, every game, like it is your last."},
    {author: "Kobe Bryant", quote: "Listen to how everyone is talking about you. You have to use it as fuel for motivation."},
    {author: "Kobe Bryant", quote: "Everybody has a different journey."},
    {author: "Leonardo da Vinci", quote: "Whatever you do in life, if you want to be creative and intelligent, and develop your brain, you must do everything with the awareness that everything, in some way, connects to everything else."},
    {author: "Leonardo da Vinci", quote: "Learning is the only thing the mind never exhausts, never fears, and never regrets."},
    {author: "Leonardo da Vinci", quote: "Simplicity is the ultimate sophistication."},
    {author: "Leonardo da Vinci", quote: "There are three classes of people: those who see, those who see when they are shown, those who do not see."},
    {author: "Leonardo da Vinci", quote: "The greatest deception men suffer is from their own opinions."},
    {author: "Leonardo da Vinci", quote: "Experience is a truer guide than the words of others."},
    {author: "Leonardo da Vinci", quote: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do."},
    {author: "Leonardo da Vinci", quote: "The most beautiful words of love are told in silence for a look."},
    {author: "Leonardo da Vinci", quote: "Love shows itself more in adversity than in prosperity; as light does, which shines most where the place is darkest."},
    {author: "Neil Armstrong", quote: "This is one small step for a man, one giant leap for mankind."},
    {author: "Neil Armstrong", quote: "Mystery creates wonder and wonder is the basis of man's desire to understand."},
    {author: "Neil Armstrong", quote: "Man must understand his universe in order to understand his destiny."},
    {author: "Neil Armstrong", quote: "Opportunities will be available to you that you cannot imagine."},
    {author: "Neil Armstrong", quote: "Research is creating new knowledge."},
    {author: "Neil Armstrong", quote: "Ever since I was a little boy, I dreamed I would do something important in aviation."},
    {author: "Neil Armstrong", quote: "The important achievement of Apollo was demonstrating that humanity is not forever chained to this planet, and our visions go rather further than that, and our opportunities are unlimited."},
    {author: "Neil Armstrong", quote: "I can honestly say - and it's a big surprise to me - that I have never had a dream about being on the moon."},
    {author: "Neil Armstrong", quote: "NASA has been one of the most successful public investments in motivating students to do well and achieve all they can achieve. It's sad that we are turning the programme in a direction where it will reduce the amount of motivation and stimulation it provides to young people."},
    {author: "Niels Bohr", quote: "An expert is a man who has made all the mistakes which can be made, in a narrow field."},
    {author: "Niels Bohr", quote: "Every great and deep difficulty bears in itself its own solution. It forces us to change our thinking in order to find it."},
    {author: "Niels Bohr", quote: "Opposites are not contradictory but complementary."},
    {author: "Niels Bohr", quote: "Prediction is very difficult, especially if it's about the future."},
    {author: "Niels Bohr", quote: "Never express yourself more clearly than you are able to think."},
    {author: "Niels Bohr", quote: "No, no, you're not thinking; you're just being logical."},
    {author: "Niels Bohr", quote: "When searching for harmony in life one must never forget that in the drama of existence we are ourselves both actors and spectators."},
    {author: "Niels Bohr", quote: "When asked ... [about] an underlying quantum world, Bohr would answer, 'There is no quantum world. There is only an abstract quantum physical description. It is wrong to think that the task of physics is to find out how nature is. Physics concerns what we can say about Nature.'"},
    {author: "Niels Bohr", quote: "In our description of nature the purpose is not to disclose the real essence of the phenomena but only to track down, so far as it is possible, relations between the manifold aspects of our experience."},
    {author: "Nikola Tesla", quote: "My brain is only a receiver, in the Universe there is a core from which we obtain knowledge, strength and inspiration. I have not penetrated into the secrets of this core, but I know that it exists."},
    {author: "Nikola Tesla", quote: "Anti-social behavior is a trait of intelligence in a world full of conformists."},
    {author: "Nikola Tesla", quote: "I don't care that they stole my idea. I care that they don't have any of their own."},
    {author: "Nikola Tesla", quote: "Be alone, that is the secret of invention; be alone, that is when ideas are born."},
    {author: "Nikola Tesla", quote: "Our entire biological system, the brain, and the Earth itself, work on the same frequencies."},
    {author: "Nikola Tesla", quote: "The desire that guides me in all I do is the desire to harness the forces of nature to the service of mankind."},
    {author: "Nikola Tesla", quote: "The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence."},
    {author: "Nikola Tesla", quote: "It's not the love you make. It's the love you give."},
    {author: "Nikola Tesla", quote: "Let the future tell the truth and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I really worked, is mine."},
    {author: "Pablo Picasso", quote: "The meaning of life is to find your gift. The purpose of life is to give it away."},
    {author: "Pablo Picasso", quote: "I am always doing that which I cannot do, in order that I may learn how to do it."},
    {author: "Pablo Picasso", quote: "Everything you can imagine is real."},
    {author: "Pablo Picasso", quote: "Only put off until tomorrow what you are willing to die having left undone."},
    {author: "Pablo Picasso", quote: "Every child is an artist. The problem is how to remain an artist once we grow up."},
    {author: "Pablo Picasso", quote: "Art washes away from the soul the dust of everyday life."},
    {author: "Pablo Picasso", quote: "Our goals can only be reached through a vehicle of a plan, in which we must fervently believe, and upon which we must vigorously act. There is no other route to success."},
    {author: "Pablo Picasso", quote: "Everything exists in limited quantity - especially happiness."},
    {author: "Pablo Picasso", quote: "Action is the foundational key to all success."},
    {author: "Stephen Hawking", quote: "Intelligence is the ability to adapt to change."},
    {author: "Stephen Hawking", quote: "I have noticed even people who claim everything is predestined, and that we can do nothing to change it, look before they cross the road."},
    {author: "Stephen Hawking", quote: "One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don't throw it away."},
    {author: "Stephen Hawking", quote: "What I have learned from life is to make the most of what you have got."},
    {author: "Stephen Hawking", quote: "Life would be tragic if it weren't funny."},
    {author: "Stephen Hawking", quote: "We only have to look at ourselves to see how intelligent life might develop into something we wouldn't want to meet."},
    {author: "Stephen Hawking", quote: "The universe and the Laws of Physics seem to have been specifically designed for us. If any one of about 40 physical qualities had more than slightly different values, life as we know it could not exist: Either atoms would not be stable, or they wouldn't combine into molecules, or the stars wouldn't form heavier elements, or the universe would collapse before life could develop, and so on."},
    {author: "Stephen Hawking", quote: "It is not clear that intelligence has any long-term survival value."},
    {author: "Stephen Hawking", quote: "I have lived with the prospect of an early death for the last 49 years. I'm not afraid of death, but I'm in no hurry to die. I have so much I want to do first. I regard the brain as a computer which will stop working when its components fail. There is no heaven or afterlife for broken down computers; that is a fairy story for people afraid of the dark."},
    {author: "Steve Jobs", quote: "Don't let the noise of others' opinions drown out your own inner voice."},
    {author: "Steve Jobs", quote: "Innovation is the ability to see change as an opportunity - not a threat."},
    {author: "Steve Jobs", quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition."},
    {author: "Steve Jobs", quote: "The most important decisions you make are not the things you do, but the things you decide not to do."},
    {author: "Steve Jobs", quote: "Learn continually - there's always 'one more thing' to learn!"},
    {author: "Steve Jobs", quote: "If you're afraid of failing you won't get very far."},
    {author: "Steve Jobs", quote: "You've got to start with the customer experience and work back toward the technology - not the other way around."},
    {author: "Steve Jobs", quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle."},
    {author: "Steve Jobs", quote: "Everything is based on a simple rule: Quality is the best business plan, period."},
    {author: "Thomas Alva Edison", quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."},
    {author: "Thomas Alva Edison", quote: "I have not failed. I've just found 10,000 ways that won't work."},
    {author: "Thomas Alva Edison", quote: "I never view mistakes as failures. They are simply opportunities to find out what doesn't work."},
    {author: "Thomas Alva Edison", quote: "Having a vision for what you want is not enough...Vision without execution is hallucination."},
    {author: "Thomas Alva Edison", quote: "Opportunity is missed by most people because it is dressed in overalls and looks like work."},
    {author: "Thomas Alva Edison", quote: "You can't realize your dreams unless you have one to begin with."},
    {author: "Thomas Alva Edison", quote: "I owe my success to the fact that I never had a clock in my workroom."},
    {author: "Thomas Alva Edison", quote: "Discontent is the first necessity of progress."},
    {author: "Thomas Alva Edison", quote: "Many of life's failures are people who did not realize how close they were to success when they gave up."},
    {author: "Vincent Van Gogh", quote: "I am seeking, I am striving, I am in it with all my heart."},
    {author: "Vincent Van Gogh", quote: "If you hear a voice within you say 'you cannot paint,' then by all means paint, and that voice will be silenced."},
    {author: "Vincent Van Gogh", quote: "If one truly loves nature one finds beauty everywhere."},
    {author: "Vincent Van Gogh", quote: "Your profession is not what brings home your weekly paycheck, your profession is what you're put here on earth to do, with such passion and such intensity that it becomes spiritual in calling."},
    {author: "Vincent Van Gogh", quote: "Close friends are truly life's treasures. Sometimes they know us better than we know ourselves. With gentle honesty, they are there to guide and support us, to share our laughter and our tears. Their presence reminds us that we are never really alone."},
    {author: "Vincent Van Gogh", quote: "The more I think about it, the more I realize there is nothing more artistic than to love others."},
    {author: "Vincent Van Gogh", quote: "What would life be if we had no courage to attempt anything?"},
    {author: "Vincent Van Gogh", quote: "I confess I do not know why, but looking at the stars always makes me dream."},
    {author: "Vincent Van Gogh", quote: "Love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is done well."},
    {author: "William James", quote: "Action seems to follow feeling, but really action and feeling go together; and by regulating the action, which is under the more direct control of the will, we can indirectly regulate the feeling."},
    {author: "William James", quote: "The greatest revolution of our generation is the discovery that human beings, by changing the inner attitudes of their minds, can change the outer aspects of their lives."},
    {author: "William James", quote: "The greatest weapon against stress is our ability to choose one thought over another."},
    {author: "William James", quote: "A great many people think they are thinking when they are merely rearranging their prejudices."},
    {author: "William James", quote: "The deepest principle in human nature is the craving to be appreciated."},
    {author: "William James", quote: "If you can change your mind, you can change your life."},
    {author: "William James", quote: "The art of being wise is the art of knowing what to overlook."},
    {author: "William James", quote: "Common sense and a sense of humor are the same thing, moving at different speeds. A sense of humor is just common sense, dancing."},
    {author: "William James", quote: "Pessimism leads to weakness. Optimism leads to power."},
];

function generateRandomIndex() {
    return Math.floor(Math.random() * quoteAuthors.length);
}

function getRandomQuoteAuthor() {
    const randomIndex = generateRandomIndex();
    return quoteAuthors[randomIndex];
}

for (let i = 1; i <= 3; i++) {
    const randomQuoteAuthor = getRandomQuoteAuthor();
    document.getElementById(`quotesDisplay${i}`).innerText = randomQuoteAuthor.quote;
    document.getElementById(`authorDisplay${i}`).innerText = '~ ' + randomQuoteAuthor.author;
    
    const anchorTag = document.getElementById(`qnaDisplay${i}`);
    anchorTag.href = `quotes-details.html?q=${encodeURIComponent(randomQuoteAuthor.quote)}&a=${encodeURIComponent(randomQuoteAuthor.author)}`;
}