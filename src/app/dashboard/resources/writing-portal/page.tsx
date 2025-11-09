'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const WRITING_TOPICS = [
  { id: 'essay-structure', title: 'Essay Structure', content: `An essay is a short piece of writing on a particular topic that expresses the author’s thoughts, ideas, and opinions in a structured way. The main purpose of an essay is to present information, analyze facts, and communicate a clear viewpoint or argument to the reader. Essays are widely used in academics, journalism, and even creative writing as a way to express understanding and critical thinking.

Structure of an Essay

A well-written essay generally consists of three main parts:

Introduction:
Introduces the topic and gives a brief overview of what will be discussed. It should grab the reader’s attention and present a clear thesis statement (main idea).

Body:
The body is the main part where the topic is explained in detail. It includes facts, examples, arguments, and evidence to support the thesis. Usually divided into 2–3 paragraphs.

Conclusion:
Summarizes the main points and restates the thesis in a concise way. It gives the essay a sense of completion.

Types of Essays

Essays can be of several types, such as:

Descriptive Essay: Describes a person, place, or event.

Narrative Essay: Tells a story or personal experience.

Expository Essay: Explains a concept or process.

Persuasive Essay: Convince readers about a certain point of view.

Analytical Essay: Analyzes a work, event, or concept in depth.

Example

Topic: “The Importance of Education”

Introduction: Education is the foundation of human development and plays a vital role in shaping society.

Body: It equips individuals with knowledge, skills, and values. Educated citizens contribute to national growth, innovation, and cultural development. Without education, progress and equality become difficult to achieve.

Conclusion: Hence, education is not just a right but a necessity for personal and social advancement.

✅ In summary, an essay is an organized form of writing used to express ideas or arguments clearly and effectively. It helps develop reasoning, creativity, and communication skills.` },
  { id: 'thesis-statements', title: 'Thesis Statements', content: `A thesis statement is a single sentence, typically in the first paragraph of an essay, that presents the main argument or point of your paper. It serves as a roadmap for the reader, indicating the direction and scope of your writing. A strong thesis is specific, arguable, and focused.

Characteristics of a Strong Thesis Statement:

1. Arguable: It must present a claim that can be reasonably debated or challenged. It should not be a simple statement of fact.
   - Weak: "Computers are a common part of modern life." (Fact)
   - Strong: "The over-reliance on computers in education is hindering the development of critical thinking skills in students." (Arguable claim)

2. Specific and Focused: It should be narrow enough to be covered adequately in the space of your essay.
   - Weak: "World War II was a terrible war." (Too broad)
   - Strong: "The economic sanctions imposed on Germany after World War I were a primary cause of the political instability that led to World War II." (Specific and focused)

3. Clear and Concise: Use straightforward language to express your main point. Avoid vague or ambiguous wording.

How to Develop a Thesis Statement:

1. Start with a Question: Begin your research with a question about your topic (e.g., "What was the impact of social media on teenage mental health?").
2. Formulate a Tentative Answer: As you research, develop a working answer to your question. This will become your working thesis.
3. Refine and Revise: Make your thesis more specific and arguable as you gather more information and develop your main points.

Example Thesis Statements:

- Analytical: "An analysis of the character development in 'To Kill a Mockingbird' reveals how Harper Lee uses Scout's evolving perspective to critique societal prejudices."
- Expository: "The process of photosynthesis involves a series of complex biochemical reactions that convert light energy into chemical energy, providing the foundation for most life on Earth."
- Persuasive: "To combat climate change effectively, governments must prioritize investment in renewable energy sources over fossil fuels."` },
  { id: 'paragraph-development', title: 'Paragraph Development', content: `A paragraph is a collection of related sentences that support a single main idea. Well-developed paragraphs are the building blocks of a strong essay, guiding the reader smoothly from one idea to the next.

The PIE Structure:

A common and effective way to structure a body paragraph is using the PIE model: Point, Illustration, and Explanation.

1. Point (Topic Sentence): This is the main idea of the paragraph, usually stated in the first sentence. It should directly relate to and support your essay's thesis statement.
   - Example: "The implementation of school uniform policies can significantly reduce peer pressure related to clothing."

2. Illustration (Evidence): This is the evidence or information you use to support your point. It can include facts, statistics, examples, quotes, or personal anecdotes.
   - Example: "A study conducted in the Long Beach Unified School District found that after two years of a mandatory uniform policy, school crime rates dropped by 36%."

3. Explanation (Analysis): This is where you explain how your illustration supports your point and, by extension, your thesis. This is the most critical part, as it shows your analysis and critical thinking.
   - Example: "This dramatic decrease in crime suggests that when students are dressed similarly, the socioeconomic tensions and rivalries that often fuel conflict are diminished, creating a safer and more focused learning environment."

Characteristics of a Good Paragraph:

- Unity: All sentences in the paragraph should relate directly to the single main idea presented in the topic sentence.
- Coherence: The sentences should be logically organized and flow smoothly. Use transition words and phrases (e.g., "however," "in addition," "for example") to connect ideas.
- Adequate Development: The main idea should be fully supported with sufficient evidence and analysis. A single example is often not enough.` },
  { id: 'grammar-and-punctuation', title: 'Grammar and Punctuation', content: `Correct grammar and punctuation are essential for clear and professional writing. They ensure your ideas are understood exactly as you intend them.

Common Grammar Mistakes:

- Subject-Verb Agreement: The subject and verb in a sentence must agree in number. (e.g., "The student writes," not "The student write.")
- Run-on Sentences: Occur when two or more independent clauses are joined without proper punctuation or conjunctions.
- Sentence Fragments: Incomplete sentences that lack a subject, a verb, or a complete thought.
- Misplaced Modifiers: Phrases that are not placed near the word they are supposed to modify, leading to confusion.

Key Punctuation Marks:

1. Comma (,): Used to separate items in a list, set off introductory phrases, join independent clauses with a conjunction, and set off non-essential clauses.
   - Example: "After the storm passed, we went outside, and the sun was shining."

2. Semicolon (;): Used to join two closely related independent clauses without a conjunction.
   - Example: "The meeting was a success; everyone agreed on the main points."

3. Colon (:): Used to introduce a list, an explanation, or a quotation.
   - Example: "The project requires three things: time, money, and effort."

4. Apostrophe ('): Used to indicate possession (e.g., "the student's book") or to form contractions (e.g., "it's" for "it is"). Be careful not to confuse "its" (possessive) with "it's".

5. Quotation Marks (""): Used to enclose direct quotes and to indicate titles of shorter works like articles or poems.

Tips for Improvement:

- Proofread Aloud: Reading your work aloud can help you catch awkward phrasing and run-on sentences.
- Use a Grammar Checker: Tools like Grammarly or the checker in your word processor can be helpful, but don't rely on them completely. They can make mistakes.
- Review the Basics: Keep a style guide (like the Purdue OWL) handy to look up rules you're unsure about.` },
  { id: 'citation-styles', title: 'Citation Styles (APA, MLA, Chicago)', content: `Citing sources is a critical part of academic writing. It allows you to give credit to the original authors, avoid plagiarism, and enable your readers to locate the sources you used. The three most common styles are APA, MLA, and Chicago.

1. APA (American Psychological Association) Style:
- Used primarily in the social sciences, such as psychology, sociology, and education.
- Emphasizes the date of publication to show how current the research is.
- In-text citation format: (Author, Year, p. #) -> (Smith, 2021, p. 45).
- References page is titled "References" and is alphabetized by author's last name.

2. MLA (Modern Language Association) Style:
- Used primarily in the humanities, such as literature, arts, and philosophy.
- Emphasizes the author and the page number from which the information was taken.
- In-text citation format: (Author Page#) -> (Smith 45).
- Works Cited page is titled "Works Cited" and is alphabetized by author's last name.

3. Chicago (or Turabian) Style:
- Used in history, fine arts, and some other humanities and social sciences.
- Offers two systems:
  - Notes and Bibliography: Uses numbered footnotes or endnotes for in-text citations and a "Bibliography" at the end. This is common in the humanities.
  - Author-Date: Uses parenthetical in-text citations similar to APA, e.g., (Smith 2021, 45). This is more common in the sciences.
- The choice of system depends on the specific field and your instructor's preference.

Key Differences at a Glance:

| Feature          | APA 7th Edition                               | MLA 9th Edition                             | Chicago 17th Edition (Notes-Bib)         |
|------------------|-----------------------------------------------|---------------------------------------------|------------------------------------------|
| **Discipline**   | Social Sciences                               | Humanities                                  | History, Arts, Humanities                |
| **In-Text**      | (Smith, 2021)                                 | (Smith 45)                                  | Footnote/Endnote number (e.g., ¹)        |
| **Title**        | Sentence case for articles                    | Title Case for articles                     | Title Case for articles                  |
| **Reference List**| References                                    | Works Cited                                 | Bibliography                             |
| **Author**       | Last Name, First Initial. (e.g., Smith, J.)   | Last Name, First Name. (e.g., Smith, John) | Last Name, First Name. (e.g., Smith, John) |

Always check with your instructor or publication guidelines to confirm which citation style is required for your assignment.` },
  { id: 'research-methods', title: 'Research Methods', content: `Research methods are the strategies, processes, or techniques used to collect data and evidence for analysis in order to uncover new information or create a better understanding of a topic. There are two main categories of research methods: qualitative and quantitative.

1. Quantitative Research:
- Focuses on numerical data and statistical analysis.
- Aims to test hypotheses, establish cause-and-effect relationships, and make predictions.
- Methods include:
  - Surveys and Questionnaires: Collecting data from a large number of people using standardized questions.
  - Experiments: Manipulating variables in a controlled environment to determine cause and effect.
  - Statistical Analysis: Using mathematical methods to analyze large datasets.
- Best for answering "what," "how many," and "how often" questions.

2. Qualitative Research:
- Focuses on non-numerical data, such as text, video, or audio.
- Aims to understand concepts, thoughts, or experiences in depth.
- Methods include:
  - Interviews: Conducting one-on-one conversations to gather detailed information.
  - Focus Groups: Facilitating discussions with a small group of people to explore a topic.
  - Case Studies: In-depth study of a specific individual, group, or event.
  - Ethnography: Immersing oneself in a community or organization to understand its culture.
- Best for answering "why" and "how" questions.

Choosing the Right Method:

The choice between qualitative and quantitative research depends on your research question and what you want to find out.

- Use quantitative methods if you want to confirm or test a theory or hypothesis.
- Use qualitative methods if you want to understand concepts, thoughts, or experiences.

Many researchers use a mixed-methods approach, combining both qualitative and quantitative techniques to get a more complete picture. For example, you might use a survey (quantitative) to understand general trends and then conduct interviews (qualitative) to explore those trends in more detail.` },
  { id: 'avoiding-plagiarism', title: 'Avoiding Plagiarism', content: `Plagiarism is the act of presenting someone else's work or ideas as your own, with or without their consent, by incorporating it into your work without full acknowledgment. It is a serious academic offense.

Types of Plagiarism:

- Direct Plagiarism: Copying someone else's work word-for-word without quotation marks and citation.
- Self-Plagiarism: Reusing your own previous work in a new context without permission from your instructor.
- Mosaic Plagiarism (Patchwriting): Borrowing phrases from a source without using quotation marks, or finding synonyms for the author's language while keeping to the same general structure and meaning of the original.
- Accidental Plagiarism: Unintentionally failing to cite sources correctly due to neglect or disorganization.

How to Avoid Plagiarism:

1. Cite Everything: You must cite any words, ideas, or information that are not your own. This includes summaries and paraphrases. When in doubt, cite it.

2. Paraphrase Correctly: Paraphrasing is restating an idea from a source in your own words. To do it correctly:
   - Read the original passage and make sure you understand it.
   - Write your version without looking at the original.
   - Compare your version with the original to ensure you haven't used the same phrasing or sentence structure.
   - Include an in-text citation to the original source.

3. Use Quotation Marks: When you use an author's exact words, you must enclose them in quotation marks (" ") and provide a proper citation (including the page number).

4. Keep Track of Your Sources: Use a citation manager or keep detailed notes of where you found your information. For each source, record the author, title, publication date, and other necessary details for your bibliography.

5. Understand Your University's Policy: Familiarize yourself with your institution's academic integrity policy to understand the specific definitions and consequences of plagiarism.

Remember: The goal of research is to learn from others and build upon their work, not to present it as your own. Proper citation is the way to do this ethically.` },
  { id: 'editing-and-proofreading', title: 'Editing and Proofreading', content: `Editing and proofreading are the final, crucial stages of the writing process. They ensure your work is clear, polished, and free of errors. While related, they are two distinct tasks.

1. Editing (Revising):
- The "big picture" stage. Editing involves improving the overall quality of your content and structure.
- Focus on:
  - Clarity and Flow: Is your argument easy to understand? Do your paragraphs transition smoothly?
  - Structure and Organization: Is your thesis clear? Does your evidence effectively support your points?
  - Tone and Style: Is the tone appropriate for your audience? Is your language concise and powerful?
- How to Edit:
  - Read your paper from start to finish to get a sense of the overall flow.
  - Check that each paragraph supports your thesis.
  - Read your paper aloud to catch awkward sentences.
  - Get feedback from a peer or instructor.

2. Proofreading:
- The "fine-tuning" stage. Proofreading is the final check for surface-level errors.
- Focus on:
  - Grammar: Subject-verb agreement, verb tenses, etc.
  - Punctuation: Correct use of commas, semicolons, apostrophes, etc.
  - Spelling: Typos and other spelling mistakes.
  - Formatting: Consistent citation style, margins, font, etc.
- How to Proofread:
  - Don't proofread immediately after writing. Take a break to get a fresh perspective.
  - Read slowly. Go line-by-line, or even word-by-word.
  - Read your paper backward (from the last sentence to the first) to focus on individual sentences rather than the flow.
  - Use a spell checker and grammar checker, but don't trust them blindly.

Editing vs. Proofreading:

Think of it like building a house. Editing is checking the foundation, the structure of the walls, and the layout of the rooms. Proofreading is painting the walls, cleaning the windows, and fixing a leaky faucet. You must do the structural work (editing) before you can apply the finishing touches (proofreading).` },
  { id: 'writing-introductions', title: 'Writing Strong Introductions', content: `The introduction is your opportunity to make a strong first impression on your reader. A good introduction should grab their attention, provide necessary context, and present the main argument of your essay in a clear thesis statement.

Components of a Strong Introduction:

1. The Hook: The first sentence or two of your essay, designed to engage your reader and make them want to continue reading.
   - Types of Hooks:
     - An intriguing question: "What if the key to solving climate change lies not in new technology, but in ancient farming practices?"
     - A surprising fact or statistic: "Every year, over 8 million tons of plastic enter our oceans."
     - A relevant quotation: "As Nelson Mandela once said, 'Education is the most powerful weapon which you can use to change the world.'"
     - A brief, compelling anecdote (story).

2. Context/Background Information: After the hook, provide a few sentences that orient the reader. Briefly introduce the topic and provide any necessary background information to help the reader understand the importance or relevance of your argument. This bridges the gap between the hook and your thesis.

3. The Thesis Statement: The most important part of your introduction. It is a single, clear sentence that states the main argument or purpose of your essay. It should be specific, arguable, and provide a roadmap for the rest of your paper. (See the "Thesis Statements" topic for more detail).

The Funnel Structure:

A common and effective way to structure an introduction is like a funnel:

- Start Broad: Begin with the hook and general context to draw the reader in.
- Narrow Down: Gradually become more specific, linking the initial hook to the main topic of your essay.
- End with Specifics: Conclude the introduction with your highly specific thesis statement.

What to Avoid:

- Announcing your intentions: Avoid phrases like, "In this essay, I will discuss..." or "This paper is about...".
- Vague statements: Avoid overly broad generalizations like, "Since the dawn of time..."
- Dictionary definitions: "According to the dictionary, justice is..."` },
  { id: 'crafting-conclusions', title: 'Crafting Effective Conclusions', content: `A conclusion is more than just a summary of your essay. It's your final chance to leave a lasting impression on the reader, reinforce your argument, and emphasize the significance of your findings.

Key Goals of a Conclusion:

1. Synthesize, Don't Just Summarize: Instead of simply restating your main points, show the reader how they fit together to support your overall argument. Connect the dots for them.
2. Restate Your Thesis (in new words): Rephrase your thesis statement to remind the reader of your main argument. Using new language avoids sounding repetitive.
3. Emphasize the Significance: This is the "so what?" part of your conclusion. Explain why your argument is important. What are the broader implications or applications of your findings?
4. Provide a Sense of Closure: The conclusion should make the reader feel that the essay is complete and that you have successfully proven your point.

Strategies for an Effective Conclusion:

- The "Bookend" Technique: Circle back to the hook or anecdote you used in your introduction. This creates a satisfying sense of symmetry and closure.
- Propose a Course of Action: If you are writing a persuasive essay, suggest a solution or call on the reader to act.
- Pose a Provocative Question: Leave the reader with a final, thought-provoking question that encourages them to think further about the topic.
- Discuss Broader Implications: Zoom out and consider what your argument means for the future, for a different context, or for society as a whole.

What to Avoid in a Conclusion:

- Introducing New Information or Arguments: The conclusion is for wrapping up, not for adding new evidence.
- Using Cliched Phrases: Avoid starting with "In conclusion," "In summary," or "To sum up."
- Apologizing: Never undermine your argument with phrases like, "I may not be an expert, but..."
- Being Overly Emotional: Maintain the academic tone you've used throughout the essay.` },
];


export default function WritingPortalPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Collaborative Writing Portal
        </h1>
        <p className="text-muted-foreground">
          Community-driven guides on various writing topics.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {WRITING_TOPICS.map((topic) => (
          <AccordionItem key={topic.id} value={topic.id}>
            <AccordionTrigger className="text-lg font-semibold">
              {topic.title}
            </AccordionTrigger>
            <AccordionContent>
                <div className="space-y-4">
                  <p className="whitespace-pre-wrap text-base">{topic.content}</p>
                </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
